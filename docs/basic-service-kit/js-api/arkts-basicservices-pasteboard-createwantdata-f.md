# createWantData

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## createWantData

```TypeScript
function createWantData(want: Want): PasteData
```

Creates a **PasteData** object of the Want type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createData(mimeType:

<!--Device-pasteboard-function createWantData(want: Want): PasteData--><!--Device-pasteboard-function createWantData(want: Want): PasteData-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want content. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteData](arkts-basicservices-pasteboard-pastedata-i.md) | **PasteData** object. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let pasteData: pasteboard.PasteData = pasteboard.createWantData(object);

```

