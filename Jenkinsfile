pipeline {
  agent any

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
        sh 'ansible-playbook ansible/deploy.yml'
      }
    }
  }
}