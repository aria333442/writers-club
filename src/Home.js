import React, { useState } from "react";
import "./home.css";
import NavBar from "../src/NavBar";
import { Modal, Button } from "react-bootstrap";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <div className="container-fluid dsa  ">
        <div className="row">
          <div className="col-md-4 ">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes{" "}
                  <span className="dsae zxe" onClick={handleShow}>
                    Read more
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col=md-4">
            <div className="sassy1 pl-4 pr-4 pt-4 pb-4">
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col=md-4">
            <div className="sassy1 pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col=md-4">
            <div className="sassy1 pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sassy pl-4 pr-4 pt-4 pb-4">
              {" "}
              <div className="row as">
                <div className="col-9">
                  <h6 className=" mb-1 rew ml-2">Title of Story</h6>
                  <p className="d-block ml-2 wer">Writer name</p>
                </div>
                <img
                  src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
                  className="dsw ml-auto"
                  alt="profile"
                ></img>
              </div>
              <div className="row sa">
                <p className="m-4 xz zx">
                  Topic sentences are similar to mini thesis statements. Like a
                  thesis statement, a topic sentence has a specific main point.
                  Whereas the thesis is the main point of the essay, the topic
                  sentence is the main point of and this is that and that is and
                  that goes <span className="dsae zxe">Read more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md">
        <div className="modal-headers">
          <div className="row">
            <img
              src="https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg"
              className="dswp ml-4 mt-1"
              alt="profile"
            ></img>
            <div className="col-6 p-0 ">
              <h6 className="mb-0 rews ml-2">Writers Name</h6>
              <p className="d-block ml-3 wers">Writer name</p>
            </div>
          </div>
        </div>
        <div className="modal-bodys">
          <div className="row">
            <img
              src="data:image/jpeg;base64,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"
              alt="modal"
              className="qsde"
            ></img>
          </div>
          <div className="row">
            <h6 className="mb-0 rewst ">Title of Story</h6>
          </div>
          <div className="row">
            <p className="d-block  werst">
              Probably the most effective way to achieve paragraph unity is to
              express the central idea of the paragraph in a topic sentence.
              <br></br>
              <br></br>
              Topic sentences are similar to mini thesis statements. Like a
              thesis statement, a topic sentence has a specific main point.
              Whereas the thesis is the main point of the essay, the topic
              sentence is the main point of the paragraph. Like the thesis
              statement, a topic sentence has a unifying function. But a thesis
              statement or topic sentence
            </p>
          </div>
          <div className="row">
            <p className="cvb">
              <FcLikePlaceholder />
            </p>
            <span className="qasda">34</span>
            <p className="cvbs">
              <FaRegComment />
            </p>
            <span className="qasda">345</span>
            <p className="cvbs">
              <VscLiveShare />
            </p>
            <span className="qasda">35</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Home;
