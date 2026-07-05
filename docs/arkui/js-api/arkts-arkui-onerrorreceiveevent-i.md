# OnErrorReceiveEvent

Error receive event when the web page receives a web resource loading error.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AtomicServiceWeb, OnMessageEvent, OnPageEndEvent, OnHttpErrorReceiveEvent, OnLoadInterceptEvent, WebHeader, OnProgressChangeEvent, OnErrorReceiveEvent, OnPageBeginEvent, OnLoadInterceptCallback, AtomicServiceWebController } from '@ohos.atomicservice.AtomicServiceWeb';
```

## error

```TypeScript
error: WebResourceError
```

Web resource error of event.

**Type:** WebResourceError

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## request

```TypeScript
request: WebResourceRequest
```

Web resource request of event.

**Type:** WebResourceRequest

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

