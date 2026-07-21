# setScreenOffTime (System API)

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="setscreenofftime"></a>
## setScreenOffTime

```TypeScript
function setScreenOffTime(timeout: number): void
```

Sets the screen-off timeout duration, in unit of ms.

**Since:** 12

**Required permissions:** 
- API version 19+: ohos.permission.POWER_MANAGER

<!--Device-power-function setScreenOffTime(timeout: long): void--><!--Device-power-function setScreenOffTime(timeout: long): void-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Screen-off timeout duration, in milliseconds. A value greater than **0** indicates the specified timeout duration is used, and the value **-1** indicates that the default timeout duration is used.Other values are invalid. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Parameter verification failed. |
| [4900101](../../apis-basic-services-kit/errorcode-power.md#4900101-service-connection-failure) | Failed to connect to the service. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API.<br>**Applicable version:** 19 and later |

**Example**

```TypeScript
try {
    power.setScreenOffTime(30000);
} catch(err) {
    console.error('set screen off time failed, err: ' + err);
}

```

