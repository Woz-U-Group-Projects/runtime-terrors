import React from "react";
import axios from "axios";
import '../task.min.css';
import '../profile.css';
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
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  addTask = () => {
    //uncomment and update url to appropriate url for backend connection
    let url = "http://localhost:3000/tasks";
    axios.post(url, { name: this.taskName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD

    render() {
      return (
        <div>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
          <div className="main-content">
            {/* Top navbar */}
            <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
              <div className="container-fluid">
                {/* Form */}
                <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                  <div className="form-group mb-0">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-search" /></span>
                      </div>
                      <input className="form-control" placeholder="Search" type="text" />
                    </div>
                  </div>
                </form>
                {/* User */}
                <ul className="navbar-nav align-items-center d-none d-md-flex">
                  <li className="nav-item dropdown">
                    <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="media align-items-center">
                        <span className="avatar avatar-sm rounded-circle">
                          <img alt="Image placeholder" src="https://i.pinimg.com/originals/b2/2c/0a/b22c0a139a3b32fe14db5ef85e3eb64f.jpg" className="rounded-circle" />
                        </span>
                        <div className="media-body ml-2 d-none d-lg-block">
                          <span className="mb-0 text-sm  font-weight-bold">Runtime Terror</span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                      <div className=" dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome!</h6>
                      </div>
                      <a href="#" className="dropdown-item">
                        <i className="ni ni-single-02" />
                        <span>My profile</span>
                      </a>
                      <a href="../examples/profile.html" className="dropdown-item">
                        <i className="ni ni-settings-gear-65" />
                        <span>Settings</span>
                      </a>
                      <a href="../examples/profile.html" className="dropdown-item">
                        <i className="ni ni-calendar-grid-58" />
                        <span>Activity</span>
                      </a>
                      <a href="../examples/profile.html" className="dropdown-item">
                        <i className="ni ni-support-16" />
                        <span>Support</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a href="#!" className="dropdown-item">
                        <i className="ni ni-user-run" />
                        <span>Logout</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Header */}
            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: '600px', backgroundImage: 'url(https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/24/2018/10/474428695_6031467734001_6031148934001-vs.jpg&w=1280&h=720&q=90&c=cc)', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
              {/* Mask */}
              <span className="mask bg-gradient-default opacity-8" />
              {/* Header container */}
              <div className="container-fluid d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello FirstName</h1>
                    <p className="text-white mt-0 mb-5">Welcome to WriteHereWriteNow!</p>
                    <a href="#!" className="btn btn-info">Edit profile</a>
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
                          <a href="#">
                            <img src="https://i.pinimg.com/originals/b2/2c/0a/b22c0a139a3b32fe14db5ef85e3eb64f.jpg" className="rounded-circle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                        <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                      </div>
                    </div>
                    <div className="card-body pt-0 pt-md-4">
                      <div className="row">
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                            <div>
                              <span className="heading">00</span>
                              <span className="description">Friends</span>
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
                        <h3>
                          Username Pulled from DB
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />Location tracked by location services
                        </div>
                        <hr className="my-4" />
                        <h3>
                          A little about me
                        </h3>
                        <p>Input from about me ends up here</p>
                        <a href="#">Show more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 order-xl-1">
                  <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0">Edit profile and settings</h3>
                        </div>
                        <div className="col-4 text-right">
                          <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form>
                        {/* About me input */}
                        <h6 className="heading-small text-muted mb-4">About me</h6>
                        <div className="pl-lg-4">
                          <div className="form-group focused">
                            <textarea rows={4} className="form-control form-control-alternative" placeholder="A few words about you ..." defaultValue={""} />
                          </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">User information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-username">Username</label>
                                <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" defaultValue="runtime.terrors" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">Email address</label>
                                <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="youremail@example.com" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-first-name">First name</label>
                                <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" defaultValue="Runtime" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                                <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" defaultValue="Errors" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        {/* password */}
                        <h6 className="heading-small text-muted mb-4">Update Password</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-password">New Password</label>
                                <input id="input-address" className="form-control form-control-alternative" placeholder="Must contain 8-15 characters" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
          </footer>
        </div>
      );
    }
  };

export default Task;
