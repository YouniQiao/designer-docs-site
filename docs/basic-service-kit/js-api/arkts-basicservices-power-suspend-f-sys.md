# suspend (System API)

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="suspend"></a>
## suspend

```TypeScript
function suspend(isImmediate?: boolean): void
```

Enables a device to enter the sleep state.

**Since:** 9

**Required permissions:** 
- API version 19+: ohos.permission.POWER_MANAGER

<!--Device-power-function suspend(isImmediate?: boolean): void--><!--Device-power-function suspend(isImmediate?: boolean): void-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isImmediate | boolean | No | Whether the device enters the sleep state immediately. The value **true** indicates that the device enters the sleep state immediately after the screen is turned off; **false** indicates that the system controls when the device enters the sleep state. If this parameter is not set, the default value **false** is used. If you only want to turn off the screen, you are advised not to set this parameter.<br>**NOTE**: This parameter is supported since API version 10.<br>**Since:** 10 |

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
    power.suspend();
} catch(err) {
    console.error('suspend failed, err: ' + err);
}

```

