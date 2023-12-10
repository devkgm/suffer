import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import updateProject from './updateProject';
export default addTask = async ({ Author, AuthorId, Charge, Description, Title, projectId }) => {
    let date = new Date();
    date = date.toLocaleDateString('ko-KR');
    try {
        const docRef = await addDoc(collection(db, 'task'), {
            Author: Author,
            AuthorId: AuthorId,
            Charge: [],
            Comment: [],
            Date: new Date(),
            Description: Description,
            Status: 0,
            Title: Title,
            history: [date + '에 생성'],
        });
        await updateProject(projectId, docRef);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
