import { useState } from "react";
import getPosts from "../../../services/posts/get-posts.service";

function usePosts() {
    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        const response = await getPosts();
        setPosts(response);
    }


    return {
        posts,
        getAllPosts
    }
}

export default usePosts;