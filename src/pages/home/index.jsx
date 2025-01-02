import { useState } from "react";
import Header from "../../components/ui/header";
import MouseTracker from "./components/mouse-tracker";


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
            <MouseTracker
                setNumber={setNumber}
                title={"test one"}
                description={"test two"}
            />
            <br />

            {/* </> */}
        </>
    )
}
export default HomePage