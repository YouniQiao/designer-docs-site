# @ohos.net.vpn

Provides VPN related interfaces.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## 导入模块

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[addSysVpnConfig](arkts-vpn-addsysvpnconfig-f-sys.md#addSysVpnConfig-1) | Add a system VPN network configuration. |
| <!--DelRow-->[createVpnConnection](arkts-vpn-createvpnconnection-f-sys.md#createVpnConnection-1) | Create a VPN connection using the AbilityContext. |
| <!--DelRow-->[deleteSysVpnConfig](arkts-vpn-deletesysvpnconfig-f-sys.md#deleteSysVpnConfig-1) | Delete the configuration of system VPN network by the specified vpnId. |
| <!--DelRow-->[getConnectedSysVpnConfig](arkts-vpn-getconnectedsysvpnconfig-f-sys.md#getConnectedSysVpnConfig-1) | Get the connected VPN network configuration. |
| <!--DelRow-->[getConnectedVpnAppInfo](arkts-vpn-getconnectedvpnappinfo-f-sys.md#getConnectedVpnAppInfo-1) | Get the connected VPN App Info. |
| <!--DelRow-->[getSysVpnConfig](arkts-vpn-getsysvpnconfig-f-sys.md#getSysVpnConfig-1) | Get the configuration of system VPN network by the specified vpnId. |
| <!--DelRow-->[getSysVpnConfigList](arkts-vpn-getsysvpnconfiglist-f-sys.md#getSysVpnConfigList-1) | Get all system VPN network configuration. |
| <!--DelRow-->[off](arkts-vpn-off-f-sys.md#off-1) | Unsubscribes from vpn connect state changes. |
| <!--DelRow-->[off](arkts-vpn-off-f-sys.md#off-2) | Unsubscribes from vpn connect state changes. |
| <!--DelRow-->[on](arkts-vpn-on-f-sys.md#on-1) | Subscribes to vpn connect state changes. |
| <!--DelRow-->[on](arkts-vpn-on-f-sys.md#on-2) | Subscribes to vpn connect state changes. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[IpsecVpnConfig](arkts-vpn-ipsecvpnconfig-i-sys.md) | Define configuration of the ipsec VPN network. |
| <!--DelRow-->[L2tpVpnConfig](arkts-vpn-l2tpvpnconfig-i-sys.md) | Define configuration of the l2tp VPN network. |
| <!--DelRow-->[OpenVpnConfig](arkts-vpn-openvpnconfig-i-sys.md) | Define configuration of the open VPN network. |
| <!--DelRow-->[SysVpnConfig](arkts-vpn-sysvpnconfig-i-sys.md) | Define configuration of the system VPN network. |
| <!--DelRow-->[VpnConfig](arkts-vpn-vpnconfig-i-sys.md) | Define configuration of the VPN network. |
| <!--DelRow-->[VpnConnection](arkts-vpn-vpnconnection-i-sys.md) | Defines a VPN connection. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AbilityContext](arkts-vpn-abilitycontext-t.md) | The context of an ability. It allows access to ability-specific resources. |
| [LinkAddress](arkts-vpn-linkaddress-t.md) | Get network link information. |
| [RouteInfo](arkts-vpn-routeinfo-t.md) | Get network route information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SysVpnType](arkts-vpn-sysvpntype-e-sys.md) | Defines the type for the VPN network. |

