# isRunningLockTypeSupported

## Modules to Import

```TypeScript
import { runningLock } from '@ohos.runningLock';
```

## isRunningLockTypeSupported

```TypeScript
function isRunningLockTypeSupported(type: RunningLockType, callback: AsyncCallback<boolean>): void
```

Checks whether a specified type of {@link RunningLock} is supported. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [isSupported](arkts-basicservices-issupported-f.md#issupported-1)

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | Type of the running lock. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the query result obtained, where the value **true** indicates that thespecified type of the running lock is supported and **false** indicates the opposite. Otherwise, **err** is anerror object. |

**Example**

```TypeScript
runningLock.isRunningLockTypeSupported(runningLock.RunningLockType.BACKGROUND, (err: Error, data: boolean) => {
    if (typeof err === 'undefined') {
        console.info('BACKGROUND lock support status: ' + data);
    } else {
        console.error('check BACKGROUND lock support status failed, err: ' + err);
    }
});

```


## isRunningLockTypeSupported

```TypeScript
function isRunningLockTypeSupported(type: RunningLockType): Promise<boolean>
```

Checks whether a specified type of {@link RunningLock} is supported. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [isSupported](arkts-basicservices-issupported-f.md#issupported-1)

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | Type of the running lock. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the specifiedtype of the running lock is supported, and the value **false** indicates the opposite. |

**Example**

```TypeScript
runningLock.isRunningLockTypeSupported(runningLock.RunningLockType.BACKGROUND)
.then((data: boolean) => {
    console.info('BACKGROUND lock support status: ' + data);
})
.catch((err: Error) => {
    console.error('check BACKGROUND lock support status failed, err: ' + err);
});

```

