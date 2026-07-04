# NetFirewallIpParams

Firewall IP parameters.

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## Modules to Import

```TypeScript
import { netFirewall } from '@ohos.net.netFirewall';
```

## address

```TypeScript
address?: string
```

IP address: Valid when type equals 1, otherwise it will be ignored.

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## endIp

```TypeScript
endIp?: string
```

End IP: valid when type equals 2, otherwise it will be ignored.

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## family

```TypeScript
family?: number
```

1: IPv4, 2: IPv6, default is IPv4.

**Type:** number

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## mask

```TypeScript
mask?: number
```

IPv4: subnet mask, IPv6: prefix, valid when type equals 1, otherwise it will be ignored.

**Type:** number

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## startIp

```TypeScript
startIp?: string
```

Start IP: valid when type equals 2, otherwise it will be ignored.

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## type

```TypeScript
type: number
```

1: IP address or subnet, when using a single IP, the mask is 32; 2: IP segment.

**Type:** number

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

