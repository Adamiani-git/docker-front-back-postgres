import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row } from "react-bootstrap";

import axs from './components/axs'

function App() {
  const [somedata, setsomedata] = useState([]);
  const [name, setname] = useState("");
  const [value, setvalue] = useState('')

  const clearForm = useRef('')

  const getSome = ()=>{
    axs
    .get("/some")
    .then((res) => setsomedata(res.data));
  }
  useEffect(() => {
    getSome();
  }, []);

  const saveName = async (e) => {
    e.preventDefault()
    await axs.post(`/some`, [name])
    getSome()
    clearForm.current.value =''
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

          <Form>
            <Form.Control
              type="text"
              placeholder="Name"
              defaultValue={value}
              ref={clearForm}
              onChange={(e) => setname(e.target.value)}
            />
            <Button variant="success" onClick={saveName}>
              შენახვა
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default App;
