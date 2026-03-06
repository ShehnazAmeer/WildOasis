import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <div
      className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10 "  
    >
      <h1 className="font-extrabold text-4xl max-md:text-xl py-9">Update hotel settings</h1>
      <UpdateSettingsForm/>
    </div>
    // <div className="flex justify-between flex-col p-9 border border-black">
     
    // </div>
  )
}

export default Settings;
