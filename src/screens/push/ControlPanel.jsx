import React from 'react';
import MasterLayout from './layout/MasterLayout';
import Accordion from 'react-bootstrap/Accordion';
import  Users from './cpanel/Users';
import  Permissions from './cpanel/Permissions';
import '../push/css/cpanel.css';

const ControlPanel = () => {
    return (
        <MasterLayout title="Control Panel">
        
            <Accordion defaultActiveKey={['0','1','2','3','4','5']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Users / Groups</Accordion.Header>
                    <Accordion.Body>
                        <Users />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Permissions / Priviledges</Accordion.Header>
                    <Accordion.Body>
                    <Permissions />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Workstation Kits</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>File Uploads</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Services</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Reports</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </MasterLayout>
    );
};

export default ControlPanel;
