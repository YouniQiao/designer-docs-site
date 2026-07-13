# NfcVTag

Provides methods for creating an NFC-V tag, obtaining tag information, and controlling tag read and write.
<p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an
{@code NfcVTag} and obtain the tag information.

**Inheritance/Implementation:** NfcVTag extends [TagSession](arkts-connectivity-tagsession-i.md)

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getDsfId

```TypeScript
getDsfId(): number
```

Obtains the response flags from this {@code NfcVTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the response flags. |

## getResponseFlags

```TypeScript
getResponseFlags(): number
```

Obtains the response flags from this {@code NfcVTag} instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the response flags. |

