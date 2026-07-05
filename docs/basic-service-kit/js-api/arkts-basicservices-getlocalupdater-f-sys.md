# getLocalUpdater (System API)

## Modules to Import

```TypeScript
import { update } from '@ohos.update';
```

## getLocalUpdater

```TypeScript
function getLocalUpdater(): LocalUpdater
```

Obtains a **LocalUpdater** object.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| LocalUpdater | **LocalUpdater** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
try {
  let localUpdater = update.getLocalUpdater();
} catch(error) {
  console.error(`Fail to get localUpdater error: ${error}`);
}

```

