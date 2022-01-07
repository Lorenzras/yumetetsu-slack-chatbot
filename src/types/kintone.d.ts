

export interface KintoneAppRecord {
    appId: string,
    recordId: string,
}

export interface HankyoApp extends KintoneAppRecord {
    record : RecordForParameter
}
