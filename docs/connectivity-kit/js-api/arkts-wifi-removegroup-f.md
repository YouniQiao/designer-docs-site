# removeGroup

## removeGroup

```TypeScript
function removeGroup(): boolean
```

Removes a P2P group.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.removeP2pGroup

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.removeGroup();  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

