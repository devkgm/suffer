export default getProjectList = async (user) => {
    console.log('getProject Start');
    const startTime = Date.now();
    let projectData = [];
    try {
        const response = await fetch('http://192.168.45.57:3000/projects/list/' + user.info.ID);
        projectData = await response.json();
        console.log(projectData);
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getProject End');
    return projectData;
};
