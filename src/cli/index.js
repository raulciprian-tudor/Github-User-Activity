const { getActivity } = require('../commands/activity')

const username = process.argv[2]

if (!username || username.trim() === '') {
    console.error("Username must be provided") // for error messages it's best to use console.error instead of console.log
    process.exit(1) // if validation fails, we need to stop the execution with process.exit(1) // 1 = error / 0 = success, you can't return outside a function.
}

getActivity(username)