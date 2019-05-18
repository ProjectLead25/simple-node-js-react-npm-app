pipeline {
    agent any
  //  environment { PATH = 'C\Program Files\nodejs\node_modules\npm\bin'}
    stages {
        stage('build') {
            steps {
                bat 'npm install'
                bat 'npm --version'
        }
    }
}