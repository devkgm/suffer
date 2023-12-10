import { collection, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default updateProject = async (projectId, taskRef) => {
    const projectRef = doc(db, 'project', projectId);

    try {
        await updateDoc(projectRef, {
            Task: arrayUnion(taskRef), // "업무" ID를 배열에 추가
        });
        console.log('Task ID added to project');
    } catch (error) {
        console.error('Error adding task to project:', error);
    }
};
