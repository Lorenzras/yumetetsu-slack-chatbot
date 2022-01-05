

declare namespace hankyo.toyokawa {
    interface Fields {
        mail_to: kintone.fieldTypes.SingleLineText;
        main: kintone.fieldTypes.MultiLineText;
        mail_from: kintone.fieldTypes.SingleLineText;
        title: kintone.fieldTypes.SingleLineText;
        文字列__1行__1: kintone.fieldTypes.SingleLineText;
        文字列__複数行__0: kintone.fieldTypes.MultiLineText;
        slack_link: kintone.fieldTypes.Link;
        ルックアップ_0: kintone.fieldTypes.SingleLineText;
        ルックアップ: kintone.fieldTypes.SingleLineText;

        対応事項: kintone.fieldTypes.CheckBox;
    }
    export interface SavedFields extends Fields {
        $id: kintone.fieldTypes.Id;
        $revision: kintone.fieldTypes.Revision;
        更新者: kintone.fieldTypes.Modifier;
        作成者: kintone.fieldTypes.Creator;
        レコード番号: kintone.fieldTypes.RecordNumber;
        更新日時: kintone.fieldTypes.UpdatedTime;
        作成日時: kintone.fieldTypes.CreatedTime;
    }
}
