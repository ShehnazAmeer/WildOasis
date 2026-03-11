import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,isLogin} =useLogin();
  function handleSubmitLogin(e) {
    console.log('loginPage');
    e.preventDefault();
    if (!email || !password) return;
    //options object
    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    }
    )
  }
  return (
    <Form onSubmit={handleSubmitLogin}  category='regular' styles="bg-stone-100  p-30  " >
      <h1 className="text-center text-4xl font-bold py-15">Login</h1>
      <input
        className="input  "
        type="email"
        id='email'
        placeholder="username"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={isLogin}
      />
      <input
        className="input my-15  "
        type="password"
        id='password'
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={isLogin}
      />
      <Button
        onClick={handleSubmitLogin}
        category='primary'
        styles="text-blue-50 focus-ring-blue-600 bg-blue-600 focus:ring-blue-600 w-full"
        disabled={isLogin}
      >
        Login
      </Button>
    </Form>
  )
}