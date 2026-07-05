# WifiDeviceConfig

Wi-Fi device configuration information.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## 导入模块

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## isSecureWifi

```TypeScript
isSecureWifi?: boolean
```

Secure wifi detect config: false - not, true - yes.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## disableReason

```TypeScript
disableReason?: int
```

Disable reason

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## preSharedKey

```TypeScript
preSharedKey: string
```

Wi-Fi key: maximum length is 64.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## proxyConfig

```TypeScript
proxyConfig?: WifiProxyConfig
```

Proxy config.

**类型：** WifiProxyConfig

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## netId

```TypeScript
netId?: int
```

Allocated networkId

**类型：** int

**起始版本：** 22

**系统能力：** SystemCapability.Communication.WiFi.STA

## eapConfig

```TypeScript
eapConfig?: WifiEapConfig
```

EAP config info.

**类型：** WifiEapConfig

**起始版本：** 10

**系统能力：** SystemCapability.Communication.WiFi.STA

## staticIp

```TypeScript
staticIp?: IpConfig
```

IP config of static

**类型：** IpConfig

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## bssid

```TypeScript
bssid?: string
```

Wi-Fi bssid(MAC): the length is 6.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## isHiddenSsid

```TypeScript
isHiddenSsid?: boolean
```

Hide SSID or not, false(default): not hide

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

## configStatus

```TypeScript
configStatus?: int
```

Device config status: 0 - enabled, 1 - disabled, 2 - permanent disabled, 3 - unknown.

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## bssidType

```TypeScript
bssidType?: DeviceAddressType
```

Wi-Fi bssid type.

**类型：** DeviceAddressType

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## randomMacType

```TypeScript
randomMacType?: int
```

Random mac type

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## wapiConfig

```TypeScript
wapiConfig?: WifiWapiConfig
```

WAPI config info.

**类型：** WifiWapiConfig

**起始版本：** 12

**系统能力：** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

## staticIpv6

```TypeScript
staticIpv6?: Ipv6Config
```

IPv6 config of static

**类型：** Ipv6Config

**起始版本：** 20

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## creatorUid

```TypeScript
creatorUid?: int
```

The UID of the Wi-Fi configuration creator.

**类型：** int

**起始版本：** 9

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

## family

```TypeScript
family?: int
```

Static IP family: 0 - IPv4, 1 - Ipv6.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## randomMacAddr

```TypeScript
randomMacAddr?: string
```

Random mac address, the length is 6.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## ipType

```TypeScript
ipType?: IpType
```

IP Type

**类型：** IpType

**起始版本：** 9

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

## isAutoConnectAllowed

```TypeScript
isAutoConnectAllowed?: boolean
```

Allow auto connect config: false - not, true - yes.

**类型：** boolean

**起始版本：** 17

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

