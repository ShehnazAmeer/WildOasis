export default function FormLabel({htmlFor,children}) {
    return (
        <label className="label " htmlFor={htmlFor}> {children} </label>
    )
}