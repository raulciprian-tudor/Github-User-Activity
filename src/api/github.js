const https = require("node:https")


function fetchUserEvents (username) {
    return new Promise((resolve, reject) => {
        https.get(
            {
                hostname: 'api.github.com',
                path: `/users/${username}/events`,
                headers: {
                    'User-Agent': 'github-activity-cli'
                }
            },
            function (res) {
                let data = ''

                res.on('data', (chunk) => {
                    data += chunk // accumulate data
                })

                res.on('end', () => {
                    if (res.statusCode === 404) {
                        return reject(new Error(`User: "${username}" not found.`))
                    }

                    if (res.statusCode !== 200) {
                        return reject(new Error(`GitHub API error: ${res.statusCode}`))
                    }

                    try {
                        const parsed = JSON.parse(data)
                        resolve(parsed)
                    } catch (error) {
                        reject(new Error(error))
                    }
                })

                res.on('error', (error) => {
                    reject(new Error(error))
                })
            })
    })
}

module.exports = { fetchUserEvents }