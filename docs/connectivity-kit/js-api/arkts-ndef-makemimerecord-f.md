# makeMimeRecord

## makeMimeRecord

```TypeScript
function makeMimeRecord(mimeType: string, mimeData: int[]): NdefRecord
```

Creates an NDEF record with mime data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | type of mime data for new an NDEF record. |
| mimeData | int[] | Yes | mime data for new an NDEF record. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

