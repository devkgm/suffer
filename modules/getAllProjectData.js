import { db } from '../firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

export default getAllProjectData = async (uid) => {
    console.log('getAllProjectData Start');
    const userRef = doc(db, 'user', uid);
    const projectData = [];

    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().Project;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            const taskRefs = projectSnapshot.data().Task;
            const tasks = [];
            for (const taskRef of taskRefs) {
                const taskSnapshot = await getDoc(taskRef);
                const task = taskSnapshot.data();
                tasks.push(task);
            }
            tasks.sort((a, b) => {
                return b.Date.seconds - a.Date.seconds;
            });
            const data = projectSnapshot.data();
            data.Task = tasks;
            projectData.push({ [projectSnapshot.id]: data });
        }
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('getAllProjectData End');
    return projectData;
};
