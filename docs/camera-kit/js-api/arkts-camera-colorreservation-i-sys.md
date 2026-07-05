# ColorReservation

ColorReservation extends [ColorReservationQuery]camera.ColorReservationQuery Provides API for obtaining and setting a color reservation type.

**Inheritance:** ColorReservationextends: ColorReservationQuery.

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
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

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

Sets a color reservation type. Before the setting, call [getSupportedColorReservationTypes]camera.ColorReservationQuery.getSupportedColorReservationTypes to obtain the supported color reservation types.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ColorReservationType | Yes | Color reservation type, which is obtained by calling  [getSupportedColorReservationTypes]camera.ColorReservationQuery.getSupportedColorReservationTypes. |

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

