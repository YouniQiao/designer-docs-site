# getDeviceMacAddress

## getDeviceMacAddress

```TypeScript
function getDeviceMacAddress(): string[]
```

Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled. The MAC address is unique and cannot be changed.

**Since:** 15

**Required permissions:** 

 ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Returns the MAC address of the Wi-Fi device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let ret = wifiManager.getDeviceMacAddress();
    console.info("deviceMacAddress:" + JSON.stringify(ret));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

