# getNfcATag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## getNfcATag

```TypeScript
function getNfcATag(tagInfo: TagInfo): NfcATag
```

Obtains an {@link NfcATag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object will be created based on the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getNfcA

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | TagInfo | Yes | Indicates the tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| NfcATag | The {@link NfcATag} object. |

