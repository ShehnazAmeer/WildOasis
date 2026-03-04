import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <h1 className="font-extrabold text-4xl max-md:xl py-9" > Create a new user </h1>
      <SignupForm/>
    </>
    
  ) 
}

export default NewUsers;
