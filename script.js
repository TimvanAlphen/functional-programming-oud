//console.log("Hello world!");

const surveyAnswers = data
//console.log(surveyAnswers)

//console.log(surveyAnswers[0])

//console.log(surveyAnswers[3].hoeveelheidOomsEnTantes)

let kolomNaam = "schoenmaat"
let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)

console.log("Survey answers are:",lijstAntwoorden)






function getAnswersForQuestion(answers, question){
	let answersForQuestion = []
  for (answer of answers){
  	answersForQuestion.push(answer[question])
 }
	return answersForQuestion
}




//const specificAnswers = surveyAnswers.map(answer => answer[kolomNaam])

//console.log(specificAnswers)

