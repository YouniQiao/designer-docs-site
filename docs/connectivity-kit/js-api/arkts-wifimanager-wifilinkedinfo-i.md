# WifiLinkedInfo

Wi-Fi connection information.

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

## macType

```TypeScript
macType: int
```

Type of macAddress: 0 - real mac, 1 - random mac.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## connState

```TypeScript
connState: ConnState
```

The state of this Wi-Fi connection.

**Type:** ConnState

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## bssid

```TypeScript
bssid: string
```

The BSSID of the Wi-Fi hotspot

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## suppState

```TypeScript
suppState: SuppState
```

The state of the supplicant of this Wi-Fi connection.

**Type:** SuppState

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## ssid

```TypeScript
ssid: string
```

The SSID of the Wi-Fi hotspot

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## frequency

```TypeScript
frequency: int
```

The frequency of a Wi-Fi access point.

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## maxSupportedTxLinkSpeed

```TypeScript
maxSupportedTxLinkSpeed: int
```

Max tx speed of a Wi-Fi access point.

**Type:** int

**Since:** 10

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

## chload

```TypeScript
chload: int
```

The load value of this Wi-Fi connection. A greater value indicates a higher load.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## maxSupportedRxLinkSpeed

```TypeScript
maxSupportedRxLinkSpeed: int
```

Max rx speed of a Wi-Fi access point.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

## networkId

```TypeScript
networkId: int
```

The ID(uniquely identifies) of a Wi-Fi connection.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## band

```TypeScript
band: int
```

The frequency band of a Wi-Fi access point.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## supportedWifiCategory

```TypeScript
supportedWifiCategory: WifiCategory
```

Supported wifi category

**Type:** WifiCategory

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## rssi

```TypeScript
rssi: int
```

The RSSI(dBm) of a Wi-Fi access point.

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.WiFi.STA

## ipAddress

```TypeScript
ipAddress: int
```

The IP address of this Wi-Fi connection.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## linkSpeed

```TypeScript
linkSpeed: int
```

The speed of a Wi-Fi access point.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## wifiTxRxValid

```TypeScript
wifiTxRxValid?: boolean
```

Whether Wi-Fi Tx and Rx are both working properly

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## isHidden

```TypeScript
isHidden: boolean
```

Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## macAddress

```TypeScript
macAddress: string
```

The Wi-Fi MAC address of a device.

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## isHiLinkNetwork

```TypeScript
isHiLinkNetwork: boolean
```

Whether the Wi-Fi hotspot is HiLink network.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Communication.WiFi.STA

## snr

```TypeScript
snr: int
```

The signal-to-noise ratio (SNR) of this Wi-Fi connection.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

## wifiLinkType

```TypeScript
wifiLinkType?: WifiLinkType
```

Wi-Fi link type

**Type:** WifiLinkType

**Since:** 18

**System capability:** SystemCapability.Communication.WiFi.STA

## channelWidth

```TypeScript
channelWidth: WifiChannelWidth
```

Channel width of the connected hotspot.

**Type:** WifiChannelWidth

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

## rxLinkSpeed

```TypeScript
rxLinkSpeed: int
```

The rx speed of a Wi-Fi access point.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

## isRestricted

```TypeScript
isRestricted: boolean
```

Whether this Wi-Fi connection restricts the data volume.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Communication.WiFi.STA

## wifiStandard

```TypeScript
wifiStandard: WifiStandard
```

Wifi standard of current connection.

**Type:** WifiStandard

**Since:** 10

**System capability:** SystemCapability.Communication.WiFi.STA

