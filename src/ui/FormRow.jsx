const styles = {
    horizental: 'grid items-center grid-cols-[20rem_2fr_1.2fr] max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:pr-15 bg-stone-50 py-11',
    vertical:'grid grid-cols-[1fr_28rem] max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:pr-15 bg-stone-50 py-11 pr-9'
}
export default function FormRow({ children, style,category }) {
    return (
        <div
            className={`${styles[category]} ${style}`}
        >
            {children}
        </div>
    )
}