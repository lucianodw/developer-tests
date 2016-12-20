describe('crowdTwistApp.Survey', function() {

  var SurveyService;

  beforeEach(module('crowdTwistApp'));
  beforeEach(inject(function($injector) {
    SurveyService = $injector.get('Survey');
  }));

  it('Should return an object', function() {
    expect(true).toBe(true);
  });

});