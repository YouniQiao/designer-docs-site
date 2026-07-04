# setScanAlwaysAllowed (System API)

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.wifiManager';
```

## setScanAlwaysAllowed

```TypeScript
function setScanAlwaysAllowed(isScanAlwaysAllowed: boolean): void
```

User can trigger scan even Wi-Fi is disabled.

**Since:** 10

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isScanAlwaysAllowed | boolean | Yes | true for allow trigger scan, otherwise don't allow trigger scan when Wi-Fi is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | System API is not allowed called by Non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2501000](../errorcode-wifi.md#2501000-sta-internal-error) | Operation failed. |

