# updateVpnAuthorizedState (System API)

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

<a id="updatevpnauthorizedstate"></a>
## updateVpnAuthorizedState

```TypeScript
function updateVpnAuthorizedState(bundleName: string): boolean
```

Update a VPN dialog authorize information

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the stage model.

<!--Device-vpnExtension-function updateVpnAuthorizedState(bundleName: string): boolean--><!--Device-vpnExtension-function updateVpnAuthorizedState(bundleName: string): boolean-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | authorize or not |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

