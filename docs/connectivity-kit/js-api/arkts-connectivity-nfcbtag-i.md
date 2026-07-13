# NfcBTag

Provides interfaces to create an {@code NfcBTag} and perform I/O operations on the tag.
<p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an
{@code NfcBTag} and obtain the tag information.

**Inheritance/Implementation:** NfcBTag extends [TagSession](arkts-connectivity-tagsession-i.md)

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getRespAppData

```TypeScript
getRespAppData(): number[]
```

Obtains the application data of a tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the application data of the tag. |

## getRespProtocol

```TypeScript
getRespProtocol(): number[]
```

Obtains the protocol information of a tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the protocol information of the tag. |

