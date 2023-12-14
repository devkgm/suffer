import { db } from '../firebase/firebaseConfig';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';

export default getAllProjectData = async (uid) => {
    console.log('getAllProjectData Start');
    const userRef = doc(db, 'user', uid);
    const projectData = [];
    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().ProjectId;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            const taskRef = collection(projectRef, 'task');
            const taskSnapshots = await getDocs(taskRef);
            const tasks = taskSnapshots.docs.map((doc) => doc.data());
            tasks.sort((a, b) => {
                return b.Date.seconds - a.Date.seconds;
            });
            const data = projectSnapshot.data();
            data.Task = tasks;
            projectData.push({ id: projectSnapshot.id, data: data });
        }
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('getAllProjectData End');
    return projectData;
};
