# on

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## on('wifiStateChange')

```TypeScript
function on(type: 'wifiStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi status change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'wifiStateChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'wifiStateChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating |


## on('wifiConnectionChange')

```TypeScript
function on(type: 'wifiConnectionChange', callback: Callback<number>): void
```

Subscribe Wi-Fi connection change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiConnectionChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'wifiConnectionChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'wifiConnectionChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiConnectionChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on, 0: disconnected, 1: connected |


## on('wifiScanStateChange')

```TypeScript
function on(type: 'wifiScanStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi scan status change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiScanStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'wifiScanStateChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'wifiScanStateChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiScanStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on, 0: scan fail, 1: scan success |


## on('wifiRssiChange')

```TypeScript
function on(type: 'wifiRssiChange', callback: Callback<number>): void
```

Subscribe Wi-Fi rssi change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiRssiChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'wifiRssiChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'wifiRssiChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiRssiChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on |


## on('hotspotStateChange')

```TypeScript
function on(type: 'hotspotStateChange', callback: Callback<number>): void
```

Subscribe Wi-Fi hotspot state change events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'hotspotStateChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'hotspotStateChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvHotspotStateChangeFunc = (result:number) => {
    console.info("Receive hotspot state change event: " + result);
}

// Register an event.
wifi.on("hotspotStateChange", recvHotspotStateChangeFunc);

// Unregister an event.
wifi.off("hotspotStateChange", recvHotspotStateChangeFunc);

```


## on('p2pStateChange')

```TypeScript
function on(type: 'p2pStateChange', callback: Callback<number>): void
```

Subscribe P2P status change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'p2pStateChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'p2pStateChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed |


## on('p2pConnectionChange')

```TypeScript
function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void
```

Subscribe P2P connection change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pConnectionChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void--><!--Device-wifi-function on(type: 'p2pConnectionChange', callback: Callback<WifiP2pLinkedInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pConnectionChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WifiP2pLinkedInfo> | Yes | the callback of on |


## on('p2pDeviceChange')

```TypeScript
function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void
```

Subscribe P2P local device change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pDeviceChange

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void--><!--Device-wifi-function on(type: 'p2pDeviceChange', callback: Callback<WifiP2pDevice>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pDeviceChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WifiP2pDevice> | Yes | the callback of on |


## on('p2pPeerDeviceChange')

```TypeScript
function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void
```

Subscribe P2P peer device change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pPeerDeviceChange

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void--><!--Device-wifi-function on(type: 'p2pPeerDeviceChange', callback: Callback<WifiP2pDevice[]>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pPeerDeviceChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<WifiP2pDevice[]> | Yes | the callback of on |


## on('p2pPersistentGroupChange')

```TypeScript
function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void
```

Subscribe P2P persistent group change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pPersistentGroupChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void--><!--Device-wifi-function on(type: 'p2pPersistentGroupChange', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pPersistentGroupChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | the callback of on |


## on('p2pDiscoveryChange')

```TypeScript
function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void
```

Subscribe P2P discovery events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pDiscoveryChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void--><!--Device-wifi-function on(type: 'p2pDiscoveryChange', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pDiscoveryChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | the callback of on |

