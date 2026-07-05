# ColorReservation

ColorReservation extends [ColorReservationQuery]camera.ColorReservationQuery Provides API for obtaining and setting a color reservation type.

**继承实现关系：** ColorReservation继承自：ColorReservationQuery。

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorReservation

```TypeScript
getColorReservation(): ColorReservationType
```

Obtains the color reservation type in use.

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorReservationType | Color reservation type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getColorReservation(session: camera.VideoSessionForSys): camera.ColorReservationType | undefined {
  let colorReservation: camera.ColorReservationType | undefined = undefined;
  try {
    colorReservation = session.getColorReservation();
  } catch (error) {
    // 失败返回错误码error.code并处理。
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

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | ColorReservationType | 是 | Color reservation type, which is obtained by calling  [getSupportedColorReservationTypes]camera.ColorReservationQuery.getSupportedColorReservationTypes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setColorReservation(session: camera.VideoSessionForSys, type: camera.ColorReservationType): void {
  try {
    session.setColorReservation(type);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setColorReservation call failed. error code: ${err.code}`);
  }
}

```

