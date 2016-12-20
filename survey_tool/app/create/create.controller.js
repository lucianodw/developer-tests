'use strict';

angular.module('crowdTwistApp')
  .controller('app.create.controller', function ($scope, Survey) {

        /**
        * Type: Function
        * Name: $scope.submit
        * Description: Linked to submit / update survey button.  Checks if
        * form is valid.  If valid, sets the jsonOuput and calls the appropriate function.
        */
  	$scope.submit = function() {
  		if ($scope.surveyForm.$valid) {
  			$scope.jsonOutput = $scope.survey;
	  		($scope.editFlag) ? $scope.update() : $scope.create();
  			$scope.surveyForm.$setPristine();
  		}
  	}

        /**
        * Type: Function
        * Name: $scope.create
        * Description: Sends the new survey to the Survey factory then clears
        * the form by resetting the survey variable.
        */
  	$scope.create = function(){
  		$scope.surveyList = Survey.create($scope.survey);
  		$scope.survey = Survey.new();
  	};

        /**
        * Type: Function
        * Name: $scope.edit
        * Parameter: index {int} 
        * Description: Loads 'edit' survey in the survey variable &
        * sets the edit flag to true.
        */
  	$scope.edit = function(index){
  		$scope.survey = $scope.surveyList[index];
  		$scope.editFlag = true;
  		$scope.editIndex = index;
  	};

        /**
        * Type: Function
        * Name: $scope.update
        * Parameter: index {int} 
        * Description: Sends the Survey factory the updated survey with 
        * the survey index.  It then resets all scope variables.
        */
  	$scope.update = function(index) {
  		$scope.surveyList = Survey.update(index, $scope.survey);
  		$scope.survey = Survey.new();
  		$scope.editFlag = false;
  		$scope.editIndex = -1;
  	}

        /**
        * Type: Function
        * Name: $scope.newQuestion
        * Description: Request a new empty question from the Survey factory
        */
  	$scope.newQuestion = function(){
  		$scope.survey.questions.push(Survey.newQuestion());
  		console.log($scope.survey.questions);
  	};

        /**
        * Type: Function
        * Name: $scope.removeQuestion
        * Parameter: index {int} 
        * Description: Removes question from survey.
        */
  	$scope.removeQuestion = function(index){
  		$scope.survey.questions.splice(index, 1);
  	};


        /**
        * Type: Function
        * Name: init
        * Description: Initializes all variables & request a blank survey
        * from the Survey factory.
        */
  	var init = function() {
  		$scope.surveyList = [];
  		$scope.survey = Survey.new();
  		$scope.editFlag = false;
  		$scope.editIndex = -1;
  	};

  	init();
  });
