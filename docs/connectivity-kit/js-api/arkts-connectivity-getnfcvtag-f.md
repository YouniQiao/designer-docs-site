# getNfcVTag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## getNfcVTag

```TypeScript
function getNfcVTag(tagInfo: TagInfo): NfcVTag
```

Obtains an {@link NfcVTag} object based on the tag information.
<p>During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
will be created based on the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getNfcV

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | TagInfo | Yes | Indicates the tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| NfcVTag | The {@link NfcVTag} object. |

