# ColorEffect

ColorEffect extends [ColorEffectQuery]camera.ColorEffectQuery Provides the APIs to obtain and set the lens color effect.

**Inheritance:** ColorEffectextends: ColorEffectQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorEffect

```TypeScript
getColorEffect(): ColorEffectType
```

Obtains the color effect in use.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| ColorEffectType | Color effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

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

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ColorEffectType | Yes | The type of color effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function setColorEffect(session: camera.PhotoSessionForSys, colorEffect: camera.ColorEffectType): void {
  session.setColorEffect(colorEffect);
}

```

