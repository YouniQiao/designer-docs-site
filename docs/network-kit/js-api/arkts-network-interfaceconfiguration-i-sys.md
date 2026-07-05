# InterfaceConfiguration (System API)

Defines the network configuration for the Ethernet connection.

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { ethernet } from '@ohos.net.ethernet';
```

## dnsServers

```TypeScript
dnsServers: string
```

The Ethernet connection is configured with the dns service address. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured, Multiple addresses are separated by ",")

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## gateway

```TypeScript
gateway: string
```

Ethernet connection static configuration gateway information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## httpProxy

```TypeScript
httpProxy?: HttpProxy
```

Indicates the HttpProxy settings, no proxy is to be used as default.

**Type:** HttpProxy

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## ipAddr

```TypeScript
ipAddr: string
```

Ethernet connection static configuration IP information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## mode

```TypeScript
mode: IPSetMode
```

**Type:** IPSetMode

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## netMask

```TypeScript
netMask: string
```

Ethernet connection static configuration netMask information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

## route

```TypeScript
route: string
```

Ethernet connection static configuration route information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

