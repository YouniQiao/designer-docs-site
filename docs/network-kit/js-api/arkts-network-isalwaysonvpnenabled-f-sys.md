# isAlwaysOnVpnEnabled (System API)

## Modules to Import

```TypeScript
import { vpnExtension } from '@ohos.net.vpnExtension';
```

## isAlwaysOnVpnEnabled

```TypeScript
function isAlwaysOnVpnEnabled(bundleName: string): Promise<boolean>
```

Get the Always on VPN mode status for a device.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundleName is used to retrieve whether it has the always on. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | return the mode for alway on vpn status |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

