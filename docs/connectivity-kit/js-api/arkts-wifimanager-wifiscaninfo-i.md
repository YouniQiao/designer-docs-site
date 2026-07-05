# WifiScanInfo

Describes the scanned Wi-Fi information.

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## supportedWifiCategory

```TypeScript
supportedWifiCategory: WifiCategory
```

Supported wifi category

**Type:** WifiCategory

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## infoElems

```TypeScript
infoElems: Array<WifiInfoElem>
```

Information elements.

**Type:** Array<WifiInfoElem>

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## rssi

```TypeScript
rssi: int
```

Received signal strength indicator (RSSI)

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## capabilities

```TypeScript
capabilities: string
```

Hotspot capability

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

Wi-Fi bssid(MAC): the length is 6

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## centerFrequency1

```TypeScript
centerFrequency1: int
```

Center frequency 1.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## centerFrequency0

```TypeScript
centerFrequency0: int
```

Center frequency 0.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## bssidType

```TypeScript
bssidType: DeviceAddressType
```

Wi-Fi bssid type

**Type:** DeviceAddressType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## ssid

```TypeScript
ssid: string
```

Wi-Fi SSID: the maximum length is 32

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## frequency

```TypeScript
frequency: int
```

Frequency

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## isHiLinkNetwork

```TypeScript
isHiLinkNetwork: boolean
```

Whether the Wi-Fi hotspot is HiLink network.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## isHiLinkProNetwork

```TypeScript
isHiLinkProNetwork?: boolean
```

Whether the Wi-Fi hotspot is HiLinkPro network.

**Type:** boolean

**Since:** 20

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

## channelWidth

```TypeScript
channelWidth: int
```

Channel width

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## band

```TypeScript
band: int
```

Frequency band, 1: 2.4G, 2: 5G

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## timestamp

```TypeScript
timestamp: long
```

Time stamp

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

