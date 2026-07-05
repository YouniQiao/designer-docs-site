# FocusQuery

Provides the API to check whether the focus assist is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isFocusAssistSupported

```TypeScript
isFocusAssistSupported(): boolean
```

Checks whether the focus assist is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus assist. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusAssistSupported(professionalPhotoSession: camera.ProfessionalPhotoSession): boolean {
  let status: boolean = false;
  try {
    status = professionalPhotoSession.isFocusAssistSupported();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The isFocusAssistSupported call failed. error code: ${err.code}`);
  }
  return status;
}

```

## isFocusDrivenTypeSupported

```TypeScript
isFocusDrivenTypeSupported(type: FocusDrivenType): boolean
```

Checks whether a focus drive type is supported.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | FocusDrivenType | Yes | Focus drive type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus drive type. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400103 | Session not config, only throw in session usage. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusDrivenTypeSupported(session: camera.VideoSessionForSys, type: camera.FocusDrivenType): boolean {
  let status: boolean = false;
  try {
    status = session.isFocusDrivenTypeSupported(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The isFocusDrivenTypeSupported call failed. error code: ${err.code}`);
  }
  return status;
}

```

## isFocusModeSupported

```TypeScript
isFocusModeSupported(afMode: FocusMode): boolean
```

Checks whether a focus mode is supported.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| afMode | FocusMode | Yes | Focus mode. If the input parameter is null or undefined, it is treated as 0 and  manual focus is used. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus mode. true if supported, false otherwise.  If the operation fails, undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isFocusRangeTypeSupported

```TypeScript
isFocusRangeTypeSupported(type: FocusRangeType): boolean
```

Checks whether a focus range type is supported.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | FocusRangeType | Yes | Focus range type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus range type. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400103 | Session not config, only throw in session usage. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusRangeTypeSupported(session: camera.VideoSessionForSys, type: camera.FocusRangeType): boolean {
  let status: boolean = false;
  try {
    status = session.isFocusRangeTypeSupported(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The isFocusRangeTypeSupported call failed. error code: ${err.code}`);
  }
  return status;
}

```

## isLockFocusTrackingSupported

```TypeScript
isLockFocusTrackingSupported(): boolean
```

Checks whether lock focus tracking is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is the lock focus tracking supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

