pipeline {
    agent any
    tools any

    stages {
        stage('fetch code') {
            steps {
                git branch: 'main', url: 'https://github.com/ChaimaBouhlel/tinpet.git'
            }
        }
    }
    
    //build project with npm
    stage('build') {
        steps {
            sh 'npm install'
            sh 'npm run build'
        }
    }


} 