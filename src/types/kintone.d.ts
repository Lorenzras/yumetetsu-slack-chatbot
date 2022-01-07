

export interface kintoneAppRecord {
    appId: string,
    recordId: string,
}

export interface HankyoApp extends kintoneAppRecord {
    record : RecordForParameter
}
