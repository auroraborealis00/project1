import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 19, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="OpenAI is making headlines again with its latest viral use of artificial intelligence. But what is ChatGPT and how does it work??" />
        <Article imgUrl={blog03} date="Nov 12, 2022" text="Where ChatGPT thrives and fails" />
        <Article imgUrl={blog04} date="Dec 22, 2022" text="Where ethics and artificial intelligence meet" />
        <Article imgUrl={blog05} date="Jan 11, 2023" text="What are the risks and limitations of GPT-3?" />
      </div>
    </div>
  </div>
);

export default Blog;