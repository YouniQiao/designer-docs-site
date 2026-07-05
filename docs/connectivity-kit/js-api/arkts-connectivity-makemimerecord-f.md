# makeMimeRecord

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## makeMimeRecord

```TypeScript
function makeMimeRecord(mimeType: string, mimeData: number[]): NdefRecord
```

Creates an NDEF record with mime data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | type of mime data for new an NDEF record. |
| mimeData | number[] | Yes | mime data for new an NDEF record. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

