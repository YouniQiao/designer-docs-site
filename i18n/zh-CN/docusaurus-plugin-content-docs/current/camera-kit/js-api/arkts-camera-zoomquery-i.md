# ZoomQuery

Provides the API to obtain the equivalent focal length information list in the current mode.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getRAWCaptureZoomRatioRange

```TypeScript
getRAWCaptureZoomRatioRange(): Array<double>
```

Gets supported zoom ratio range during raw-capture.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;double> | The zoom ratio range. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getZoomPointInfos

```TypeScript
getZoomPointInfos(): Array<ZoomPointInfo>
```

Obtains the equivalent focal length information list in the current mode.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ZoomPointInfo> | Equivalent focal length information list in the current mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 24] |
| 7400103 | Session not config, only throw in session usage. |

## getZoomRatioRange

```TypeScript
getZoomRatioRange(): Array<double>
```

Obtains the supported zoom ratio range.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;double> | Array containing the minimum and maximum zoom ratios. If the operation fails,  undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isZoomCenterPointSupported

```TypeScript
isZoomCenterPointSupported(): boolean
```

Checks whether zoom center point is supported.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Is the zoom center point supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

