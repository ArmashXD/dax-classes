import { useState } from "react";
import Header from "../../components/ui/header";
import { Link } from "react-router";


const data = [
    { title: 'title one', description: 'description one' },
    { title: 'title two', description: 'description two' },
    { title: 'title three', description: 'description three' },
    { title: 'title four', description: 'description four' },
]

function HomePage() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <Header />
            <br />
            Number: {number}
            <br />
            <Link to="/about" >About</Link>
            {/* </> */}
        </>
    )
}
export default HomePage