import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useFilterText } from '../../core/contexts/FilterTextContext';
import "./Navi.css";
import DropDownNaviItem from './NaviDropdownItem';

interface Props { }

export const Navi: React.FC<Props> = (props: Props) => {

    const { setFilterText } = useFilterText();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Via Egnatia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            {DropDownNaviItem.map(item => {
                                return (
                                    <NavDropdown.Item key={item.title} href={item.path}>{item.title}</NavDropdown.Item>
                                );
                            })}
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl onChange={e => setFilterText(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}