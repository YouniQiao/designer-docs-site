# isBandTypeSupported

## isBandTypeSupported

```TypeScript
function isBandTypeSupported(bandType: WifiBandType): boolean
```

Check whether the current device supports the specified band.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bandType | WifiBandType | Yes | Indicates the band type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

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
    let type = 0;
    let isBandTypeSupported = wifiManager.isBandTypeSupported(type);
    console.info("isBandTypeSupported:" + isBandTypeSupported);    
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

