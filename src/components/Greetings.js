function Greetings ({name, lastname, fn, children}) {

    if (fn) {
        fn()
    }

    return (
        <>
            <h1 className="text-6xl text-slate-50 decoration-4 m-5">Greetings {name} {lastname}!</h1>
            <p className="m-5 text-slate-50"> You are welcome to that Sketchy Wookiee Market </p>
            <p className="text-slate-50 m-5"> Psst! do not be lousy</p> 
            {children}
        </>
    )
}

export default Greetings
