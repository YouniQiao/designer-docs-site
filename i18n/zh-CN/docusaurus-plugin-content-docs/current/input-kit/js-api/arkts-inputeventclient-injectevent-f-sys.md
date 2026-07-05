# injectEvent

## injectEvent

```TypeScript
function injectEvent({ KeyEvent: KeyEvent }): void
```

按键(包括单个按键和组合键)注入。

**起始版本：** 8

**需要权限：** 

- API版本12+： ohos.permission.INJECT_INPUT_EVENT

**系统能力：** SystemCapability.MultimodalInput.Input.InputSimulator

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| { KeyEvent: KeyEvent } | 0.0 | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. [since 12] |
| 202 | Permission denied, non-system app called system api. [since 12] |

**示例：**

```TypeScript
import { inputEventClient } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let backKeyDown: inputEventClient.KeyEvent = {
              isPressed: true,
              keyCode: 2,
              keyDownDuration: 0,
              isIntercepted: false
            }
            // 注入事件
            inputEventClient.injectEvent({ KeyEvent: backKeyDown });

            let backKeyUp: inputEventClient.KeyEvent = {
              isPressed: false,
              keyCode: 2,
              keyDownDuration: 0,
              isIntercepted: false
            };
            // 注入事件
            inputEventClient.injectEvent({ KeyEvent: backKeyUp });
          } catch (error) {
            console.error(`Failed to inject KeyEvent, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

