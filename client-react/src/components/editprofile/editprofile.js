import React, { useState } from "react";

export function Editprofile(props) {
  const [AboutMe, setAboutMe] = useState("");
  const [Username, setUsername] = useState("");
  const [FirstName, setFirstName] = useState("");

  function onEditProfile(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onEditProfile}>
      <div className="edit-profile">
        <div className="col-xl-12">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Edit profile and settings</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* About me input */}
              <form>
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <textarea
                      rows={4}
                      className="form-control form-control-alternative"
                      placeholder="A few words about you ... (140 characters or less)"
                      onChange={(e) => setAboutMe(e.target.value)}
                      value={AboutMe}
                    />
                  </div>
                </div>
                {/* About me input */}
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                  <div className="row">
                    {/* Username input */}
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
                          onChange={(e) => setUsername(e.target.value)}
                          value={Username}
                        />
                      </div>
                    </div>
                    {/* Username input */}
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
                    {/* First Name input */}
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
                          onChange={(e) => setFirstName(e.target.value)}
                          value={FirstName}
                        />
                      </div>
                    </div>
                    {/* First Name input */}
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
                      {/* Password */}
                      {/* Profile edits submit button */}
                      <button
                        className="btn btn-sm btn-default float-right"
                        type="submit"
                      >
                        Submit
                      </button>
                      {/* Profile edits submit button */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
