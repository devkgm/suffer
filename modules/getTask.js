import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { storeData } from './storage';

export default getTask = async (projectId) => {
    console.log('getTask Start');
    const startTime = Date.now();
    const projectRef = doc(db, 'project', projectId);
    let taskData = [];

    try {
        const taskRefs = collection(projectRef, 'task');
        const taskSnapshots = await getDocs(taskRef);

        for (const taskSnapshot of taskSnapshots) {
            taskData.push(taskSnapshot.data());
        }
        taskData.sort((a, b) => {
            return b.Date.seconds - a.Date.seconds;
        });
    } catch (error) {
        console.error(new Error(error));
    }
    storeData('taskData', taskData);
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getTask End');
    return taskData;
};
