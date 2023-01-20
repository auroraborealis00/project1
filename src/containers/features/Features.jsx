import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'What can GPT-3 do?',
    text: 'Natural language processing includes as one of its major components natural language generation, which focuses on generating human language natural text. However, generating human understandable content is a challenge for machines that do not really know the complexities and nuances of language. Using text on the internet, GPT-3 is trained to generate realistic human text. GPT-3 has been used to create articles, poetry, stories, news reports and dialogue using just a small amount of input text that can be used to produce large amounts of quality copy. GPT-3 is also being used for automated conversational tasks, responding to any text that a person types into the computer with a new piece of text appropriate to the context. GPT-3 can create anything with a text structure, and not just human language text. It can also automatically generate text summarizations and even programming code.',
  },
  {
    title: 'GPT-3 examples',
    text: 'As a result of its powerful text generation capabilities, GPT-3 can be used in a wide range of ways. GPT-3 is used to generate creative writing such as blog posts, advertising copy, and even poetry that mimics the style of Shakespeare, Edgar Allen Poe and other famous authors.Using only a few snippets of example code text, GPT-3 can create workable code that can be run without error, as programming code is just a form of text. GPT-3 has also been used to powerful effect to mock up websites. Using just a bit of suggested text, one developer has combined the UI prototyping tool Figma with GPT-3 to create websites just by describing them in a sentence or two. GPT-3 has even been used to clone websites by providing a URL as suggested text. Developers are using GPT-3 in several ways, from generating code snippets, regular expressions, plots and charts from text descriptions, Excel functions and other development applications.GPT-3 is also being used in the gaming world to create realistic chat dialog, quizzes, images and other graphics based on text suggestions. GPT-3 can generate memes, recipes and comic strips, as well.',
  },
  {
    title: 'How does GPT-3 work?',
    text: 'GPT-3 is a language prediction model. This means that it has a neural network machine learning model that can take input text as an input and transform it into what it predicts the most useful result will be. This is accomplished by training the system on the vast body of internet text to spot patterns. More specifically, GPT-3 is the third version of a model that is focused on text generation based on being pre-trained on a huge amount of text.When a user provides text input, the system analyzes the language and uses a text predictor to create the most likely output. Even without much additional tuning or training, the model generates high-quality output text that feels similar to what humans would produce.',
  },
  {
    title: 'What are the benefits of GPT-3?',
    text: 'Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution. There are many situations where it is not practical or efficient to have a human on hand to generate text output, or there might be a need for automatic text generation that seems human. For example, customer service centers can use GPT-3 to answer customer questions or support chatbots; sales teams can use it to connect with potential customers; and marketing teams can write copy using GPT-3.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request an Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;