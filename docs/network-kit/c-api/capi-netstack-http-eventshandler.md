# Http_EventsHandler

```c
typedef struct Http_EventsHandler {...} Http_EventsHandler
```

## Overview

Callbacks to watch different events.

**Since**: 20

**Related module**: [netstack](capi-netstack.md)

**Header file**: [net_http_type.h](capi-net-http-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Http_OnDataReceiveCallback](capi-net-http-type-h.md#http_ondatareceivecallback) onDataReceive | Callback function when the response body is received |
| [Http_OnProgressCallback](capi-net-http-type-h.md#http_onprogresscallback) onUploadProgress | Callback function during uploading |
| [Http_OnProgressCallback](capi-net-http-type-h.md#http_onprogresscallback) onDownloadProgress | Callback function during downloading |
| [Http_OnHeaderReceiveCallback](capi-net-http-type-h.md#http_onheaderreceivecallback) onHeadersReceive | Callback function when a header is received |
| [Http_OnVoidCallback](capi-net-http-type-h.md#http_onvoidcallback) onDataEnd | Callback function at the end of the transfer |
| [Http_OnVoidCallback](capi-net-http-type-h.md#http_onvoidcallback) onCanceled | Callback function when a request is canceled |


