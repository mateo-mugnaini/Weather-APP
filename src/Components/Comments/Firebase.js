// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/compat/analytics";

// const firebaseConfig = {

//   apiKey: "AIzaSyCVSUBNxu-IwvHd_S5_fB9Peilac3PxFIU",
//   authDomain: "weatherapp-mateomugnaini.firebaseapp.com",
//   projectId: "weatherapp-mateomugnaini",
//   storageBucket: "weatherapp-mateomugnaini.appspot.com",
//   messagingSenderId: "176323383734",
//   appId: "1:176323383734:web:be3f8b9a1a69bcde8cb117",
//   measurementId: "G-CVNWEPB644",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default { app, analytics };

import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVSUBNxu-IwvHd_S5_fB9Peilac3PxFIU",
  authDomain: "weatherapp-mateomugnaini.firebaseapp.com",
  projectId: "weatherapp-mateomugnaini",
  storageBucket: "weatherapp-mateomugnaini.appspot.com",
  messagingSenderId: "176323383734",
  appId: "1:176323383734:web:9f1353221b91a5478cb117",
  measurementId: "G-JK2F8WQQ3V",
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export { app, analytics };
