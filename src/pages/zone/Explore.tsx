import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { RouteProps } from 'react-router';
import { Zone } from '../../types/Zone';

interface Props extends RouteProps { }

export const Explore: React.FC<Props> = (props: Props) => {

    const zone = props.location.state as Zone;

    return (
        <div>
            <Container fluid>
                <Row>
                    <h2>{zone.name}</h2>
                </Row>
                <Row>
                    <h4>{zone.description}</h4>
                </Row>
            </Container>
        </div>
    )
}