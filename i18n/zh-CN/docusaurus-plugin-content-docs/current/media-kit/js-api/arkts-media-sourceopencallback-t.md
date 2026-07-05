# SourceOpenCallback

```TypeScript
type SourceOpenCallback = (request: MediaSourceLoadingRequest) => long
```

This callback function is implemented by applications to handle resource open requests and return a unique handle for the opened resource. > **NOTE** > > The client must return the handle immediately after processing the request.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | MediaSourceLoadingRequest | 是 | Parameters for the resource open request, including detailed  information about the requested resource and the data push method. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Handle for the current resource open request. A value greater than 0 means the request is  successful, whereas a value less than or equal to 0 means it fails.  - The handle for the request object is unique. |

