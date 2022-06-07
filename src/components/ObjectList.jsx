import React from 'react';
import { Row } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import getObjects from '../selectors/getObects';
import ObjectItem from './ObjectItem';

export default function ObjectList() {
    const objects = useSelector(
        (state) => getObjects(state).map((object) => object.id),
        shallowEqual
    );

    return (
        <Row xs={2} md={4} lg={6}>
            {objects.map((object, key) => (
                <ObjectItem key={key} objectId={object} />
            ))}
        </Row>
    );
}
