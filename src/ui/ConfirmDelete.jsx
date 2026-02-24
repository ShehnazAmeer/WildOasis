import Button from "./Button";

function ConfirmDelete({ resourceName, disabled, onConfirm,onClick}) {
  console.log(onConfirm);
  function handleDelete() {
    console.log('delete clicked')
    onConfirm()
  }

  return (
    <div className="flex flex-col w-160 gap-4">
      <h1 className="font-bold text-3xl">Delete {resourceName} </h1>
      <p className="text-stone-500 mb-6">
        Are you sure you want to delete this {resourceName} Permanently? After Click this Action cannot be undonne.
      </p>
      <div className="flex justify-end gap-4">
        <Button onClick={onClick}  category='secondary'>Cancel</Button>
        <Button onClick={handleDelete} disabled={disabled} category='delete'>Delete</Button>
      </div>
    </div>
  )
}

export default ConfirmDelete;
