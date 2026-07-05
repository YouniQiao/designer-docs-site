# createRunningLock

## createRunningLock

```TypeScript
function createRunningLock(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void
```

创建RunningLock锁。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** runningLock.create

**Required permissions:** 

 ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 锁的名字。建议使用包名或类名加后缀的方式命名。 |
| type | RunningLockType | Yes | 要创建的锁的类型。 |
| callback | AsyncCallback&lt;RunningLock> | Yes | 回调函数。当创建锁成功，err为undefined，data为创建的RunningLock；否则为错误对象；  AsyncCallback封装了一个RunningLock类型的类。 |

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

创建RunningLock锁。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** runningLock.create

**Required permissions:** 

 ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 锁的名字。建议使用包名或类名加后缀的方式命名。 |
| type | RunningLockType | Yes | 要创建的锁的类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RunningLock> | Promise对象，返回RunningLock锁对象。 |

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

