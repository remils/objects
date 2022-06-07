import { objects } from '../helper';

// заглушка запроса на сервер
export function objectsRequest() {
    return new Promise((resolve) => {
        const pid = setTimeout(() => {
            resolve(objects);

            clearTimeout(pid);
        }, 500);
    });
}
