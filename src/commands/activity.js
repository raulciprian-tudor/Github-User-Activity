const { fetchUserEvents } = require("../api/github");
const { formatEvent } = require("../utils/formatter")

const getActivity = async (username) => {
    try {
        const result = await fetchUserEvents(username)

        if (result.length === 0) {
            console.log(`No recent activity found.`)
        }

        result.forEach((event) => {
            console.log(formatEvent(event))
        })
    } catch (error) {
        console.error(error)
        process.exit(1) // 1 represents fail
    }
}

module.exports = { getActivity }