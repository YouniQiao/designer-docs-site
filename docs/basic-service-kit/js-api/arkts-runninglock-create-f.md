# create

## create

```TypeScript
function create(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void
```

创建RunningLock锁。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 锁的名字；该参数必须为字符串类型。 |
| type | RunningLockType | Yes | 要创建的锁的类型；该参数必须是一个枚举类。 |
| callback | AsyncCallback&lt;RunningLock> | Yes | 回调函数。当创建锁成功，err为undefined，data为创建的RunningLock；否则为错误对象；  AsyncCallback封装了一个RunningLock类型的类。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | If the permission is denied. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |

**Example**

```TypeScript

runningLock.create('running_lock_test', runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL, (err: Error, lock: runningLock.RunningLock) => {
    if (typeof err === 'undefined') {
        console.info('created running lock: ' + lock);
    } else {
        console.error('create running lock failed, err: ' + err);
    }
});

```

## create

```TypeScript
function create(name: string, type: RunningLockType): Promise<RunningLock>
```

创建RunningLock锁。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 锁的名字；该参数必须为字符串类型。 |
| type | RunningLockType | Yes | 要创建的锁的类型；该参数必须是一个枚举类。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RunningLock> | Promise对象，返回RunningLock锁对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | If the permission is denied. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |

**Example**

```TypeScript

runningLock.create('running_lock_test', runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL)
.then((lock: runningLock.RunningLock) => {
    console.info('created running lock: ' + lock);
})
.catch((err: Error) => {
    console.error('create running lock failed, err: ' + err);
});

```

