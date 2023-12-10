import ProjectCard from '../components/ProjectCard';
import { collection, getDoc, where, doc } from 'firebase/firestore';

export default getUserProjects = async (db, uid) => {
    const userRef = doc(db, 'user', uid);
    let projectData = [];
    try {
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            const projectRefs = userSnapshot.data().Project;
            if (projectRefs && projectRefs.length > 0) {
                for (const projectRef of projectRefs) {
                    const projectSnapshot = await getDoc(projectRef);
                    if (projectSnapshot.exists()) {
                        projectData.push(projectSnapshot.data());
                    }
                }
            } else {
                console.log('프로젝트 레퍼런스가 없습니다.');
            }
        } else {
            console.log('유저가 존재하지 않습니다.');
        }
    } catch (err) {
        console.log(err);
    }
    return projectData;
};
