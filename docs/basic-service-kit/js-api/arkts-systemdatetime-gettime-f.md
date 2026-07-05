# getTime

## getTime

```TypeScript
function getTime(isNanoseconds?: boolean): long
```

使用同步方式获取自Unix纪元以来到当前系统时间所经过的时间。

**Since:** 10

**System capability:** SystemCapability.MiscServices.Time

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isNanoseconds | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long | 自Unix纪元以来到当前系统时间所经过的时间。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let time: number = systemDateTime.getTime(true)
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get time. message: ${error.message}, code: ${error.code}`);
}

```

