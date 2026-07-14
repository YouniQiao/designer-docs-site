# NfcFTag

Provides methods for creating an NFC-F tag, obtaining tag information, and controlling tag read and write. <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an {@code NfcFTag} and obtain the tag information.

**Inheritance/Implementation:** NfcFTag extends [TagSession](arkts-connectivity-tagsession-i.md)

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getPmm

```TypeScript
getPmm(): number[]
```

Obtains the PMm (consisting of the IC code and manufacturer parameters) from this {@code NfcFTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the PMm. |

## getSystemCode

```TypeScript
getSystemCode(): number[]
```

Obtains the system code from this {@code NfcFTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the system code. |

