

export interface KintoneAppRecord {
    appId: string,
    recordId: string,
    isEdit ?: boolean
}

export interface HankyoApp extends KintoneAppRecord {
    record : RecordForParameter,
    revision: string
}

export interface KintoneHankyoTaiouRecord {
    taiouJiko: kintone.fieldTypes.CheckBox,
    biko: kintone.fieldTypes.MultiLineText,
    main: kintone.fieldTypes.MultiLineText,
    mail_to?: kintone.fieldTypes.SingleLineText,
    mail_from?: kintone.fieldTypes.SingleLineText,
    title?: kintone.fieldTypes.SingleLineText,
    slackTS?: kintone.fieldTypes.SingleLineText,
    slackChannel?: kintone.fieldTypes.SingleLineText,
    slackDisplayName?: kintone.fieldTypes.SingleLineText,

}
