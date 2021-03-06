declare namespace Yume.hankyo {
  interface Fields {
    slackThread: kintone.fieldTypes.MultiLineText;
    mail_to: kintone.fieldTypes.SingleLineText;
    biko: kintone.fieldTypes.MultiLineText;
    main: kintone.fieldTypes.MultiLineText;
    title: kintone.fieldTypes.SingleLineText;
    slackUser: kintone.fieldTypes.SingleLineText;
    slackDisplayName: kintone.fieldTypes.SingleLineText;
    slackChannel: kintone.fieldTypes.SingleLineText;
    mail_from: kintone.fieldTypes.SingleLineText;
    文字列__1行__1: kintone.fieldTypes.SingleLineText;
    slack_link: kintone.fieldTypes.Link;
    slackTS: kintone.fieldTypes.SingleLineText;
    slackId: kintone.fieldTypes.SingleLineText;
    ルックアップ_0: kintone.fieldTypes.SingleLineText;

    taiouJiko: kintone.fieldTypes.CheckBox;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
