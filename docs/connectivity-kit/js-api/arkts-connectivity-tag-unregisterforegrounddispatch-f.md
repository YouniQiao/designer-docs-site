# unregisterForegroundDispatch

## Modules to Import

```TypeScript
import { tag } from '@kit.ConnectivityKit';
```

<a id="unregisterforegrounddispatch"></a>
## unregisterForegroundDispatch

```TypeScript
function unregisterForegroundDispatch(elementName: ElementName): void
```

Unregister tag foreground dispatch.

**Since:** 12

**Required permissions:** ohos.permission.NFC_TAG

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-tag-function unregisterForegroundDispatch(elementName: ElementName): void--><!--Device-tag-function unregisterForegroundDispatch(elementName: ElementName): void-End-->

**System capability:** SystemCapability.Communication.NFC.Tag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | [ElementName](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-elementname-t.md) | Yes | The element name of application, must include the bundleName and abilityName. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3100201](../errorcode-nfc.md#3100201-tag-readwrite-error) | The tag running state is abnormal in the service. |

