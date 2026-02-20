export default function FormRow({ children,style }) {
    return (
        <div
            className={` grid items-center grid-cols-[20rem_2fr_1.2fr] mb-1 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:pr-15 bg-stone-50 py-11 ${style}`}
        >
            {children}
        </div>
    )
}