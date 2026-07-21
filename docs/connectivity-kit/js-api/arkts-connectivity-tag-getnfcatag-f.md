# getNfcATag

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

<a id="getnfcatag"></a>
## getNfcATag

```TypeScript
function getNfcATag(tagInfo: TagInfo): NfcATag
```

Obtains an {@link NfcATag} object based on the tag information.<p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object will be created based on the tag information.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getNfcA

<!--Device-tag-function getNfcATag(tagInfo: TagInfo): NfcATag--><!--Device-tag-function getNfcATag(tagInfo: TagInfo): NfcATag-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | [TagInfo](arkts-connectivity-tag-taginfo-i.md) | Yes | Indicates the tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| [NfcATag](arkts-connectivity-tag-nfcatag-t.md) | The {@link NfcATag} object. |

