# setAlwaysOnVpnEnabled (System API)

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## setAlwaysOnVpnEnabled

```TypeScript
function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>
```

Set the Enable/Disable Always on VPN mode for a device.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the stage model.

<!--Device-vpnExtension-function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>--><!--Device-vpnExtension-function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Always on enable or disable |
| bundleName | string | Yes | bundleName is used to set always on. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

