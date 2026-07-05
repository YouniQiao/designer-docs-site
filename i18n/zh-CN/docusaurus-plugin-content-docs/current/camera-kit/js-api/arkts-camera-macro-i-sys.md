# Macro

Macro inherits from [MacroQuery]camera.MacroQuery. It provides the API to enable macro photography.

**继承实现关系：** Macro继承自：MacroQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableMacro

```TypeScript
enableMacro(enabled: boolean): void
```

Enables or disables macro photography. > **NOTE** > > Before calling this API, call > [isMacroSupported]camera.MacroQuery.isMacroSupported to check whether the > current device supports macro photography.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable macro photography. true to enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 11 - 18] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

