import { db } from '../firebase/firebaseConfig';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';

export default getAllProjectData = async (uid) => {
    console.log('getAllProjectData Start');
    const startTime = Date.now();
    const userRef = doc(db, 'user', uid);
    const projectData = [];
    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().ProjectId;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            endTime = Date.now();
            dura = endTime - startTime;
            const taskRef = collection(projectRef, 'task');
            const taskSnapshots = await getDocs(taskRef);
            endTime = Date.now();
            dura = endTime - startTime;
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
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getAllProjectData End');
    return projectData;
};
