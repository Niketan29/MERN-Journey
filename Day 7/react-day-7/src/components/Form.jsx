import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      const user = { fullName, email, role, bio };

    if (fullName == "" || email == "") {
      alert("Full Name or Email can not be empty");
    } else {
      alert("User Regitered Successfully");
      console.log(user);
    }


  };

  const handleChange = (e) => {
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "bio") {
      setBio(e.target.value);
    }
    if (e.target.name === "role") {
      setRole(e.target.value);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <>
      <div id="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Enter Full Name : </label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            id="fullName"
            onChange={handleChange}
          />

          <label htmlFor="email">Enter Email : </label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={handleChange}
          />

          <select name="role" id="role" value={role} onChange={handleChange}>
            <option value="" disabled>
              Select Role
            </option>
            <option value="frontend">Front-End</option>
            <option value="backend">Back-End</option>
            <option value="fullstack">Full-Stack</option>
          </select>

          <textarea
            name="bio"
            id="bio"
            value={bio}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value="Submit" />

          <input type="button" value="Reset" onClick={handleReset} />
        </form>
      </div>
    </>
  );
};

export default Form;
