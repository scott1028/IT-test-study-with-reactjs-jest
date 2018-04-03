#!/usr/bin/env groovy

pipeline {
	agent any
	tools {nodejs "latest"}
	stages {
		stage('checkout') {
			steps {
	  			checkout scm
	  		}
		}

		stage('test') {
			steps {
	 			sh 'yarn --version'
	 			sh 'yarn'
	 			sh 'yarn run test'
	 		}
		}
  	}
}
