import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
      <p>Formed in 2015 as a nonprofit, OpenAI developed GPT-3 as one of its research projects with an aim to tackle the larger goals of promoting and developing "friendly AI" in a way that benefits humanity as a whole. The first version of GPT was released in 2018 and contained 117 million parameters. The second version of the model, GPT-2, was released in 2019 with around 1.5 billion parameters. As the latest version, GPT-3 jumps over the last model by a huge margin with over 175 billion parameters, which is more than 100 times its predecessor and ten times more than comparable programs.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people visited in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;