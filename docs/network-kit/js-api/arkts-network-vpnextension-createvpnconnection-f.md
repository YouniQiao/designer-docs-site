# createVpnConnection

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

<a id="createvpnconnection"></a>
## createVpnConnection

```TypeScript
function createVpnConnection(context: VpnExtensionContext): VpnConnection
```

Create a VPN connection using the VpnExtensionContext.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-vpnExtension-function createVpnConnection(context: VpnExtensionContext): VpnConnection--><!--Device-vpnExtension-function createVpnConnection(context: VpnExtensionContext): VpnConnection-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [VpnExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-common-vpnextensioncontext-t.md) | Yes | Indicates the context of application or capability. |

**Return value:**

| Type | Description |
| --- | --- |
| [VpnConnection](arkts-network-vpnextension-vpnconnection-i.md) | the VpnConnection of the construct VpnConnection instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

