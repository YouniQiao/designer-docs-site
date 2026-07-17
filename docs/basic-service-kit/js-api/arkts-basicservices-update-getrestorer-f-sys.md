# getRestorer (System API)

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## getRestorer

```TypeScript
function getRestorer(): Restorer
```

Obtains a **Restorer** object for restoring factory settings.

**Since:** 9

<!--Device-update-function getRestorer(): Restorer--><!--Device-update-function getRestorer(): Restorer-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Restorer](arkts-basicservices-update-restorer-i-sys.md) | **Restorer** object for restoring factory settings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
  // Obtain a Restorer object for restoring factory settings.
  let factoryRestorer = update.getRestorer();

```

