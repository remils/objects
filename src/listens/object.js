import { objectsRandomStatus } from '../helper';

export function objectChannel() {
    let pid = null;

    return {
        listen(callback) {
            setInterval(function () {
                objectsRandomStatus().forEach(callback);
            }, 5000);
        },
        stopListen() {
            clearInterval(pid);
        },
    };
}
