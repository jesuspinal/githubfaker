# GitHub Faker

GitHub Faker is a simple project that simulates making Git commits on a repository by generating fake commit data with random dates. This project uses Git, Moment.js, JSON file storage, and Random.js to mimic the process of creating commit histories.

## Disclaimer

This project is intended **only** for educational and entertainment purposes. It is not designed to deceive, mislead, or manipulate any systems or individuals. The creation of fake commit histories can violate the terms of service of GitHub or other platforms, and using this tool for malicious purposes is strictly prohibited.

By using this tool, you agree to abide by ethical guidelines and to use it only in a manner that complies with all relevant laws, regulations, and platform rules. Do not use this project to impersonate others, misrepresent activity, or engage in deceptive practices.

**Use this tool responsibly.**

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

