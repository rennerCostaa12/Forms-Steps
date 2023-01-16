import { useNavigate } from 'react-router-dom';

import * as C from './styles';
import Theme from "../../../components/Theme/indes"
import useForm, { FormActions } from '../../../contexts/formContext/ContextFormSteps';
import { ChangeEvent, useEffect } from 'react';

export default function FormStep1() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert('Preencha os dados!');
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: event.target.value
        })
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
        // eslint-disable-next-line
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}