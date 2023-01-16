import { useNavigate, Link } from 'react-router-dom';

import * as C from './styles';
import Theme from "../../../components/Theme/indes"
import useForm, { FormActions } from '../../../contexts/formContext/ContextFormSteps';
import { ChangeEvent, useEffect } from 'react';

export default function FormStep3() {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert('Preencha os dados!');
        }
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        })
    }

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        })
    }

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual o seu e-mail?
                    <input
                        type="text"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu github?
                    <input
                        type="url"
                        autoFocus
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}