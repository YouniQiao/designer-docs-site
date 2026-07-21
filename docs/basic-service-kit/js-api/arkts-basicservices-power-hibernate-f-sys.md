# hibernate (System API)

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="hibernate"></a>
## hibernate

```TypeScript
function hibernate(clearMemory: boolean): void
```

Hibernates a device.

**Since:** 12

**Required permissions:** 
- API version 19+: ohos.permission.POWER_MANAGER

<!--Device-power-function hibernate(clearMemory: boolean): void--><!--Device-power-function hibernate(clearMemory: boolean): void-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clearMemory | boolean | Yes | Whether to clear the memory. The value **true** means to clear the memory before the system enters the hibernation state, and the value **false** means the opposite. |

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
    power.hibernate(true);
} catch(err) {
    console.error('hibernate failed, err: ' + err);
}

```

