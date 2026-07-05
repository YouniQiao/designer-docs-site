# getDeviceMacAddress

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## getDeviceMacAddress

```TypeScript
function getDeviceMacAddress(): string[]
```

Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled. The MAC address is unique and cannot be changed.

**Since:** 15

**Required permissions:** ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO

**System capability:** SystemCapability.Communication.WiFi.STA

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Returns the MAC address of the Wi-Fi device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501001](../errorcode-wifi.md#2501001-sta-disabled) | Wi-Fi STA disabled. |

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

