
import { useState } from 'react';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Navbar, NavbarBrand, Collapse, Nav, NavbarToggler, NavItem, NavLink, Container, Label } from "reactstrap"
const HeaderHome = () => {
    const [isCollapse, setIsCollapse] = useState(false)
    const onClickCollapse = () => {
        setIsCollapse(!isCollapse)
    }

    return (
        <>
            <div>
                <Container>
                    <Navbar
                        expand="md"
                        light
                        style={{ backgroundColor: 'transparent', position: 'absolute', padding: 25 }}
                    >
                        <Link to={'/'} style={{ width: 300, textDecoration: 'none', color: 'black' }}>
                            <h4>Baycungban
                                <a href="#" id="language-bar-invoker" className="u-icon-v1">
                                    <i className="vn" style={{ marginRight: 10 }} alt='langVN'></i>
                                    <i className="usa" alt='langUSA'></i>
                                </a>
                            </h4>
                        </Link>
                        <NavbarToggler onClick={onClickCollapse} />
                        <Collapse navbar isOpen={isCollapse}>
                            <Nav
                                className="me-auto"
                                navbar

                            >
                                <NavItem>
                                    <Label className='font-content' style={{ marginLeft: 50 }}>
                                        Promotion
                                    </Label>
                                </NavItem>
                                <NavItem>
                                    <Link to={'/flightSchedule'} className='font-content' style={{ textDecoration: 'none', marginLeft: 50 }}>
                                        Flight Schedule
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Label className='font-content' style={{ marginLeft: 50 }}>
                                        About Us
                                    </Label>
                                </NavItem>
                                <NavItem>
                                    <Label className='font-content' style={{ marginLeft: 50 }}>
                                        Payment Guilde
                                    </Label>
                                </NavItem>
                            </Nav>
                            <Button variant="contained" style={{ borderRadius: 10, marginLeft: 50, backgroundColor: '#4D46FA', color: '#FFFFFF' }}>Booking now</Button>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    )
}
export default HeaderHome