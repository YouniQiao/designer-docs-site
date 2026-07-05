# ColorReservationQuery

Provides APIs for querying the color retention type supported by the device.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedColorReservationTypes

```TypeScript
getSupportedColorReservationTypes(): Array<ColorReservationType>
```

Obtains the supported color reservation types.

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ColorReservationType> | Array of color reservation types supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getSupportedColorReservationTypes(session: camera.VideoSessionForSys): Array<camera.ColorReservationType> {
  let colorReservationTypes: Array<camera.ColorReservationType> = [];
  try {
    colorReservationTypes = session.getSupportedColorReservationTypes();
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The getSupportedColorReservationTypes call failed. error code: ${err.code}`);
  }
  return colorReservationTypes;
}

```

