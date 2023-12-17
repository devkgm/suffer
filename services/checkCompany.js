import { arrayUnion, collection, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

export default checkCompany = async (companyName) => {
    const user = auth.currentUser;
    const companyRefs = collection(db, 'company');
    const companySnapshots = await getDocs(companyRefs);
    const companyDocs = companySnapshots.docs;
    console.log(companyDocs);
    for (const doc of companyDocs) {
        console.log(doc);
        if (doc.Name == companyName) {
            await updateDoc(doc.ref, { Member: arrayUnion(user.uid) });
        }
    }
};
