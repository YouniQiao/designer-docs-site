# Portrait

Portrait: inherits from [PortraitQuery]camera.PortraitQuery. Provides the APIs for portrait photo settings.

**继承实现关系：** Portrait继承自：PortraitQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getPortraitEffect

```TypeScript
getPortraitEffect(): PortraitEffect
```

Obtains the portrait effect in use.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PortraitEffect | Portrait effect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 202 | Not System Application. [since 11] |

**示例：**

```TypeScript
function getPortraitEffect(portraitPhotoSession: camera.PortraitPhotoSession): camera.PortraitEffect {
  let portraitEffect: camera.PortraitEffect = portraitPhotoSession.getPortraitEffect();
  return portraitEffect;
}

```

## setPortraitEffect

```TypeScript
setPortraitEffect(effect: PortraitEffect): void
```

Sets a portrait effect. Before the setting, use [getSupportedPortraitEffects]camera.PortraitQuery.getSupportedPortraitEffects to obtain the supported portrait effects and check whether the target portrait effect is supported.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effect | PortraitEffect | 是 | Effect Portrait effect to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 202 | Not System Application. [since 11] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setPortraitEffect(portraitPhotoSession: camera.PortraitPhotoSession, portraitEffects: Array<camera.PortraitEffect>): void {
  if (portraitEffects === undefined || portraitEffects.length <= 0) {
    return;
  }
  try {
    portraitPhotoSession.setPortraitEffect(portraitEffects[0]);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The setPortraitEffect call failed. error code: ${err.code}`);
  }
}

```

