# VpnConfig

Define configuration of the VPN network.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## 导入模块

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## isInternal

```TypeScript
isInternal?: boolean
```

Whether to use the built-in VPN. The default value is false.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## dnsAddresses

```TypeScript
dnsAddresses?: Array<string>
```

The array of DNS servers for the VPN network.

**类型：** Array<string>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## routes

```TypeScript
routes?: Array<RouteInfo>
```

The array of routes for VPN interface.

**类型：** Array<RouteInfo>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## addresses

```TypeScript
addresses: Array<LinkAddress>
```

The array of addresses for VPN interface.

**类型：** Array<LinkAddress>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## isBlocking

```TypeScript
isBlocking?: boolean
```

Whether the VPN interface's file descriptor is in blocking/non-blocking mode. The default value is false.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## searchDomains

```TypeScript
searchDomains?: Array<string>
```

The array of search domains for the DNS resolver.

**类型：** Array<string>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## isIPv4Accepted

```TypeScript
isIPv4Accepted?: boolean
```

Whether ipv4 is supported. The default value is true.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## vpnId

```TypeScript
vpnId?: string
```

The uuid for the VPN network.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## trustedApplications

```TypeScript
trustedApplications?: Array<string>
```

The array of trustlist for the VPN network. The string indicates package name.

**类型：** Array<string>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## blockedApplications

```TypeScript
blockedApplications?: Array<string>
```

The array of blocklist for the VPN network. The string indicates package name.

**类型：** Array<string>

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## isIPv6Accepted

```TypeScript
isIPv6Accepted?: boolean
```

Whether ipv6 is supported. The default value is false.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## mtu

```TypeScript
mtu?: number
```

The maximum transmission unit (MTU) for the VPN interface.

**类型：** number

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.Vpn

