# getSignalLevel

## getSignalLevel

```TypeScript
function getSignalLevel(rssi: int, band: int): int
```

Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rssi | int | Yes | Indicates the Wi-Fi RSSI. |
| band | int | Yes | Indicates the Wi-Fi frequency band. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns Wi-Fi signal level ranging from 0 to 4. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let rssi = 0;
    let band = 0;
    let level = wifiManager.getSignalLevel(rssi,band);
    console.info("level:" + JSON.stringify(level));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

