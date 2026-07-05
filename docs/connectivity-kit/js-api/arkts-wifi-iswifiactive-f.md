# isWifiActive

## isWifiActive

```TypeScript
function isWifiActive(): boolean
```

Queries the Wi-Fi status

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.isWifiActive

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

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

