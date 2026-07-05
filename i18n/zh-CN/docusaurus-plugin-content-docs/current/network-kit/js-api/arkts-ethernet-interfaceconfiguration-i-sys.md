# InterfaceConfiguration

Defines the network configuration for the Ethernet connection.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { ethernet } from '@kit.NetworkKit';
```

## mode

```TypeScript
mode: IPSetMode
```

**类型：** IPSetMode

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## route

```TypeScript
route: string
```

Ethernet connection static configuration route information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## httpProxy

```TypeScript
httpProxy?: HttpProxy
```

Indicates the HttpProxy settings, no proxy is to be used as default.

**类型：** HttpProxy

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## netMask

```TypeScript
netMask: string
```

Ethernet connection static configuration netMask information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## dnsServers

```TypeScript
dnsServers: string
```

The Ethernet connection is configured with the dns service address. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured, Multiple addresses are separated by ",")

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## gateway

```TypeScript
gateway: string
```

Ethernet connection static configuration gateway information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

## ipAddr

```TypeScript
ipAddr: string
```

Ethernet connection static configuration IP information. The address value range is 0-255.0-255.0-255.0-255.0-255 (DHCP mode does not need to be configured)

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

