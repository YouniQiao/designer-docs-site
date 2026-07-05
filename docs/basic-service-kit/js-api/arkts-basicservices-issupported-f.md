# isSupported

## Modules to Import

```TypeScript
import { runningLock } from '@ohos.runningLock';
```

## isSupported

```TypeScript
function isSupported(type: RunningLockType): boolean
```

Checks whether a specified type of {@link RunningLock} is supported.

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | Type of the running lock. The value must be an enum. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value **true** indicates that the specified type of the running lock is supported, and thevalue **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types;2. Parameter verification failed. |

**Example**

```TypeScript
try {
    let isSupported = runningLock.isSupported(runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL);
    console.info('BACKGROUND type supported: ' + isSupported);
} catch(err) {
    console.error('check supported failed, err: ' + err);
}

```

