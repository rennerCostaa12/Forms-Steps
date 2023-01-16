import * as C from './styles';

interface SelectionOptionProps {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export default function SelectOption({ title, description, icon, selected, onClick }: SelectionOptionProps) {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    )
}