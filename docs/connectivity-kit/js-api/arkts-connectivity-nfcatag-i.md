# NfcATag

Provides interfaces to control the read and write of tags that support the NFC-A technology. <p>This class is inherited from the {@link TagSession} abstract class, and provides methods to create {@code NfcATag} objects and obtain the ATQA and SAK.

**Inheritance/Implementation:** NfcATag extends [TagSession](arkts-connectivity-tagsession-i.md)

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getAtqa

```TypeScript
getAtqa(): number[]
```

Obtains the ATQA of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the ATQA of the NFC-A tag. |

## getSak

```TypeScript
getSak(): number
```

Obtains the SAK of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the SAK of the NFC-A tag. |

