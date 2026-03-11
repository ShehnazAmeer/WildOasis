import Button from "./Button";
export default function ErrorFallback({error,resetErrorBoundary}) {
  return (
    <main
      className="h-screen bg-stone-100 flex items-center justify-center p-4"
    >
      <div className="rounded-md p-3 flex-3 text-center">
        <h1 className="mb-5 font-bold"> Something Went Wrong! </h1>
        <p className="font-serif mb-8 text-stone-700"> {error.message} </p>
        <Button category='primary' onClick={()=>resetErrorBoundary()} >Try Again </Button>
      </div>

    </main>
  )
}
