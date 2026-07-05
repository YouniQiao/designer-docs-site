# getUptime

## getUptime

```TypeScript
function getUptime(timeType: TimeType, isNanoseconds?: boolean): long
```

使用同步方式获取自系统启动以来经过的时间。

**Since:** 10

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeType | TimeType | Yes | 获取时间的类型，仅能为`STARTUP`或者`ACTIVE`。 |
| isNanoseconds | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long | 自系统启动以来经过的时间。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. This error code was added due to missing  issues. [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let time: number = systemDateTime.getUptime(systemDateTime.TimeType.ACTIVE, false);
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get uptime. message: ${error.message}, code: ${error.code}`);
}

```

