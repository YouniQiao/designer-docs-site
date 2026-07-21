# createUriData

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

<a id="createuridata"></a>
## createUriData

```TypeScript
function createUriData(uri: string): PasteData
```

Creates a **PasteData** object of the URI type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [createData(mimeType:](arkts-basicservices-pasteboard-createdata-f.md#createdata-1)

<!--Device-pasteboard-function createUriData(uri: string): PasteData--><!--Device-pasteboard-function createUriData(uri: string): PasteData-End-->

**System capability:** SystemCapability.MiscServices.Pasteboard

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI content. |

**Return value:**

| Type | Description |
| --- | --- |
| [PasteData](arkts-basicservices-pasteboard-pastedata-i.md) | **PasteData** object. |

**Example**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createUriData('dataability:///com.example.myapplication1/user.txt');

```

