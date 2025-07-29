pipeline {
  agent any

  tools {
    nodejs 'NodeJS' // Make sure this matches your Jenkins NodeJS tool name
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/XEESHANAKRAM/Project-2-markdown-blog-viewer.git'
      }
    }

    stage('Install Backend Dependencies') {
    steps {
        dir('backend') {
            sh '''
                echo "===== Installing Backend Dependencies ====="
                npm install --verbose || tail -n 20 npm-debug.log  # Output npm-debug.log in case of failure
                echo "===== Backend Dependencies Installed ====="
            '''
        }
    }
}

    stage('Install & Build Frontend') {
      steps {
        dir('frontend') {
          sh '''
            npm install
            npm run build
          '''
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
        dir('ansible') {
          sh 'ansible-playbook -i inventory deploy.yml'
        }
      }
    }
  }

  post {
    failure {
      echo '❌ Build failed. Check logs.'
    }
    success {
      echo '✅ Build completed successfully.'
    }
  }
}
