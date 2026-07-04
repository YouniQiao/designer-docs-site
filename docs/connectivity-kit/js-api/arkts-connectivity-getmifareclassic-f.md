# getMifareClassic

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## getMifareClassic

```TypeScript
function getMifareClassic(tagInfo: TagInfo): MifareClassicTag
```

Obtains an {@link MifareClassicTag} object based on the tag information. During tag reading, if the tag supports the MIFARE Classic technology, an {@link MifareClassicTag} object will be created based on the tag information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tagInfo | TagInfo | Yes | Indicates the dispatched tag information. |

**Return value:**

| Type | Description |
| --- | --- |
| MifareClassicTag | The {@link MifareClassicTag} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

