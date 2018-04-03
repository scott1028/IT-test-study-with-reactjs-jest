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
				withEnv(["JEST_JUNIT_OUTPUT=./jest-test-results.xml"]) {
		 			sh 'yarn --version'
		 			sh 'yarn'
		 			sh 'yarn run test -- --ci --testResultsProcessor="jest-junit"'
				}
				junit 'jest-test-results.xml'
	 		}
		}
  	}
}
