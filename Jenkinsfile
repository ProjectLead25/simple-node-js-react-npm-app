pipeline {
    agent any
  //  environment { PATH = 'C\Program Files\nodejs\node_modules\npm\bin'}
    stages {
        stage('build') {
            steps {
                bat 'npm install'
                bat 'npm --version'
                bat 'node --version'
                bat 'npm install -g @angular/cli'
                bat 'ng serve'
        }
    }
}
}