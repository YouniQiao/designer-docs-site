# ColorEffect

ColorEffect extends [ColorEffectQuery]camera.ColorEffectQuery Provides the APIs to obtain and set the lens color effect.

**继承实现关系：** ColorEffect继承自：ColorEffectQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorEffect

```TypeScript
getColorEffect(): ColorEffectType
```

Obtains the color effect in use.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorEffectType | Color effect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
function getColorEffect(session: camera.PhotoSessionForSys): camera.ColorEffectType {
  let colorEffect: camera.ColorEffectType = session.getColorEffect();
  return colorEffect;
}

```

## setColorEffect

```TypeScript
setColorEffect(type: ColorEffectType): void
```

Sets a color effect. Before the setting, call [getSupportedColorEffects]camera.ColorEffectQuery.getSupportedColorEffects to obtain the supported color effects.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ColorEffectType | 是 | The type of color effect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
function setColorEffect(session: camera.PhotoSessionForSys, colorEffect: camera.ColorEffectType): void {
  session.setColorEffect(colorEffect);
}

```

