export function http(method, endPoint, data = null) {
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = { body: JSON.stringify(data) }
    const readyConfig = data ? { ...body, ...config } : config

    return {
        opts(baseUrl, callback) {
            fetch(`${baseUrl}/${endPoint}`, readyConfig)
                .then(res => res.json())
                .then(res => callback(res))
                .catch(err => callback({ error: err.message }))
        }
    }
}