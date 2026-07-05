# MacroQuery

MacroQuery provides the API to check the support for macro photography.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isMacroSupported

```TypeScript
isMacroSupported(): boolean
```

Checks whether macro photography is supported in the current state. This API must be called after [commitConfig]camera.Session.commitConfig(callback: AsyncCallback<void>).

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of macro photography. true if supported, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 11 - 18] |

