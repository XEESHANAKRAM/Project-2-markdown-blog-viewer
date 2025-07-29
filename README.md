# Markdown Blog Viewer

## Overview
A simple 2-tier fullstack app to view markdown blogs hosted in a GitHub repository.

- **Frontend**: React (displays blog list and content)
- **Backend**: Node.js/Express (fetches blog list/content from GitHub)
- **CI/CD**: Jenkins + Ansible

![UI Screenshot](https://dummyimage.com/600x400/000/fff&text=Markdown+Viewer)

## How it Works
1. Backend fetches markdown files from GitHub.
2. Frontend lists the blog files and displays selected content.
3. CI/CD with Jenkins automates build and deploy.

## Setup
1. Clone repo.
2. Install backend & frontend dependencies.
3. Run backend (`npm start` in backend/).
4. Run frontend (`npm start` in frontend/).

## Deployment
- Use Jenkins to trigger Ansible deployment.

```bash
ansible-playbook ansible/deploy.yml
```

## Features
- Dynamic blog loading
- GitHub file fetch
- Markdown rendering
