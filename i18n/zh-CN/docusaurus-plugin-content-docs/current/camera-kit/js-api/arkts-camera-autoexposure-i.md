# AutoExposure

AutoExposure inherits from [AutoExposureQuery]camera.AutoExposureQuery. It provides APIs related to auto exposure.

**继承实现关系：** AutoExposure继承自：AutoExposureQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposureMeteringMode

```TypeScript
getExposureMeteringMode(): ExposureMeteringMode
```

Gets current exposure metering mode.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ExposureMeteringMode | The current exposure metering mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400103 | Session not config, only throw in session usage. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## getExposureMode

```TypeScript
getExposureMode(): ExposureMode
```

Obtains the exposure mode in use. > **NOTE** > > This API directly returns an invalid value if you have not set the exposure mode using > [setExposureMode]camera.AutoExposure.setExposureMode.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ExposureMode | Exposure mode obtained. If the operation fails, undefined is returned and an error code  defined in [CameraErrorCode]camera.CameraErrorCode is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getExposureValue

```TypeScript
getExposureValue(): double
```

Obtains the exposure value in use.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this  parameter is set to 1.2, the EV that takes effect is 1.0.  If the operation fails, an error code defined in [CameraErrorCode]camera.CameraErrorCode is  returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getMeteringPoint

```TypeScript
getMeteringPoint(): Point
```

Obtains the metering point of the camera device.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Point | Metering point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## offExposureStateChange

```TypeScript
offExposureStateChange(callback?: Callback<ExposureState>): void
```

Unregisters the callback used to listen for exposure state changes.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureState> | 否 |  |

## onExposureStateChange

```TypeScript
onExposureStateChange(callback: Callback<ExposureState>): void
```

Registers a callback to listen for exposure state changes.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureState> | 是 | Callback used to get the exposure state change. |

## setExposureBias

```TypeScript
setExposureBias(exposureBias: double): void
```

Sets an exposure compensation value (EV). Before the setting, you are advised to use [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange to obtain the supported values.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposureBias | double | 是 | EV. The supported EV range can be obtained by calling  [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange. If the  value passed is not within the supported range, the nearest critical point is used. Exposure compensation  is adjusted in steps, and the step size may vary across devices due to hardware differences. For example, if  the step size is 0.5, setting a value of 1.2 would result in an actual effective exposure compensation value  of 1.0. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

## setExposureMeteringMode

```TypeScript
setExposureMeteringMode(aeMeteringMode: ExposureMeteringMode): void
```

Sets exposure metering mode.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMeteringMode | ExposureMeteringMode | 是 | Exposure metering mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 23] |
| 7400103 | Session not config, only throw in session usage. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setExposureMode

```TypeScript
setExposureMode(aeMode: ExposureMode): void
```

Sets an exposure mode. Before the setting, call [isExposureModeSupported]camera.AutoExposureQuery.isExposureModeSupported to check whether the exposure mode is supported.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMode | ExposureMode | 是 | Exposure mode. If the input parameter is null or undefined, it is treated as 0  and exposure is locked. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 19] |

## setMeteringPoint

```TypeScript
setMeteringPoint(point: Point): void
```

Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Metering point. The value range of x and y must be within [0, 1]. If a value less than 0  is passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

