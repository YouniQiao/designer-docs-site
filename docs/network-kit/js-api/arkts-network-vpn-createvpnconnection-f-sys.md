# createVpnConnection (System API)

## Modules to Import

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

<a id="createvpnconnection"></a>
## createVpnConnection

```TypeScript
function createVpnConnection(context: AbilityContext): VpnConnection
```

Create a VPN connection using the AbilityContext.

**Since:** 10

<!--Device-vpn-function createVpnConnection(context: AbilityContext): VpnConnection--><!--Device-vpn-function createVpnConnection(context: AbilityContext): VpnConnection-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [AbilityContext](arkts-network-vpn-abilitycontext-t.md) | Yes | Indicates the context of application or capability. |

**Return value:**

| Type | Description |
| --- | --- |
| [VpnConnection](arkts-network-vpnextension-vpnconnection-i.md) | the VpnConnection of the construct VpnConnection instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

Stage model:

```TypeScript
import { vpn } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  functiontest()
  {
    console.info("vpn createVpnConnection: " + JSON.stringify(this.VpnConnection));
  }
  build() {  }
}

```

