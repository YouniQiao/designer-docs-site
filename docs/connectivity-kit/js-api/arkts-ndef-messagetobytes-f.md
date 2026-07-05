# messageToBytes

## messageToBytes

```TypeScript
function messageToBytes(ndefMessage: NdefMessage): int[]
```

Parses an NDEF message into raw bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ndefMessage | NdefMessage | Yes | An NDEF message to parse. |

**Return value:**

| Type | Description |
| --- | --- |
| int[] | Returns the raw bytes of an NDEF message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

