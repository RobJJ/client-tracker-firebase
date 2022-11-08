//
import { v4 as uuidv4 } from "uuid";
//
const reducer = (state, action) => {
  //
  if (action.type === "SUBMIT") {
    return {
      ...state,
      uniqueClients: state.uniqueClients + 1,
      clients: [
        ...state.clients,
        {
          ...action.payload,
          active: true,
          id: uuidv4(),
          uniqueClient: state.uniqueClients + 1,
        },
      ],
    };
  }
  //
  //
  if (action.type === "CAMS_MAGIC") {
    return {
      ...state,
      focused: { ...action.payload },
    };
  }
  //
  if (action.type === "UPDATE_FOCUS") {
    const updatedFocus = state.clients.find(
      (client) => client.id === state.focused.id
    );
    return {
      ...state,
      focused: updatedFocus,
    };
  }
  //
  if (action.type === "DEBIT_CLIENT") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          receipts: {
            ...client.receipts,
            debits: [
              ...client.receipts.debits,
              { ...action.payload.debitInfo, id: uuidv4() },
            ],
          },
          balance:
            Number(client.balance) + Number(action.payload.debitInfo.sessions),
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //
  if (action.type === "CREDIT_CLIENT") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          receipts: {
            ...client.receipts,
            credits: [
              ...client.receipts.credits,
              { ...action.payload.creditInfo, id: uuidv4() },
            ],
          },
          balance:
            Number(client.balance) - Number(action.payload.creditInfo.sessions),
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //
  if (action.type === "NOTE_CHANGE") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          notes: [action.payload.updatedNotes],
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //
  if (action.type === "TESTING") {
    // console.log("working here");

    action.payload.current.classList.remove("hidden");
    setTimeout(() => {
      action.payload.current.classList.add("hidden");
    }, 3000);
  }
  //
  if (action.type === "UPDATE_CLIENT") {
    action.payload.current.classList.remove("hidden");
    setTimeout(() => {
      action.payload.current.classList.add("hidden");
    }, 3000);
  }
  //

  return state;
};

export default reducer;

// Debit and Credit client are too similar in the way they work. Try find a way to convert that into 1 function
