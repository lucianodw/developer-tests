'use strict';

angular.module('crowdTwistApp')
	.factory('Survey', function(){

	    var surveyList = [];

	    return {

		/**
		* Type: Function
		* Name: new
		* Description: Creates a new survey JSON.
		* Return: survey {object}
		*/
	        new: function(){
	        	return {
			    	title: '',
			    	pointValue: 0,
			    	description: '',
			    	questions: [{
			    		title: ''
			    	}]
		       };
	        },

	        /**
		* Type: Function
		* Name: create
		* Description: Adds survey to the surveyList
		* Return: surveyList {array}
		*/
	        create: function(survey){
	        	surveyList.push(survey);
	        	return surveyList;
	        },

	        /**
		* Type: Function
		* Name: update
		* Description: Updates survey in the surveyList
		* Return: surveyList {array}
		*/
	        update: function(index, survey) {
	        	surveyList[index] = survey;
	        	return surveyList;
	        },

	        /**
		* Type: Function
		* Name: newQuestion
		* Description: Creates a new quesiton JSON.
		* Return: question {object}
		*/
	        newQuestion: function(){
	        	return {
		    		title: ''
		       };
	        }
	    }               
	});