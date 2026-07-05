# NfcATag

Provides interfaces to control the read and write of tags that support the NFC-A technology. <p>This class is inherited from the {@link TagSession} abstract class, and provides methods to create {@code NfcATag} objects and obtain the ATQA and SAK.

**Inheritance:** NfcATagextends: TagSession.

**Since:** 12

**System capability:** SystemCapability.Communication.NFC.Tag

## getAtqa

```TypeScript
getAtqa(): int[]
```

Obtains the ATQA of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int[] | Returns the ATQA of the NFC-A tag. |

## getSak

```TypeScript
getSak(): int
```

Obtains the SAK of an NFC-A tag.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the SAK of the NFC-A tag. |

