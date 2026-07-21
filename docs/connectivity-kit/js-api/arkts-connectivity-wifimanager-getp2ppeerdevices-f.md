# getP2pPeerDevices

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="getp2ppeerdevices"></a>
## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(): Promise<WifiP2pDevice[]>
```

Obtain the information about the found devices.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getP2pPeerDevices(): Promise<WifiP2pDevice[]>--><!--Device-wifiManager-function getP2pPeerDevices(): Promise<WifiP2pDevice[]>-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiP2pDevice[]&gt; | Returns p2p device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |


<a id="getp2ppeerdevices-1"></a>
## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void
```

Obtain the information about the found devices.

**Since:** 10

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void--><!--Device-wifiManager-function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;WifiP2pDevice[]&gt; | Yes | Indicates callback of function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2801000](../errorcode-wifi.md#2801000-p2p-module-error) | Operation failed. |
| [2801001](../errorcode-wifi.md#2801001-p2p-module-error) | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  // The peer device list can be obtained only after the P2P discovery is complete.
  wifiManager.getP2pPeerDevices((err, data:wifiManager.WifiP2pDevice[]) => {
    if (err) {
        console.error("get P2P peer devices error");
        return;
    }
    console.info("get P2P peer devices: " + JSON.stringify(data));
  });

  wifiManager.getP2pPeerDevices().then(data => {
    console.info("get P2P peer devices: " + JSON.stringify(data));
  });

```

