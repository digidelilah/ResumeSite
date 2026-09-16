// About.jsx
import { useNavigate } from "react-router-dom";
import "./App.css";

function About() {
  const navigate = useNavigate();
  return (
    <div className="AboutMePage">
      <h1 className="AboutMeTitle">About Me</h1>
      <button className="homeBtn" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="AboutMeText">
        <h2>Who is Brynn?</h2>
        <p>
          My name is Brynn landry, I wasn't always interested in coding. For the
          most of my life I though I would do something ... more hands on. I
          went into hair in 2016, it was fun and I did enjoy talking with my
          clients and making them feel better than they walked in. But there was
          no upward motion, no growth, no challenges. I was quick and efficent
          and my clients appreciated that. So when covid hit and I was forced
          not to work I had some time to try new things. Like the IT course on
          Coursera. This was better, a challenge, a puzzle, a problem to solve.
          I was invested. I wanted to learn more. I wanted to be better, faster.
          So after switching to more computer focused work like at Service
          Canada, I took the biggest jump I could in 2024 and went back to
          school. I am currently enrolled in the Computer Programming and
          Analysis program at St Lawrence College. I am learning so much and I
          am excited to see where this path takes me. And maybe it will be with
          you. Yes! you, you who is reading this. I would love to work with you
          and your team. I am a hard worker, a fast learner, and I am always
          looking for ways to improve myself and my skills. I don't know the
          exact feild I want to be in yet but I am willing to try give anything
          I do my maximum effort!
        </p>
      </div>
    </div>
  );
}

export default About;
