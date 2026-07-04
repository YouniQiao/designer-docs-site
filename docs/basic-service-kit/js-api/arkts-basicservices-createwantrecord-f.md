# createWantRecord

## Modules to Import

```TypeScript
import { pasteboard } from '@ohos.pasteboard';
```

## createWantRecord

```TypeScript
function createWantRecord(want: Want): PasteDataRecord
```

Creates a **PasteDataRecord** object of the Want type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createRecord(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want content. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteDataRecord | New **PasteDataRecord** object of the Want type. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let record: pasteboard.PasteDataRecord = pasteboard.createWantRecord(object);

```

