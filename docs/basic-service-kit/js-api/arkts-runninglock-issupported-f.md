# isSupported

## isSupported

```TypeScript
function isSupported(type: RunningLockType): boolean
```

查询系统是否支持该类型的锁。

**Since:** 9

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | RunningLockType | Yes | 需要查询的锁的类型；该参数必须是一个枚举类。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示支持，返回false表示不支持。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. Parameter verification failed. |

**Example**

```TypeScript
try {
    let isSupported = runningLock.isSupported(runningLock.RunningLockType.PROXIMITY_SCREEN_CONTROL);
    console.info('BACKGROUND type supported: ' + isSupported);
} catch(err) {
    console.error('check supported failed, err: ' + err);
}

```

