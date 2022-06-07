import React from 'react';
import { Badge, Card, Col } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import getObjects from '../selectors/getObects';

function bgColor(status) {
    switch (status) {
        case 'тревога':
            return 'danger';
        case 'открыто':
            return 'success';
        case 'закрыто':
            return 'primary';
    }

    return 'secondary';
}

export default function ObjectItem(props) {
    const object = useSelector(
        (state) => getObjects(state).find((object) => object.id === props.objectId),
        shallowEqual
    );

    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{object.name}</Card.Title>
                    <Card.Text>
                        <Badge bg={bgColor(object.status)}>{object.status}</Badge>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
