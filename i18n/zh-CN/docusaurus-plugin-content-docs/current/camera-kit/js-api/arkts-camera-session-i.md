# Session

Session** implements a session, which saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera and requests the camera to take a photo or record a video.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addInput

```TypeScript
addInput(cameraInput: CameraInput): void
```

Adds a [CameraInput]camera.CameraInput instance to this session.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraInput | CameraInput | 是 | CameraInput instance to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## addOutput

```TypeScript
addOutput(cameraOutput: CameraOutput): void
```

Adds a [CameraOutput]camera.CameraOutput instance to this session.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | 是 | CameraOutput instance to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## beginConfig

```TypeScript
beginConfig(): void
```

Starts configuration for the session.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400105 | Session config locked. |
| 7400201 | Camera service fatal error. [since 12] |

## canAddInput

```TypeScript
canAddInput(cameraInput: CameraInput): boolean
```

Checks whether a **CameraInput** instance can be added to this session. This API must be called after [beginConfig]camera.Session.beginConfig and before [commitConfig]camera.Session.commitConfig().

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraInput | CameraInput | 是 | CameraInput instance to add. The API does not take effect if the input  parameter is invalid (for example, the value is out of range, null, or undefined). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for adding the CameraInput instance. true if it can be added, false  otherwise. |

## canAddOutput

```TypeScript
canAddOutput(cameraOutput: CameraOutput): boolean
```

Determines whether a CameraOutput instance can be added to this session. This API must be called after [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | 是 | CameraOutput instance to add. The API does not take effect if the  input parameter is invalid (for example, the value is out of range, null, or undefined). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for adding the CameraOutput instance. true if it can be added,  false otherwise. |

## commitConfig

```TypeScript
commitConfig(callback: AsyncCallback<void>): void
```

Commits the configuration for this session. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the configuration is  successfully committed, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. For example, if the  aspect ratio of the preview stream is different from that of the video output stream, error code 7400201 is  returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## commitConfig

```TypeScript
commitConfig(): Promise<void>
```

Commits the configuration for this session. This API uses a promise to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getActiveParameter

```TypeScript
getActiveParameter(key: string): string
```

Gets the active value of the given key in camera metadata.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Tag name in camera metadata. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The active value of the key in camera metadata. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## getCameraOutputCapabilities

```TypeScript
getCameraOutputCapabilities(camera: CameraDevice): Array<CameraOutputCapability>
```

Get the supported camera output capability set.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;CameraOutputCapability> | The array of the output capability. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## getParameters

```TypeScript
getParameters(key: string): Array<string>
```

Gets the values of the given key in camera metadata.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Tag name in camera metadata. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | The values of the key in camera metadata. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## getSupportedKeys

```TypeScript
getSupportedKeys(): Array<string>
```

Gets the supported keys in camera metadata.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | The supported keys in camera metadata. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this session. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session is released  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases this session. This API uses a promise to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## removeInput

```TypeScript
removeInput(cameraInput: CameraInput): void
```

Removes a [CameraInput]camera.CameraInput instance from this session. This API must be called after [beginConfig]camera.Session.beginConfig and before [commitConfig]camera.Session.commitConfig().

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraInput | CameraInput | 是 | CameraInput instance to remove. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## removeOutput

```TypeScript
removeOutput(cameraOutput: CameraOutput): void
```

Removes a [CameraOutput]camera.CameraOutput instance from this session.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | 是 | CameraOutput instance to remove. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## setParameters

```TypeScript
setParameters(kvpairs: Record<string, string>): void
```

Sets key-value pairs parameters for the session.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| kvpairs | Record&lt;string, string> | 是 | The pairs of tag name and value in camera metadata. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## setUsage

```TypeScript
setUsage(usage: UsageType, enabled: boolean): void
```

Set usage for the capture session.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | UsageType | 是 | The capture session usage. |
| enabled | boolean | 是 | Enable usage for session if TRUE. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this session. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session starts successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |
| 7400102 | Operation not allowed. [since 12] |

## start

```TypeScript
start(): Promise<void>
```

Starts this session. This API uses a promise to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |
| 7400102 | Operation not allowed. [since 12] |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this session. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session stops successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this session. This API uses a promise to return the result.

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

