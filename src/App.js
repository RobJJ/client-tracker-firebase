import { Routes, Route } from "react-router-dom";
// Components
import AppLayout from "./Routes/AppLayout/AppLayout-component";
import ClientList from "./ClientList/ClientList-component";
// import DebitCredit from "./DebitCredit/DebitCredit-component";
import AddClient from "./AddClient/AddClient-component";
import Home from "./Home/Home-component";
import ActiveClient from "./ActiveClient/ActiveClient-component";
import ComplexLayout from "./ActiveClient/ComplexLayout";
import ComplexDisplay from "./ActiveClient/ComplexDisplay-component";
import ActiveClientNotes from "./ActiveClient/ActiveClientNotes-component";
import DefaultActiveDisplay from "./ActiveClient/DefaultActiveDisplay-component";
//
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="clientList" element={<ClientList />} />
        <Route path="clientList/:clientId" element={<ActiveClient />}>
          <Route index element={<DefaultActiveDisplay />} />
          <Route path=":notes" element={<ActiveClientNotes />} />
        </Route>
        <Route path="addClient" element={<AddClient />} />
      </Route>
    </Routes>
  );
}

export default App;
// <Route path="debitCredit" element={<DebitCredit />} />;
// <Route path="clientList/:clientId" element={<ActiveClient />}>
// <Route path=":navLink" element={<ComplexDisplay/>}/>
// </Route>
//
// return (
//     <Routes>
//       <Route path="/" element={<AppLayout />}>
//         <Route index element={<Home />} />
//         <Route path="clientList" element={<ClientList />} />
//         <Route path="clientList/:clientId" element={<ActiveClient />} />
//         <Route path="addClient" element={<AddClient />} />
//       </Route>
//     </Routes>
//   );
// }
