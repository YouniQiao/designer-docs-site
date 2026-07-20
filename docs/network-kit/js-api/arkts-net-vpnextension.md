# @ohos.net.vpnExtension

Provides VPN related interfaces.

**Since:** 11

<!--Device-unnamed-declare namespace vpnExtension--><!--Device-unnamed-declare namespace vpnExtension-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createVpnConnection](arkts-network-vpnextension-createvpnconnection-f.md#createvpnconnection-1) | Create a VPN connection using the VpnExtensionContext. |
| [createVpnObserver](arkts-network-vpnextension-createvpnobserver-f.md#createvpnobserver-1) | Create a VPN observer. |
| [startVpnExtensionAbility](arkts-network-vpnextension-startvpnextensionability-f.md#startvpnextensionability-1) | Starts a new vpn extension ability. |
| [stopVpnExtensionAbility](arkts-network-vpnextension-stopvpnextensionability-f.md#stopvpnextensionability-1) | Stops a service within the same application. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [isAlwaysOnVpnEnabled](arkts-network-vpnextension-isalwaysonvpnenabled-f-sys.md#isalwaysonvpnenabled-1) | Get the Always on VPN mode status for a device. |
| [setAlwaysOnVpnEnabled](arkts-network-vpnextension-setalwaysonvpnenabled-f-sys.md#setalwaysonvpnenabled-1) | Set the Enable/Disable Always on VPN mode for a device. |
| [updateVpnAuthorizedState](arkts-network-vpnextension-updatevpnauthorizedstate-f-sys.md#updatevpnauthorizedstate-1) | Update a VPN dialog authorize information |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [VpnConfig](arkts-network-vpnextension-vpnconfig-i.md) | Define configuration of the VPN network. |
| [VpnConnection](arkts-network-vpnextension-vpnconnection-i.md) | Defines a VPN connection. |
| [VpnObserver](arkts-network-vpnextension-vpnobserver-i.md) | Defines a VPN observer. |

### Types

| Name | Description |
| --- | --- |
| [LinkAddress](arkts-network-vpnextension-linkaddress-t.md) | Get network link information. |
| [RouteInfo](arkts-network-vpnextension-routeinfo-t.md) | Get network route information. |
| [VpnExtensionContext](arkts-network-vpnextension-vpnextensioncontext-t.md) | The context of vpn extension. It allows access to serviceExtension-specific resources. |

