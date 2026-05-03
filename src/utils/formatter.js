function formatEvent (event) {
    switch (event.type) {
        case 'PushEvent':
            return `Pushed to ${event.repo.name} on branch ${event.payload.ref.replace('refs/heads/', '')}`
        case 'IssuesEvent':
            return `${event.payload.action} an issue in ${event.repo.name}`
        case 'WatchEvent':
            return `Starred ${event.repo.name}`
        case 'ForkEvent':
            return `Forked ${event.repo.name}`
        case 'CreateEvent':
            console.log(event.payload)
            return `Created ${event.payload.ref_type} in ${event.repo.name}`
        case 'PullRequestEvent':
            return `${event.payload.action} a pull request in ${event.repo.name}`
        case 'PullRequestReviewEvent':
            return `Reviewed a pull request in ${event.repo.name}`
        case 'PullRequestReviewCommentEvent':
            return `Commented on a pull request review in ${event.repo.name}`
        default:
            return `${event.type} in ${event.repo.name}`
    }
}

module.exports = { formatEvent }