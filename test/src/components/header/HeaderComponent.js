import { Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, Collapse, Nav, NavbarToggler, NavItem, NavLink, Container } from "reactstrap"
const HeaderComponent = () => {
    const [isCollapse, setIsCollapse] = useState(false)
    const onClickCollapse = () => {
        setIsCollapse(!isCollapse)
    }
    return (
        <>
            <div
                style={{ backgroundColor: '#4D46FA' }}>
                <Container>
                    <Navbar
                        expand="md"
                        light

                    >
                        <NavbarBrand href="/" style={{ color: '#FFFFFF' }}>
                            <h4>Baycungban</h4>
                        </NavbarBrand>
                        <NavbarToggler onClick={onClickCollapse} />
                        <Collapse navbar isOpen={isCollapse}>
                            <Nav
                                className="me-auto"
                                navbar

                            >
                                <NavItem>
                                    <a href="#" id="language-bar-invoker" className="u-icon-v1">
                                        <i className="vn" style={{ marginRight: 10 }} alt='langVN'></i>
                                        <i className="usa" alt='langUSA'></i>
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: '#FFFFFF' }}>
                                        Promotion
                                    </NavLink >
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to={'/flightSchedule'}  style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                                            Flight Schedule
                                        </Link>
                                    </NavLink >
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: '#FFFFFF' }}>
                                        About Us
                                    </NavLink >
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: '#FFFFFF' }}>
                                        Payment Guilde
                                    </NavLink >
                                </NavItem>
                            </Nav>
                            <Button variant="contained" style={{ borderRadius: 10, backgroundColor: '#FFFFFF', color: '#4D46FA' }}>Booking now</Button>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    )
}
export default HeaderComponent