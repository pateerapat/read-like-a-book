pipeline {
    agent any

    stages {
        stage('Pull code') {
            steps {
                checkout scm
            }
        }
        stage('Setup environment') {
            steps {
                withEnv(['cookieKey=RLABWEBAPPLICATION']) {
                    // some block
                }
            }
        }
        stage('Download dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy development branch') {
            steps {
                echo 'automatic deploy development branch to heroku'
            }
        }
        stage('Unit testing with coverage') {
            steps {
                sh 'npm run test-unit'
            }
        }
        stage('Component testing with coverage') {
            steps {
                sh 'npm run test-component'
            }
        }
        stage('Integration testing with coverage') {
            steps {
                sh 'npm run test-integration'
            }
        }
        stage('E2E testing with coverage') {
            steps {
                sh 'npm run test-e2e'
            }
        }
        stage('Deploy main branch') {
            steps {
                echo 'automatic deploy main branch to heroku'
            }
        }
    }
}

