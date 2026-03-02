import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

export default function LoginForm() {
  const [email, setEmail] = useState('abc@example.com');
  const [password, setPassword] = useState('abc123');
  function handleSubmitLogin(e) {
    console.log('logiPage');
    e.preventDefault();
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
        onChange={e=>setEmail(e.target.value)}
      />
      <input
        className="input my-15  "
        type="password"
        id='password'
        placeholder="Password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
      />
      <Button onClick={handleSubmitLogin} category='primary'  styles="text-blue-50 focus-ring-blue-600 bg-blue-600 focus:ring-blue-600 w-full " >Login</Button>
    </Form>
  )
}