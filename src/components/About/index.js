//from mod 
import React from 'react'
//not sure if this works
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">What is E TECHNOLOGIES?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         E TECHNOLOGIES ksjdhfkjlh safkj hskjafhd asdfklj hasjklfh sdfkj halskjdhf asdkf hkasjfh sakfdj hlaskfh asnfmewn
      </p>
      </div>
    </section>
  )
}

export default About