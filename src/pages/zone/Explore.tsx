import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { RouteProps } from 'react-router';
import { Spinner } from '../../components/loader/Spinner';
import { useDataLoaded } from '../../core/contexts/AreDataLoadedContext';
import { Zone } from '../../types/Zone';

interface Props extends RouteProps {
    zone: Zone
}

export const Explore: React.FC<Props> = (props: Props) => {

    const { areDataLoaded, setAreDataLoaded } = useDataLoaded();
    const zone: Zone = props.location.state as Zone;

    return (
        <div>
            <Container fluid>
                {
                    zone == null
                        ? <div>  <Spinner isVisible={true} /> </div>
                        : <div>
                            <Row>
                                <h2>{zone.name}</h2>
                            </Row>
                            <Row>
                                <h4>{zone.description}</h4>
                            </Row>
                        </div>
                }
            </Container>
        </div>
    )
}