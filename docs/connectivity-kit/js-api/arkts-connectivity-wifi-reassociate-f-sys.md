# reassociate (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## reassociate

```TypeScript
function reassociate(): boolean
```

Re-associate to current network.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** reassociate

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

<!--Device-wifi-function reassociate(): boolean--><!--Device-wifi-function reassociate(): boolean-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | {@code true} if the Wi-Fi network is re-associate successfully. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.reassociate();
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

