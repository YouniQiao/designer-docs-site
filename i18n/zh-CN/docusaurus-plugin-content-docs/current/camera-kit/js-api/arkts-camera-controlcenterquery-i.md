# ControlCenterQuery

ControlCenterQuery is used to check whether the camera controller is supported.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedEffectTypes

```TypeScript
getSupportedEffectTypes(): Array<ControlCenterEffectType>
```

Obtains the effect types supported by the camera controller.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ControlCenterEffectType> | Array of effect types supported. |

## isControlCenterSupported

```TypeScript
isControlCenterSupported(): boolean
```

Checks whether the camera controller is supported.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the camera controller. true if supported, false  otherwise. |

