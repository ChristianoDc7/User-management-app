import axiosConfig from "./axios-config";
import { OgtInterface } from "../component/ogt/ogtInterface";
import { UserInterface } from "../component/users/usersInterface";
import { AxiosResponse } from "axios";


export default class AppServices 
{
    static baseUrl : string = 'http://localhost:9000/users/';

    static async  getUsers() : Promise<UserInterface[]> 
    {
        return await fetch(this.baseUrl)
        .then(response => response.json())
        .then((data)=>data.sort(this.DESC))
        .catch((error)=>console.log(error))
    }

    
    static async addUsers(newUser : UserInterface)
    {
        const options = {
            method : 'POST',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(newUser)
        }
        return await fetch(this.baseUrl , options )
        .then(response => response.json())
        .catch((error)=>console.log(error))
        
    }

    static async deleteOne( id : number) 
    {
        return await fetch(`${this.baseUrl}${id}`, {method : 'DELETE'} )
        .then(response => response.json())
        .catch((error)=>console.log(error))
    }

    static async updatePost(updatedUser : UserInterface )
    {
        const options = {
            method : 'PUT',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(updatedUser)
        }
        return await fetch(`${this.baseUrl}${updatedUser.id}` , options )
        .then(response => response.json())
        .catch((error)=>console.log(error))
        
    }

    static async getRub() : Promise<AxiosResponse<OgtInterface[], any>>
    {
        let response = await axiosConfig.get<OgtInterface[]>('http://localhost:8000/ogts/')
        return response;
    }

    static  DESC(a : any , b : any)
    {
        return ((a.id == b.id) ? 0 : ((a.id < b.id) ? 1 : -1));
    }
}