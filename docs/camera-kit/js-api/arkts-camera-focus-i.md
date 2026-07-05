# Focus

Focus extends [FocusQuery]camera.FocusQuery Provides APIs to obtain and set the camera focus mode and focus position.

**Inheritance:** Focusextends: FocusQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getFocalLength

```TypeScript
getFocalLength(): double
```

Obtains the focal length in use.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| double | Focal length, in units of mm. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocusAssist

```TypeScript
getFocusAssist(): boolean
```

Checks whether the focus assist is enabled.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the focus assist is enabled. true if enabled, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getFocusAssist(professionalPhotoSession: camera.ProfessionalPhotoSession): boolean {
  let isFocusAssistOpened: boolean = false;
  try {
    isFocusAssistOpened = professionalPhotoSession.getFocusAssist();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The getFocusAssist call failed. error code: ${err.code}`);
  }
  return isFocusAssistOpened;
}

```

## getFocusDriven

```TypeScript
getFocusDriven(): FocusDrivenType
```

Obtains the focus drive type in use.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| FocusDrivenType | Focus drive type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getFocusDriven(session: camera.VideoSessionForSys): camera.FocusDrivenType | undefined {
  let focusDrivenType: camera.FocusDrivenType | undefined = undefined;
  try {
    focusDrivenType = session.getFocusDriven();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The getFocusDriven call failed. error code: ${err.code}`);
  }
  return focusDrivenType;
}

```

## getFocusMode

```TypeScript
getFocusMode(): FocusMode
```

Obtains the focus mode in use.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| FocusMode | Focus mode obtained. If the operation fails, undefined is returned and an error code  defined in [CameraErrorCode]camera.CameraErrorCode is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocusPoint

```TypeScript
getFocusPoint(): Point
```

Obtains the focal point in use.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Point | Focal point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocusRange

```TypeScript
getFocusRange(): FocusRangeType
```

Obtains the focus range type in use.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| FocusRangeType | Focus range type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getFocusRange(session: camera.VideoSessionForSys): camera.FocusRangeType | undefined {
  let focusRangeType: camera.FocusRangeType | undefined = undefined;
  try {
    focusRangeType = session.getFocusRange();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The getFocusRange call failed. error code: ${err.code}`);
  }
  return focusRangeType;
}

```

## lockFocusTracking

```TypeScript
lockFocusTracking(focusPoint: Point): void
```

Lock focus tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| focusPoint | Point | Yes | lock focus tracking point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

## setFocusAssist

```TypeScript
setFocusAssist(enabled: boolean): void
```

Sets the focus assist. Before the setting, call [isFocusAssistSupported]camera.FocusQuery.isFocusAssistSupported to check whether the device supports the focus assist.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable focus assist. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setFocusAssist(professionalPhotoSession: camera.ProfessionalPhotoSession): void {
  try {
    professionalPhotoSession.setFocusAssist(false);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setFocusAssist call failed. error code: ${err.code}`);
  }
}

```

## setFocusDriven

```TypeScript
setFocusDriven(type: FocusDrivenType): void
```

Sets a focus drive type. Before the setting, call [isFocusDrivenTypeSupported]camera.FocusQuery.isFocusDrivenTypeSupported to check whether the focus drive type is supported.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | FocusDrivenType | Yes | Focus drive type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setFocusDriven(session: camera.VideoSessionForSys, type: camera.FocusDrivenType): void {
  try {
    session.setFocusDriven(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setFocusDriven call failed. error code: ${err.code}`);
  }
}

```

## setFocusMode

```TypeScript
setFocusMode(afMode: FocusMode): void
```

Sets a focus mode. Before the setting, call [isFocusModeSupported]camera.FocusQuery.isFocusModeSupported to check whether the focus mode is supported.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| afMode | FocusMode | Yes | Focus mode. If the input parameter is null or undefined, it is treated as 0 and  manual focus is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setFocusPoint

```TypeScript
setFocusPoint(point: Point): void
```

Sets the focal point. The focal point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | Focal point. The value range of x and y must be within [0, 1]. If a value less than 0 is  passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setFocusRange

```TypeScript
setFocusRange(type: FocusRangeType): void
```

Sets a focus range type. Before the setting, call [isFocusRangeTypeSupported]camera.FocusQuery.isFocusRangeTypeSupported to check whether the focus range type is supported.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | FocusRangeType | Yes | Focus range type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setFocusRange(session: camera.VideoSessionForSys, type: camera.FocusRangeType): void {
  try {
    session.setFocusRange(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setFocusRange call failed. error code: ${err.code}`);
  }
}

```

## unlockFocusTracking

```TypeScript
unlockFocusTracking(): void
```

Unlock focus tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

