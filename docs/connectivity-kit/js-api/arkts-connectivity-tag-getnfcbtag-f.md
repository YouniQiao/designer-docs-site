# getNfcBTag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

## getNfcBTag

```TypeScript
function getNfcBTag(tagInfo: TagInfo): NfcBTag
```

Obtains an {@link NfcBTag} object based on the tag information.<p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object will be created based on the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getNfcB

<!--Device-tag-function getNfcBTag(tagInfo: TagInfo): NfcBTag--><!--Device-tag-function getNfcBTag(tagInfo: TagInfo): NfcBTag-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | [TagInfo](arkts-connectivity-tag-taginfo-i.md) | Yes | Indicates the tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| [NfcBTag](arkts-connectivity-tag-nfcbtag-t.md) | The {@link NfcBTag} object. |

