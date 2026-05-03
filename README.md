# GitHub User Activity CLI

Sample solution for the [github-user-activity](https://roadmap.sh/projects/github-user-activity) challenge from [roadmap.sh](https://roadmap.sh/)

A command-line interface (CLI) tool that fetches and displays a GitHub user's recent activity in the terminal using the GitHub API.

## Features

- Fetch recent activity for any GitHub user
- Display activity in a clean, readable format
- Graceful error handling for invalid usernames or API failures
- No external HTTP libraries — uses Node.js built-in `https` module

## Tech Stack

- Node.js
- GitHub REST API

## Installation

1. Clone the repository
   
   git clone https://github.com/your-username/github-activity.git
   cd github-activity

2. Install dependencies
   
   npm install

## Usage

node src/cli/index.js <username>

**Example:**

node src/cli/index.js torvalds

**Output:**
Pushed to torvalds/linux on branch master
Pushed to torvalds/linux on branch master
Starred torvalds/linux
...

## Supported Event Types

| Event | Output |
|---|---|
| PushEvent | Pushed to `repo` on branch `branch` |
| IssuesEvent | Opened/Closed an issue in `repo` |
| WatchEvent | Starred `repo` |
| ForkEvent | Forked `repo` |
| CreateEvent | Created branch/tag in `repo` |
| PullRequestEvent | Opened/Closed a pull request in `repo` |
| PullRequestReviewEvent | Reviewed a pull request in `repo` |
| PullRequestReviewCommentEvent | Commented on a pull request review in `repo` |

## Error Handling

- Invalid username → displays a not found message
- API failure → displays the error and exits
- No username provided → displays usage instructions


