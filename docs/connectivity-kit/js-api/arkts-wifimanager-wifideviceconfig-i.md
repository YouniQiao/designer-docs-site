# WifiDeviceConfig

Wi-Fi device configuration information.

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## isSecureWifi

```TypeScript
isSecureWifi?: boolean
```

Secure wifi detect config: false - not, true - yes.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## disableReason

```TypeScript
disableReason?: int
```

Disable reason

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## preSharedKey

```TypeScript
preSharedKey: string
```

Wi-Fi key: maximum length is 64.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## proxyConfig

```TypeScript
proxyConfig?: WifiProxyConfig
```

Proxy config.

**Type:** WifiProxyConfig

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## netId

```TypeScript
netId?: int
```

Allocated networkId

**Type:** int

**Since:** 22

**System capability:** SystemCapability.Communication.WiFi.STA

## eapConfig

```TypeScript
eapConfig?: WifiEapConfig
```

EAP config info.

**Type:** WifiEapConfig

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

## staticIp

```TypeScript
staticIp?: IpConfig
```

IP config of static

**Type:** IpConfig

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## bssid

```TypeScript
bssid?: string
```

Wi-Fi bssid(MAC): the length is 6.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## isHiddenSsid

```TypeScript
isHiddenSsid?: boolean
```

Hide SSID or not, false(default): not hide

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## configStatus

```TypeScript
configStatus?: int
```

Device config status: 0 - enabled, 1 - disabled, 2 - permanent disabled, 3 - unknown.

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## bssidType

```TypeScript
bssidType?: DeviceAddressType
```

Wi-Fi bssid type.

**Type:** DeviceAddressType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## randomMacType

```TypeScript
randomMacType?: int
```

Random mac type

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## wapiConfig

```TypeScript
wapiConfig?: WifiWapiConfig
```

WAPI config info.

**Type:** WifiWapiConfig

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## staticIpv6

```TypeScript
staticIpv6?: Ipv6Config
```

IPv6 config of static

**Type:** Ipv6Config

**Since:** 20

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## creatorUid

```TypeScript
creatorUid?: int
```

The UID of the Wi-Fi configuration creator.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## securityType

```TypeScript
securityType: WifiSecurityType
```

Security type: reference definition of WifiSecurityType

**Type:** WifiSecurityType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## family

```TypeScript
family?: int
```

Static IP family: 0 - IPv4, 1 - Ipv6.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## randomMacAddr

```TypeScript
randomMacAddr?: string
```

Random mac address, the length is 6.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## ipType

```TypeScript
ipType?: IpType
```

IP Type

**Type:** IpType

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## isAutoConnectAllowed

```TypeScript
isAutoConnectAllowed?: boolean
```

Allow auto connect config: false - not, true - yes.

**Type:** boolean

**Since:** 17

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

