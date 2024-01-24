import { Project } from '../model/project';
import { User } from '../model/user';

export type Props = {
    project: Project;
    user: User;
};

const addProject = async ({ project, user }) => {
    project.owner_id = user.id;
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `${user.refreshToken},${user.accessToken}`,
                email: user.email,
            },
            body: JSON.stringify(project),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(new Error(error));
    }
};

export default addProject;
