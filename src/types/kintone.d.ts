interface KintoneAppRecord {
  appId: string,
  recordId: string,
  revision ?: string,
  slackUserId ?: string,
  isEdit ?: boolean
}

type KintoneHankyoRecord = Partial<Yume.hankyo.SavedFields>
type KintoneLTCustRecord = Partial<hankyo.SavedFields>

interface HankyoApp extends KintoneAppRecord {
  record : RecordForParameter,
  revision: string
}
