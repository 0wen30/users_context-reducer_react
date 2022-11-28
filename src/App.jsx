import "./App.css";
import ListUsers from "./components/ListUsers.jsx";
import UserState from "./context/UserState";
import FormUser from "./components/FormUser.jsx";

function App() {
  return (
    <>
      <UserState>
        <FormUser />
        <ListUsers />
      </UserState>
    </>
  );
}

export default App;