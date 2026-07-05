# getP2pPeerDevices

## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(): Promise<WifiP2pDevice[]>
```

Obtains the information about the found devices.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getP2pPeerDevices

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WifiP2pDevice[]> | Returns the found devices list. |

## getP2pPeerDevices

```TypeScript
function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void
```

Obtains the information about the found devices.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.getP2pPeerDevices

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiP2pDevice[]> | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getP2pPeerDevices((err, data:wifi.WifiP2pDevice) => {
   if (err) {
       console.error("get P2P peer devices error");
       return;
   }
  console.info("get P2P peer devices: " + JSON.stringify(data));
});

wifi.getP2pPeerDevices().then(data => {
  console.info("get P2P peer devices: " + JSON.stringify(data));
});

```

