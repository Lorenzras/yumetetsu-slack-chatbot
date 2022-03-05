import slackApp from '../../../service/slackApp';

const getUser = async (userId: string) => {
    return await slackApp.client.users.info({user: userId} );
};

export const getDisplayName = async (userId: string) => {
    const user = (await getUser(userId)).user;

    const displayName = user?.profile?.display_name || user?.name;
    return displayName;
};


export default getUser;
