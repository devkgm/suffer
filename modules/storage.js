import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // 저장 에러 처리
        console.error('Error saving data', e);
    }
};

const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // 불러오기 에러 처리
        console.error('Error fetching data', e);
    }
};

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // 삭제 에러 처리
        console.error('Error removing data', e);
    }
};
const clearData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log(err);
    }
};
export { storeData, getData, removeData, clearData };
