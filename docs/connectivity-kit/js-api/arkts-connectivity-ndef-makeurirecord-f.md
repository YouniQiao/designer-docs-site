# makeUriRecord

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

<a id="makeurirecord"></a>
## makeUriRecord

```TypeScript
function makeUriRecord(uri: string): NdefRecord
```

Creates an NDEF record with uri data.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ndef-function makeUriRecord(uri: string): NdefRecord--><!--Device-ndef-function makeUriRecord(uri: string): NdefRecord-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Uri data for new NDEF record. |

**Return value:**

| Type | Description |
| --- | --- |
| [NdefRecord](arkts-connectivity-tag-ndefrecord-i.md) | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

