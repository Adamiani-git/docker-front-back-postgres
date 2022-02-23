import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row } from "react-bootstrap";

import axs from "./components/axs";

function App() {
  const [somedata, setsomedata] = useState([]);
  const [name, setname] = useState(null);
  const [userName, setuserName] = useState(null);
  const [userPass, setuserPass] = useState(null);
  const [value, setvalue] = useState("");

  const clearName = useRef(null);
  const clearUserName = useRef(null);
  const clearUserPass = useRef(null);

  const getSome = () => {
    axs.get("/some").then((res) => setsomedata(res.data));
  };
  useEffect(() => {
    getSome();
  }, []);
  const formData = {
    name,
    userName,
    userPass,
  };

  const saveName = async (e) => {
    e.preventDefault();

    const res = await axs.post(`/some`, formData);
    if (res.data.code == 23505) {
      alert(res.data.body)
    }else if (res.data.code == 23502) {
      alert(res.data.body)
    }else{
    getSome();
    clearName.current.value = "";
    clearUserName.current.value = "";
    clearUserPass.current.value = "";
    setname(null);
    setuserName(null);
    setuserPass(null);
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <ul>
            {somedata.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>

          <Form onSubmit={saveName}>
            <Form.Control
              type="text"
              placeholder="Name"
              defaultValue={value}
              ref={clearName}
              required={true}
              onChange={(e) => setname(e.target.value)}
              // onInvalid="this.setCustomValidity('Enter Name Here')"
              // onInput="this.setCustomValidity('')"
            />
            <Form.Control
              type="text"
              placeholder="User Name"
              // defaultValue={value}
              ref={clearUserName}
              required={true}
              onChange={(e) => setuserName(e.target.value)}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              // defaultValue={value}
              ref={clearUserPass}
              required={true}
              onChange={(e) => setuserPass(e.target.value)}
            />
            <Button variant="success" type="submit">
              შენახვა
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default App;
