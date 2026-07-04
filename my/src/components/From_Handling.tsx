// import React, { useState } from "react";

// // A functional React component that handles a simple form.
// const From_Handling = () => {
//   // useState creates state variables and setter functions.
//   // name is initialized with "Rishi".
//   const [name, setName] = useState("Rishi");
//   // email is initialized as an empty string.
//   const [email, setEmail] = useState("");
//   // password is initialized as an empty string.
//   const [password, setPassword] = useState("");

//   // handleSubmit is called when the form is submitted.
//   // e: React.FormEvent<HTMLFormElement> types the event object for a form submit.
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     // preventDefault stops the browser from reloading the page on submit.
//     e.preventDefault();
//     // Log the current form values to the console.
//     console.log({ name, email, password });
//   };

//   return (
//     <>
//       {/* The form element listens for the submit event */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           {/*
//             value={name} binds the input value to the name state.
//             onChange receives each keystroke event and updates state.
//             e.target.value reads the current text from the input.
//           */}
//         </div>
//         <br />
//         <div>
//           Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           {/* input type="email" gives email-specific input behavior */}
//         </div>
//         <br />
//         <div>
//           password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           {/* input type="password" hides typed characters */}
//         </div>
//         <br />
//         <div>
//           <input type="submit" value="Submit" />
//           {/* Submit button sends the form to handleSubmit instead of reloading the page */}
//         </div>
//       </form>
//     </>
//   );
// };

// export default From_Handling;

//What is multiple input in form handling//

import React, { useState } from "react";

//  A functional React component that handles a simple form.
const From_Handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const chnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // handleSubmit is called when the form is submitted.
  // e: React.FormEvent<HTMLFormElement> types the event object for a form submit.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // preventDefault stops the browser from reloading the page on submit.
    e.preventDefault();
    // Log the current form values to the console.
    console.log(formData);
  };

  return (
    <>
      {/* The form element listens for the submit event */}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input onChange={chnageHandler} name = "name" type="text" value={formData.name} />
          {/*
            value={name} binds the input value to the name state.
            onChange receives each keystroke event and updates state.
            e.target.value reads the current text from the input.       */}
        </div>{" "}
        <br />
        <div>
          Email: <input onChange={chnageHandler} name = "email" type="email" value={formData.email} />
          {/* input type="email" gives email-specific input behavior */}
        </div>
        <br />
        <div>
          password: <input onChange={chnageHandler} name = "password" type="password" value={formData.password} />
          {/* input type="password" hides typed characters */}
        </div>
        <br />
        <div>
          phone: <input onChange={chnageHandler} name = "phone" type="number" value={formData.phone} />
          {/* input type="tel" gives telephone-specific input behavior */}
        </div>
        <br />{" "}
        <div>
          <input type="submit" value="Submit" />
          {/* Submit button sends the form to handleSubmit instead of reloading the page */}
        </div>
      </form>
    </>
  );
};
export default From_Handling;
