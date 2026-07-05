# getAutoTimeStatus

## getAutoTimeStatus

```TypeScript
function getAutoTimeStatus(): boolean
```

获取自动设置时间开关状态，使用同步方式。

**Since:** 21

**System capability:** SystemCapability.MiscServices.Time

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回自动设置时间开关状态。 - true：表示自动设置时间开关状态为打开。 - false：表示自动设置时间开关状态为关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13000001 | Network connection error or OS error. Possible causes: 1.System memory is  insufficient; 2.Calls the underlying system interface failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let status: boolean = systemDateTime.getAutoTimeStatus();
} catch(e) {
  let error = e as BusinessError;
  console.error(`Failed to get autotime status. message: ${error.message}, code: ${error.code}`);
}

```

