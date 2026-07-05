# p2pCancelConnect

## p2pCancelConnect

```TypeScript
function p2pCancelConnect(): void
```

Stop an ongoing p2p connection that is being established.

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
    wifiManager.p2pCancelConnect();  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

