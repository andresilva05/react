import React, { useState, useRef } from "react";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Lixeira from "./assets/lixeira.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers)
    
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
