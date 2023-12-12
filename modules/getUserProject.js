import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { storeData } from './storage';

export default getUserProject = async (uid) => {
    console.log('getUserProject Start');
    console.log(uid);
    const userRef = doc(db, 'user', uid);
    let projectListData = [];
    let projectId = [];
    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().Project;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            projectListData.push(projectSnapshot.data());
            projectId.push(projectSnapshot.id);
        }
    } catch (error) {
        console.error(new Error(error));
    }
    storeData('projectListData', projectListData);
    console.log(Array.isArray(projectId));
    console.log('getUserProject End');
    return { projectListData: projectListData, projectId: projectId };
};
