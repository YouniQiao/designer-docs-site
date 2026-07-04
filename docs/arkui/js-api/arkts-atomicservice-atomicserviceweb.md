# @ohos.atomicservice.AtomicServiceWeb

## Modules to Import

```TypeScript
import { AtomicServiceWeb, OnMessageEvent, OnPageEndEvent, OnHttpErrorReceiveEvent, OnLoadInterceptEvent, WebHeader, OnProgressChangeEvent, OnErrorReceiveEvent, OnPageBeginEvent, OnLoadInterceptCallback, AtomicServiceWebController } from '@ohos.atomicservice.AtomicServiceWeb';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AtomicServiceWebController](arkts-arkui-atomicservicewebcontroller-c.md) | Provides methods for controlling the AtomicServiceWeb controller. |

### Structs

| Name | Description |
| --- | --- |
| [AtomicServiceWeb](arkts-arkui-atomicserviceweb-s.md) | Declare Component AtomicServiceWeb. |

### Interfaces

| Name | Description |
| --- | --- |
| [OnErrorReceiveEvent](arkts-arkui-onerrorreceiveevent-i.md) | Error receive event when the web page receives a web resource loading error. |
| [OnHttpErrorReceiveEvent](arkts-arkui-onhttperrorreceiveevent-i.md) | Http error receive event when the web page receives a web resource loading HTTP error. |
| [OnLoadInterceptEvent](arkts-arkui-onloadinterceptevent-i.md) | Load intercept event when the resources loading is intercepted. |
| [OnMessageEvent](arkts-arkui-onmessageevent-i.md) | Message event after page is back or destroyed if postMessage() is called in H5 page. |
| [OnPageBeginEvent](arkts-arkui-onpagebeginevent-i.md) | Page begin event at the begin of web page loading. |
| [OnPageEndEvent](arkts-arkui-onpageendevent-i.md) | Page end event at the end of web page loading. |
| [OnProgressChangeEvent](arkts-arkui-onprogresschangeevent-i.md) | Progress change event when the page loading progress changes. |
| [WebHeader](arkts-arkui-webheader-i.md) | Defines the Web's request/response header. |

### Types

| Name | Description |
| --- | --- |
| [OnLoadInterceptCallback](arkts-arkui-onloadinterceptcallback-t.md) | Callback for OnLoadIntercept |

