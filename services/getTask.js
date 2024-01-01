import getComment from './getComment';
export default getTask = async (projectId) => {
    console.log('getTask Start');
    const startTime = Date.now();
    let taskData = [];

    try {
        const response = await fetch('http://192.168.45.57:3000/projects/' + projectId);
        taskData = await response.json();
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getTask End');
    return taskData;
};
