//from mod 
import React from 'react'
//not sure if this works
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         Im Eric. I currently live in Jefferson Wisconsin. I am a father of two daughters. We enjoy going to museums and parks. In the summer we frequent beaches and the local pool. When im not with my daughters I enjoy riding motorcycles, concerts, and sporting events.
      </p>
      </div>
    </section>
  )
}

export default About