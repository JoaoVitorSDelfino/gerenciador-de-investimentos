import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  const handleLogin = async () => {
    setError("");
    setEmailError("");
    setSenhaError("");
    let hasError = false;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("E-mail inválido");
      hasError = true;
    }

    if (senha.length < 8) {
      setSenhaError("A senha deve ter pelo menos 8 caracteres");
      hasError = true;
    }

    if (!email || !senha) {
      setError("Preencha todos os campos");
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await axios.get(`http://localhost:3001/investmentApi/users/getUser/${email}`);

      if (response.data.usuario) {
        const usuario = response.data.usuario;
        if (usuario.Usuario.email === email && usuario.Usuario.senha === senha) {
          alert("Login realizado com sucesso!");
          navigate("/home"); // Redirecionar para a página de dashboard ou home
        } else {
          setError("E-mail ou senha incorretos");
        }
      } else {
        setError("Usuário não encontrado");
      }
    } catch (error) {
      setError("Erro ao conectar-se à API");
    }
  };

  return (
    <C.Container>
      <C.Label>FAÇA SEU LOGIN</C.Label>
      <C.Content>
        <C.Names>E-mail:</C.Names>
        <Input
          type="email"
          placeholder="Digite o seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <C.labelError>{emailError}</C.labelError>}

        <C.Names>Senha:</C.Names>
        <Input
          type="password"
          placeholder="Digite a sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {senhaError && <C.labelError>{senhaError}</C.labelError>}

        {error && <C.labelError>{error}</C.labelError>}

        <Button Text="Entrar" onClick={handleLogin} />

        <C.LabelSignup>
          Não tem uma conta?
          <Link to="/signup">
            <C.Strong>&nbsp;Registre-se</C.Strong>
          </Link>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;