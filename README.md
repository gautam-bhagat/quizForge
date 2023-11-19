# Quiz Forge

This Node.js application generates question papers based on a predefined set of questions and difficulty distribution.

```

💡 {“What is the speed of light”, “Physics”, “Waves”, “Easy”, 5}

```

The Question paper Generator should look for questions in the Question Store and then generate the question paper based on the total marks and the distribution of marks based on *Difficulty*

**Example**

Assume the below requirement for a question paper:

> (100 marks, Difficulty, {20% Easy, 50% Medium, 30% Hard })
> 

The problem statement here is that you need to generate a question paper of 100 marks total of which 20% (ie, 20 marks) worth of questions should have the *Difficulty*=Easy, 50% having *Difficulty*=Medium and 30% having *Difficulty*=Hard
## Features

- Generates question papers based on specified marks and difficulty percentages.
- Utilizes a structured question bank with various subjects and topics.
- Easily customizable for adding, modifying, or removing questions.

## Deployed Version
https://quiz-forge.vercel.app/

## Requirements

- Node.js installed on your machine

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/quizForge.git
```
2. Navigate to project directory
```
cd quizForge
```
4. Install Dependencies
```
npm install
```
5. Run the application
```
nodemon | node index.js 
```
## Working
URL : 
```javascript
http://localhost:${port}/get
```
Request Body
```
{
  "totalMarks" : "100",
  "easy": "20", 
  "medium": "50", 
  "hard": "30" 
}
```



Request Response
```
{
  "totalQuestions": 88,
  "totalMarks": "100",
  "difficultyDistribution": {
    "easy": "20",
    "medium": "50",
    "hard": "30"
  },
  "generatedQuestionPaper": [
    {
      "question": "Name the national animal of India.",
      "subject": "General Knowledge",
      "topic": "Indian Symbols",
      "difficulty": "Easy",
      "marks": 3
    },
    {
      "question": "What is the largest bone in the human body?",
      "subject": "Biology",
      "topic": "Anatomy",
      "difficulty": "Hard",
      "marks": 6
    },
    //... more questions
  ]
}
```
