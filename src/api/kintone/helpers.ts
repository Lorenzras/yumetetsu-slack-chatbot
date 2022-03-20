

export const generateKintoneLink = (
  {appId, recordId, isEdit=false} : KintoneAppRecord,
) => {
  return `https://rdmuhwtt6gx7.cybozu.com/k/${appId}/show#record=${recordId}&mode=${isEdit? 'edit' : 'show' }`;
};


