# isStandby

## isStandby

```TypeScript
function isStandby(): boolean
```

检测当前设备是否进入待机低功耗续航模式。

**Since:** 10

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 进入待机模式返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 4900101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    let isStandby = power.isStandby();
    console.info('device is in standby: ' + isStandby);
} catch(err) {
    console.error('check isStandby failed, err: ' + err);
}

```

