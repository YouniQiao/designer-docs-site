# Beauty

Beauty extends [BeautyQuery]camera.BeautyQuery Provides APIs to obtain and set the beauty effect.

**Inheritance:** Beautyextends: BeautyQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getBeauty

```TypeScript
getBeauty(type: BeautyType): int
```

Obtains the level of the beauty type in use.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BeautyType | Yes | Beauty type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | the beauty effect in use. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getBeauty(portraitPhotoSession: camera.PortraitPhotoSession): number {
  const invalidValue: number = -1;
  let beautyTypes = portraitPhotoSession.getSupportedBeautyTypes();
  if (beautyTypes === undefined || beautyTypes.length <= 0) {
    return invalidValue;
  }
  let beautyLevels: Array<number> = portraitPhotoSession.getSupportedBeautyRange(beautyTypes[0]);
  if (beautyLevels === undefined || beautyLevels.length <= 0) {
    return invalidValue;
  }
  portraitPhotoSession.setBeauty(beautyTypes[0], beautyLevels[0]);
  let beautyLevel: number = portraitPhotoSession.getBeauty(beautyTypes[0]);
  return beautyLevel;
}

```

## setBeauty

```TypeScript
setBeauty(type: BeautyType, value: int): void
```

Sets a beauty type and its level. Beauty mode is turned off only when all the [beauty types]camera.BeautyType obtained through [getSupportedBeautyTypes]camera.BeautyQuery.getSupportedBeautyTypes are disabled.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BeautyType | Yes | Beauty type. |
| value | int | Yes | Beauty level, which is obtained through  [getSupportedBeautyRange]camera.BeautyQuery.getSupportedBeautyRange. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function setBeauty(portraitPhotoSession: camera.PortraitPhotoSession): void {
  let beautyTypes: Array<camera.BeautyType> = portraitPhotoSession.getSupportedBeautyTypes();
  if (beautyTypes === undefined || beautyTypes.length <= 0) {
    return;
  }
  let beautyLevels: Array<number> = portraitPhotoSession.getSupportedBeautyRange(beautyTypes[0]);
  if (beautyLevels === undefined || beautyLevels.length <= 0) {
    return;
  }
  portraitPhotoSession.setBeauty(beautyTypes[0], beautyLevels[0]);
}

```

## setPortraitThemeType

```TypeScript
setPortraitThemeType(type: PortraitThemeType): void
```

Sets a portrait theme type for a camera device.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | PortraitThemeType | Yes | The type of portrait theme. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config, only throw in session usage. |

