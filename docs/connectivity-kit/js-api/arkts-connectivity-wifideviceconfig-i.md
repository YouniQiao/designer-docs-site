# WifiDeviceConfig

Wi-Fi device configuration information.

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## bssid

```TypeScript
bssid?: string
```

Wi-Fi bssid(MAC): the length is 6.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.WiFi.STA

## bssidType

```TypeScript
bssidType?: DeviceAddressType
```

Wi-Fi bssid type.

**Type:** DeviceAddressType

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.WiFi.STA

## eapConfig

```TypeScript
eapConfig?: WifiEapConfig
```

EAP config info.

**Type:** WifiEapConfig

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

## isHiddenSsid

```TypeScript
isHiddenSsid?: boolean
```

Hide SSID or not, false(default): not hide

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## netId

```TypeScript
netId?: number
```

Allocated networkId

**Type:** number

**Since:** 22

**System capability:** SystemCapability.Communication.WiFi.STA

## preSharedKey

```TypeScript
preSharedKey: string
```

Wi-Fi key: maximum length is 64.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.WiFi.STA

## securityType

```TypeScript
securityType: WifiSecurityType
```

Security type: reference definition of WifiSecurityType

**Type:** WifiSecurityType

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Communication.WiFi.STA

## wapiConfig

```TypeScript
wapiConfig?: WifiWapiConfig
```

WAPI config info.

**Type:** WifiWapiConfig

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

