# startDiscoverDevices

## startDiscoverDevices

```TypeScript
function startDiscoverDevices(): boolean
```

Discover Wi-Fi P2P devices.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.startDiscoverP2pDevices

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.startDiscoverDevices();  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

