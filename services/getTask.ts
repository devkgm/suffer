import { User } from '../model/user';

const getTask = async (user: User, projectId: number) => {
    console.log('getTask Start');
    const startTime = Date.now();
    let taskData = [];

    try {
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/projects/' + projectId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `${user.refreshToken},${user.accessToken}`,
                email: user.email,
            },
        });
        if (response.headers['accessToken']) {
            user.accessToken = response.headers['accessToken'];
        }
        taskData = await response.json();
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getTask End');
    return { taskData: taskData, user: user };
};

export default getTask;
