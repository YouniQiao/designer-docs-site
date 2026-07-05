# makeTextRecord

## makeTextRecord

```TypeScript
function makeTextRecord(text: string, locale: string): NdefRecord
```

Creates an NDEF record with text data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Text data for new an NDEF record. |
| locale | string | Yes | Language code for the NDEF record. if locale is null, use default locale. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

