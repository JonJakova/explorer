import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Spinner } from '../../components/loader/Spinner';
import { Navi } from '../../components/Navi';
import { useDataLoaded } from '../../core/AreDataLoadedContext';
import { api_zone } from '../../types/Constant';
import { Zone } from '../../types/Zone';
import "./Home.css";

interface Props { }

export const Home: React.FC<Props> = (props: Props) => {

    const { areDataLoaded, setAreDataLoaded } = useDataLoaded();

    const [zoneList, setZoneList] = useState<Zone[]>([]);

    useEffect(() => {
        setAreDataLoaded(false);
        loadZones();
        setAreDataLoaded(true);
    }, []);

    const loadZones = () => {
        fetchZones();
    }

    const fetchZones = async () => {
        const response = await fetch(api_zone);
        const zones = await response.json();
        setZoneList(zones);
    };

    return (
        <div className="container-fluid">
            {
                !areDataLoaded
                    ?
                    <div> <Spinner isVisible={true} /> </div>
                    :
                    <div>
                        <Row className="mt-3">
                        {
                            zoneList.map(zone => {
                                return (
                                    <Col key={zone.name} sm="6" md="4" lg="3">
                                        <Card>
                                            <Card.Header>
                                                <h3>{zone.name}</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <p>{zone.description}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        </Row>
                    </div>
            }
        </div>
    );
}