# NfcFTag

Provides methods for creating an NFC-F tag, obtaining tag information, and controlling tag read and write.<p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an{@code NfcFTag} and obtain the tag information.

**Inheritance/Implementation:** NfcFTag extends [TagSession](arkts-connectivity-tagsession-tagsession-i.md)

**Since:** 12

<!--Device-unnamed-export interface NfcFTag extends TagSession--><!--Device-unnamed-export interface NfcFTag extends TagSession-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

<a id="getpmm"></a>
## getPmm

```TypeScript
getPmm(): number[]
```

Obtains the PMm (consisting of the IC code and manufacturer parameters) from this {@code NfcFTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NfcFTag-getPmm(): int[]--><!--Device-NfcFTag-getPmm(): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the PMm. |

<a id="getsystemcode"></a>
## getSystemCode

```TypeScript
getSystemCode(): number[]
```

Obtains the system code from this {@code NfcFTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NfcFTag-getSystemCode(): int[]--><!--Device-NfcFTag-getSystemCode(): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the system code. |

