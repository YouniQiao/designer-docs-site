# disableNetwork

## disableNetwork

```TypeScript
function disableNetwork(netId: number): boolean
```

Disables a specified network. <p>The disabled network will not be associated with again.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.disableDeviceConfig

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | number | Yes | Identifies the network to disable. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the specified network is disabled, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let netId = 0;
    wifi.disableNetwork(netId);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

