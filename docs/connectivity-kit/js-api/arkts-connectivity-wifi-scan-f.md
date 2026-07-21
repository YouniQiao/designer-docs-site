# scan

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

<a id="scan"></a>
## scan

```TypeScript
function scan(): boolean
```

Scans Wi-Fi hotspot.

<p>This API works in asynchronous mode.</p>

**Since:** 6

**Deprecated since:** 9

**Substitutes:** scan

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION

<!--Device-wifi-function scan(): boolean--><!--Device-wifi-function scan(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the accessibility is succeed; returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.scan();
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

