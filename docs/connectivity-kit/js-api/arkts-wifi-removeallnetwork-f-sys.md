# removeAllNetwork

## removeAllNetwork

```TypeScript
function removeAllNetwork(): boolean
```

Removes all the saved Wi-Fi configurations.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.removeAllDeviceConfigs

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if all the saved Wi-Fi configurations are removed;  returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    wifi.removeAllNetwork();        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

