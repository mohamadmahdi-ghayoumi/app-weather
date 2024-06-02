import axios from "axios";
import { BASE_URL } from "../BASE-URL";

async function PostUser(newUser) {
    const response = await axios.post(BASE_URL , newUser)
    return response.data
}

export default PostUser