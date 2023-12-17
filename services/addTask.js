import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default addTask = async (
    projectId,
    Author,
    AuthorId,
    Charge,
    Description,
    Status,
    Title,
) => {
    const date = new Date().toLocaleString('kr-KO');
    await addDoc(collection(db, 'project', projectId, 'task'), {
        Author: Author,
        AuthorId: AuthorId,
        Charge: Charge,
        Date: new Date(),
        Description: Description,
        Status: Status,
        Title: Title,
        history: [date + '에 생성됨'],
    });
};
