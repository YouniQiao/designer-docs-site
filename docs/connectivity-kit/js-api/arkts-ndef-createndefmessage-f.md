# createNdefMessage

## createNdefMessage

```TypeScript
function createNdefMessage(data: int[]): NdefMessage
```

Creates an NDEF message with raw bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | int[] | Yes | The raw bytes to parse NDEF message. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefMessage | The instance of NdefMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## createNdefMessage

```TypeScript
function createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage
```

Creates an NDEF message with record list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ndefRecords | NdefRecord[] | Yes | The NDEF records to parse NDEF message. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefMessage | The instance of NdefMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

