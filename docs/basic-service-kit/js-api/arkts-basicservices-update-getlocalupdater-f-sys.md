# getLocalUpdater (System API)

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## getLocalUpdater

```TypeScript
function getLocalUpdater(): LocalUpdater
```

Obtains a **LocalUpdater** object.

**Since:** 9

<!--Device-update-function getLocalUpdater(): LocalUpdater--><!--Device-update-function getLocalUpdater(): LocalUpdater-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [LocalUpdater](arkts-basicservices-update-localupdater-i-sys.md) | **LocalUpdater** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
  // Obtain a LocalUpdater object.
  let localUpdater = update.getLocalUpdater();

```

