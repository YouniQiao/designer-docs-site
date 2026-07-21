# enableHotspot (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="enablehotspot"></a>
## enableHotspot

```TypeScript
function enableHotspot(): boolean
```

Enables a Wi-Fi hotspot.

<p>This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** enableHotspot

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function enableHotspot(): boolean--><!--Device-wifi-function enableHotspot(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.AP.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if this method is called successfully, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.enableHotspot();    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

