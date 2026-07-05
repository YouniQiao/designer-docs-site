# createUriRecord

## Modules to Import

```TypeScript
import { pasteboard } from '@ohos.pasteboard';
```

## createUriRecord

```TypeScript
function createUriRecord(uri: string): PasteDataRecord
```

Creates a **PasteDataRecord** object of the URI type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createRecord(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI content. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteDataRecord | New **PasteDataRecord** object of the URI type. |

**Example**

```TypeScript
let record: pasteboard.PasteDataRecord = pasteboard.createUriRecord('dataability:///com.example.myapplication1/user.txt');

```

