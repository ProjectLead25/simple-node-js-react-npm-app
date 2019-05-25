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
                bat 'npm run ng -- build'
              echo 'build job completed'
                  }
        }

   }
  post
  {
      success {
      mail (from: 'rakeshrapalli98@gmail.com', to: 'rakeshrapalli90@gmail.com', subject: 'The Pipeline is Success :(', body: 'Code has no bugs');
      }
      
      failure {
      mail (from: 'rakeshrapalli98@gmail.com', to: 'rakeshrapalli90@gmail.com', subject: 'The Pipeline failed :(', body: 'Check the code for errors.');
      }
      
  }
}
