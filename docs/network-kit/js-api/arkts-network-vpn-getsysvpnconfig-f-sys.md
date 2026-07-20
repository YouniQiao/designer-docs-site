# getSysVpnConfig (System API)

## Modules to Import

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

## getSysVpnConfig

```TypeScript
function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>
```

Get the configuration of system VPN network by the specified vpnId.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_VPN

<!--Device-vpn-function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>--><!--Device-vpn-function getSysVpnConfig(vpnId: string): Promise<SysVpnConfig>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vpnId | string | Yes | Indicates the uuid of the VPN network. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<SysVpnConfig> | The promise returned by the VPN network configuration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

