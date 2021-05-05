import React from 'react';
import { Row } from 'react-bootstrap';
import { Zone } from '../../types/Zone';

interface Props {
    zone: Zone
}

export const Explore: React.FC<Props> = (props: Props) => {
    console.log("exp");
    console.log(props.zone);
    

    return (
        <div>
            <Row>
                <h2>{props.zone.name}</h2>
            </Row>
            <Row>
                <h4>{props.zone.description}</h4>
            </Row>
        </div>
    )
}