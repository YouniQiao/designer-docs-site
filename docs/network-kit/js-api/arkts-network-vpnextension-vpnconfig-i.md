# VpnConfig

Define configuration of the VPN network.

**Since:** 11

<!--Device-vpnExtension-export interface VpnConfig--><!--Device-vpnExtension-export interface VpnConfig-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## Modules to Import

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## addresses

```TypeScript
addresses: Array<LinkAddress>
```

The array of addresses for VPN interface.

**Type:** Array<LinkAddress>

**Since:** 11

<!--Device-VpnConfig-addresses: Array<LinkAddress>--><!--Device-VpnConfig-addresses: Array<LinkAddress>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## blockedApplications

```TypeScript
blockedApplications?: Array<string>
```

The array of blocklist for the VPN network. The string indicates package name.

**Type:** Array<string>

**Since:** 11

<!--Device-VpnConfig-blockedApplications?: Array<string>--><!--Device-VpnConfig-blockedApplications?: Array<string>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## dnsAddresses

```TypeScript
dnsAddresses?: Array<string>
```

The array of DNS servers for the VPN network.

**Type:** Array<string>

**Since:** 11

<!--Device-VpnConfig-dnsAddresses?: Array<string>--><!--Device-VpnConfig-dnsAddresses?: Array<string>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## isBlocking

```TypeScript
isBlocking?: boolean
```

Whether the VPN interface's file descriptor is in blocking/non-blocking mode. The default value is false.

**Type:** boolean

**Since:** 11

<!--Device-VpnConfig-isBlocking?: boolean--><!--Device-VpnConfig-isBlocking?: boolean-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## isIPv4Accepted

```TypeScript
isIPv4Accepted?: boolean
```

Whether ipv4 is supported. The default value is true.

**Type:** boolean

**Since:** 11

<!--Device-VpnConfig-isIPv4Accepted?: boolean--><!--Device-VpnConfig-isIPv4Accepted?: boolean-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## isIPv6Accepted

```TypeScript
isIPv6Accepted?: boolean
```

Whether ipv6 is supported. The default value is false.

**Type:** boolean

**Since:** 11

<!--Device-VpnConfig-isIPv6Accepted?: boolean--><!--Device-VpnConfig-isIPv6Accepted?: boolean-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## isInternal

```TypeScript
isInternal?: boolean
```

Whether to use the built-in VPN. The default value is false.

**Type:** boolean

**Since:** 11

<!--Device-VpnConfig-isInternal?: boolean--><!--Device-VpnConfig-isInternal?: boolean-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## mtu

```TypeScript
mtu?: number
```

The maximum transmission unit (MTU) for the VPN interface.

**Type:** number

**Since:** 11

<!--Device-VpnConfig-mtu?: number--><!--Device-VpnConfig-mtu?: number-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## routes

```TypeScript
routes?: Array<RouteInfo>
```

The array of routes for VPN interface.

**Type:** Array<RouteInfo>

**Since:** 11

<!--Device-VpnConfig-routes?: Array<RouteInfo>--><!--Device-VpnConfig-routes?: Array<RouteInfo>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## searchDomains

```TypeScript
searchDomains?: Array<string>
```

The array of search domains for the DNS resolver.

**Type:** Array<string>

**Since:** 11

<!--Device-VpnConfig-searchDomains?: Array<string>--><!--Device-VpnConfig-searchDomains?: Array<string>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## trustedApplications

```TypeScript
trustedApplications?: Array<string>
```

The array of trustlist for the VPN network. The string indicates package name.

**Type:** Array<string>

**Since:** 11

<!--Device-VpnConfig-trustedApplications?: Array<string>--><!--Device-VpnConfig-trustedApplications?: Array<string>-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

## vpnId

```TypeScript
vpnId?: string
```

The uuid for the VPN network.

**Type:** string

**Since:** 20

<!--Device-VpnConfig-vpnId?: string--><!--Device-VpnConfig-vpnId?: string-End-->

**System capability:** SystemCapability.Communication.NetManager.Vpn

