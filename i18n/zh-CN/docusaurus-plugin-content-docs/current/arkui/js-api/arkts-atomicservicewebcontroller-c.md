# AtomicServiceWebController

Provides methods for controlling the AtomicServiceWeb controller.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { AtomicServiceWeb,OnMessageEvent,OnPageEndEvent,OnHttpErrorReceiveEvent,OnLoadInterceptEvent,WebHeader,OnProgressChangeEvent,OnErrorReceiveEvent,OnPageBeginEvent,OnLoadInterceptCallback,AtomicServiceWebController } from '@kit.ArkUI';
```

## accessBackward

```TypeScript
accessBackward(): boolean
```

Checks whether the web page can go back.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the web page can go back else false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## accessForward

```TypeScript
accessForward(): boolean
```

Checks whether the web page can go forward.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the web page can go forward else false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## accessStep

```TypeScript
accessStep(step: number): boolean
```

Checks whether the web page can go back or forward the given number of steps.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| step | number | 是 | The number of steps. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if the web page can go back else false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## backward

```TypeScript
backward(): void
```

Goes back in the history of the web page.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## forward

```TypeScript
forward(): void
```

Goes forward in the history of the web page.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## getCustomUserAgent

```TypeScript
getCustomUserAgent(): string
```

Get custom user agent.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Get custom User agent information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## getUserAgent

```TypeScript
getUserAgent(): string
```

Gets the default user agent.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return user agent information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## loadUrl

```TypeScript
loadUrl(url: string | Resource, headers?: Array<WebHeader>): void
```

Loads the URL.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string \| Resource | 是 | The URL to load. |
| headers | Array&lt;WebHeader> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |
| 17100002 | Invalid url. |
| 17100003 | Invalid resource path or file type. |

## refresh

```TypeScript
refresh(): void
```

Refreshes the current URL.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

## setCustomUserAgent

```TypeScript
setCustomUserAgent(userAgent: string): void
```

Set custom user agent.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userAgent | string | 是 | User custom agent information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 17100001 | Init error. The AtomicServiceWebController must be associated with a  AtomicServiceWeb component. |

