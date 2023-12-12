import ProjectCard from '../components/ProjectCard';
import { collection, getDoc, where, doc } from 'firebase/firestore';
import { storeData } from './storage';

export default getUserProject = async (db, uid) => {
    console.log('getUserProject start');
    const userRef = doc(db, 'user', uid);
    let projectData = [];
    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().Project;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            projectData.push(projectSnapshot.data());
        }
    } catch (error) {
        console.error(new Error(error));
    }
    return projectData;
};
