pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the latest source code from GitHub...'
                checkout scm
            }
        }

        stage('Build and Deploy') {
            steps {
                echo 'Building and deploying the personal portfolio...'
                sh '''
                    docker compose down
                    docker compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo 'Personal portfolio deployed successfully!'
        }

        failure {
            echo 'Deployment failed. Check the Jenkins console output for details.'
        }
    }
}