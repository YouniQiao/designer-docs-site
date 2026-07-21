# wakeup (System API)

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="wakeup"></a>
## wakeup

```TypeScript
function wakeup(detail: string): void
```

Wakes up a device.

**Since:** 9

**Required permissions:** 
- API version 19+: ohos.permission.POWER_MANAGER

<!--Device-power-function wakeup(detail: string): void--><!--Device-power-function wakeup(detail: string): void-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| detail | string | Yes | Wakeup reason. The value must be a string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; |
| [4900101](../../apis-basic-services-kit/errorcode-power.md#4900101-service-connection-failure) | Failed to connect to the service. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API.<br>**Applicable version:** 19 and later |

**Example**

```TypeScript
try {
    power.wakeup('wakeup_test');
} catch(err) {
    console.error('wakeup failed, err: ' + err);
}

```

