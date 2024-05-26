import "./App.css";
import spot_the_difference from "./assets/spot-the-difference.png";
import visual_test_example from "./assets/visual-test-example.png";
import false_positives_1 from "./assets/false-positives-1.png";
import false_positives_2 from "./assets/false-positives-2.png";
import pixel_perfect_example from "./assets/pixel-perfect-example.png";
import profile_img from "./assets/profile-img.png";
import { HiOutlineMail } from "react-icons/hi";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <div>
          <h2>What is Visual Testing?</h2>
          <div className="app__content-wrapper">
            <p>
              In today’s digital age, applications have become the backbone of
              personal connectivity and business operations worldwide. For
              individuals, apps serve as essential tools for communication,
              entertainment, health management, and education, profoundly
              impacting daily life and how we interact with the world around us.
              For businesses, applications are pivotal in driving innovation,
              streamlining operations, enhancing customer engagement, and
              opening new channels for revenue generation by enabling them to
              reach a broader audience and operate more efficiently than ever
              before.
            </p>
            <p>
              Against this backdrop, software testing is a critical practice in
              software development aimed at evaluating a program’s attributes
              and ensuring it meets the required results (Mudholkar et al.,
              2010). Effective software testing helps maintain customer trust
              protects brand reputation. It also reduces the cost of development
              by catching issues early in the lifecycle (Boehm and Basili,
              2001). Thus, as applications increasingly influence our daily
              lives and business strategies, software testing is crucial in
              delivering reliable and effective software solutions.
            </p>
            <p>
              In the rapidly evolving landscape of software development, where
              companies often release new updates frequently, and make regular
              changes and modifications to their codebase, may introduce issues
              that can disrupt the functionality of existing features and
              potentially harm the user experience. Therefore ensuring the
              visual integrity of web applications and software interfaces has
              become paramount (Memon, 2002). Visual Testing, a subset of
              software testing that focuses on identifying unintended visual
              modifications (Vesikkala, 2014), plays a critical role in
              maintaining the user experience and interface consistency across
              various platforms and devices.
            </p>
            <img className="app__image" src={visual_test_example} alt="" />
          </div>
        </div>
        <div>
          <h2>Why Can’t We Test Manually?</h2>
          <div className="app__content-wrapper">
            <p>
              Manually testing experience is similar to the one of playing
              spot-the-difference:
            </p>
            <img className="app__image" src={spot_the_difference} alt="" />
            <p>
              It sure could be fun in the beginning but think of doing the the
              same photo repeatedly every time changes are made to the
              application. To give you a better understanding of how tedious
              this processcould be in real life, the number of combinations of
              test that could be needed is:
            </p>
            <p>
              Browsers x Operating Systems x Screen Resolutions x App Screens x
              App States
            </p>
            <p>
              For this large number of combinations to be checked manually
              eveytime a commit is done, is unrealistic, it is repetitive, prone
              to mistakes, and sometimes subjective in determining failures.
            </p>
          </div>
        </div>

        <div>
          <h2>Visual Regression Testing</h2>
          <div className="app__content-wrapper">
            <p>
              Visual Regression Testing (VRT) aims at automating the tedious
              process of manual testing the visuals of the applications
              mentioned above. It aims at identifying an application’s
              presentation defects and works by identifying the changes on
              screenshots of the application commit-to-commit. It differs from
              traditional functional testing, as it aims to answer the question
              “Does our product look correct” by detecting visual bugs which are
              rendering issues, instead of “Does our product behave correctly”
              which detects behavioural issues.
            </p>

            <p>
              Some of the things that Visual Regression Testing aims are:Prevent
              Visual Bugs: Catch visual errors early before they reach your
              users. Automate UI Testing: Save time and resources by automating
              the visual inspection process. Ensure Consistency: Maintain a
              consistent look and feel across all devices and browsers.
            </p>

            <p>
              A common approach/technique used by most of VRT tools, is to take
              a screenshot of the application as it currently appears and
              compare it pixel by pixel with a screenshot from an earlier
              version, identifying any visual changes (Vesikkala, 2014; Tanno et
              al., 2020).
            </p>
            <img className="app__image" src={pixel_perfect_example} alt="" />
            <p>
              This method is known as Pixel Perfect Testing or Snapshot Testing,
              and can easily result in many false positives. Encountering false
              positives during testing can disrupt the workflow and cause
              developers to lose trust in the test system (Vesikkala, 2014).
            </p>
            <img className="app__image" src={false_positives_1} alt="" />
            <img className="app__image" src={false_positives_2} alt="" />
          </div>
        </div>
        <div>
          <h2>Participate in Our Study on Visual Regression Testing</h2>
          <div className="app__content-wrapper">
            <p>
              This survey aims to collect data on current practices in visual
              testing of applications. Your responses will help understand the
              adoption, effectiveness, and perception of Visual Regression
              Testing (VRT) tools in the industry. This survey should take
              approximately 5-10 minutes to complete. All responses will be kept
              confidential and used only for academic purposes.
            </p>
            <a
              className="app__survey-link"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDQvZhmvPtiNd-uHi3CvVMs5nEwklO71upTW1rYTIYPiboEA/viewform"
            >
              Click here to take our online survey and contribute to the study.
            </a>
            <p className="app__gratitude">
              Thank you for your time and participation!
            </p>
          </div>
        </div>
        <div className="app__profile">
          <img className="app__profile-img" src={profile_img} alt="" />
          <div className="app__profile-content">
            <p className="app__profile-name">Fabio Huang</p>
            <p className="app__profile-institution">
              MS Student at Faculdade de Engenharia da Universidade do Porto
            </p>
          </div>
          <a
            href="mailto:up201806829@fe.up.pt"
            className="app__profile-email"
          >
            <HiOutlineMail/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
