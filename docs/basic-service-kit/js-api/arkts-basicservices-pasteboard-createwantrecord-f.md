# createWantRecord

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

<a id="createwantrecord"></a>
## createWantRecord

```TypeScript
function createWantRecord(want: Want): PasteDataRecord
```

Creates a **PasteDataRecord** object of the Want type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [createRecord(mimeType:](arkts-basicservices-pasteboard-createrecord-f.md#createrecord-1)

<!--Device-pasteboard-function createWantRecord(want: Want): PasteDataRecord--><!--Device-pasteboard-function createWantRecord(want: Want): PasteDataRecord-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want content. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteDataRecord](arkts-basicservices-pasteboard-pastedatarecord-i.md) | New **PasteDataRecord** object of the Want type. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let record: pasteboard.PasteDataRecord = pasteboard.createWantRecord(object);

```

