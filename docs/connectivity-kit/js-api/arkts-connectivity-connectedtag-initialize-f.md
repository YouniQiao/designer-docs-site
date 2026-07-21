# initialize

## Modules to Import

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
```

<a id="initialize"></a>
## initialize

```TypeScript
function initialize(): void
```

Initializes the connected NFC tag.

**Since:** 9

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-connectedTag-function initialize(): void--><!--Device-connectedTag-function initialize(): void-End-->

**System capability:** SystemCapability.Communication.ConnectedTag

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3200101](../errorcode-nfc.md#3200101-abnormal-active-nfc-tag-status) | Connected NFC tag running state is abnormal in service. |

