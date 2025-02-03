import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailConfError, setEmailConfError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  const handleSignup = async () => {
    setError("");
    setEmailError("");
    setEmailConfError("");
    setSenhaError("");
    let hasError = false;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("E-mail inválido");
      hasError = true;
    }

    if (email !== emailConf) {
      setEmailConfError("Os e-mails não são iguais");
      hasError = true;
    }

    if (senha.length < 8) {
      setSenhaError("A senha deve ter pelo menos 8 caracteres");
      hasError = true;
    }

    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      hasError = true;
    }

    if (hasError) return;

    try {
      const usuarioCriado = {
        email,
        senha,
      }

      const response = await axios.post("http://localhost:3001/investmentApi/users/addUser", usuarioCriado)

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigate("/signin");
      } else {
        setError("Erro ao cadastrar usuário");
      }
    } catch (error) {
      setError("Erro ao conectar-se à API");
    }
  };

  return (
    <C.Container>
      <C.Label>FAÇA SEU CADASTRO</C.Label>
      <C.Content>
        <C.Names>E-mail:</C.Names>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <C.labelError>{emailError}</C.labelError>}

        <C.Names>Confirmação:</C.Names>
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => setEmailConf(e.target.value)}
        />
        {emailConfError && <C.labelError>{emailConfError}</C.labelError>}

        <C.Names>Senha:</C.Names>
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {senhaError && <C.labelError>{senhaError}</C.labelError>}

        {error && <C.labelError>{error}</C.labelError>}

        <Button Text="Inscrever-se" onClick={handleSignup} />

        <C.LabelSignin>
          Já tem uma conta?
          <Link to="/signin">
            <C.Strong>&nbsp;Entre</C.Strong>
          </Link>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;