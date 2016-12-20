# Developer Test

### Test Description
Design and develop a survey creation tool. The survey creation tool contains a form which allows users to create N number of surveys. Each survey has a title, description, the number of points a user will receive for completing the survey, and one to many questions that are part of the survey. A user can enter an arbitrary amount of questions in the survey form. The form shall validate each of these inputs and produces a JSON object containing key-value pairs of form field identifiers to their respectful values. Handling server requests is NOT necessary.

### Validation
The following rules should be enforced on the client-side, meaning that a user filling out the form should not be able to submit it (or in this case generate the JSON object) with invalid form values.
title - A string containing less than 100 characters
* pointValue - A positive integer
* description - A string containing less than 500 characters
* questions - A variable list of question objects containing titles. Survey's must contain at least one question.

### Rules
Feel free to use any framework of choice (ie. Backbone, Angular, Ember, plain Javascript) No third party libraries allowed (ie. Backbone Forms, jQuery Form Builder)
Extra Credit
Form could be pre-populated with an existing JSON object, ie. Edit mode.

### Run Application
```sh
$ npm install
$ grunt dev
```
