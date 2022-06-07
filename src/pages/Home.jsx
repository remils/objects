import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ObjectList from '../components/ObjectList';
import useQueue from '../hooks/useQueue';
import { objectChannel } from '../listens/object';
import { objectsRequest } from '../requests/object';
import { objects, updateObjects } from '../store/object';

export default function Home() {
    const dispatch = useDispatch();

    const channel = objectChannel();

    const queue = useQueue(function (items) {
        dispatch(updateObjects(items));
    });

    useEffect(() => {
        objectsRequest().then((items) => dispatch(objects(items)));

        channel.listen((event) => queue.addQueue(event));

        return () => {
            channel.stopListen();
        };
    }, []);

    return (
        <Container>
            <ObjectList />
        </Container>
    );
}
