import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName === "" || email === "") {
      setError("Full name and Email are required");
      return;
    }

    setError("");

    const user = { fullName, email, role, bio };
    console.log(user);
    alert("User Registered Successfully");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") setFullName(value);
    if (name === "email") setEmail(value);
    if (name === "role") setRole(value);
    if (name === "bio") setBio(value);

    if (error) setError("");
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setRole("");
    setBio("");
    setError("");
  };

  return (
    <div className="wrapper">
      <div className="formBox">
        <h2>Register Form</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Enter Full Name :</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            id="fullName"
            onChange={handleChange}
          />

          <label htmlFor="email">Enter Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={handleChange}
          />

          <label htmlFor="role">Select Role :</label>
          <select name="role" id="role" value={role} onChange={handleChange}>
            <option value="" disabled>
              Select Role
            </option>
            <option value="frontend">Front-End</option>
            <option value="backend">Back-End</option>
            <option value="fullstack">Full-Stack</option>
          </select>

          <label htmlFor="bio">Bio :</label>
          <textarea
            name="bio"
            id="bio"
            value={bio}
            onChange={handleChange}
          ></textarea>

          {error && <p className="error">{error}</p>}

          <div className="btns">
            <input type="submit" value="Submit" />
            <input type="button" value="Reset" onClick={handleReset} />
          </div>
        </form>
      </div>

      <div className="previewBox">
        <h2>Preview</h2>

        <div className="previewCard">
          <p>
            <b>Name:</b> {fullName || "-"}
          </p>
          <p>
            <b>Email:</b> {email || "-"}
          </p>
          <p>
            <b>Role:</b> {role || "-"}
          </p>
          <p>
            <b>Bio:</b> {bio || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
