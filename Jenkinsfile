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
              echo 'build job completed successfully'
             
                  }
        }
      

   }
  post
  {
      success {
      bat 'cd C:\\Users\\rajaiah\\OneDrive\\Desktop\\abcdef'
        
    bat 'MD "Build_Number_%BUILD_NUMBER%_Year_%date:~10,4%_Month_%date:~4,2%_Date_%date:~7,2%"'
  //      bat 'type nul > hello.text'
bat 'cd Build_Number_%BUILD_NUMBER%_Year_%date:~10,4%_Month_%date:~4,2%_Date_%date:~7,2%'
  //      bat 'type nul > hello.text'
//bat 'echo "xcopy /C/Program Files (x86)/Jenkins/workspace/AngularJenkins_feature Build_Number_%BUILD_NUMBER%_Year_%date:~10,4%_Month_%date:~4,2%_Date_%date:~7,2%"'
        
bat "xcopy C:\\Program Files (x86)\\Jenkins\\workspace\\AngularJenkins_feature C:\\Users C:\\Users\\rajaiah\\OneDrive\\Desktop\\abcdef\\Build_Number_%BUILD_NUMBER%_Year_%date:~10,4%_Month_%date:~4,2%_Date_%date:~7,2%"
        
       

      mail (from: 'rakeshrapalli98@gmail.com', to: 'rakeshrapalli90@gmail.com', subject: 'The Pipeline is Success :(', body: 'Code has no bugs');
      }
      
      failure {
      mail (from: 'rakeshrapalli98@gmail.com', to: 'rakeshrapalli90@gmail.com', subject: 'The Pipeline failed :(', body: 'Check the code for errors.');
      }
      
  }
}
