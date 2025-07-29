pipeline {
  agent any

  tools {
    nodejs 'NodeJS' // Must match the NodeJS tool name in Jenkins config
  }

  stages {

    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/XEESHANAKRAM/Project-2-markdown-blog-viewer.git'
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh '''
            echo "===== Installing Backend Dependencies ====="
            npm install
            echo "===== Backend Dependencies Installed ====="
          '''
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh '''
            echo "===== Installing Frontend Dependencies ====="
            npm install
            echo "===== Building Frontend ====="
            npm run build
            echo "===== Frontend Build Completed ====="
          '''
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
        dir('ansible') {
          sh '''
            echo "===== Running Ansible Deployment ====="
            ansible-playbook -i inventory deploy.yml
          '''
        }
      }
    }
  }
}
