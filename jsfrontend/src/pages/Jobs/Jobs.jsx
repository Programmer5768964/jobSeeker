<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { AiFillHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./Jobs.css";
const Jobs = () => {
  const params = useParams();
  const [jobdata, setJobdata] = useState([]);
  const [applyjob, setApplyjob] = useState(false);

  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [level_Of_Education, setLOE] = useState("");
  const [matric_marks, setMarks10] = useState("");
  const [Intermediate_marks, setMarks12] = useState("");
  const [job_experience, setJob_experience] = useState("");

  const submitInfo = async () => {
    console.log(to_name + from_name + message + phone);

    const emailContent = {
      to_name: "sujeet sharma",
      from_name: from_name,
      message: message,
      phone: phone,
      level_Of_Education: level_Of_Education,
      matric_marks: matric_marks,
      Intermediate_marks: Intermediate_marks,
      job_experience: job_experience,
    };

    const result = await emailjs.send(
      "service_cwppc19",
      "template_vuho8df",
      emailContent,
      "qyqTvA1JgKgYNrJID"
    );
    if (result) {
      console.log(result);
      // toast("Email sent successfully")
    } else {
      console.log("error has occured");
      // toast("something wents wrong")
    }
  };

  useEffect(() => {
    getJobdata();
  }, []);

  const getJobdata = async () => {
    let result = await fetch(`http://localhost:5000/job/${params.id}`);
    result = await result.json();
    console.log(result);
    if (result) {
      setJobdata(result);
    } else {
      console.log("error ocurred");
    }
  };
  const ApplyForJob = () => {
    setApplyjob(true);
  };
  return (
    <div className="job-main-container">
      {jobdata.map((datas) => (
        <div className="job-one">
          <h1>Apply here :)</h1>
          <div className="job-title">
            <h2>&nbsp;&nbsp;&nbsp;{datas.job_name}</h2>

            <h2>{datas.salary}</h2>

            <h2>{datas.job_timing}</h2>
          </div>
          <div className="button-heart">
            <button
              type="button"
              className="job-apply-button"
              onClick={ApplyForJob}
            >
              <b>Apply now</b>
            </button>
            <div className="heart-icon">
              <AiFillHeart />
            </div>
          </div>

          <div className="job-desc">
            <h3>Description :-</h3>
            <h2>&nbsp;&nbsp;&nbsp;{datas.desc}</h2>
          </div>

          <div className="job-skill">
            <h3>Skill required :-</h3>
            <h2>{datas.skill_required}</h2>
          </div>

          <div className="job-expe">
            <h3>Past Experiences :-</h3>
            <h2>{datas.experiences}</h2>
          </div>

          <div className="job-location">
            <h3>Job location :-</h3>
            <h2>{datas.job_location}</h2>
          </div>
        </div>
      ))}
      {applyjob && (
        <section className="job-apply-section">
          <b>
            <i>Applying for</i>
          </b>
          {jobdata.map((singledata) => (
            <div>
              <h3>{singledata.job_name}</h3>
            </div>
          ))}
          <div className="contact-bg">
            <div className="contactus-container">
              <input
                className="upload-signupBox"
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={(event) => setTo_name(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="email"
                name="user_email"
                placeholder="Enter email"
                onChange={(event) => setFrom_name(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="text"
                name="phone"
                placeholder="Enter phone number"
                onChange={(event) => setPhone(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="text"
                name="LOE"
                placeholder="Level Of education"
                onChange={(event) => setLOE(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="text"
                name="marks10"
                placeholder="matriculation %"
                onChange={(event) => setMarks10(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="text"
                name="marks12"
                placeholder="Intermediate %"
                onChange={(event) => setMarks12(event.target.value)}
              />
              <input
                className="upload-signupBox"
                type="text"
                name="job_experience"
                placeholder="past job experience (if any)"
                onChange={(event) => setJob_experience(event.target.value)}
              />

              <textarea
                cols="20"
                rows="5"
                className="upload-signupBox"
                type="message"
                placeholder="Write from here..."
                onChange={(event) => setMessage(event.target.value)}
              />

              <button onClick={submitInfo} className="btn3" type="button">
                Submit
              </button>

              {/* <ToastContainer/> */}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Jobs;
=======
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./Jobs.css";
const Jobs = () => {
  const params = useParams();
  const [jobdata, setJobdata] = useState([]);
  const [applyjob, setApplyjob] = useState(false);

  useEffect(() => {
    getJobdata();
  }, []);

  const getJobdata = async () => {
    let result = await fetch(`http://localhost:5000/job/${params.id}`);
    result = await result.json();
    console.log(result);
    if (result) {
      setJobdata(result);
    } else {
      console.log("error ocurred");
    }
  };
  const ApplyForJob = () => {
    setApplyjob(true);
  };
  return (
    <div className="job-main-container">
      {jobdata.map((datas) => (
        <div className="job-one">
          <h1>Apply here):</h1>
          <div className="job-title">
            <h2>&nbsp;&nbsp;&nbsp;{datas.job_name}</h2>

            <h2>{datas.salary}</h2>

            <h2>{datas.job_timing}</h2>
          </div>
          <div className="button-heart">
            <button
              type="button"
              className="job-apply-button"
              onClick={ApplyForJob}
            >
              <b>Apply now</b>
            </button>
            <div className="heart-icon">
              <AiFillHeart />
            </div>
          </div>

          <div className="job-desc">
            <h3>Description :-</h3>
            <h2>&nbsp;&nbsp;&nbsp;{datas.desc}</h2>
          </div>

          <div className="job-skill">
            <h3>Skill required :-</h3>
            <h2>{datas.skill_required}</h2>
          </div>

          <div className="job-expe">
            <h3>Past Experiences :-</h3>
            <h2>{datas.experiences}</h2>
          </div>

          <div className="job-location">
            <h3>Job location :-</h3>
            <h2>{datas.job_location}</h2>
          </div>
        </div>
      ))}
      {applyjob && (
        <section className="job-apply-section">
          <b>
            <i>Applying for</i>
          </b>
          {jobdata.map((singledata) => (
            <h3>{singledata.job_name}</h3>
          ))}
        </section>
      )}
    </div>
  );
};

export default Jobs;
>>>>>>> 3857870b87f1ef605f32b51f27ad3bfb2310ba67
