import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
export default addTask = async ({ Author, AuthorId, Charge, Description, Title, projectId }) => {
    let date = new Date();
    date = date.toLocaleDateString('ko-KR');
    console.log(projectId);

    try {
        const taskRef = await addDoc(collection(db, 'project', projectId, 'task'), {
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
        return taskRef;
    } catch (err) {
        console.log(err);
        return false;
    }
};
