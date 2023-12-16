import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default getComment = async (projectId, taskId) => {
    console.log('getComment Start');
    const startTime = Date.now();
    let commentData;

    try {
        const commentRef = collection(db, 'project', projectId, 'task', taskId, 'comment');
        const commentSnapshots = await getDocs(commentRef);
        commentData = commentSnapshots.docs.map((doc) => doc.data());
        commentData.sort((a, b) => {
            return b.Date.seconds - a.Date.seconds;
        });
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getComment End');
    return commentData;
};
