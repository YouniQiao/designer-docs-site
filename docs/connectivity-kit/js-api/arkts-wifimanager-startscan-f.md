# startScan

## startScan

```TypeScript
function startScan(): void
```

Scan Wi-Fi hotspot.

**Since:** 21

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.startScan();
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

