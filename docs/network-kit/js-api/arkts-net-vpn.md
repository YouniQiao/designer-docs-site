# @ohos.net.vpn

Provides VPN related interfaces.

**Since:** 10

<!--Device-unnamed-declare namespace vpn--><!--Device-unnamed-declare namespace vpn-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## Modules to Import

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addSysVpnConfig](arkts-network-vpn-addsysvpnconfig-f-sys.md#addsysvpnconfig-1) | Add a system VPN network configuration. |
| [createVpnConnection](arkts-network-vpn-createvpnconnection-f-sys.md#createvpnconnection-1) | Create a VPN connection using the AbilityContext. |
| [deleteSysVpnConfig](arkts-network-vpn-deletesysvpnconfig-f-sys.md#deletesysvpnconfig-1) | Delete the configuration of system VPN network by the specified vpnId. |
| [getConnectedSysVpnConfig](arkts-network-vpn-getconnectedsysvpnconfig-f-sys.md#getconnectedsysvpnconfig-1) | Get the connected VPN network configuration. |
| [getConnectedVpnAppInfo](arkts-network-vpn-getconnectedvpnappinfo-f-sys.md#getconnectedvpnappinfo-1) | Get the connected VPN App Info. |
| [getSysVpnConfig](arkts-network-vpn-getsysvpnconfig-f-sys.md#getsysvpnconfig-1) | Get the configuration of system VPN network by the specified vpnId. |
| [getSysVpnConfigList](arkts-network-vpn-getsysvpnconfiglist-f-sys.md#getsysvpnconfiglist-1) | Get all system VPN network configuration. |
| [off](arkts-network-vpn-off-f-sys.md#off-1) | Unsubscribes from vpn connect state changes. |
| [off](arkts-network-vpn-off-f-sys.md#off-2) | Unsubscribes from vpn connect state changes. |
| [on](arkts-network-vpn-on-f-sys.md#on-1) | Subscribes to vpn connect state changes. |
| [on](arkts-network-vpn-on-f-sys.md#on-2) | Subscribes to vpn connect state changes. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [IpsecVpnConfig](arkts-network-vpn-ipsecvpnconfig-i-sys.md) | Define configuration of the ipsec VPN network. |
| [L2tpVpnConfig](arkts-network-vpn-l2tpvpnconfig-i-sys.md) | Define configuration of the l2tp VPN network. |
| [OpenVpnConfig](arkts-network-vpn-openvpnconfig-i-sys.md) | Define configuration of the open VPN network. |
| [SysVpnConfig](arkts-network-vpn-sysvpnconfig-i-sys.md) | Define configuration of the system VPN network. |
| [VpnConfig](arkts-network-vpn-vpnconfig-i-sys.md) | Define configuration of the VPN network. |
| [VpnConnection](arkts-network-vpn-vpnconnection-i-sys.md) | Defines a VPN connection. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SysVpnType](arkts-network-vpn-sysvpntype-e-sys.md) | Defines the type for the VPN network. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityContext](arkts-network-vpn-abilitycontext-t.md) | The context of an ability. It allows access to ability-specific resources. |
| [LinkAddress](arkts-network-vpn-linkaddress-t.md) | Get network link information. |
| [RouteInfo](arkts-network-vpn-routeinfo-t.md) | Get network route information. |

