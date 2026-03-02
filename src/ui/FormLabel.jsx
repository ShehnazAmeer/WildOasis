export default function FormLabel({ htmlFor, children, styles='' }) {
    return (
        <label
            className={`label ${styles ?? ""}`}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}