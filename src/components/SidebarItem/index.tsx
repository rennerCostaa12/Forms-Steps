import { Link } from 'react-router-dom';
import { IdentificationCard, EnvelopeSimple, Article } from 'phosphor-react';

import * as C from './styles';

interface SidebarItemProps {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean
}

export default function SidebarItem({ title, description, icon, path, active }: SidebarItemProps) {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && <IdentificationCard color='#F1F1F1' size={25} />}
                    {icon === 'book' && <Article color='#F1F1F1' size={25} />}
                    {icon === 'mail' && <EnvelopeSimple color='#F1F1F1' size={25} />}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}