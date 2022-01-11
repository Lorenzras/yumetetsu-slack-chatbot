import {KintoneAppRecord} from '../../types/kintone';

export const generateKintoneLink = (
    {appId, recordId} : KintoneAppRecord,
    isEdit=false) => {
    return `https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId}&mode=${isEdit? 'edit' : 'show' }`;
};


