# createPlainTextRecord

## Modules to Import

```TypeScript
import { pasteboard } from '@ohos.pasteboard';
```

## createPlainTextRecord

```TypeScript
function createPlainTextRecord(text: string): PasteDataRecord
```

Creates a **PasteDataRecord** object of the plain text type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createRecord(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Plain text. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteDataRecord | New **PasteDataRecord** object of the plain text type. |

**Example**

```TypeScript
let record: pasteboard.PasteDataRecord = pasteboard.createPlainTextRecord('hello');

```

