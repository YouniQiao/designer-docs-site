# NetFirewallIpParams

Firewall IP parameters.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## 导入模块

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## endIp

```TypeScript
endIp?: string
```

End IP: valid when type equals 2, otherwise it will be ignored.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## startIp

```TypeScript
startIp?: string
```

Start IP: valid when type equals 2, otherwise it will be ignored.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## address

```TypeScript
address?: string
```

IP address: Valid when type equals 1, otherwise it will be ignored.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## family

```TypeScript
family?: number
```

1: IPv4, 2: IPv6, default is IPv4.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## type

```TypeScript
type: number
```

1: IP address or subnet, when using a single IP, the mask is 32; 2: IP segment.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## mask

```TypeScript
mask?: number
```

IPv4: subnet mask, IPv6: prefix, valid when type equals 1, otherwise it will be ignored.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

