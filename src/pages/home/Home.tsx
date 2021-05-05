import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Spinner } from '../../components/loader/Spinner';
import { Navi } from '../../components/Navi';
import { useDataLoaded } from '../../core/contexts/AreDataLoadedContext';
import { useFilterText } from '../../core/contexts/FilterTextContext';
import { api_zone } from '../../types/Constant';
import { Zone } from '../../types/Zone';
import "./Home.css";

interface Props { }

export const Home: React.FC<Props> = (props: Props) => {

    const { areDataLoaded, setAreDataLoaded } = useDataLoaded();
    const { filterText } =useFilterText();

    const [zoneList, setZoneList] = useState<Zone[]>([]);

    useEffect(() => {
        setAreDataLoaded(false);
        fetchZones();
        setAreDataLoaded(true);
    }, []);

    const fetchZones = async () => {
        const response = await fetch(api_zone);
        const zones = await response.json();
        setZoneList(zones);
    };

    const filteredZones = zoneList.filter(zone => {
        return zone.name.toLowerCase().includes(filterText);
    })

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
                            filteredZones.map(zone => {
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