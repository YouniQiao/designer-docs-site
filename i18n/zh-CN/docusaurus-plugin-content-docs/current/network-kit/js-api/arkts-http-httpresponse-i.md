# HttpResponse

Defines the response to an HTTP request.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## result

```TypeScript
result: string | Object | ArrayBuffer
```

result can be a string (API 6) or an ArrayBuffer(API 8). Object is deprecated from API 8. If {@link HttpRequestOptions#expectDataType} is set, the system preferentially returns this parameter.

**类型：** string | Object | ArrayBuffer

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## header

```TypeScript
header: Object
```

All headers in the response from the server.

**类型：** Object

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## connectionExtraInfo

```TypeScript
connectionExtraInfo?: ConnectionExtraInfo
```

Information details of HTTP request.

**类型：** ConnectionExtraInfo

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## resultType

```TypeScript
resultType: HttpDataType
```

If the resultType is string, you can get result directly. If the resultType is Object, you can get result such as this: result['key']. If the resultType is ArrayBuffer, you can use ArrayBuffer to create the binary objects.

**类型：** HttpDataType

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## performanceTiming

```TypeScript
performanceTiming: PerformanceTiming
```

The time taken of various stages of HTTP request.

**类型：** PerformanceTiming

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## cookies

```TypeScript
cookies: string
```

Cookies returned by the server.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## responseCode

```TypeScript
responseCode: ResponseCode | int
```

Server status code.

**类型：** ResponseCode | int

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

