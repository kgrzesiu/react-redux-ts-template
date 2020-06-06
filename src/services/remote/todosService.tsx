import axiosInstance from './axios';

type responseType = any[] | void;

export const getTodos = async (): Promise<any> => {
    const todos: any = await axiosInstance.get('/todoos?userId=1')
      .then(response => {
        return response.data.map((todo: any) => ({
          text: todo.title,
          id: todo.id,
          completed: todo.completed
        }));
      });
    return todos;
}