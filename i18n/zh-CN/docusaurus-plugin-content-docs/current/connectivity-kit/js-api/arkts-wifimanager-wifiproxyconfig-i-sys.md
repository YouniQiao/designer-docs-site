# WifiProxyConfig

Wi-Fi Proxy config.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## proxyMethod

```TypeScript
proxyMethod?: ProxyMethod
```

Wi-Fi proxy method

**类型：** ProxyMethod

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## serverPort

```TypeScript
serverPort?: int
```

Server port for manual configured proxy.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## exclusionObjects

```TypeScript
exclusionObjects?: string
```

Exclusion objects for manual configured proxy. objects are separated by ','.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## pacWebAddress

```TypeScript
pacWebAddress?: string
```

PAC web address for auto configured proxy.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## serverHostName

```TypeScript
serverHostName?: string
```

Server host name for manual configured proxy.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

