import { useState } from "react";
import UpdateuserDataForm from "../features/authentication/UpdateUserDataForm";
import Button from "../ui/Button";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  const [open1, setIsOpen1] = useState(false); 
  const [open2, setIsOpen2] = useState(false); 
  return (
      <div className="max-w-full px-12 flex flex-col gap-10 " >
        <h1 className="font-extrabold text-4xl max-md:xl py-9" > Manage Account </h1>
        <section >
          <Button
            onClick={() => setIsOpen1(open => !open)}
            category='primary'
            styles="mb-8"
          >
            Update User Data
          </Button>
          {
          open1 && (
            <div className="max-w-480  mx-auto my-auto px-12 flex flex-col gap-10"  >
              <UpdateuserDataForm/>
            </div>
            ) 
          }
        </section>
        <section>
          <Button
            onClick={() => setIsOpen2(open => !open)}
            category='primary'
            styles="mb-8"
          >
            Update Password
          </Button>
          {
          open2 && (
            <div className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10"  >
              <UpdatePasswordForm/>
            </div>
            ) 
          }
        </section>
      </div>
  );
}

export default Account;
