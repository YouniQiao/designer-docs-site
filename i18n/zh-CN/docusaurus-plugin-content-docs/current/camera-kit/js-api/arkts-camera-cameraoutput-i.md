# CameraOutput

CameraOutput implements output information used in [Session]camera.Session. It is the base class of **output**.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases output resources. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the output resources are  released successfully, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases output resources. This API uses a promise to return the result.

**起始版本：** 10

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

