# isWifiActive

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="iswifiactive"></a>
## isWifiActive

```TypeScript
function isWifiActive(): boolean
```

Queries the Wi-Fi status

**Since:** 6

**Deprecated since:** 9

**Substitutes:** isWifiActive

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifi-function isWifiActive(): boolean--><!--Device-wifi-function isWifiActive(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let isWifiActive = wifi.isWifiActive();
  console.info("isWifiActive:" + isWifiActive);
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

