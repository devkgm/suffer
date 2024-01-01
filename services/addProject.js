import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default addProject = async ({
    Author,
    AuthorId,
    Charge,
    Description,
    Status,
    Title,
    user,
}) => {
    console.log(Description);
    try {
        const response = await fetch('http://192.168.45.57:3000' + '/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ownerId: user.info.ID, title: Title, description: Description }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(new Error(error));
    }
};
