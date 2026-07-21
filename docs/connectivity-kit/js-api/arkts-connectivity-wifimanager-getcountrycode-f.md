# getCountryCode

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';
```

<a id="getcountrycode"></a>
## getCountryCode

```TypeScript
function getCountryCode(): string
```

Obtain the country code of the device.

**Since:** 9

**Required permissions:** ohos.permission.GET_WIFI_INFO

<!--Device-wifiManager-function getCountryCode(): string--><!--Device-wifiManager-function getCountryCode(): string-End-->

**System capability:** SystemCapability.Communication.WiFi.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the country code of this device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2401000](../errorcode-wifi.md#2401000-sta-internal-error) | Operation failed. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let code = wifiManager.getCountryCode();
    console.info("code:" + code);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

