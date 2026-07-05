# WifiDeviceConfig

Wi-Fi device configuration information.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## disableReason

```TypeScript
disableReason: number
```

Disable reason

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.disableReason

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## preSharedKey

```TypeScript
preSharedKey: string
```

Wi-Fi key: maximum length is 64

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.preSharedKey

**系统能力：** SystemCapability.Communication.WiFi.STA

## creatorUid

```TypeScript
creatorUid: number
```

The UID of the Wi-Fi configuration creator

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.creatorUid

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## netId

```TypeScript
netId: number
```

Allocated networkId

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.netId

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## staticIp

```TypeScript
staticIp: IpConfig
```

IP config of static

**类型：** IpConfig

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.staticIp

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## securityType

```TypeScript
securityType: WifiSecurityType
```

Security type: reference definition of WifiSecurityType

**类型：** WifiSecurityType

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.securityType

**系统能力：** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

Wi-Fi bssid(MAC): the length is 6

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.bssid

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHiddenSsid

```TypeScript
isHiddenSsid: boolean
```

Hide SSID or not, false(default): not hide

**类型：** boolean

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.isHiddenSsid

**系统能力：** SystemCapability.Communication.WiFi.STA

## randomMacAddr

```TypeScript
randomMacAddr: string
```

Random mac address, the length is 6

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacAddr

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## randomMacType

```TypeScript
randomMacType: number
```

Random mac type

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.randomMacType

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.ssid

**系统能力：** SystemCapability.Communication.WiFi.STA

## ipType

```TypeScript
ipType: IpType
```

IP Type

**类型：** IpType

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.WifiDeviceConfig.ipType

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

