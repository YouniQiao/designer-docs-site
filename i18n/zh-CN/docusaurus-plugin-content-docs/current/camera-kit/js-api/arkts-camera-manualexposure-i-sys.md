# ManualExposure

ManualExposure extends [ManualExposureQuery]camera.ManualExposureQuery Provides APIs to obtain and set the exposure duration.

**继承实现关系：** ManualExposure继承自：ManualExposureQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposure

```TypeScript
getExposure(): int
```

Obtains the manual exposure duration in use.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | The current exposure value, in units of ms |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |

**示例：**

```TypeScript
function getExposure(nightPhotoSession: camera.NightPhotoSession): number | undefined {
  let exposureRange: Array<number> = nightPhotoSession.getSupportedExposureRange();
  if (exposureRange === undefined || exposureRange.length <= 0) {
    return undefined;
  }
  let exposure: number = nightPhotoSession.getExposure();
  return exposure;
}

```

## getExposureDuration

```TypeScript
getExposureDuration(): int
```

Gets current exposure value.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | The current exposure value, in units of microsecond |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, session or inputdevice maybe abnormal. |
| 7400103 | Session not config. |

## setExposure

```TypeScript
setExposure(exposure: int): void
```

Sets the manual exposure duration. Before using this API, call [getSupportedExposureRange]camera.ManualExposureQuery.getSupportedExposureRange to obtain the supported manual exposure durations, in ms.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposure | int | 是 | Manual exposure duration, which must be one of the supported durations obtained by  running [getSupportedExposureRange]camera.ManualExposureQuery.getSupportedExposureRange. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

## setExposureDuration

```TypeScript
setExposureDuration(exposureDuration: int): void
```

Sets Exposure duration value, units: microseconds.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposureDuration | int | 是 | Exposure duration value |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

