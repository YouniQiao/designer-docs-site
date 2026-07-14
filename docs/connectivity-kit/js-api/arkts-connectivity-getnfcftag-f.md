# getNfcFTag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## getNfcFTag

```TypeScript
function getNfcFTag(tagInfo: TagInfo): NfcFTag
```

Obtains an {@link NfcFTag} object based on the tag information. <p>During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object will be created based on the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getNfcF

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | TagInfo | Yes | Indicates the tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| NfcFTag | The {@link NfcFTag} object. |

