# createWantRecord

## createWantRecord

```TypeScript
function createWantRecord(want: Want): PasteDataRecord
```

Creates a **PasteDataRecord** object of the Want type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.createRecord(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataRecord | New PasteDataRecord object of the Want type. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let record: pasteboard.PasteDataRecord = pasteboard.createWantRecord(object);

```

