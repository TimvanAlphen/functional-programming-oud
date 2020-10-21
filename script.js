//console.log("Hello world!");

const surveyAnswers = data
console.log(surveyAnswers)

console.log(surveyAnswers[0])

console.log(surveyAnswers[3].hoeveelheidOomsEnTantes)

let belangrijksteOnderwerpen = []

for (answer in surveyAnswers){
	console.log(surveyAnswers[answer].belangrijksteOnderwerpVanDezeTijd)
}
