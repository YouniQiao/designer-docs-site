# ColorReservationQuery

Provides APIs for querying the color retention type supported by the device.

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedColorReservationTypes

```TypeScript
getSupportedColorReservationTypes(): Array<ColorReservationType>
```

Obtains the supported color reservation types.

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ColorReservationType> | Array of color reservation types supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getSupportedColorReservationTypes(session: camera.VideoSessionForSys): Array<camera.ColorReservationType> {
  let colorReservationTypes: Array<camera.ColorReservationType> = [];
  try {
    colorReservationTypes = session.getSupportedColorReservationTypes();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getSupportedColorReservationTypes call failed. error code: ${err.code}`);
  }
  return colorReservationTypes;
}

```

