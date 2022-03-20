interface KintoneAppRecord {
  appId: string,
  recordId: string,
  isEdit ?: boolean
}

type KintoneHankyoTaiouRecord = Partial<hankyo.SavedFields>

interface HankyoApp extends KintoneAppRecord {
  record : RecordForParameter,
  revision: string
}
