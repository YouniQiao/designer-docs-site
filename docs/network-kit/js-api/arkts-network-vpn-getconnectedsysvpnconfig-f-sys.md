# getConnectedSysVpnConfig (System API)

## Modules to Import

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

<a id="getconnectedsysvpnconfig"></a>
## getConnectedSysVpnConfig

```TypeScript
function getConnectedSysVpnConfig(): Promise<SysVpnConfig>
```

Get the connected VPN network configuration.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_VPN

<!--Device-vpn-function getConnectedSysVpnConfig(): Promise<SysVpnConfig>--><!--Device-vpn-function getConnectedSysVpnConfig(): Promise<SysVpnConfig>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SysVpnConfig&gt; | The promise returned by the connected VPN network configuration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

