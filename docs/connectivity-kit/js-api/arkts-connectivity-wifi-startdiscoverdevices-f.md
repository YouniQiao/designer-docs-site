# startDiscoverDevices

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="startdiscoverdevices"></a>
## startDiscoverDevices

```TypeScript
function startDiscoverDevices(): boolean
```

Discover Wi-Fi P2P devices.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** startDiscoverP2pDevices

**Required permissions:** ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function startDiscoverDevices(): boolean--><!--Device-wifi-function startDiscoverDevices(): boolean-End-->

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

