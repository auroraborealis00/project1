import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 Chatbot has several uses, including language translation, modeling, and producing text for chatbots and other applications. The model can produce text that sounds like human speech and has 175 billion parameters, making it one of the most sophisticated language-processing AIs available today" />
      <Feature title="Knowledgebase" text="Let's say that your knowledge base is structured in articles. An user makes a certain request. A human will combine information from two or more articles to formulate the correct response. GPT-3 can do that, but not using your knowledge base. If you fine-tune a model, the response from it may not be the desired one. The alternative would be to use embeddings, but in this case it is very likely to use a single article to formulate the response, which is not as great as a human response." />
      <Feature title="Education" text="GPT-3 can be used to solve many problems in the education sector. It can help improve education by improving the quality of teachers, students and content." />
    </div>
  </div>
);

export default WhatGPT3;