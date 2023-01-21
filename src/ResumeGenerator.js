import React from "react";
import "./ResumeGenerator.css";
import {
  changeMainDivContent,
  input_field_generator,
  experience_input_field_generator,
  education_input_field_generator,
  fillResumeTemplet,
  downloadResume,
  hidePreview,
} from "./ResumeIndex.js";

function ResumeGenerator() {
  return (
    <div>
      <div>
        <div id="resume-nav-bar" className="no-print">
          <span>
            <button
              id="personal-info-btn"
              value="personal-info-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Personal Information
            </button>
          </span>
          <span>
            <button
              id="profile-info-btn"
              value="profile-info-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Profile Information
            </button>
          </span>
          <span>
            <button
              id="skills-btn"
              value="skills-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Skills
            </button>
          </span>
          <span>
            <button
              id="experience-btn"
              value="experience-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Experience
            </button>
          </span>
          <span>
            <button
              id="education-btn"
              value="education-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Education
            </button>
          </span>
          <span>
            <button
              id="summary-btn"
              value="summary-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              Summary
            </button>
          </span>
        </div>
        <div id="resume-main-div" className="no-print">
          <div data-name="resume-internal-div" id="personal-info-container">
            <div id="personal-input-container">
              <label htmlFor="first-name">Enter your first name</label>
              <input
                type="text"
                name="first-name"
                placeholder="Enter your first name"
              />
              <br />
              <label htmlFor="about-you">About you</label>
              <input
                type="text"
                name="about-you"
                placeholder="like: Software Developer"
              />
              <br />
              <label htmlFor="city">Enter City</label>
              <input type="text" name="city" placeholder="Madurai" /> <br />
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                name="email"
                placeholder="Ex: abc@gmail.com"
              />
              <br />
              <label htmlFor="first-name">Enter your mobile number</label>
              <input
                type="number"
                name="mobile-number"
                placeholder="Ex: 7085637534"
              />
              <br />
            </div>
            <button
              value="profile-info-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              next
            </button>
          </div>

          <div
            data-name="resume-internal-div"
            id="profile-info-container"
            className="hide"
          >
            <div id="profile-input-container">
              <label htmlFor="profile-details">
                Write a short information about yourself
              </label>
              <textarea
                name="profile-details"
                cols="50"
                rows="5"
                placeholder="Enter about yourself"
              ></textarea>
              <br />
            </div>
            <button
              value="personal-info-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              back
            </button>
            <button
              value="skills-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              next
            </button>
          </div>

          <div
            data-name="resume-internal-div"
            id="skills-container"
            className="hide"
          >
            <div id="skills-input-container">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills_1"
                name="skills[]"
                placeholder="Ex: Java"
              />
              <br />
            </div>
            <input type="hidden" value="1" id="total_skills" />
            <button
              onClick={() =>
                input_field_generator("input", "skills", "Ex: Java")
              }
            >
              Add
            </button>
            <br />

            <button
              value="profile-info-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              back
            </button>
            <button
              value="experience-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              next
            </button>
          </div>

          <div
            data-name="resume-internal-div"
            id="experience-container"
            className="hide"
          >
            <div id="experience-input-container">
              <div>
                <div>
                  <label htmlFor="company-name">Company name</label>
                  <input
                    type="text"
                    name="company-name"
                    placeholder="Enter your Company name"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="job-title">Enter your job title</label>
                  <input
                    type="text"
                    name="job-title"
                    placeholder="Ex: Senior Web Developer"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="job-description">
                    Enter your job description
                  </label>
                  <input
                    name="job-description"
                    cols="50"
                    rows="5"
                    className="textarea"
                    placeholder="Enter about your Experience"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="start-date">Start date</label>
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    name="start-date"
                    placeholder="Ex: 2016"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="end-date">End date</label>
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    name="end-date"
                    placeholder="Ex: 2016"
                  />
                  <br />
                </div>
              </div>
            </div>
            <input type="hidden" value="1" id="total_experience" />
            <button onClick={() => experience_input_field_generator()}>
              Add
            </button>
            <br />

            <button
              value="skills-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              back
            </button>
            <button
              value="education-container"
              onClick={(e) => changeMainDivContent(e)}
            >
              next
            </button>
          </div>

          <div
            data-name="resume-internal-div"
            id="education-container"
            className="hide"
          >
            <div id="education-input-container">
              <div>
                <div>
                  <label htmlFor="institute-name">
                    Enter name of your institute
                  </label>
                  <input
                    type="text"
                    name="institute-name"
                    placeholder="Ex: Bannari amman institute of technology"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="institute-city">Enter the city</label>
                  <input
                    type="text"
                    name="institute-city"
                    placeholder="Ex: Sathyamangalam"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="institute-state">Enter the state</label>
                  <input
                    type="text"
                    name="institute-state"
                    placeholder="Ex: Tamilnadu"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="degree">Enter your Degree</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Ex: BE,BTech,.."
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="branch">Enter your field of study</label>
                  <input
                    type="text"
                    name="branch"
                    placeholder="Ex: ECE,CSE,.."
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="percentage">Enter your percentage</label>
                  <input type="number" name="percentage" placeholder="Ex: 95" />
                  <br />
                </div>
                <div>
                  <label htmlFor="education-start-date">
                    Start year of education
                  </label>
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    name="education-start-date"
                    placeholder="Ex: 2016"
                  />
                  <br />
                  <div>
                    <label htmlFor="education-end-date">
                      Select graducation year
                    </label>
                    <input
                      type="number"
                      min="1900"
                      max="2099"
                      step="1"
                      name="education-end-date"
                      placeholder="Ex: 2016"
                    />
                    <br />
                  </div>
                </div>

                <input type="hidden" value="1" id="total_education" />
                <button onClick={() => education_input_field_generator()}>
                  Add
                </button>
                <br />

                <button
                  value="experience-container"
                  onClick={(e) => changeMainDivContent(e)}
                >
                  back
                </button>
                <button
                  value="summary-container"
                  onClick={(e) => changeMainDivContent(e)}
                >
                  next
                </button>
              </div>
              <div
                data-name="resume-internal-div"
                id="summary-container"
                class="hide"
              >
                sdafjsadhflkjasdfhlskajdf
                </div>
            </div>
          </div>

          <div data-name="resume-templet-container">
            <div data-name="resume-templet1" className="hide">
              <div id="doc2" className="yui-t7">
                <div id="inner">
                  <div id="hd">
                    <div className="yui-gc">
                      <div className="yui-u first">
                        <h1 data-name="resumer-name"></h1>
                        <h2 data-name="resumer-about-you"></h2>
                      </div>

                      <div className="yui-u">
                        <div className="contact-info">
                          <h2 data-name="resumer-city"></h2>
                          <h3 data-name="resumer-email"></h3>
                          <h3 data-name="resumer-mobile-number"></h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="bd">
                    <div id="yui-main">
                      <div className="yui-b">
                        <div className="yui-gf">
                          <div className="yui-u first">
                            <h2>Profile</h2>
                          </div>
                          <div className="yui-u">
                            <p
                              className="enlarge"
                              data-name="resumer-profile-details"
                            ></p>
                          </div>
                        </div>

                        <div className="yui-gf">
                          <div className="yui-u first">
                            <h2>Skills</h2>
                          </div>
                          <div
                            className="yui-u"
                            data-name="resumer-skills-details"
                          ></div>
                        </div>

                        <div className="yui-gf">
                          <div className="yui-u first">
                            <h2>Experience</h2>
                          </div>

                          <div
                            className="yui-u"
                            data-name="resumer-experience-details"
                          ></div>
                        </div>

                        <div className="yui-gf">
                          <div className="yui-u first">
                            <h2>Education</h2>
                          </div>
                          <div
                            className="yui-u"
                            data-name="resumer-education-details"
                          ></div>
                        </div>

                        <div className="yui-gf last">
                          <div className="yui-u first">
                            <h2>Achievement</h2>
                          </div>
                          <div
                            className="yui-u"
                            data-name="resumer-achievements-details"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ft">
                    <p>
                      Jonathan Doe &mdash;{" "}
                      <a href="mailto:name@yourdomain.com">
                        name@yourdomain.com
                      </a>{" "}
                      &mdash; (313) - 867-5309
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={() => hidePreview()} className="no-print">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeGenerator;
