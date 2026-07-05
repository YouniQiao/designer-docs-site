# @ohos.atomicservice.AtomicServiceWeb

## Modules to Import

```TypeScript
import { AtomicServiceWeb,OnMessageEvent,OnPageEndEvent,OnHttpErrorReceiveEvent,OnLoadInterceptEvent,WebHeader,OnProgressChangeEvent,OnErrorReceiveEvent,OnPageBeginEvent,OnLoadInterceptCallback,AtomicServiceWebController } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AtomicServiceWebController](arkts-atomicservicewebcontroller-c.md) | Provides methods for controlling the AtomicServiceWeb controller. |

### Interfaces

| Name | Description |
| --- | --- |
| [OnErrorReceiveEvent](arkts-onerrorreceiveevent-i.md) | Error receive event when the web page receives a web resource loading error. |
| [OnHttpErrorReceiveEvent](arkts-onhttperrorreceiveevent-i.md) | Http error receive event when the web page receives a web resource loading HTTP error. |
| [OnLoadInterceptEvent](arkts-onloadinterceptevent-i.md) | Load intercept event when the resources loading is intercepted. |
| [OnMessageEvent](arkts-onmessageevent-i.md) | Message event after page is back or destroyed if postMessage() is called in H5 page. |
| [OnPageBeginEvent](arkts-onpagebeginevent-i.md) | Page begin event at the begin of web page loading. |
| [OnPageEndEvent](arkts-onpageendevent-i.md) | Page end event at the end of web page loading. |
| [OnProgressChangeEvent](arkts-onprogresschangeevent-i.md) | Progress change event when the page loading progress changes. |
| [WebHeader](arkts-webheader-i.md) | Defines the Web's request/response header. |

### Types

| Name | Description |
| --- | --- |
| [OnLoadInterceptCallback](arkts-onloadinterceptcallback-t.md) | Callback for OnLoadIntercept |

