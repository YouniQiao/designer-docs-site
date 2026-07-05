# @ohos.net.vpnExtension

Provides VPN related interfaces.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Vpn

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createVpnConnection](arkts-vpnextension-createvpnconnection-f.md#createVpnConnection-1) | Create a VPN connection using the VpnExtensionContext. |
| [createVpnObserver](arkts-vpnextension-createvpnobserver-f.md#createVpnObserver-1) | Create a VPN observer. |
| <!--DelRow-->[isAlwaysOnVpnEnabled](arkts-vpnextension-isalwaysonvpnenabled-f-sys.md#isAlwaysOnVpnEnabled-1) | Get the Always on VPN mode status for a device. |
| <!--DelRow-->[setAlwaysOnVpnEnabled](arkts-vpnextension-setalwaysonvpnenabled-f-sys.md#setAlwaysOnVpnEnabled-1) | Set the Enable/Disable Always on VPN mode for a device. |
| [startVpnExtensionAbility](arkts-vpnextension-startvpnextensionability-f.md#startVpnExtensionAbility-1) | Starts a new vpn extension ability. |
| [stopVpnExtensionAbility](arkts-vpnextension-stopvpnextensionability-f.md#stopVpnExtensionAbility-1) | Stops a service within the same application. |
| <!--DelRow-->[updateVpnAuthorizedState](arkts-vpnextension-updatevpnauthorizedstate-f-sys.md#updateVpnAuthorizedState-1) | Update a VPN dialog authorize information |

### Interfaces

| Name | Description |
| --- | --- |
| [VpnConfig](arkts-vpnextension-vpnconfig-i.md) | Define configuration of the VPN network. |
| [VpnConnection](arkts-vpnextension-vpnconnection-i.md) | Defines a VPN connection. |
| [VpnObserver](arkts-vpnextension-vpnobserver-i.md) | Defines a VPN observer. |

### Types

| Name | Description |
| --- | --- |
| [LinkAddress](arkts-vpnextension-linkaddress-t.md) | Get network link information. |
| [RouteInfo](arkts-vpnextension-routeinfo-t.md) | Get network route information. |
| [VpnExtensionContext](arkts-vpnextension-vpnextensioncontext-t.md) | The context of vpn extension. It allows access to serviceExtension-specific resources. |

