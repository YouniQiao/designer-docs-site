# makeExternalRecord

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## makeExternalRecord

```TypeScript
function makeExternalRecord(domainName: string, type: string, externalData: number[]): NdefRecord
```

Creates an NDEF record with external data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainName | string | Yes | Domain name of issuing organization for the external data. |
| type | string | Yes | Domain specific type of data for the external data. |
| externalData | number[] | Yes | Data payload of an NDEF record. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

