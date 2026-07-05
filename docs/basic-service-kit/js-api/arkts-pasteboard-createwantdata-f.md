# createWantData

## createWantData

```TypeScript
function createWantData(want: Want): PasteData
```

Creates a **PasteData** object of the Want type.

**Since:** 7

**Deprecated since:** 9

**Substitute:** pasteboard.createData(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want content. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteData | PasteData object. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';

let object: Want = {
    bundleName: "com.example.aafwk.test",
    abilityName: "com.example.aafwk.test.TwoAbility"
};
let pasteData: pasteboard.PasteData = pasteboard.createWantData(object);

```

