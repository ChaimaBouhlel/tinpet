pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
        registry = 'chaimabouhlel/frontend'
        registryCredential = 'docker-hub-credentials'
        dockerImage = ''
    }
    tools {
        nodejs 'node21'
    }

    stages {
        stage('fetch code') {
            steps {
                git branch: 'main', url: 'https://github.com/ChaimaBouhlel/tinpet.git'
            }
        }
        stage('Building our image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Deploy our image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
