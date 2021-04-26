import React from 'react'
import { Navi } from '../../components/Navi';
import "./Home.css";

interface Props { }

export const Home: React.FC<Props> = (props: Props) => {

    return (
        <div className="container-fluid">
            <Navi />
        </div>
    );
}