import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <main
      className="h-screen grid grid-cols-[48rem] content-center justify-center gap-9 bg-stone-200 dark:bg-gray-900 dark:text-gray-100 "
    >
      <Logo />
      <LoginForm/>  
   </main>
  )
}

export default Login;
