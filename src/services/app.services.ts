import { UserInterface } from "../component/users/usersInterface";
import { PostInterface } from "../component/posts/post";

export default class AppServices 
{
    static getUsers() : Promise<UserInterface[]> {
        return fetch('http://localhost:8000/users')
        .then(response => response.json())
    }

    static getPosts() : Promise<PostInterface[]>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
    }
}