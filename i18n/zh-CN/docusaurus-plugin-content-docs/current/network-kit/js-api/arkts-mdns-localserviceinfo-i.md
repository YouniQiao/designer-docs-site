# LocalServiceInfo

Defines the mDNS service information.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## 导入模块

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## serviceType

```TypeScript
serviceType: string
```

Service type. Use an underscore (_) as the prefix, for example, _http._tcp.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## port

```TypeScript
port?: number
```

Port number.

**类型：** number

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## serviceAttribute

```TypeScript
serviceAttribute?: Array<ServiceAttribute>
```

DNS-SD TXT record pairs.

**类型：** Array<ServiceAttribute>

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## host

```TypeScript
host?: NetAddress
```

IP address of the host.

**类型：** NetAddress

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## serviceName

```TypeScript
serviceName: string
```

Service name.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

