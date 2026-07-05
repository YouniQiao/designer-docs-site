# WifiLinkedInfo

Wi-Fi connection information.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## macType

```TypeScript
macType: int
```

Type of macAddress: 0 - real mac, 1 - random mac.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## connState

```TypeScript
connState: ConnState
```

The state of this Wi-Fi connection.

**类型：** ConnState

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

The BSSID of the Wi-Fi hotspot

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## suppState

```TypeScript
suppState: SuppState
```

The state of the supplicant of this Wi-Fi connection.

**类型：** SuppState

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## ssid

```TypeScript
ssid: string
```

The SSID of the Wi-Fi hotspot

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## frequency

```TypeScript
frequency: int
```

The frequency of a Wi-Fi access point.

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## maxSupportedTxLinkSpeed

```TypeScript
maxSupportedTxLinkSpeed: int
```

Max tx speed of a Wi-Fi access point.

**类型：** int

**起始版本：** 10

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

## chload

```TypeScript
chload: int
```

The load value of this Wi-Fi connection. A greater value indicates a higher load.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## maxSupportedRxLinkSpeed

```TypeScript
maxSupportedRxLinkSpeed: int
```

Max rx speed of a Wi-Fi access point.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

## networkId

```TypeScript
networkId: int
```

The ID(uniquely identifies) of a Wi-Fi connection.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## band

```TypeScript
band: int
```

The frequency band of a Wi-Fi access point.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## supportedWifiCategory

```TypeScript
supportedWifiCategory: WifiCategory
```

Supported wifi category

**类型：** WifiCategory

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## rssi

```TypeScript
rssi: int
```

The RSSI(dBm) of a Wi-Fi access point.

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## ipAddress

```TypeScript
ipAddress: int
```

The IP address of this Wi-Fi connection.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## linkSpeed

```TypeScript
linkSpeed: int
```

The speed of a Wi-Fi access point.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## wifiTxRxValid

```TypeScript
wifiTxRxValid?: boolean
```

Whether Wi-Fi Tx and Rx are both working properly

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## isHidden

```TypeScript
isHidden: boolean
```

Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## macAddress

```TypeScript
macAddress: string
```

The Wi-Fi MAC address of a device.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHiLinkNetwork

```TypeScript
isHiLinkNetwork: boolean
```

Whether the Wi-Fi hotspot is HiLink network.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## snr

```TypeScript
snr: int
```

The signal-to-noise ratio (SNR) of this Wi-Fi connection.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## wifiLinkType

```TypeScript
wifiLinkType?: WifiLinkType
```

Wi-Fi link type

**类型：** WifiLinkType

**起始版本：** 18

**系统能力：** SystemCapability.Communication.WiFi.STA

## channelWidth

```TypeScript
channelWidth: WifiChannelWidth
```

Channel width of the connected hotspot.

**类型：** WifiChannelWidth

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

## rxLinkSpeed

```TypeScript
rxLinkSpeed: int
```

The rx speed of a Wi-Fi access point.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

## isRestricted

```TypeScript
isRestricted: boolean
```

Whether this Wi-Fi connection restricts the data volume.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## wifiStandard

```TypeScript
wifiStandard: WifiStandard
```

Wifi standard of current connection.

**类型：** WifiStandard

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

