import { User } from '../model/user';

const getProjectList = async (user: User) => {
    console.log('getProject Start');
    const startTime = Date.now();
    let projectData = [];
    console.log(user);
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_SERVER + '/projects/list/' + user.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: JSON.stringify({
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                }),
            },
        });
        projectData = await response.json();
        console.log(projectData);
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getProject End');
    return projectData;
};

export default getProjectList;
