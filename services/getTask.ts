import { User } from '../model/user';

const getTask = async (user: User, projectId: number) => {
    console.log('getTask Start');
    const startTime = Date.now();
    let taskData = [];

    try {
        const response = await fetch(process.env.EXPO_PUBLIC_SERVER + '/projects/' + projectId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `${user.refreshToken},${user.accessToken}`,
                email: user.email,
            },
        });
        taskData = await response.json();
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getTask End');
    return taskData;
};

export default getTask;
