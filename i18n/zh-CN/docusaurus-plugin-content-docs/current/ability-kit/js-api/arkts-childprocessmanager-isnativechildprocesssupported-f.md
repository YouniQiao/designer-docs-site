# isNativeChildProcessSupported

## isNativeChildProcessSupported

```TypeScript
function isNativeChildProcessSupported(): boolean
```

Checks whether the caller is allowed to create native child processes on this device. Some devices may not support creating native child processes, so it is recommended to use this interface to verify support beforehand.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - `true`: The caller is allowed to create native child processes.  - `false`: The caller is not allowed to create native child processes. |

**示例：**

```TypeScript
import { childProcessManager } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('Click')
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            try {
              let isSupport: boolean = childProcessManager.isNativeChildProcessSupported();
              console.info(`isNativeChildProcessSupported: ${isSupport}`);
            } catch (err) {
              console.error(`isNativeChildProcessSupported error, errorCode: ${err.code}, errorMsg: ${err.message}`);
            }
          });
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

