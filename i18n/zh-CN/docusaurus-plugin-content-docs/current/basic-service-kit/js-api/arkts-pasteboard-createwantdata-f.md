# createWantData

## createWantData

```TypeScript
function createWantData(want: Want): PasteData
```

Creates a **PasteData** object of the Want type.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.createData(mimeType:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | PasteData object. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let pasteData: pasteboard.PasteData = pasteboard.createWantData(object);

```

