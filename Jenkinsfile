pipeline {
    agent any
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
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
} 