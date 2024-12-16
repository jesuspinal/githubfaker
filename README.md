# GitHub Faker

GitHub Faker is a simple project that simulates making Git commits on a repository by generating fake commit data with random dates. This project uses Git, Moment.js, JSON file storage, and Random.js to mimic the process of creating commit histories.

## Purpose

The goal of this project is to create and manage fake commit histories for a Git repository. You can simulate a series of commits for testing, demonstration, or fun by generating commit dates at random intervals, pushing them to the repository, and updating a JSON file with the commit timestamps.

## How It Works

1. **Commit History**: This project creates fake commit history by:
   - Generating random weeks and days within a one-year period.
   - Assigning a timestamp to each commit using the `moment.js` library.
   - Storing this timestamp data in a `data.json` file.

2. **Git Operations**: 
   - For each generated commit, the corresponding file (data.json) is staged, committed, and pushed to the repository using `simple-git`.

## Installation

To get started with this project, follow these steps:

### Prerequisites

- Node.js installed on your system.
- A GitHub repository where you want to simulate commits.
- Access to a terminal/command line for executing commands.

### Step-by-step Setup

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/githubfaker.git
   cd githubfaker
