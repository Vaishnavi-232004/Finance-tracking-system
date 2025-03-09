// // SignupPage.js
// import { useCallback, useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import "./auth.css";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { registerAPI } from "../../utils/ApiRequest";
// import axios from "axios";

// const Register = () => {

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if(localStorage.getItem('user')){
//       navigate('/');
//     }
//   }, [navigate]);

//   const particlesInit = useCallback(async (engine) => {
//     // console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     // await console.log(container);
//   }, []);

//   const [values, setValues] = useState({
//     name : "",
//     email : "",
//     password : "",

//   });

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   }

//   const handleChange = (e) => {
//     setValues({...values , [e.target.name]: e.target.value});
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       const {name, email, password} = values;

//       setLoading(false);
     
//       const {data} = await axios.post(registerAPI, {
//         name,
//         email,
//         password
//       });

//       if(data.success === true){
//         delete data.user.password;
//         localStorage.setItem("user", JSON.stringify(data.user));
//         toast.success(data.message, toastOptions);
//         setLoading(true);
//         navigate("/");
//       }
//       else{
//         toast.error(data.message, toastOptions);
//         setLoading(false);
//       }
//     };

//   return (
//     <>
//     <div style={{ position: 'relative', overflow: 'hidden' }}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: '#000',
//             },
//           },
//           fpsLimit: 60,
//           particles: {
//             number: {
//               value: 200,
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//             },
//             color: {
//               value: '#0000ff',
//             },
//             shape: {
//               type: 'circle',
//             },
//             opacity: {
//               value: 0.5,
//               random: true,
//             },
//             size: {
//               value: 3,
//               random: { enable: true, minimumValue: 1 },
//             },
//             links: {
//               enable: false,
//             },
//             move: {
//               enable: true,
//               speed: 2,
//             },
//             life: {
//               duration: {
//                 sync: false,
//                 value: 3,
//               },
//               count: 0,
//               delay: {
//                 random: {
//                   enable: true,
//                   minimumValue: 0.5,
//                 },
//                 value: 1,
//               },
//             },
//           },
//           detectRetina: true,
//         }}
//         style={{
//           position: 'absolute',
//           zIndex: -1,
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />

//       <Container className="mt-5" style={{position: 'relative', zIndex: "2 !important", color:"white !important"}}>
//       <Row>
//         <h1 className="text-center">
//           <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white"}}  className="text-center" />
//         </h1>
//         <h1 className="text-center text-white">Welcome to the Financial Tracking System</h1>
//         <Col md={{ span: 6, offset: 3 }}>
//           <h2 className="text-white text-center mt-5" >Registration</h2>
//           <Form>
//             <Form.Group controlId="formBasicName" className="mt-3" >
//               <Form.Label className="text-white">Name</Form.Label>
//               <Form.Control type="text"  name="name" placeholder="Please enter your full name" value={values.name} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail" className="mt-3">
//               <Form.Label className="text-white">Email address</Form.Label>
//               <Form.Control type="email"  name="email" placeholder="Please enter your enter email" value={values.email} onChange={handleChange}/>
//             </Form.Group>
  
//             <Form.Group controlId="formBasicPassword" className="mt-3">
//               <Form.Label className="text-white">Password</Form.Label>
//               <Form.Control type="password"  name="password" placeholder="Password" value={values.password} onChange={handleChange} />
//             </Form.Group>
//             <div style={{width: "100%", display: "flex" , alignItems:"center", justifyContent:"center", flexDirection: "column"}} className="mt-4">
//               <Link to="/forgotPassword" className="text-white lnk" >Forgot Password?</Link>

//               <Button
//                   type="submit"
//                   className=" text-center mt-3 btnStyle"
//                   onClick={!loading ? handleSubmit : null}
//                   disabled={loading}
//                 >
//                   {loading ? "Registering..." : "Signup"}
//                 </Button>

//               <p className="mt-3" style={{color: "#9d9494"}}>Already have an account? <Link to="/login" className="text-white lnk" >Login</Link></p>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     <ToastContainer />
//     </Container>
//     </div>
//     </>
//   )
// }

// export default Register

import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./auth.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from "../../utils/ApiRequest";
import axios from "axios";

const Register = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/');
    }
  }, [navigate]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "" // Added confirmPassword to the state
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = values;

    // Basic Validation: Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields", toastOptions);
      return;
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
      return;
    }

    setLoading(true); // Start loading indicator
    console.log("Submitting registration:", { name, email, password });

    try {
      // Make the API request
      const { data } = await axios.post(registerAPI, { name, email, password });

      console.log("Response data:", data); // Debugging log

      if (data.success) {
        delete data.user.password; // Remove password before storing
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
        toast.success(data.message, toastOptions); // Show success message
        setLoading(false); // Stop loading
        navigate("/"); // Redirect to home page
      } else {
        toast.error(data.message, toastOptions); // Show error message
        setLoading(false); // Stop loading
      }
    } catch (error) {
      console.error("Error during registration:", error); // Detailed error log
      toast.error("Something went wrong. Please try again later.", toastOptions); // Show error toast
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#000',
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#0000ff',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 3,
                random: { enable: true, minimumValue: 1 },
              },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 2,
              },
              life: {
                duration: {
                  sync: false,
                  value: 3,
                },
                count: 0,
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                  value: 1,
                },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Container className="mt-5" style={{ position: 'relative', zIndex: "2 !important", color: "white !important" }}>
          <Row>
            <h1 className="text-center">
              <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white" }} />
            </h1>
            <h1 className="text-center text-white">Welcome to the Financial Tracking System</h1>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="text-white text-center mt-5">Registration</h2>
              <Form>
                <Form.Group controlId="formBasicName" className="mt-3">
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Please enter your full name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mt-3">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                {/* Confirm Password field */}
                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label className="text-white">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  className="mt-4"
                >
                  <Link to="/forgotPassword" className="text-white lnk">Forgot Password?</Link>
                  <Button
                    type="submit"
                    className="text-center mt-3 btnStyle"
                    onClick={!loading ? handleSubmit : null}
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Signup"}
                  </Button>
                  <p className="mt-3" style={{ color: "#9d9494" }}>
                    Already have an account? <Link to="/login" className="text-white lnk">Login</Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </>
  );
};

export default Register;


