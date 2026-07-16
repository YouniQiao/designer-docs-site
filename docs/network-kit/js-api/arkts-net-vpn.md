# @ohos.net.vpn

Provides VPN related interfaces.

**Since:** 10

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
| [addSysVpnConfig](arkts-network-addsysvpnconfig-f-sys.md#addsysvpnconfig-1) | Add a system VPN network configuration. |
| [createVpnConnection](arkts-network-createvpnconnection-f-sys.md#createvpnconnection-1) | Create a VPN connection using the AbilityContext. |
| [deleteSysVpnConfig](arkts-network-deletesysvpnconfig-f-sys.md#deletesysvpnconfig-1) | Delete the configuration of system VPN network by the specified vpnId. |
| [getConnectedSysVpnConfig](arkts-network-getconnectedsysvpnconfig-f-sys.md#getconnectedsysvpnconfig-1) | Get the connected VPN network configuration. |
| [getConnectedVpnAppInfo](arkts-network-getconnectedvpnappinfo-f-sys.md#getconnectedvpnappinfo-1) | Get the connected VPN App Info. |
| [getSysVpnConfig](arkts-network-getsysvpnconfig-f-sys.md#getsysvpnconfig-1) | Get the configuration of system VPN network by the specified vpnId. |
| [getSysVpnConfigList](arkts-network-getsysvpnconfiglist-f-sys.md#getsysvpnconfiglist-1) | Get all system VPN network configuration. |
| [off](arkts-network-off-f-sys.md#off-1) | Unsubscribes from vpn connect state changes. |
| [off](arkts-network-off-f-sys.md#off-2) | Unsubscribes from vpn connect state changes. |
| [on](arkts-network-on-f-sys.md#on-1) | Subscribes to vpn connect state changes. |
| [on](arkts-network-on-f-sys.md#on-2) | Subscribes to vpn connect state changes. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [IpsecVpnConfig](arkts-network-ipsecvpnconfig-i-sys.md) | Define configuration of the ipsec VPN network. |
| [L2tpVpnConfig](arkts-network-l2tpvpnconfig-i-sys.md) | Define configuration of the l2tp VPN network. |
| [OpenVpnConfig](arkts-network-openvpnconfig-i-sys.md) | Define configuration of the open VPN network. |
| [SysVpnConfig](arkts-network-sysvpnconfig-i-sys.md) | Define configuration of the system VPN network. |
| [VpnConfig](arkts-network-vpnconfig-i-sys.md) | Define configuration of the VPN network. |
| [VpnConnection](arkts-network-vpnconnection-i-sys.md) | Defines a VPN connection. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SysVpnType](arkts-network-sysvpntype-e-sys.md) | Defines the type for the VPN network. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityContext](arkts-network-abilitycontext-t.md) | The context of an ability. It allows access to ability-specific resources. |
| [LinkAddress](arkts-network-linkaddress-t.md) | Get network link information. |
| [RouteInfo](arkts-network-routeinfo-t.md) | Get network route information. |

