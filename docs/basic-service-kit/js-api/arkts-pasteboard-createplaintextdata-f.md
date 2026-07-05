# createPlainTextData

## createPlainTextData

```TypeScript
function createPlainTextData(text: string): PasteData
```

Creates a **PasteData** object of the plain text type.

**Since:** 6

**Deprecated since:** 9

**Substitute:** pasteboard.createData(mimeType:

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Plain text. |

**Return value:**

| Type | Description |
| --- | --- |
| PasteData | PasteData object. |

**Example**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('content');

```

