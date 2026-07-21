# NfcATag

Provides interfaces to control the read and write of tags that support the NFC-A technology.<p>This class is inherited from the {@link TagSession} abstract class, and provides methods to create{@code NfcATag} objects and obtain the ATQA and SAK.

**Inheritance/Implementation:** NfcATag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 12

<!--Device-unnamed-export interface NfcATag extends TagSession--><!--Device-unnamed-export interface NfcATag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="getatqa"></a>
## getAtqa

```TypeScript
getAtqa(): number[]
```

Obtains the ATQA of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NfcATag-getAtqa(): int[]--><!--Device-NfcATag-getAtqa(): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the ATQA of the NFC-A tag. |

<a id="getsak"></a>
## getSak

```TypeScript
getSak(): number
```

Obtains the SAK of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NfcATag-getSak(): int--><!--Device-NfcATag-getSak(): int-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the SAK of the NFC-A tag. |

