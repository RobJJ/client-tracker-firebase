import React, {
  useContext,
  useState,
  useReducer,
  useRef,
  useEffect,
} from "react";
import reducer from "./Reducer";
// import { clientData } from "../Data/ClientData";
import ClientDataService from "../Firebase/firebase-services.js";
import {
  logGoogleUser,
  onAuthStateChangedListener,
} from "../Firebase/Firebase-config.js";

//
//
const AppContext = React.createContext();
//
// Initial State for Reducer
// const initialState = {
//   // Stars as an empty array -> could hook in here at login
//   clients: clientData,
//   // loading: false,
//   focused: {},
//   uniqueClients: 0,
// };
// Old template
// const clientTemplate = {
//   name: "",
//   email: "",
//   contact: "",
//   id: "",
//   uniqueClient: 0,
//   active: false,
//   notes: [],
//   receipts: { debits: [], credits: [] },
//   balance: 0,
// };
// TEMPLATES TO USE
const clientTemplate = {
  name: "",
  joined: "",
  debits: [],
  credits: [],
  notes: [],
};
// Default Template for Debit and Credit Info
const debitTemplate = {
  date: "",
  id: "",
  amount: "",
  sessions: 0,
  note: "",
};
const creditTemplate = {
  date: "",
  id: "",
  sessions: 0,
  note: "",
};
//
const AppProvider = ({ children }) => {
  // State varibales go here -
  const [state, dispatch] = useReducer(reducer, []);
  const [newClientInfo, setNewClientInfo] = useState(clientTemplate);
  const [debitInfo, setDebitInfo] = useState(debitTemplate);
  const [creditInfo, setCreditInfo] = useState(creditTemplate);
  const [updatedNotes, setUpdatedNotes] = useState("");
  const [userInSession, setUserInSession] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [clients, setClients] = useState(null);
  //
  const ref = useRef();
  const clientUpdated = useRef();
  // Functions to handle state actions -
  //
  // Auth Listerner !!
  useEffect(() => {
    // Passing the callback to the listener - calls unsub on unmount - cleans up the function on the listener
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        ClientDataService.createUserDocFromAuth(user);
        getAllUsersClients(user.uid);
      } else {
        // setClients([]);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  // To add a new Client
  const submitNewClient = async (e) => {
    e.preventDefault();
    // dispatch({ type: "TESTING", payload: ref });
    // dispatch({ type: "SUBMIT", payload: newClientInfo });
    const dateJoined = new Date().toISOString().slice(0, 10);

    await ClientDataService.addClient({ ...newClientInfo, joined: dateJoined });
    setClients([...clients, newClientInfo]);
    setNewClientInfo(clientTemplate);
  };
  // To add a receipt - debit to client
  const addDebitToClient = (e) => {
    e.preventDefault();
    //
    dispatch({ type: "UPDATE_CLIENT", payload: clientUpdated });
    dispatch({ type: "DEBIT_CLIENT", payload: { debitInfo } });
    dispatch({ type: "UPDATE_FOCUS" });
    setDebitInfo(debitTemplate);
  };
  // To add a recipet - credit to client
  const addCreditToClient = (e) => {
    e.preventDefault();
    //
    dispatch({ type: "UPDATE_CLIENT", payload: clientUpdated });

    dispatch({ type: "CREDIT_CLIENT", payload: { creditInfo } });
    dispatch({ type: "UPDATE_FOCUS" });
    setCreditInfo(creditTemplate);
  };
  //
  const handleNoteChange = (e) => {
    e.preventDefault();
    //
    dispatch({ type: "UPDATE_CLIENT", payload: clientUpdated });

    dispatch({ type: "NOTE_CHANGE", payload: { updatedNotes } });
    dispatch({ type: "UPDATE_FOCUS" });
  };
  ////////////////////////////////////////////
  // NEW METHODS MADE FOR FIREBASE INTERGRATION
  ////////////////////////////////////////////
  const handleLogIn = async () => {
    await logGoogleUser();
    setUserInSession(true);
  };
  const handleLogOut = async () => {};
  //
  const getAllUsersClients = async (userId) => {
    const data = await ClientDataService.getAllUsersClients(userId);
    // use the auto generaged uid and store within the doc itself
    const clientsArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setClients(clientsArr);
  };
  //Return statement
  return (
    <AppContext.Provider
      value={{
        //Object of shared properties for App
        ...state,
        newClientInfo,
        setNewClientInfo,
        submitNewClient,
        debitInfo,
        setDebitInfo,
        creditInfo,
        setCreditInfo,
        dispatch,
        addDebitToClient,
        addCreditToClient,
        updatedNotes,
        setUpdatedNotes,
        handleNoteChange,
        ref,
        clientUpdated,
        userInSession,
        setUserInSession,
        handleLogIn,
        clients,
        setClients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//
// Create custom hook for called context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
