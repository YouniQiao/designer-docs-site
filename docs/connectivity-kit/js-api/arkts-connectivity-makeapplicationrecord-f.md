# makeApplicationRecord

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## makeApplicationRecord

```TypeScript
function makeApplicationRecord(bundleName: string): NdefRecord
```

Creates an NDEF Record with OpenHarmony application bundle name.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The bundle name of application to make. |

**Return value:**

| Type | Description |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

