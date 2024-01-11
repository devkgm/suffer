const deleteProject = async (projectId, user) => {
    let result;
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_SERVER + '/projects/' + projectId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `${user.refreshToken},${user.accessToken}`,
                email: user.email,
            },
        });
        if (response.headers.get('accessToken')) {
            user.accessToken = response.headers.get('accessToken');
        }
        if (response.status == 200) {
            result = 1;
        }
    } catch (error) {
        console.error(new Error(error));
    }

    return { result: result, user: user };
};

export default deleteProject;
