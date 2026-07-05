# getWindowsByCoordinate

## getWindowsByCoordinate

```TypeScript
function getWindowsByCoordinate(displayId: long, windowNumber?: int, x?: int, y?: int):
      Promise<Array<Window>>
```

查询本应用指定坐标下的可见窗口数组，按当前窗口层级排列，层级最高的窗口对应数组下标为0，使用Promise异步回调。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 是 | 查询窗口所在的displayId，该参数应为整数，传入非整数会忽略掉小数部分，可以在窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)中获取。 |
| windowNumber | int | 否 |  |
| x | int | 否 |  |
| y | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Window>> | Promise对象。返回获取到的窗口对象数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |

**示例：**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    let windowClass: window.Window | undefined = undefined;
    try {
      let displayId = 0;
      window.getWindowsByCoordinate(displayId, 2, 500, 500).then((data) => {
        console.info(`Succeeded in getting windows. Data: ${data}`);
        for (let windowObject of data) {
          // do something with window
          windowClass = windowObject;
        }
      }).catch((err: BusinessError) => {
        console.error(`Failed to get window from point. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to get window from point. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

