/* eslint-disable max-len */
import {slackClient} from '../slackClient';

const getUser = async (userId: string) => {
  return await slackClient.client.users.info({user: userId} );
};

export const getDisplayName = async (userId: string) => {
  const user = (await getUser(userId)).user;

  const displayName = user?.profile?.display_name || user?.name || user?.id || '？？';
  return displayName;
};


export default getUser;
