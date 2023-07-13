pipeline {

    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('suisan-dockerhub')
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh './jenkins/build.sh'
            }
        }
        stage('Login')	{
	        steps {
                echo "Logining.."
                sh './jenkins/login.sh'
            }
        }
        stage('Push') {
            steps {
                echo 'Pushing....'
                sh './jenkins/push.sh'
            }
        }
    }
    post {
        always {
            sh './jenkins/logout.sh'
        }
    }
}
