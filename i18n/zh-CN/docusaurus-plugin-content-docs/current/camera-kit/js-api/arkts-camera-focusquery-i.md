# FocusQuery

Provides the API to check whether the focus assist is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isFocusAssistSupported

```TypeScript
isFocusAssistSupported(): boolean
```

Checks whether the focus assist is supported.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the focus assist. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusAssistSupported(professionalPhotoSession: camera.ProfessionalPhotoSession): boolean {
  let status: boolean = false;
  try {
    status = professionalPhotoSession.isFocusAssistSupported();
  } catch (error) {
    // 失败返回错误码error.code并处理。
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

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | FocusDrivenType | 是 | Focus drive type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the focus drive type. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusDrivenTypeSupported(session: camera.VideoSessionForSys, type: camera.FocusDrivenType): boolean {
  let status: boolean = false;
  try {
    status = session.isFocusDrivenTypeSupported(type);
  } catch (error) {
    // 失败返回错误码error.code并处理。
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

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| afMode | FocusMode | 是 | Focus mode. If the input parameter is null or undefined, it is treated as 0 and  manual focus is used. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the focus mode. true if supported, false otherwise.  If the operation fails, undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isFocusRangeTypeSupported

```TypeScript
isFocusRangeTypeSupported(type: FocusRangeType): boolean
```

Checks whether a focus range type is supported.

**起始版本：** 15

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | FocusRangeType | 是 | Focus range type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the focus range type. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusRangeTypeSupported(session: camera.VideoSessionForSys, type: camera.FocusRangeType): boolean {
  let status: boolean = false;
  try {
    status = session.isFocusRangeTypeSupported(type);
  } catch (error) {
    // 失败返回错误码error.code并处理。
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Is the lock focus tracking supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

