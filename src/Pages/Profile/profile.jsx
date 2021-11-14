import React from "react";
import axios from "axios";
import "./profile.css";
import Sidebar from "../../Components/Sidebar/sidebar";
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //UNCOMMENT the appropriate url for the backend framework

    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3000/tasks";
    axios.get(url).then((response) => this.setState({ tasks: response.data }));
  };

  addTask = () => {
    //uncomment and update url to appropriate url for backend connection
    let url = "http://localhost:3000/tasks";
    axios.post(url, { name: this.taskName.current.value }).then((response) => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD
  state = {
    editprofile: false,
    changeprofilepic: false,
  };
  render() {
    var Handlechange = (hc) => {
      this.setState({ editprofile: !this.state.editprofile });
    };
    var Propicchange = (ppc) => {
      this.setState({ changeprofilepic: !this.state.changeprofilepic });
    };
    const x = this.state.editprofile;
    const y = this.state.changeprofilepic;
    return (
      
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <div className="main-content">
                     
          {/* Header */}
          <div
            className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            style={{
              minHeight: "600px",
              backgroundImage:
                "url(https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/24/2018/10/474428695_6031467734001_6031148934001-vs.jpg&w=1280&h=720&q=90&c=cc)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            {/* Mask */}
            <span className="mask bg-gradient-default opacity-8" />
            {/* Header container */}
            <div className="container-fluid d-flex align-items-center">
              <div className="row">
                <div className="col-lg-7 col-md-10">
                  <h1 className="display-2 text-white">Hello FirstName</h1>
                  <p className="text-white mt-0 mb-5">
                    Welcome to WriteHereWriteNow!
                  </p>
                  <div>
                      <a href="/">
                    <button className="btn btn-info">Homepage</button>
                    </a>
                  </div>
                  <div>
                    <button className="btn btn-info" onClick={Handlechange}>
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page content */}
          <div className="container-fluid mt--7">
            <div className="row">
              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        {/* picture uploaded enters below */}
                        <img
                          src="https://i.pinimg.com/originals/b2/2c/0a/b22c0a139a3b32fe14db5ef85e3eb64f.jpg"
                          className="rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      {/* Connect pops up, and edit photo disapears when being viewed by follower
                        <button href="#" className="btn btn-sm btn-info mr-4">Connect</button> */}
                      <button
                        href="#"
                        className="btn btn-sm btn-default float-right"
                        onClick={Propicchange}
                      >
                        Edit photo
                      </button>
                    </div>
                  </div>
                  <div className="card-body pt-0 pt-md-4">
                    <hr className="my-4" />
                    <hr className="my-4" />
                    {
                      y && (
                        <div>
                        <form className="btn btn-sm btn-default float-right" action="/action_page.php">
                          <input
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                          />
                          <input type="submit" />
                        </form>
                      </div>
                  
                            )
                    }
                    
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">00</span>
                            <span className="description">Write Hands</span>
                          </div>
                          <div>
                            <span className="heading">00</span>
                            <span className="description">Posts</span>
                          </div>
                          <div>
                            <span className="heading">00</span>
                            <span className="description">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3>Username Pulled from DB</h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        Location tracked by location services
                      </div>
                      <hr className="my-4" />
                      <h3>A little about me</h3>
                      <p>Input from about me ends up here</p>
                    </div>
                  </div>
                </div>
              </div>
              {x && (
                <div className="col-xl-8 order-xl-1">
                  <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0">Edit profile and settings</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form>
                        {/* About me input */}
                        <h6 className="heading-small text-muted mb-4">
                          About me
                        </h6>
                        <div className="pl-lg-4">
                          <div className="form-group focused">
                            <textarea
                              rows={4}
                              className="form-control form-control-alternative"
                              placeholder="A few words about you ... (140 characters or less)"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  id="input-username"
                                  className="form-control form-control-alternative"
                                  placeholder="Express yourself"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  id="input-email"
                                  className="form-control form-control-alternative"
                                  placeholder="youremail@example.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  id="input-first-name"
                                  className="form-control form-control-alternative"
                                  placeholder="First name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  id="input-last-name"
                                  className="form-control form-control-alternative"
                                  placeholder="Last name"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        {/* password */}
                        <h6 className="heading-small text-muted mb-4">
                          Update Password
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-password"
                                >
                                  Old Password
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  type="text"
                                />
                              </div>
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-password"
                                >
                                  New Password
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  placeholder="Must contain 8-15 characters"
                                  type="text"
                                />
                              </div>
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-password"
                                >
                                  Confirm New Password
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  placeholder="Must contain 8-15 characters"
                                  type="text"
                                />
                              </div>
                              <button
                                className="btn btn-sm btn-default float-right"
                                onClick={Handlechange}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {/* posts div */}
              <div className="col-xl-8 order-xl-1">
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="mb-0">Write here:</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                  <div class="widget-post" aria-labelledby="post-header-title">
                    <div>
                        <h2>
                          Create New Blog Post
                        </h2>
                      </div>
                      <form>
                      <div>
                        <h3>Title</h3>
                        <textarea rows="1"></textarea>
                        </div>
                        <h3>Content</h3>
                        <div>
                        <textarea rows="10"></textarea>
                        </div>
                        <div>
                          <div>
                            <input type="file" accept="image/*" multiple/>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-default float-right">publish</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* posts div */}
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default Task;