pipeline {
    // agent {
    //     node {
    //         label 'docker-agent-p'
    //     }
    agent any
    triggers {
      pollSCM 'H/2 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                echo "doing build stuff.."
                pip install fire==0.4.0
                '''
            }
        }
        stage('Test') 
	  when {
	    branch "dev*"
	  }	
		{
            steps {
                echo "Testing.."
                sh '''
                python3 hello.py
                python3 hello.py --name=Brad
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}
