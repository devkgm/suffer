export default getProjectList = async (user) => {
    console.log('getProject Start');
    const startTime = Date.now();
    let projectData = [];
    try {
        const response = await fetch(
            process.env.EXPO_PUBLIC_SERVER + '/projects/list/' + user.info.ID,
        );
        projectData = await response.json();
        console.log(projectData);
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getProject End');
    return projectData;
};
