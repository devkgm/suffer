export default getComment = async (projectId, taskId) => {
    console.log('getComment Start');
    const startTime = Date.now();
    let commentData;

    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getComment End');
    return commentData;
};
