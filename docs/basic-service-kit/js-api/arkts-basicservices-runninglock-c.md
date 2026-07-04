# RunningLock

Defines a **RunningLock** object.

**Since:** 7

**System capability:** SystemCapability.PowerManager.PowerManager.Core

## Modules to Import

```TypeScript
import { runningLock } from '@ohos.runningLock';
```

## hold

```TypeScript
hold(timeout: number): void
```

Holds a running lock.

**Since:** 9

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Duration for locking and holding the **RunningLock** object, in ms.<br>The value must bea number:<br>**-1**: The lock is permanently held and needs to be released automatically.<br>**0**: The lockis released 3 seconds after the timer expires by default.<br>&gt; 0: The lock is released based on the inputvalue after the timer expires. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | If the permission is denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types; |

**Example**

```TypeScript
// RunningLockTest.ets
class RunningLockTest {
    public static recordLock: runningLock.RunningLock;

    public static holdRunningLock(): void {
        if (RunningLockTest.recordLock) {
            RunningLockTest.recordLock.hold(500);
            console.info('hold running lock success');
        } else {
            runningLock.create('running_lock_test', runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL, (err: Error, lock: runningLock.RunningLock) => {
                if (typeof err === 'undefined') {
                    console.info('create running lock: ' + lock);
                    RunningLockTest.recordLock = lock;
                    try {
                        lock.hold(500);
                        console.info('hold running lock success');
                    } catch(err) {
                        console.error('hold running lock failed, err: ' + err);
                    }
                } else {
                    console.error('create running lock failed, err: ' + err);
                }
            });
        }
    }
}

```

## isHolding

```TypeScript
isHolding(): boolean
```

Checks whether this running lock is being held.

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value **true** indicates that the **RunningLock** object is held; and the value**false** indicates that the **RunningLock** object is released. |

**Example**

```TypeScript
// RunningLockTest.ets
class RunningLockTest {
    public static recordLock: runningLock.RunningLock;

    public static isHoldingRunningLock(): void {
        if (RunningLockTest.recordLock) {
            let isHolding = RunningLockTest.recordLock.isHolding();
            console.info('check running lock holding status: ' + isHolding);
        } else {
            runningLock.create('running_lock_test', runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL, (err: Error, lock: runningLock.RunningLock) => {
                if (typeof err === 'undefined') {
                    console.info('create running lock: ' + lock);
                    RunningLockTest.recordLock = lock;
                    let isHolding = lock.isHolding();
                    console.info('check running lock holding status: ' + isHolding);
                } else {
                    console.error('create running lock failed, err: ' + err);
                }
            });
        }
    }
}

```

## isUsed

```TypeScript
isUsed(): boolean
```

Checks whether this running lock is used.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [isHolding](arkts-basicservices-runninglock-c.md#isholding-1)

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the lock is held or in use; returns false if the lock has been released. |

**Example**

```TypeScript
runningLock.createRunningLock('running_lock_test', runningLock.RunningLockType.BACKGROUND)
.then((lock: runningLock.RunningLock) => {
    let isUsed = lock.isUsed();
    console.info('check running lock used status: ' + isUsed);
})
.catch((err: Error) => {
    console.error('check running lock used status failed, err: ' + err);
});

```

## lock

```TypeScript
lock(timeout: number): void
```

Locks and holds a **RunningLock** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [hold](arkts-basicservices-runninglock-c.md#hold-1)

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Duration for locking and holding the **RunningLock** object, in ms. |

**Example**

```TypeScript
runningLock.createRunningLock('running_lock_test', runningLock.RunningLockType.BACKGROUND)
.then((lock: runningLock.RunningLock) => {
    lock.lock(500);
    console.info('create running lock and lock success');
})
.catch((err: Error) => {
    console.error('create running lock failed, err: ' + err);
});

```

## unhold

```TypeScript
unhold(): void
```

Releases this running lock.

**Since:** 9

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | If the permission is denied. |

**Example**

```TypeScript
// RunningLockTest.ets
class RunningLockTest {
    public static recordLock: runningLock.RunningLock;

    public static unholdRunningLock(): void {
        if (RunningLockTest.recordLock) {
            RunningLockTest.recordLock.unhold();
            console.info('unhold running lock success');
        } else {
            runningLock.create('running_lock_test', runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL, (err: Error, lock: runningLock.RunningLock) => {
                if (typeof err === 'undefined') {
                    console.info('create running lock: ' + lock);
                    RunningLockTest.recordLock = lock;
                    try {
                        lock.unhold();
                        console.info('unhold running lock success');
                    } catch(err) {
                        console.error('unhold running lock failed, err: ' + err);
                    }
                } else {
                    console.error('create running lock failed, err: ' + err);
                }
            });
        }
    }
}

```

## unlock

```TypeScript
unlock(): void
```

Releases this running lock.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [unhold](arkts-basicservices-runninglock-c.md#unhold-1)

**Required permissions:** ohos.permission.RUNNING_LOCK

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Example**

```TypeScript
runningLock.createRunningLock('running_lock_test', runningLock.RunningLockType.BACKGROUND)
.then((lock: runningLock.RunningLock) => {
    lock.unlock();
    console.info('create running lock and unlock success');
})
.catch((err: Error) => {
    console.error('create running lock failed, err: ' + err);
});

```

