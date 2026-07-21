# shutdown (System API)

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

<a id="shutdown"></a>
## shutdown

```TypeScript
function shutdown(reason: string): void
```

Shuts down the system.

**Since:** 7

**Required permissions:** ohos.permission.REBOOT

<!--Device-power-function shutdown(reason: string): void--><!--Device-power-function shutdown(reason: string): void-End-->

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | Shutdown reason. The value must be a string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; |
| [4900101](../../apis-basic-services-kit/errorcode-power.md#4900101-service-connection-failure) | Failed to connect to the service. |

**Example**

```TypeScript
try {
    power.shutdown('shutdown_test');
} catch(err) {
    console.error('shutdown failed, err: ' + err);
}

```

