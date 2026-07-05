# createGroup

## createGroup

```TypeScript
function createGroup(config: WifiP2PConfig): boolean
```

Creates a P2P group.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.createP2pGroup

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiP2PConfig | Yes | Indicates the configuration for creating a group. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let config:wifi.WifiP2PConfig = {
    deviceAddress: "****",
    netId: 0,
    passphrase: "*****",
    groupName: "****",
    goBand: 0
  }
  wifi.createGroup(config);  
  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

