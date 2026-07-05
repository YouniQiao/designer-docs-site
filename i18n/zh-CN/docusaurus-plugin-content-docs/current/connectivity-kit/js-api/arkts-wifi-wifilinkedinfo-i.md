# WifiLinkedInfo

Wi-Fi connection information.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## rssi

```TypeScript
rssi: number
```

The RSSI(dBm) of a Wi-Fi access point.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.rssi

**系统能力：** SystemCapability.Communication.WiFi.STA

## connState

```TypeScript
connState: ConnState
```

The state of this Wi-Fi connection.

**类型：** ConnState

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.connState

**系统能力：** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

The BSSID of the Wi-Fi hotspot

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.bssid

**系统能力：** SystemCapability.Communication.WiFi.STA

## suppState

```TypeScript
suppState: SuppState
```

The state of the supplicant of this Wi-Fi connection.

**类型：** SuppState

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.suppState

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## ipAddress

```TypeScript
ipAddress: number
```

The IP address of this Wi-Fi connection.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.ipAddress

**系统能力：** SystemCapability.Communication.WiFi.STA

## linkSpeed

```TypeScript
linkSpeed: number
```

The speed of a Wi-Fi access point.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.linkSpeed

**系统能力：** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

The SSID of the Wi-Fi hotspot

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.ssid

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHidden

```TypeScript
isHidden: boolean
```

Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden.

**类型：** boolean

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.isHidden

**系统能力：** SystemCapability.Communication.WiFi.STA

## frequency

```TypeScript
frequency: number
```

The frequency of a Wi-Fi access point.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.frequency

**系统能力：** SystemCapability.Communication.WiFi.STA

## macAddress

```TypeScript
macAddress: string
```

The Wi-Fi MAC address of a device.

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.macAddress

**系统能力：** SystemCapability.Communication.WiFi.STA

## snr

```TypeScript
snr: number
```

The signal-to-noise ratio (SNR) of this Wi-Fi connection.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.snr

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## chload

```TypeScript
chload: number
```

The load value of this Wi-Fi connection. A greater value indicates a higher load.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.chload

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## networkId

```TypeScript
networkId: number
```

The ID(uniquely identifies) of a Wi-Fi connection.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.networkId

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## band

```TypeScript
band: number
```

The frequency band of a Wi-Fi access point.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.band

**系统能力：** SystemCapability.Communication.WiFi.STA

## isRestricted

```TypeScript
isRestricted: boolean
```

Whether this Wi-Fi connection restricts the data volume.

**类型：** boolean

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiLinkedInfo.isRestricted

**系统能力：** SystemCapability.Communication.WiFi.STA

