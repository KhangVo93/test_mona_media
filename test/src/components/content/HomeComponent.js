import { useEffect, useState } from "react"
import { Container, Row, Col, Label, Card, CardTitle, CardBody, CardText } from "reactstrap"
import { Button, Checkbox, Menu, MenuItem, Select, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import HeaderHome from "../header/HeaderHome"
const HomeComponent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [adult, setAdult] = useState(1)

    const setDecreaseAdult = () => {
        if (adult === 1) {
            setAdult(1)
        }
        else {
            setAdult(adult - 1)
        }
    }
    const [child, setChild] = useState(0)
    const setDecreaseChild = () => {
        if (child === 0) {
            setChild(0)
        }
        else {
            setChild(child - 1)
        }
    }

    const [classFly, setClassFly] = useState(null)

    const onClickSearch = () => {
        console.log(adult)
        console.log(child)
        console.log(classFly)
    }

    return (
        <>
            <div className="bg">

                {/* Header for home */}
                <HeaderHome />
                {/* Content Home */}
                <Container>
                    {/* <Row>
                    <Col xs='6'> */}
                    <Row>
                        <Col xs={{ size: 'auto' }}>
                            <h1 className="font-home" style={{ marginTop: 250 }}>
                                Hello!<br />
                                Where are<br />
                                You <span style={{ color: '#4D46FA' }}>flying</span> to ...
                            </h1>
                        </Col>
                    </Row>
                    {/* </Col>
                </Row> */}
                    <Container>
                        <Row className="mt-2 p-2">
                            <Col xs='auto' style={{ color: 'black', borderRadius: 10, background: 'white' }}>
                                <Row className="mt-2 p-2">
                                    <Col xs='auto'>
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#4D46FA' }} />}></Checkbox>
                                        <Label className="font-content">One way/ Round trip</Label>
                                    </Col>
                                    <Col xs='auto'>
                                        <Checkbox
                                            icon={<RadioButtonUncheckedIcon />}
                                            checkedIcon={<RadioButtonCheckedIcon style={{ color: '#4D46FA' }} />}></Checkbox>
                                        <Label className="font-content">Multi-city</Label>
                                    </Col>
                                    <Col xs='auto'>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <p className="font-content"><span style={{ color: '#4D46FA' }}>{adult}</span> Adult ,<span style={{ color: '#4D46FA' }}>{child}</span> Child  </p>

                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem >
                                                <Row className="p-2">
                                                    <Col xs='6'>
                                                        <Label>Adult {adult}</Label>
                                                    </Col>
                                                    <Col xs='3'>
                                                        <Button onClick={() => setAdult(adult + 1)}>+</Button>
                                                    </Col>
                                                    <Col xs='3'>
                                                        <Button onClick={setDecreaseAdult}>-</Button>
                                                    </Col>
                                                </Row>
                                            </MenuItem>
                                            <MenuItem >
                                                <Row className="p-2">
                                                    <Col xs='6'>
                                                        <Label>Child {child}</Label>
                                                    </Col>
                                                    <Col xs='3'>
                                                        <Button onClick={() => setChild(child + 1)}>+</Button>
                                                    </Col>
                                                    <Col xs='3'>
                                                        <Button onClick={setDecreaseChild}>-</Button>
                                                    </Col>
                                                </Row>
                                            </MenuItem>
                                            <MenuItem>
                                                <Button variant="contained" onClick={handleClose} >OK
                                                </Button>
                                            </MenuItem>
                                        </Menu>
                                    </Col>
                                    <Col xs='auto'>
                                        <Select style={{ width: '100%' }} variant="standard" onChange={(e) => setClassFly(e.target.value)}>
                                            <MenuItem value='ECO' ><Label className="font-content">Economy Class</Label></MenuItem>
                                            <MenuItem value='BUS' ><Label className="font-content">Business Class</Label></MenuItem>
                                            <MenuItem value='SKB'><Label className="font-content">Skyboss Class</Label></MenuItem>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row className="mt-2 p-2">
                                    <Col xs='auto'>
                                        <Card style={{ borderRadius: 12, width: 250 }}>
                                            <CardBody>
                                                <CardText>
                                                    <Row>
                                                        <Label className="font-content text-secondary">FROM</Label>
                                                    </Row>
                                                    <Row>
                                                        <Label className="font-content" style={{ color: '#4D46FA', fontSize: 25 }}>Ho Chi Minh</Label>
                                                    </Row>
                                                    <Row>
                                                        <Label className="font-content">Viet Nam</Label>
                                                    </Row>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs='auto'>
                                        <Card style={{ borderRadius: 12, width: 250 }}>
                                            <CardBody>
                                                <CardText>
                                                    <Row>
                                                        <Label className="font-content text-secondary">TO</Label>
                                                    </Row>
                                                    <Row>
                                                        <Label className="font-content" style={{ color: '#4D46FA', fontSize: 25 }}>Hai Phong</Label>
                                                    </Row>
                                                    <Row>
                                                        <Label className="font-content">Hai Phong, Viet Nam</Label>
                                                    </Row>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs='auto'>
                                        <Card style={{ borderRadius: 12 }}>
                                            <CardBody>
                                                <CardText>
                                                    <Row>
                                                        <Col>
                                                            <Row>
                                                                <Label className="font-content text-secondary">DEPARTURE</Label>
                                                            </Row>
                                                            <Row>
                                                                <Label className="font-content" style={{ color: '#4D46FA', fontSize: 25 }}>
                                                                    Fri,22 Mar,2022
                                                                    <img alt='a' src='https://cdn-icons-png.flaticon.com/512/747/747310.png' style={{ width: 15, height: 15, color: '#4D46FA' }} />
                                                                </Label>
                                                            </Row>
                                                            <Label className="font-content" style={{ borderBottom: '1px solid black', marginRight: 10 }}>Prev</Label>
                                                            <Label className="font-content text-secondary">Next</Label>
                                                        </Col>
                                                        <Col>
                                                            <Row>
                                                                <Label className="font-content text-secondary">RETURN</Label>
                                                            </Row>
                                                            <Row>
                                                                <Label className="font-content" style={{ color: '#4D46FA', fontSize: 25 }}>
                                                                    Fri,22 Mar,2022
                                                                    <img alt='a' src='https://cdn-icons-png.flaticon.com/512/747/747310.png' style={{ width: 15, height: 15, color: '#4D46FA' }} />
                                                                </Label>
                                                            </Row>
                                                            <Label className="font-content text-secondary" style={{ marginRight: 10 }}>Prev</Label>
                                                            <Label className="font-content text-secondary">Next</Label>
                                                        </Col>
                                                    </Row>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="mt-2 p-2">
                                    <Col xs='auto'>
                                        <Link to={'/flightSchedule'} style={{ textDecoration: 'none' }}>
                                            <Button variant='contained' style={{ borderRadius: 12, backgroundColor: '#4D46FA', width: 200, height: 60, position: 'absolute' }} onClick={onClickSearch}>
                                                Search Flights &emsp;
                                                <ArrowRightAltIcon />
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container >
            </div>
        </>
    )
}
export default HomeComponent