# PortraitQuery

Queries portrait parameters.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedPortraitEffects

```TypeScript
getSupportedPortraitEffects(): Array<PortraitEffect>
```

Obtains the supported portrait effects.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;PortraitEffect> | Array of portrait effects supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 202 | Not System Application. [since 11] |

**示例：**

```TypeScript
function getSupportedPortraitEffects(portraitPhotoSession: camera.PortraitPhotoSession): Array<camera.PortraitEffect> {
  let portraitEffects: Array<camera.PortraitEffect> = portraitPhotoSession.getSupportedPortraitEffects();
  return portraitEffects;
}

```

