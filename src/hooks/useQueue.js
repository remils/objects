export default function useQueue(callback, timeout = 500, maxCount = 500) {
    let pid = null,
        queue = [];

    return {
        addQueue(item) {
            clearTimeout(pid);

            queue.push(item);

            if (queue.length >= maxCount) {
                callback(queue);

                queue = [];
            } else {
                pid = setTimeout(function () {
                    callback(queue);

                    queue = [];

                    clearTimeout(pid);
                }, timeout);
            }
        },
    };
}
