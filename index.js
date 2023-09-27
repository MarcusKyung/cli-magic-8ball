#!/usr/bin/env node
const fs = require('fs');
const readline = require('readline');

const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getRandomNumber() {
  return Math.floor(Math.random() * 30)+1;
}

function magicEightBall() {
  console.log("Welcome to the Magic Eight Ball!")
  
  rl.question("Ask me anything: ", (question) => {
    const responses = data.responses;
    const randomResponse = responses[getRandomNumber()];

    const responseText = Object.values(randomResponse)[0];
    console.log(`Your question: ${question}`);
    console.log(`Magic Eight Ball's answer: ${responseText}`);
    
    rl.close();
  });
}

magicEightBall();
