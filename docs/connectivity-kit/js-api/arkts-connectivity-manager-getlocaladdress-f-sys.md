# getLocalAddress (System API)

## Modules to Import

```TypeScript
import { manager } from '@kit.ConnectivityKit';
```

## getLocalAddress

```TypeScript
function getLocalAddress(): string
```

Gets the MAC address of the local device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC

**Model restriction:** This API can be used only in the stage model.

<!--Device-manager-function getLocalAddress(): string--><!--Device-manager-function getLocalAddress(): string-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The local MAC address. For example, "11:22:33:AA:BB:FF". |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

