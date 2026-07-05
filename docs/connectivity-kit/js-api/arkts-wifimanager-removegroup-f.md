# removeGroup

## removeGroup

```TypeScript
function removeGroup(): void
```

Remove a P2P group.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.P2P

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.removeGroup();  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

