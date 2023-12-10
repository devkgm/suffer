import ProjectCard from '../components/ProjectCard';
import { collection, getDoc, where, doc } from 'firebase/firestore';

export default getProjectTasks = async (db, projectId) => {
    const projectRef = doc(db, 'project', projectId);

    let taskData = [];
    try {
        const projectSnapshot = await getDoc(projectRef);
        if (projectSnapshot.exists()) {
            const taskRefs = projectSnapshot.data().Task;
            if (taskRefs && taskRefs.length > 0) {
                for (const taskRef of taskRefs) {
                    const taskSnapshot = await getDoc(taskRef);
                    if (taskSnapshot.exists()) {
                        taskData.push(taskSnapshot.data());
                    }
                }
            } else {
                console.log('테스크 레퍼런스가 없습니다.');
            }
        } else {
            console.log('프로젝트가 존재하지 않습니다.');
        }
    } catch (err) {
        console.log(err);
    }
    return taskData;
};
