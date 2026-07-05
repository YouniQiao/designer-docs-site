# makeExternalRecord

## makeExternalRecord

```TypeScript
function makeExternalRecord(domainName: string, type: string, externalData: int[]): NdefRecord
```

Creates an NDEF record with external data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainName | string | Yes | Domain name of issuing organization for the external data. |
| type | string | Yes | Domain specific type of data for the external data. |
| externalData | int[] | Yes | Data payload of an NDEF record. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

