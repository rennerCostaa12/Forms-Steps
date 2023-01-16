import { createContext, useContext, useReducer } from 'react';

interface ContextProviderProps {
    children: React.ReactNode
}

interface State {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

interface Action {
    type: FormActions;
    payload: any;
}

interface ContextType {
    state: State;
    dispatch: (action: Action) => void;
}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const initialData = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
}

const FormStepContext = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            //console.log('STATE', state);
            //console.log('ACTION', action);
            return { ...state, currentStep: action.payload };
        case FormActions.setName:
            //console.log('STATE', state);
            //console.log('ACTION', action);
            return { ...state, name: action.payload }
        case FormActions.setLevel:
            //console.log('STATE', state);
            //console.log('ACTION', action);
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            //console.log('STATE', state);
            //console.log('ACTION', action);
            return { ...state, email: action.payload };
        case FormActions.setGithub:
            //console.log('STATE', state);
            //console.log('ACTION', action);
            return { ...state, github: action.payload };
        default:
            return state;
    }
}

export function FormStepContextProvider({ children }: ContextProviderProps) {

    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormStepContext.Provider value={value}>
            {children}
        </FormStepContext.Provider>
    )
}

export default function useForm() {
    const context = useContext(FormStepContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}