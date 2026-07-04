# disableWifi

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## disableWifi

```TypeScript
function disableWifi(): void
```

Disable Wi-Fi.

**Since:** 20

**Required permissions:** ohos.permission.SET_WIFI_INFO and (ohos.permission.MANAGE_WIFI_CONNECTION or ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION)

**System capability:** SystemCapability.Communication.WiFi.STA

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |
| [2501004](../errorcode-wifi.md#2501004-failed-to-close-the-service) | Operation failed because the service is being opened. |

**Example**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    wifiManager.disableWifi();
  }catch(error){
    console.error(`disableWifi failed. ${error.message}`);
  }

```

