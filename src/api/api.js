import *as axios from 'axios'

const instanse = axios.create({
    withCredentials : true,
    baseURL : 'https://jsonplaceholder.typicode.com/'

})

export const usersAPI = {
    getUsers() {
        return instanse.get('users')
      
    },
    getPosts() {
      return instanse.get('posts')
    }

    
}