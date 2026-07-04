# OnHttpErrorReceiveEvent

Http error receive event when the web page receives a web resource loading HTTP error.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AtomicServiceWeb, OnMessageEvent, OnPageEndEvent, OnHttpErrorReceiveEvent, OnLoadInterceptEvent, WebHeader, OnProgressChangeEvent, OnErrorReceiveEvent, OnPageBeginEvent, OnLoadInterceptCallback, AtomicServiceWebController } from '@ohos.atomicservice.AtomicServiceWeb';
```

## request

```TypeScript
request: WebResourceRequest
```

Web resource request of event.

**Type:** WebResourceRequest

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## response

```TypeScript
response: WebResourceResponse
```

Web resource response of event.

**Type:** WebResourceResponse

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

