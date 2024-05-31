import "./App.css";
import spot_the_difference from "./assets/spot-the-difference.png";
import visual_test_example from "./assets/visual-test-example.png";
import false_positives_1 from "./assets/false-positives-1.png";
import false_positives_2 from "./assets/false-positives-2.png";
import pixel_perfect_example from "./assets/pixel-perfect-example.png";
import example_software_failure from "./assets/example-software-failure.png";
import playwright_vt from "./assets/playwright-VT.gif";

import SurveyPopup from "./components/SurveyPopup/SurveyPopup";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app">
      <SurveyPopup />

      <div className="app__wrapper">
        <h1>Understanding Visual Testing Practices and The Use of VRT Tools</h1>
        <Profile />

        <div>
          <h2>What is Visual Testing?</h2>
          <div className="app__content-wrapper">
            <p>
              In today’s digital age, applications have become the backbone of
              personal connectivity and business operations worldwide. For
              individuals, apps serve as essential tools for communication,
              entertainment, health management, and education, profoundly
              impacting daily life and how we interact with the world around us.
              For businesses,{" "}
              <span>
                applications are pivotal in driving innovation, streamlining
                operations, enhancing customer engagement, and opening new
                channels for revenue generation
              </span>{" "}
              by enabling them to reach a broader audience and operate more
              efficiently than ever before.
            </p>
            <p>
              Against this backdrop,{" "}
              <span>
                software testing is a critical practice in software development
                aimed at evaluating a program’s attributes and ensuring it meets
                the required results
              </span>
              . Effective software testing helps maintain customer trust and
              protect brand reputation. It also reduces the cost of development
              by catching issues early in the lifecycle. Thus, as applications
              increasingly influence our daily lives and business strategies,{" "}
              <span>
                software testing is crucial in delivering reliable and effective
                software solutions
              </span>
              .
            </p>
            <img src={example_software_failure} alt="" />

            <p>
              In the rapidly evolving landscape of software development, where
              <span>
                {" "}
                companies often release new updates frequently, and make regular
                changes and modifications to their codebase, may introduce
                issues that can disrupt the functionality of existing features
                and potentially harm the user experience
              </span>
              . Therefore ensuring the visual integrity of web applications and
              software interfaces has become paramount. Visual Testing, a subset
              of software testing that focuses on identifying unintended visual
              modifications,{" "}
              <span>
                {" "}
                plays a critical role in maintaining the user experience and
                interface consistency across various platforms and devices
              </span>
              .
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
              It sure could be fun in the beginning but think of doing this to
              the same photo repeatedly every time changes are made to the
              application. To give you a better understanding of how tedious
              this process could be in real life, the number of combinations of
              test that could be needed is:
            </p>
            <p className="app__content-combinations">
              <span>
                Browsers x Operating Systems x <br />
                Screen Resolutions x App Screens x App States
              </span>
            </p>
            <p>
              For this large number of combinations to be checked manually every
              time a commit is done, is unrealistic, it is repetitive, prone to
              mistakes, and sometimes subjective in determining failures.
            </p>
          </div>
        </div>

        <div>
          <h2>Visual Regression Testing</h2>
          <div className="app__content-wrapper">
            <p>
              Visual Regression Testing (VRT) aims at{" "}
              <span>
                automating the tedious process of manual testing the visuals of
                the applications mentioned above
              </span>
              . It aims at identifying an application’s presentation defects and
              works by{" "}
              <span>
                identifying the changes on screenshots of the application
                commit-to-commit
              </span>
              . It differs from traditional functional testing, as{" "}
              <span>
                it aims to answer the question “Does our product look correct”
                by detecting visual bugs which are rendering issues
              </span>
              , instead of “Does our product behave correctly” which detects
              behavioural issues.
            </p>
            <img src={playwright_vt} alt="" />
            <p>
              Some of the things that Visual Regression Testing aims to achieve
              are:
            </p>
            <ul>
              <li>
                <span>Prevent Visual Faults:</span> Detect visual errors early
                to prevent them from impacting your users.
              </li>
              <li>
                <span>Automated Visual Testing:</span> Save time and resources
                by automating the visual checking process.
              </li>
              <li>
                <span>Ensure Consistency:</span> Maintain a uniform appearance
                across all devices and browsers.
              </li>
            </ul>

            <p>
              A common approach/technique used by most of VRT tools, is to take
              a screenshot of the application as it currently appears and
              <span>
                {" "}
                compare it pixel by pixel with a screenshot from an earlier
                version, identifying any visual changes{" "}
              </span>
              .
            </p>
            <img className="app__image" src={pixel_perfect_example} alt="" />
            <p>
              This method is known as <span>Pixel Perfect Testing</span> or{" "}
              <span>Snapshot Testing</span>, and can easily result in many false
              positives. Encountering these false positives during testing can
              disrupt the workflow and cause developers to lose trust in the
              test system. Below are some examples of the falses positives that
              can occur in VRT:
            </p>
            <img className="app__image" src={false_positives_1} alt="" />
            <img className="app__image" src={false_positives_2} alt="" />
            <p>
              Due to these issues, companies and developers are still reluctant
              to adopt VRT tools, preferring manual testing instead. However,
              over time, new tools and techniques are being developed to reduce
              the number of false positives and increase reliability. Despite
              these advancements, the adoption of VRT tools remains low.
            </p>
            <iframe
              className="app__video"
              width="560"
              height="500"
              src="https://www.youtube.com/embed/0BzEifaoYuc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
              approximately 2-5 minutes to complete.{" "}
              <span>
                {" "}
                All responses will be kept confidential and used only for
                academic purposes.
              </span>
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
      </div>
    </div>
  );
}

export default App;
