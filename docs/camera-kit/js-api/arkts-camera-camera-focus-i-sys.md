# Focus

Focus extends [FocusQuery](arkts-camera-camera-focusquery-i.md)Provides APIs to obtain and set the camera focus mode and focus position.

**Inheritance/Implementation:** Focus extends [FocusQuery](arkts-camera-camera-focusquery-i.md)

**Since:** 11

<!--Device-camera-interface Focus extends FocusQuery--><!--Device-camera-interface Focus extends FocusQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="getfocusassist"></a>
## getFocusAssist

```TypeScript
getFocusAssist(): boolean
```

Checks whether the focus assist is enabled.

**Since:** 12

<!--Device-Focus-getFocusAssist(): boolean--><!--Device-Focus-getFocusAssist(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the focus assist is enabled. **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

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

<a id="getfocusdriven"></a>
## getFocusDriven

```TypeScript
getFocusDriven(): FocusDrivenType
```

Obtains the focus drive type in use.

**Since:** 15

<!--Device-Focus-getFocusDriven(): FocusDrivenType--><!--Device-Focus-getFocusDriven(): FocusDrivenType-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [FocusDrivenType](arkts-camera-camera-focusdriventype-e-sys.md) | Focus drive type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

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

<a id="getfocusrange"></a>
## getFocusRange

```TypeScript
getFocusRange(): FocusRangeType
```

Obtains the focus range type in use.

**Since:** 15

<!--Device-Focus-getFocusRange(): FocusRangeType--><!--Device-Focus-getFocusRange(): FocusRangeType-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [FocusRangeType](arkts-camera-camera-focusrangetype-e-sys.md) | Focus range type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

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

<a id="setfocusassist"></a>
## setFocusAssist

```TypeScript
setFocusAssist(enabled: boolean): void
```

Sets the focus assist. Before the setting, call [isFocusAssistSupported](arkts-camera-camera-focusquery-i-sys.md#isfocusassistsupported-1) to check whether the device supports the focus assist.

**Since:** 12

<!--Device-Focus-setFocusAssist(enabled: boolean): void--><!--Device-Focus-setFocusAssist(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable focus assist. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

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

<a id="setfocusdriven"></a>
## setFocusDriven

```TypeScript
setFocusDriven(type: FocusDrivenType): void
```

Sets a focus drive type. Before the setting, call [isFocusDrivenTypeSupported](arkts-camera-camera-focusquery-i-sys.md#isfocusdriventypesupported-1) to check whether the focus drive type is supported.

**Since:** 15

<!--Device-Focus-setFocusDriven(type: FocusDrivenType): void--><!--Device-Focus-setFocusDriven(type: FocusDrivenType): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [FocusDrivenType](arkts-camera-camera-focusdriventype-e-sys.md) | Yes | Focus drive type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;3. Parameter verification failed. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

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

<a id="setfocusrange"></a>
## setFocusRange

```TypeScript
setFocusRange(type: FocusRangeType): void
```

Sets a focus range type. Before the setting, call [isFocusRangeTypeSupported](arkts-camera-camera-focusquery-i-sys.md#isfocusrangetypesupported-1) to check whether the focus range type is supported.

**Since:** 15

<!--Device-Focus-setFocusRange(type: FocusRangeType): void--><!--Device-Focus-setFocusRange(type: FocusRangeType): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [FocusRangeType](arkts-camera-camera-focusrangetype-e-sys.md) | Yes | Focus range type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;3. Parameter verification failed. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

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

