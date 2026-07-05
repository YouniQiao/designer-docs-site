# Portrait

Portrait: inherits from [PortraitQuery]camera.PortraitQuery. Provides the APIs for portrait photo settings.

**Inheritance:** Portraitextends: PortraitQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getPortraitEffect

```TypeScript
getPortraitEffect(): PortraitEffect
```

Obtains the portrait effect in use.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PortraitEffect | Portrait effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 202 | Not System Application. [since 11] |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | PortraitEffect | Yes | Effect Portrait effect to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 202 | Not System Application. [since 11] |

**Example**

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

