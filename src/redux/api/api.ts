import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://startup-summer-2023-proxy.onrender.com',
    withCredentials: true,
    headers: {
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
    },
    params: {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
        client_id: 2356,
        client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        hr: 0,
    }
})

// api
export const vacanciesAPI = {
    getToken() {
        return instance.get('/2.0/oauth2/password/');
    },
    getCatalogues(token: string) {
        return instance.get('/2.0/catalogues/', {headers: {
            Authorization: `Bearer ${token}`
        }})
    },
    // createTodolist(title: string) {
    //     return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TodolistType }>>>('todo-lists', {title});
    // },
    // deleteTodolist(id: string) {
    //     return instance.delete<ResponseType>(`todo-lists/${id}`);
    // },
    // updateTodolist(id: string, title: string) {
    //     return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`todo-lists/${id}`, {title});
    // },
    // getTasks(todolistId: string) {
    //     return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    // },
    // deleteTask(todolistId: string, taskId: string) {
    //     return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    // },
    // createTask(todolistId: string, title: string) {
    //     return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks`, {title});
    // },
    // updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    //     return instance.put<UpdateTaskModelType, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    // }
}

// export const authAPI = {
//     login(data: LoginParamsType) {
//         return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId: number}>>>(`/auth/login`, data)
//     },
//     logout() {
//         return instance.delete<ResponseType>('/auth/login');
//     },
//     me() {
//         return instance.get<ResponseType<{id: number, login: string, email: string} | {}>>('/auth/me')
//     }
// }

// // types
// export type LoginParamsType = {
//     email: string,
//     password: string,
//     rememberMe?: boolean,
//     captcha?: boolean
// }

// export type LogoutResponseType = {
//     resultCode: number
//     messages: string[]
//     data: {}
// }

// export type TodolistType = {
//     id: string
//     title: string
//     addedDate: string
//     order: number
// }
// export type ResponseType<D = {}> = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: D
// }


// export enum TaskStatuses {
//     New = 0,
//     InProgress = 1,
//     Completed = 2,
//     Draft = 3
// }

// export enum TaskPriorities {
//     Low = 0,
//     Middle = 1,
//     Hi = 2,
//     Urgently = 3,
//     Later = 4
// }

// export type TaskType = {
//     description: string
//     title: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
//     id: string
//     todoListId: string
//     order: number
//     addedDate: string
// }
// export type TaskDomainType = TaskType & {
//     entityStatus: RequestStatusType
// }
// export type UpdateTaskModelType = {
//     title: string
//     description: string
//     status: TaskStatuses
//     priority: TaskPriorities
//     startDate: string
//     deadline: string
// }
// type GetTasksResponse = {
//     error: string | null
//     totalCount: number
//     items: TaskType[]
// }


let a = [{
    key: 33,
    positions: [
         
{title_rus: 'CRM-системы', url_rus: 'crm-sistemy', title: 'CRM-системы', id_parent: 33, key: 603}

    ],
    title: "IT, Интернет, связь, телеком",
    title_rus: "IT, Интернет, связь, телеком",
    title_trimmed: "IT, Интернет, связь,...",
    url_rus: "it-internet-svyaz-telekom"
}]