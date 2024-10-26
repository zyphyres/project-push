import React from 'react';
import { Container, Row, Col, Card, CardLink } from 'react-bootstrap';
import { CIcon } from '@coreui/icons-react';
import { menuPermissions } from './permissions/Permissions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cpanel.css';

const Permissions = () => {
    return (
        <Container>
            <Row className="menu-grid mb-2">
                {menuPermissions.map((permissions, index) => (
                    <Col key={index} className="mb-3">
                        <CardLink href={permissions.path} className="p-1">
                            <Card className='custom-hover-card'>
                                <Card.Body className='custom-card-body'>
                                    <CIcon className='custom-icon' icon={permissions.icon} />
                                    <Card.Text>{permissions.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardLink>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Permissions;
