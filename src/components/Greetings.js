function Greetings ({name, lastname, fn, children}) {

    if (fn) {
        fn()
    }

    return (
        <>
            <h1>Greetings {name} {lastname}!</h1> 
            {children}
        </>
    )
}

export default Greetings
