import React from 'react';

const Register = () => (
  <form class="panel register">
    <div className="content-container panel__content">
      <h1>Register</h1>
      <div className="input-group">
        <label>first name</label>
        <input type="text" className="input-text" placeholder="first name" />
      </div>
      <div className="input-group">
        <label>last name</label>
        <input type="text" className="input-text" placeholder="last name" />
      </div>
    </div>
    <div className="input-group">
        <label>email</label>
        <input type="text" className="input-text" placeholder="email" />
      </div>
    </div>
  </form>
);

export default Register;
