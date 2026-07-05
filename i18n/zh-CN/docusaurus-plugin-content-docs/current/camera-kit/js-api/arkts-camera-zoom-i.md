# Zoom

Zoom extend [ZoomQuery]camera.ZoomQuery Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming.

**继承实现关系：** Zoom继承自：ZoomQuery。

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getZoomCenterPoint

```TypeScript
getZoomCenterPoint(): Point
```

Gets zoom center point.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Point | The current zoom center point. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

## getZoomRatio

```TypeScript
getZoomRatio(): double
```

Obtains the zoom ratio in use.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Zoom ratio obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. [since 12] |

## prepareZoom

```TypeScript
prepareZoom(): void
```

Instructs the bottom layer to prepare for zooming, for example, powering on the sensor.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function prepareZoom(sessionExtendsZoom: camera.Zoom): void {
  try {
    sessionExtendsZoom.prepareZoom();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The prepareZoom call failed. error code: ${err.code}`);
  }
}

```

## setSmoothZoom

```TypeScript
setSmoothZoom(targetRatio: double, mode?: SmoothZoomMode): void
```

Sets smooth zoom.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetRatio | double | 是 | Target zoom ratio. The supported zoom ratio range can be obtained by calling  [getZoomRatioRange]camera.ZoomQuery.getZoomRatioRange. If the value passed in  is not within the supported range, the value within the precision range is retained. |
| mode | SmoothZoomMode | 否 | Smooth zoom mode. The default value is 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. [since 11 - 17] |

## setZoomCenterPoint

```TypeScript
setZoomCenterPoint(point: Point): void
```

Sets zoom center point.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Target zoom center point. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

## setZoomRatio

```TypeScript
setZoomRatio(zoomRatio: double): void
```

Sets a zoom ratio, with a maximum precision of two decimal places.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zoomRatio | double | 是 | Zoom ratio. The supported zoom ratio range can be obtained by calling  [getZoomRatioRange]camera.ZoomQuery.getZoomRatioRange. If the value passed in  is not within the supported range, the value within the precision range is retained. It takes some time  for the zoom ratio to take effect at the bottom layer. To obtain the correct zoom ratio, you need to wait for  one to two frames. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## unprepareZoom

```TypeScript
unprepareZoom(): void
```

Instructs the bottom layer to unprepare for zooming.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function unprepareZoom(sessionExtendsZoom: camera.Zoom): void {
  try {
    sessionExtendsZoom.unprepareZoom();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The unprepareZoom call failed. error code: ${err.code}`);
  }
}

```

