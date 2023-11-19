const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;

//Question DB
const questionStore = require("./store");

app.get('/',(req,res)=>{
  res.send("Reelo Coding Assignment : Backend Developer")
});


app.get("/get",  (req, res) => {

  let { totalMarks, easy, medium, hard } = req.body;
  let difficultyDistribution = { easy, medium, hard };

  
  let generatedQuestionPaper =  generateQuestionPaper(
    totalMarks,
    difficultyDistribution
  );

  //Shuffling the array
  generatedQuestionPaper = generatedQuestionPaper
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const totalQuestions = generatedQuestionPaper.length

  res.status(200).json({ totalQuestions ,totalMarks,difficultyDistribution ,generatedQuestionPaper });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// Function to generate a question paper based on total marks and difficulty distribution
function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];
  const totalQuestions = questionStore.length;

  // Calculate the number of questions needed for each difficulty level
  const easyCount = Math.floor(
    totalMarks * (difficultyDistribution.easy / 100)
  );
  const mediumCount = Math.floor(
    totalMarks * (difficultyDistribution.medium / 100)
  );
  const hardCount = totalMarks - (easyCount + mediumCount);

  // Function to filter questions based on difficulty
  function filterQuestions(difficulty, count) {
    const filteredQuestions = questionStore.filter(
      (question) => question.difficulty === difficulty
    );
    const selectedQuestions = filteredQuestions.slice(
      0,
      Math.min(count, filteredQuestions.length)
    );
    return selectedQuestions;
  }

  // Add questions to the question paper based on the calculated counts
  questionPaper.push(...filterQuestions("Easy", easyCount));
  questionPaper.push(...filterQuestions("Medium", mediumCount));
  questionPaper.push(...filterQuestions("Hard", hardCount));

  return questionPaper;
}

// Example usage: Generating a question paper of 100 marks with difficulty distribution
// const totalMarks = 100;
// const difficultyDistribution = { easy: 20, medium: 50, hard: 30 };
