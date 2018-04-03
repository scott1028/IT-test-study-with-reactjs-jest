#!/usr/bin/env groovy

pipeline {
	agent any
	tools {nodejs "latest"}
	stages {
		stage('checkout') {
	  		checkout scm
		}

		stage('test') {
	 		sh 'npm --version'
		}
  	}
}
