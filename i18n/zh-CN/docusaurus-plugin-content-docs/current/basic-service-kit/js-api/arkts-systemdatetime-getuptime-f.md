# getUptime

## getUptime

```TypeScript
function getUptime(timeType: TimeType, isNanoseconds?: boolean): long
```

使用同步方式获取自系统启动以来经过的时间。

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.Time

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeType | TimeType | 是 | 获取时间的类型，仅能为`STARTUP`或者`ACTIVE`。 |
| isNanoseconds | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | 自系统启动以来经过的时间。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. This error code was added due to missing  issues. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let time: number = systemDateTime.getUptime(systemDateTime.TimeType.ACTIVE, false);
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get uptime. message: ${error.message}, code: ${error.code}`);
}

```

