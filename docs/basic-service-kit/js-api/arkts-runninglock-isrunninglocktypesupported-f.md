# isRunningLockTypeSupported

## isRunningLockTypeSupported

```TypeScript
function isRunningLockTypeSupported(type: RunningLockType, callback: AsyncCallback<boolean>): void
```

查询系统是否支持该类型的锁。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** runningLock.isSupported

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | 需要查询的锁的类型。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。当查询成功，err为undefined，data为获取到的支持情况，返回true表示支持，返回false表示不支持；否则为错误对象  。 |

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

查询系统是否支持该类型的锁。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** runningLock.isSupported

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | 需要查询的锁的类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持；返回false表示不支持。 |

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

