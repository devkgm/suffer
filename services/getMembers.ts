import { User } from '../model/user';

const getMembers = async (user: User) => {
    let memberData = [];
    try {
        const response = await fetch(
            process.env.EXPO_PUBLIC_API_URL + '/company/members/' + user.company_id,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    authorization: `${user.refreshToken},${user.accessToken}`,
                    email: user.email,
                },
            },
        );
        if (response.headers.get('accessToken')) {
            user.accessToken = response.headers.get('accessToken');
        }
        if (response.status == 200) {
            memberData = await response.json();
        }
    } catch (error) {
        console.error(new Error(error));
    }

    return { memberData: memberData, user: user };
};

export default getMembers;
