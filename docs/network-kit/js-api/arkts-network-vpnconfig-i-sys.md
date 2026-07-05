# VpnConfig (System API)

Define configuration of the VPN network.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { vpn } from '@ohos.net.vpn';
```

## addresses

```TypeScript
addresses: Array<LinkAddress>
```

The array of addresses for VPN interface.

**Type:** Array<LinkAddress>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## blockedApplications

```TypeScript
blockedApplications?: Array<string>
```

The array of blocklist for the VPN network. The string indicates package name.

**Type:** Array<string>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## dnsAddresses

```TypeScript
dnsAddresses?: Array<string>
```

The array of DNS servers for the VPN network.

**Type:** Array<string>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## isBlocking

```TypeScript
isBlocking?: boolean
```

Whether the VPN interface's file descriptor is in blocking/non-blocking mode. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## isIPv4Accepted

```TypeScript
isIPv4Accepted?: boolean
```

Whether ipv4 is supported. The default value is true.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## isIPv6Accepted

```TypeScript
isIPv6Accepted?: boolean
```

Whether ipv6 is supported. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## isLegacy

```TypeScript
isLegacy?: boolean
```

Whether to use the built-in VPN. The default value is false.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## mtu

```TypeScript
mtu?: number
```

The maximum transmission unit (MTU) for the VPN interface.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## routes

```TypeScript
routes?: Array<RouteInfo>
```

The array of routes for VPN interface.

**Type:** Array<RouteInfo>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## searchDomains

```TypeScript
searchDomains?: Array<string>
```

The array of search domains for the DNS resolver.

**Type:** Array<string>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## trustedApplications

```TypeScript
trustedApplications?: Array<string>
```

The array of trustlist for the VPN network. The string indicates package name.

**Type:** Array<string>

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

## vpnId

```TypeScript
vpnId?: string
```

The uuid for the VPN network.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

