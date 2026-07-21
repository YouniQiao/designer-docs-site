# getPairedDevices

## Modules to Import

```TypeScript
import { manager } from '@kit.ConnectivityKit';
```

<a id="getpaireddevices"></a>
## getPairedDevices

```TypeScript
function getPairedDevices(): string[]
```

Gets the list of devices that have been paired with the current device.If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned.Otherwise, a random device address is returned.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-manager-function getPairedDevices(): string[]--><!--Device-manager-function getPairedDevices(): string[]-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Returns a list of paired devices' address in MAC format (e.g., "11:22:33:AA:BB:FF"). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

