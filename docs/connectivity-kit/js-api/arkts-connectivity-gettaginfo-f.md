# getTagInfo

## Modules to Import

```TypeScript
import { tag } from '@ohos.nfc.tag';
```

## getTagInfo

```TypeScript
function getTagInfo(want: Want): TagInfo
```

Parse a {@link TagInfo} object from Want.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | The want object that contains the values of TagInfo. |

**Return value:**

| Type | Description |
| --- | --- |
| TagInfo | The {@link TagInfo} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

