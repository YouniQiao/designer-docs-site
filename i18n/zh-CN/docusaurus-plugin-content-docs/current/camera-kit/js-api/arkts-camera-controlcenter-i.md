# ControlCenter

ControlCenter inherits from [ControlCenterQuery]camera.ControlCenterQuery. It is used to enable the camera controller.

**继承实现关系：** ControlCenter继承自：ControlCenterQuery。

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableControlCenter

```TypeScript
enableControlCenter(enabled: boolean): void
```

Enables the camera controller.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable or disable the camera controller. true to enable, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

