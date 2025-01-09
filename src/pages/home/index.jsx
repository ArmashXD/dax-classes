import { useEffect } from "react";
import { Link } from "react-router";
import usePosts from "./hooks/usePosts";


function HomePage() {
    const { posts, getAllPosts } = usePosts()

    useEffect(() => { getAllPosts() }, []);

    return (
        <>
            <Link to="/about" >About</Link>
            {
                posts?.map((item, index) => (
                    <div key={index}>
                        <h1>{item?.title}</h1>
                        <p>{item?.body}</p>
                    </div>
                ))
            }
        </>
    )
}
export default HomePage