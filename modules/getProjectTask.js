import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { storeData } from './storage';

export default getProjectTask = async (projectId) => {
    console.log('getProjectTask Start');
    const projectRef = doc(db, 'project', projectId);
    let taskData = [];

    try {
        const projectSnapshot = await getDoc(projectRef);
        const taskRefs = projectSnapshot.data().Task;
        for (const taskRef of taskRefs) {
            const taskSnapshot = await getDoc(taskRef);
            taskData.push(taskSnapshot.data());
        }
        taskData.sort((a, b) => {
            return b.Date.seconds - a.Date.seconds;
        });
    } catch (error) {
        console.error(new Error(error));
    }
    storeData('taskData', taskData);
    console.log('getProjectTask End');
    return taskData;
};
