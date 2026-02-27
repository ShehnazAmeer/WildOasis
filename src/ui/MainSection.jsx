export default function MainSection({children,heading, styles=''}) {
    return (
    <section className="flex justify-between pt-9 ">
            <h1 className= {`font-extrabold text-4xl max-md:text-xl ${styles}`} >
                {heading}
            </h1>
            {children}
      </section>
    )
}