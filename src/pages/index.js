import React from 'react';
import { Link } from 'gatsby';
import styles from "../components/index.module.css";

document.body.style = styles.body;
const IndexPage = () => (
  <div>
    <div class="ui one column centered grid container">
        <div class="row">
            <div class="ui inverted text menu">
                <a class="item" href='/projects'>🚀 Projects</a>
                <a class="item" target="_blank" href='https://unsplash.com/@valentinp'><i class="black camera icon"></i>
                    Unsplash</a>
                <a class="item" href='mailto:valentin.porcellini@gmail.com'>✉️ Mail me!</a>
            </div>
        </div>
    </div>
    <div class="ui home grid container" style={styles.ui.container}>
        <div class="middle aligned column">
            <h1 class="ui white home header">Hi 👋 I'm Valentin. I am a Software Engineering Student.</h1>
            <p class="ui white home text">I am a Visiting Student Researcher at the <a class="ui white home text"
                    target="_blank" href="http://ibdlab.kaist.ac.kr/">IBD Lab</a> (<a class="ui white home text" target="_blank"
                    href="http://kaist.edu/">KAIST</a>), in
                Daejeon, South Korea. I work on the AI for the smart-home environments and on the <i>Avatar placement</i>
                for the remote spaces.
            </p>
            <p class="ui white home text">I am finishing a Master's degrees in Software and Information Systems
                Engineering
                at the <a class="ui white home text" target="_blank" href="http://utt.fr/">University
                    of Technology of Troyes</a>, in France.</p>
            <p class="ui white home text">As I will finish my internship early March 2019, I will be available. You can
                check out my resume.</p>
            <a target="_blank" href="https://www.linkedin.com/in/valentin-porcellini/"><i class="huge inverted link linkedin icon"></i></a>
        </div>
    </div>
  </div>
)

export default IndexPage
