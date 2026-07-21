# disableHotspot (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="disablehotspot"></a>
## disableHotspot

```TypeScript
function disableHotspot(): boolean
```

Disables a Wi-Fi hotspot.

<p>This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** disableHotspot

**Required permissions:** ohos.permission.MANAGE_WIFI_HOTSPOT

<!--Device-wifi-function disableHotspot(): boolean--><!--Device-wifi-function disableHotspot(): boolean-End-->

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
    wifi.disableHotspot();    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

