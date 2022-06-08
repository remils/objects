function randomStatus(status) {
    const index = Math.floor(Math.random() * status.length);

    return status[index];
}

export const objects = Array.from({ length: 1000 }, (value, key) => ({
    id: key,
    name: `Объект N ${key}`,
    status: 'неизвестно',
}));

export function objectsRandomStatus() {
    return [...objects]
        .sort(() => {
            return Math.random() > 0.5 ? 1 : -1;
        })
        .map((object) => {
            return {
                ...object,
                status: randomStatus(['открыто', 'закрыто', 'тревога']),
            };
        });
}
