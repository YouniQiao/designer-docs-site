# HttpInterceptorChain

Defines an HTTP Interceptor chain.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## addChain

```TypeScript
public addChain(chain: HttpInterceptor[]): boolean
```

Add an interceptor chain to the HTTP client.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| chain | HttpInterceptor[] | 是 | The chain of interceptors. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the chain is added successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2300801 | Parameter type not supported by the interceptor. |
| 2300802 | Duplicated interceptor type in the chain. |
| 2300999 | Internal error. |

## apply

```TypeScript
public apply(httpRequest: HttpRequest): boolean
```

Attach the chain to the target http request. Only one chain can be attached to a given request.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| httpRequest | HttpRequest | 是 | Initiates an HTTP request to a given URL. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the interceptor chain is attached successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2300801 | Parameter type not supported by the interceptor. |
| 2300999 | Internal error. |

## getChain

```TypeScript
public getChain(): HttpInterceptor[]
```

The method to get the chain of interceptors.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HttpInterceptor[] | The chain of interceptors. |

