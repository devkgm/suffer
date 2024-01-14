import { Task } from '../model/task';
import { User } from '../model/user';

export type Props = {
    task: Task;
    user: User;
};

const addTask = async ({ task, user }) => {
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_SERVER + '/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `${user.refreshToken},${user.accessToken}`,
                email: user.email,
            },
            body: JSON.stringify(task),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(new Error(error));
    }
};

export default addTask;
