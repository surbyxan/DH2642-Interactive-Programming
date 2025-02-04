
export function resolvePromise(prms, promiseState) {
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    if (promiseState.promise !== null) {
        prms.then(dataACB).catch(errorACB);
    }

    function dataACB(result) {
        if (promiseState.promise === prms)
            promiseState.data = result;
    }

    function errorACB(result) {
        promiseState.error = result;
    }
}