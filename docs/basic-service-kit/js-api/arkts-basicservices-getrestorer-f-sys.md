# getRestorer (System API)

## Modules to Import

```TypeScript
import { update } from '@ohos.update';
```

## getRestorer

```TypeScript
function getRestorer(): Restorer
```

Obtains a **Restorer** object for restoring factory settings.

**Since:** 9

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Restorer | **Restorer** object for restoring factory settings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
try {
  let restorer = update.getRestorer();
} catch(error) {
  console.error(`Fail to get restorer: ${error}`);
}

```

