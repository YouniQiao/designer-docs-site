# createUriData

## Modules to Import

```TypeScript
import { pasteboard } from '@ohos.pasteboard';
```

## createUriData

```TypeScript
function createUriData(uri: string): PasteData
```

Creates a **PasteData** object of the URI type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createData(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI content. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteData | **PasteData** object. |

**Example**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createUriData('dataability:///com.example.myapplication1/user.txt');

```

