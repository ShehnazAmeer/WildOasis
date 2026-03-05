import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <div
      className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10"  
    >
      <h1 className="font-extrabold text-4xl max-md:xl py-9" > Create a new user </h1>
      <SignupForm/>
    </div>
  ) 
}

export default NewUsers;
