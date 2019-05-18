pipeline {
    agent any
    environment { PATH = '\C\Program Files\nodejs\node_modules\npm\bin'}
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}