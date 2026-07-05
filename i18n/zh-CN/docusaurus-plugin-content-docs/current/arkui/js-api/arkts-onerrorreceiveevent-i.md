# OnErrorReceiveEvent

Error receive event when the web page receives a web resource loading error.

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { AtomicServiceWeb,OnMessageEvent,OnPageEndEvent,OnHttpErrorReceiveEvent,OnLoadInterceptEvent,WebHeader,OnProgressChangeEvent,OnErrorReceiveEvent,OnPageBeginEvent,OnLoadInterceptCallback,AtomicServiceWebController } from '@kit.ArkUI';
```

## request

```TypeScript
request: WebResourceRequest
```

Web resource request of event.

**类型：** WebResourceRequest

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## error

```TypeScript
error: WebResourceError
```

Web resource error of event.

**类型：** WebResourceError

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

