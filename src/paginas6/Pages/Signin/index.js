import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as C from "./styles";
import { Link } from "react-router-dom"; // Importe o Link

const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  useEffect(() => {
    // Adiciona classe ao body
    document.body.classList.add("login-background");

    return () => {
      // Remove a classe ao desmontar o componente
      document.body.classList.remove("login-background");
    };
  }, []);

  const handleLogin = () => {
    // Resetar mensagens de erro
    setError("");
    setEmailError("");
    setSenhaError("");

    let hasError = false;

    // Validação do email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("E-mail inválido");
      hasError = true;
    }

    // Validação da senha
    if (senha.length < 8) {
      setSenhaError("A senha deve ter pelo menos 8 caracteres");
      hasError = true;
    }

    // Verificar se campos estão preenchidos
    if (!email || !senha) {
      setError("Preencha todos os campos");
      hasError = true;
    }

    if (hasError) return;

    alert("Login realizado com sucesso!"); // Substitui navegação
  };

  return (
    <>
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
    </>
  );
};

export default Signin;
