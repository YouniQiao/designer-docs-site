# ColorReservation (System API)

ColorReservation extends [ColorReservationQuery](arkts-camera-colorreservationquery-i-sys.md)
Provides API for obtaining and setting a color reservation type.

**Inheritance/Implementation:** ColorReservation extends [ColorReservationQuery](arkts-camera-colorreservationquery-i-sys.md)

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorReservation

```TypeScript
getColorReservation(): ColorReservationType
```

Obtains the color reservation type in use.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| ColorReservationType | Color reservation type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getColorReservation(session: camera.VideoSessionForSys): camera.ColorReservationType | undefined {
  let colorReservation: camera.ColorReservationType | undefined = undefined;
  try {
    colorReservation = session.getColorReservation();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setColorReservation call failed. error code: ${err.code}`);
  }
  return colorReservation;
}

```

## setColorReservation

```TypeScript
setColorReservation(type: ColorReservationType): void
```

Sets a color reservation type. Before the setting, call
[getSupportedColorReservationTypes](arkts-camera-colorreservationquery-i-sys.md#getsupportedcolorreservationtypes-1) to
obtain the supported color reservation types.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ColorReservationType | Yes | Color reservation type, which is obtained by calling[getSupportedColorReservationTypes](arkts-camera-colorreservationquery-i-sys.md#getsupportedcolorreservationtypes-1). |

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

function setColorReservation(session: camera.VideoSessionForSys, type: camera.ColorReservationType): void {
  try {
    session.setColorReservation(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setColorReservation call failed. error code: ${err.code}`);
  }
}

```

