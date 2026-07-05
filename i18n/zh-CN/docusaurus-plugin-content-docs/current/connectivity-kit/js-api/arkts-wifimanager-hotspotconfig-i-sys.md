# HotspotConfig

Wi-Fi hotspot configuration information.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## preSharedKey

```TypeScript
preSharedKey: string
```

The password of the Wi-Fi hotspot

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## securityType

```TypeScript
securityType: WifiSecurityType
```

The encryption mode of the Wi-Fi hotspot

**类型：** WifiSecurityType

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## ipAddress

```TypeScript
ipAddress?: string
```

IP address of the dhcp server, it's a string, For example 192.168.43.1

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## maxConn

```TypeScript
maxConn: int
```

The maximum number of connections allowed by the Wi-Fi hotspot

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## channel

```TypeScript
channel?: int
```

The channel of the Wi-Fi hotspot.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## band

```TypeScript
band: int
```

The frequency band of the Wi-Fi hotspot

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

## ssid

```TypeScript
ssid: string
```

The SSID of the Wi-Fi hotspot

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

