#!/usr/bin/env groovy

pipeline {
	agent any
	tools {nodejs "8.10.0"}
	stages {
		stage('checkout') {
			steps {
	  			checkout scm
	  		}
		}

		stage('test') {
			steps {
	 			sh 'npm --version'
	 		}
		}
  	}
}
