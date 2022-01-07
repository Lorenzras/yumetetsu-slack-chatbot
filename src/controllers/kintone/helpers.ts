import {KintoneAppRecord} from '../../types/kintone';

export const generateKintoneLink = ({appId, recordId} : KintoneAppRecord) => {
    return `https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId}`;
};


