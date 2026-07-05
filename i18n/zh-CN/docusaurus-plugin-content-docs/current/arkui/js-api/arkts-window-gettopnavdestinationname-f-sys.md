# getTopNavDestinationName

## getTopNavDestinationName

```TypeScript
function getTopNavDestinationName(windowId: int): Promise<string>
```

获取指定的前台窗口当前栈顶[Navigation]./@internal/component/ets/navigation中的 [NavDestination]./@internal/component/ets/nav_destination名称，使用Promise异步回调。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | 窗口Id，用于指定要查询的窗口。该参数应为大于0的整数，小于等于0时会返回错误码1300016，如果指定的窗口不存在或生命周期不在前台，返回错误码为1300002。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise对象。返回获取到的[NavDestination]./@internal/component/ets/nav_destination名称。  对于[Navigation]./@internal/component/ets/navigation嵌套以及当前页面存在多个  [Navigation]./@internal/component/ets/navigation的场景，查询的是后创建的  [Navigation]./@internal/component/ets/navigation的信息。  如果页面没有[Navigation]./@internal/component/ets/navigation或者  [Navigation]./@internal/component/ets/navigation中没有  [NavDestination]./@internal/component/ets/nav_destination，返回空字符串。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

**示例：**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let windowId = 10;
  let promise = window.getTopNavDestinationName(windowId);
  promise.then((data) => {
    console.info(`Succeeded, data: ${data}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed, cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed, exception code: ${exception.code}, message: ${exception.message}`);
}

```

