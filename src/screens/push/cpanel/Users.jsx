import React from 'react';
import { Container, Row, Col, Card, CardLink } from 'react-bootstrap';
import { CIcon } from '@coreui/icons-react';
import { menuUsers } from './users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
    return (
        <Container>
            <Row className="menu-grid mb-2">
                {menuUsers.map((user, index) => (
                    <Col key={index} className="mb-3">
                        <CardLink href={user.path} className="p-1">
                            <Card className='custom-hover-card'>
                                <Card.Body className='custom-card-body'>
                                    <CIcon className='custom-icon' icon={user.icon} />
                                    <Card.Text>{user.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardLink>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Users;
