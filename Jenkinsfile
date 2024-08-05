pipeline {
  agent none 
  stages {
    stage('Code Analysis') {
        agent any
        environment {
            scannerHome = tool 'SonarQube';
        }
        steps {
            script {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=test-project \
                        -Dsonar.projectName=test-project \
                        -Dsonar.projectVersion=test-project \
                        -Dsonar.sources=./"
                }
            }
        }
    }
    stage('Checkout, Test & Build') {
        agent {
          dockerContainer {
            image 'node:10-alpine'
          }
        }
        environment {
          HOME = '.'
        }
        stages {
          stage('Install') {
            steps {
              sh 'npm install'
            }
          }
          stage('Test') {
            steps {
              sh './jenkins/scripts/test.sh'
            }
          }
          stage('Build') {
            steps {
              sh './jenkins/scripts/build.sh'
            }
          }
          stage('Archive') {
            steps {
              archiveArtifacts 'build/**'
            }
          }
        }
    }
    stage('Copy files') {
      agent {
        label 'master'
      }
      options {
        skipDefaultCheckout()
      }
      steps {
        sh 'rm -rf /var/builds/test-project'
        sh 'mkdir /var/builds/test-project'
        sh 'cp -Rp build/** /var/builds/test-project'
      }
    }
  }
}