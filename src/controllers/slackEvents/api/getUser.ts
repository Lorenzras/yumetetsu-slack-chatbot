import slackApp from '../../../service/slackApp';

const getUser = async (userId: string) => {
    return await slackApp.client.users.info({user: userId} );
};

export const getDisplayName = async (userId: string) => {
    return (await getUser(userId)).user?.profile?.display_name;
};


export default getUser;
