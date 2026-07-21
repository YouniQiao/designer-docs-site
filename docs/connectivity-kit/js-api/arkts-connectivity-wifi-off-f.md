# off

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="off"></a>
## off('wifiStateChange')

```TypeScript
function off(type: 'wifiStateChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi status change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'wifiStateChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'wifiStateChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvPowerNotifyFunc = (result:number) => {
    console.info("Receive power state change event: " + result);
}

// Register an event.
wifi.on("wifiStateChange", recvPowerNotifyFunc);

// Unregister an event.
wifi.off("wifiStateChange", recvPowerNotifyFunc);

```


<a id="off-1"></a>
## off('wifiConnectionChange')

```TypeScript
function off(type: 'wifiConnectionChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi connection change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiConnectionChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'wifiConnectionChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'wifiConnectionChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiConnectionChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on, 0: disconnected, 1: connected |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvWifiConnectionChangeFunc = (result:number) => {
    console.info("Receive wifi connection change event: " + result);
}

// Register an event.
wifi.on("wifiConnectionChange", recvWifiConnectionChangeFunc);

// Unregister an event.
wifi.off("wifiConnectionChange", recvWifiConnectionChangeFunc);

```


<a id="off-2"></a>
## off('wifiScanStateChange')

```TypeScript
function off(type: 'wifiScanStateChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi scan status change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiScanStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'wifiScanStateChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'wifiScanStateChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiScanStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on, 0: scan fail, 1: scan success |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvWifiScanStateChangeFunc = (result:number) => {
    console.info("Receive Wifi scan state change event: " + result);
}

// Register an event.
wifi.on("wifiScanStateChange", recvWifiScanStateChangeFunc);

// Unregister an event.
wifi.off("wifiScanStateChange", recvWifiScanStateChangeFunc);

```


<a id="off-3"></a>
## off('wifiRssiChange')

```TypeScript
function off(type: 'wifiRssiChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi rssi change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:wifiRssiChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'wifiRssiChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'wifiRssiChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'wifiRssiChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvWifiRssiChangeFunc = (result:number) => {
    console.info("Receive wifi rssi change event: " + result);
}

// Register an event.
wifi.on("wifiRssiChange", recvWifiRssiChangeFunc);

// Unregister an event.
wifi.off("wifiRssiChange", recvWifiRssiChangeFunc);


```


<a id="off-4"></a>
## off('hotspotStateChange')

```TypeScript
function off(type: 'hotspotStateChange', callback?: Callback<number>): void
```

Unsubscribe Wi-Fi hotspot state change events.

<p>All callback functions will be deregistered If there is no specific callback parameter.</p>

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:hotspotStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'hotspotStateChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'hotspotStateChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hotspotStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating |


<a id="off-5"></a>
## off('p2pStateChange')

```TypeScript
function off(type: 'p2pStateChange', callback?: Callback<number>): void
```

Unsubscribe P2P status change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pStateChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'p2pStateChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'p2pStateChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pStateChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pStateChangeFunc = (result:number) => {
    console.info("Receive p2p state change event: " + result);
}

// Register an event.
wifi.on("p2pStateChange", recvP2pStateChangeFunc);

// Unregister an event.
wifi.off("p2pStateChange", recvP2pStateChangeFunc);

```


<a id="off-6"></a>
## off('p2pConnectionChange')

```TypeScript
function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void
```

Unsubscribe P2P connection change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pConnectionChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void--><!--Device-wifi-function off(type: 'p2pConnectionChange', callback?: Callback<WifiP2pLinkedInfo>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pConnectionChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WifiP2pLinkedInfo&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pConnectionChangeFunc = (result:wifi.WifiP2pLinkedInfo) => {
    console.info("Receive p2p connection change event: " + result);
}

// Register an event.
wifi.on("p2pConnectionChange", recvP2pConnectionChangeFunc);

// Unregister an event.
wifi.off("p2pConnectionChange", recvP2pConnectionChangeFunc);

```


<a id="off-7"></a>
## off('p2pDeviceChange')

```TypeScript
function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void
```

Unsubscribe P2P local device change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pDeviceChange

**Required permissions:** ohos.permission.LOCATION

<!--Device-wifi-function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void--><!--Device-wifi-function off(type: 'p2pDeviceChange', callback?: Callback<WifiP2pDevice>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pDeviceChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WifiP2pDevice&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pDeviceChangeFunc = (result:wifi.WifiP2pDevice) => {
    console.info("Receive p2p device change event: " + result);
}

// Register an event.
wifi.on("p2pDeviceChange", recvP2pDeviceChangeFunc);

// Unregister an event.
wifi.off("p2pDeviceChange", recvP2pDeviceChangeFunc);

```


<a id="off-8"></a>
## off('p2pPeerDeviceChange')

```TypeScript
function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void
```

Unsubscribe P2P peer device change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pPeerDeviceChange

**Required permissions:** ohos.permission.LOCATION

<!--Device-wifi-function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void--><!--Device-wifi-function off(type: 'p2pPeerDeviceChange', callback?: Callback<WifiP2pDevice[]>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pPeerDeviceChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WifiP2pDevice[]&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pPeerDeviceChangeFunc = (result:wifi.WifiP2pDevice[]) => {
    console.info("Receive p2p peer device change event: " + result);
}

// Register an event.
wifi.on("p2pPeerDeviceChange", recvP2pPeerDeviceChangeFunc);

// Unregister an event.
wifi.off("p2pPeerDeviceChange", recvP2pPeerDeviceChangeFunc);

```


<a id="off-9"></a>
## off('p2pPersistentGroupChange')

```TypeScript
function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void
```

Unsubscribe P2P persistent group change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pPersistentGroupChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void--><!--Device-wifi-function off(type: 'p2pPersistentGroupChange', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pPersistentGroupChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pPersistentGroupChangeFunc = (result:void) => {
    console.info("Receive p2p persistent group change event: " + result);
}

// Register an event.
wifi.on("p2pPersistentGroupChange", recvP2pPersistentGroupChangeFunc);

// Unregister an event.
wifi.off("p2pPersistentGroupChange", recvP2pPersistentGroupChangeFunc);


```


<a id="off-10"></a>
## off('p2pDiscoveryChange')

```TypeScript
function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void
```

Unsubscribe P2P discovery events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:p2pDiscoveryChange

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void--><!--Device-wifi-function off(type: 'p2pDiscoveryChange', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'p2pDiscoveryChange' | Yes | event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | the callback of on |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

let recvP2pDiscoveryChangeFunc = (result:number) => {
    console.info("Receive p2p discovery change event: " + result);
}

// Register an event.
wifi.on("p2pDiscoveryChange", recvP2pDiscoveryChangeFunc);

// Unregister an event.
wifi.off("p2pDiscoveryChange", recvP2pDiscoveryChangeFunc);

```

