pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
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

        stage('build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Login') {
            steps {
                bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push') {
            steps {
                bat 'docker push chaimabouhlel/dp-alpine:latest'
            }
        }
    }
}
