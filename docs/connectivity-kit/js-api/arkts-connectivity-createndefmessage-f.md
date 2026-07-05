# createNdefMessage

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## createNdefMessage

```TypeScript
function createNdefMessage(data: number[]): NdefMessage
```

Creates an NDEF message with raw bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | number[] | Yes | The raw bytes to parse NDEF message. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefMessage | The instance of NdefMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |


## createNdefMessage

```TypeScript
function createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage
```

Creates an NDEF message with record list.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

