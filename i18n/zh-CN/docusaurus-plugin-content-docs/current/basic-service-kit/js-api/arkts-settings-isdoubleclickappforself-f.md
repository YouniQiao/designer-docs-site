# isDoubleClickAppForSelf

## isDoubleClickAppForSelf

```TypeScript
function isDoubleClickAppForSelf(): Promise<boolean>
```

1. Checks whether the application started by double-pressing the Down key is the application itself. 2. This API is triggered to check whether double-pressing the Down key starts the application itself.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.Settings.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Check result.  {@code true} is returned if the specified application is started. Otherwise, {@code false} is returned. |

**示例：**

```TypeScript
import { settings } from '@kit.BasicServicesKit';

settings.isDoubleClickAppForSelf().then((result: boolean) => {
  console.info(`isDoubleClickAppForSelf result: ${result}`);
})

```

