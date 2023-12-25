import { db } from './firebaseConfig';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import getTask from './getTask';
import getComment from './getComment';

export default getProject = async (uid) => {
    //유저가 보유중인 프로젝트 레퍼런스 가져오기
    //프로젝트데이터 가져오기
    console.log('getProject Start');
    const startTime = Date.now();
    const userRef = doc(db, 'user', uid);
    const projectData = [];
    try {
        const userSnapshot = await getDoc(userRef);
        const projectRefs = userSnapshot.data().ProjectId;
        for (const projectRef of projectRefs) {
            const projectSnapshot = await getDoc(projectRef);
            const data = projectSnapshot.data();
            task = await getTask(projectSnapshot.id);
            data.Task = task;
            data.id = projectSnapshot.id;
            projectData.push(data);
        }
    } catch (error) {
        console.error(new Error(error));
    }
    console.log('데이터 받아오기 실행 시간: ', Date.now() - startTime);
    console.log('getProject End');
    return projectData;
};
