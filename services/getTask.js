import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import getComment from './getComment';
export default getTask = async (projectId) => {
    console.log('getTask Start');
    const startTime = Date.now();
    let taskData = [];

    try {
        const taskRef = collection(db, 'project', projectId, 'task');
        const taskSnapshots = await getDocs(taskRef);
        const docs = taskSnapshots.docs;
        for (const doc of docs) {
            const task = doc.data();
            const comment = await getComment(projectId, doc.id);
            task.Comment = comment;
            taskData.push(task);
        }

        // taskData = taskSnapshots.docs.map((doc) => {
        //     return doc.data();
        // });
        taskData.sort((a, b) => {
            return b.Date.seconds - a.Date.seconds;
        });
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getTask End');
    return taskData;
};
