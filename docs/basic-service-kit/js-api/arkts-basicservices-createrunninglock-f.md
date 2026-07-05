# createRunningLock

## Modules to Import

```TypeScript
import { runningLock } from '@ohos.runningLock';
```

## createRunningLock

```TypeScript
function createRunningLock(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void
```

Creates a {@link RunningLock} object. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [create](arkts-basicservices-create-f.md#create-1)

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates the {@link RunningLock} name. A recommended name consists of the package orclass name and a suffix. |
| type | RunningLockType | Yes | Indicates the {@link RunningLockType}. |
| callback | AsyncCallback&lt;RunningLock&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and data is the created **RunningLock** object. Otherwise, **err** is anerror object. **AsyncCallback** has encapsulated an API of the **RunningLock** class. |

**Example**

```TypeScript
runningLock.createRunningLock('running_lock_test', runningLock.RunningLockType.BACKGROUND, (err: Error, lock: runningLock.RunningLock) => {
    if (typeof err === 'undefined') {
        console.info('created running lock: ' + lock);
    } else {
        console.error('create running lock failed, err: ' + err);
    }
});

```


## createRunningLock

```TypeScript
function createRunningLock(name: string, type: RunningLockType): Promise<RunningLock>
```

Creates a {@link RunningLock} object. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [create](arkts-basicservices-create-f.md#create-1)

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates the {@link RunningLock} name. A recommended name consists of the package orclass name and a suffix. |
| type | RunningLockType | Yes | Indicates the {@link RunningLockType}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RunningLock&gt; | Promise used to return the {@link RunningLock} object. |

**Example**

```TypeScript
runningLock.createRunningLock('running_lock_test', runningLock.RunningLockType.BACKGROUND)
.then((lock: runningLock.RunningLock) => {
    console.info('created running lock: ' + lock);
})
.catch((err: Error) => {
    console.error('create running lock failed, err: ' + err);
});

```

