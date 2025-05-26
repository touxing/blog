pipeline {
  agent none
  stages {
    stage('install') {
      steps {
        sh 'npm install --registry=https://registry.npmmirror.com'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Archive the artifacts') {
      steps {
        archiveArtifacts 'dist/**/*'
      }
    }

  }
}