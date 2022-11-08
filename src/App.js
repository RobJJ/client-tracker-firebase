import { Routes, Route } from "react-router-dom";
// Components
import AppLayout from "./Routes/AppLayout/AppLayout-component";
import ClientList from "./ClientList/ClientList-component";
import AddClient from "./AddClient/AddClient-component";
import Home from "./Home/Home-component";
import ActiveClient from "./ActiveClient/ActiveClient-component";
import ActiveClientNotes from "./ActiveClient/ActiveClientNotes-component";
import ActiveClientReceipts from "./ActiveClient/ActiveClientReceipts-component";
import ActiveClientDebit from "./ActiveClient/ActiveClientDebit-component";
import ActiveClientCredit from "./ActiveClient/ActiveClientCredit-component";
//
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="clientList" element={<ClientList />} />
        <Route path="clientList/:clientId" element={<ActiveClient />}>
          <Route index element={<ActiveClientNotes />} />
          <Route path="debits" element={<ActiveClientDebit />} />
          <Route path="credits" element={<ActiveClientCredit />} />
          <Route path="receipts" element={<ActiveClientReceipts />} />
        </Route>
        <Route path="addClient" element={<AddClient />} />
      </Route>
    </Routes>
  );
}

export default App;
