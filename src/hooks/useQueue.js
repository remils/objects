export default function useQueue(callback, timeout = 500, maxCount = 500) {
    let pid = null,
        items = [];

    return {
        addQueue(item) {
            clearTimeout(pid);

            items.push(item);

            if (items.length >= maxCount) {
                callback(items);

                items = [];
            } else {
                pid = setTimeout(() => {
                    callback(items);

                    items = [];

                    clearTimeout(pid);
                }, timeout);
            }
        },
    };
}
