pipeline {
  agent any
  
  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/XEESHANAKRAM/Project-2-markdown-blog-viewer.git' 
    }
  }
  stages {
    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
        dir('ansible')
        sh 'ansible-playbook -i inventory deploy.yml'
      }
    }
  }
}
