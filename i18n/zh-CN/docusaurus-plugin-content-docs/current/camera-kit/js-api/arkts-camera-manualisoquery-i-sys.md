# ManualIsoQuery

Provides APIs to check whether a camera device supports manual ISO setting and obtain the ISO range supported by the device.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getIsoRange

```TypeScript
getIsoRange(): Array<int>
```

Obtains the supported ISO range.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;int> | ISO range. The value range is [50, 100, ..., 6400]. The actual value depends on the  bottom-layer capability. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getIsoRange(professionalPhotoSession: camera.ProfessionalPhotoSession): Array<number> {
  let isoRange: Array<number> = [];
  try {
    isoRange = professionalPhotoSession.getIsoRange();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getIsoRange call failed. error code: ${err.code}`);
  }
  return isoRange;
}

```

## getSupportedIsoRange

```TypeScript
getSupportedIsoRange(): int[]
```

Get a array of supported standard ISO sensitivity values, as defined in ISO 12232:2006.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | The array of ISO sensitivity values. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config, only throw in session usage. |

## isManualIsoSupported

```TypeScript
isManualIsoSupported(): boolean
```

Checks whether manual ISO setting is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of manual ISO setting. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isManualIsoSupported(professionalPhotoSession: camera.ProfessionalPhotoSession): boolean {
  let status: boolean = false;
  try {
    status = professionalPhotoSession.isManualIsoSupported();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isManualIsoSupported call failed. error code: ${err.code}`);
  }
  return status;
}

```

