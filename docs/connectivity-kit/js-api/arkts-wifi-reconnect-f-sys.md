# reconnect

## reconnect

```TypeScript
function reconnect(): boolean
```

Re-connects to current network.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.reconnect

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | {@code true} if the Wi-Fi network is re-connect successfully. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.reconnect();
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

