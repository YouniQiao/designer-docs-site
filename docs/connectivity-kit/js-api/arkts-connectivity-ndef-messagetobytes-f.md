# messageToBytes

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

<a id="messagetobytes"></a>
## messageToBytes

```TypeScript
function messageToBytes(ndefMessage: NdefMessage): number[]
```

Parses an NDEF message into raw bytes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ndef-function messageToBytes(ndefMessage: NdefMessage): int[]--><!--Device-ndef-function messageToBytes(ndefMessage: NdefMessage): int[]-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ndefMessage | [NdefMessage](arkts-connectivity-nfctech-ndefmessage-i.md) | Yes | An NDEF message to parse. |

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Returns the raw bytes of an NDEF message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

