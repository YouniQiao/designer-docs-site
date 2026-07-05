# AutoExposureQuery

AutoExposureQuery provides APIs to query the automatic exposure feature of a camera device. > > - In this version, a compatibility change was made that preserved the initial version information of inner > elements. As a result, you might see outer element's @since version number being higher than that of the inner > elements. However, this discrepancy does not affect the functionality of the interface.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposureBiasRange

```TypeScript
getExposureBiasRange(): Array<double>
```

Obtains the exposure compensation values of the camera device.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;double> | Array of compensation values. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isExposureMeteringModeSupported

```TypeScript
isExposureMeteringModeSupported(aeMeteringMode: ExposureMeteringMode): boolean
```

Checks whether a specified exposure metering mode is supported.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMeteringMode | ExposureMeteringMode | 是 | Exposure metering mode |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Is the exposure metering mode supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 23] |
| 7400103 | Session not config, only throw in session usage. |

## isExposureModeSupported

```TypeScript
isExposureModeSupported(aeMode: ExposureMode): boolean
```

Checks whether an exposure mode is supported.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMode | ExposureMode | 是 | Exposure mode. If the input parameter is null or undefined, it is treated as 0  and exposure is locked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the exposure mode. true if supported, false  otherwise. If the operation fails, undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

