# WifiScanInfo

Describes the scanned Wi-Fi information.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## supportedWifiCategory

```TypeScript
supportedWifiCategory: WifiCategory
```

Supported wifi category

**类型：** WifiCategory

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## infoElems

```TypeScript
infoElems: Array<WifiInfoElem>
```

Information elements.

**类型：** Array<WifiInfoElem>

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## rssi

```TypeScript
rssi: int
```

Received signal strength indicator (RSSI)

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## capabilities

```TypeScript
capabilities: string
```

Hotspot capability

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

Wi-Fi bssid(MAC): the length is 6

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## centerFrequency1

```TypeScript
centerFrequency1: int
```

Center frequency 1.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## centerFrequency0

```TypeScript
centerFrequency0: int
```

Center frequency 0.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## bssidType

```TypeScript
bssidType: DeviceAddressType
```

Wi-Fi bssid type

**类型：** DeviceAddressType

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## frequency

```TypeScript
frequency: int
```

Frequency

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHiLinkNetwork

```TypeScript
isHiLinkNetwork: boolean
```

Whether the Wi-Fi hotspot is HiLink network.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHiLinkProNetwork

```TypeScript
isHiLinkProNetwork?: boolean
```

Whether the Wi-Fi hotspot is HiLinkPro network.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## securityType

```TypeScript
securityType: WifiSecurityType
```

Security type: reference definition of WifiSecurityType

**类型：** WifiSecurityType

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## channelWidth

```TypeScript
channelWidth: int
```

Channel width

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## band

```TypeScript
band: int
```

Frequency band, 1: 2.4G, 2: 5G

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## timestamp

```TypeScript
timestamp: long
```

Time stamp

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

