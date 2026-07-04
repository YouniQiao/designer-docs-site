# arkweb_scheme_handler.h

## Overview

Declares the APIs to intercept the request from ArkWeb.

**Library**: libohweb.so

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Related module**: [Web](capi-web.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_SchemeHandler_](capi-web-arkweb-schemehandler-.md) | ArkWeb_SchemeHandler | This class is used to intercept requests for a specified scheme. |
| [ArkWeb_ResourceHandler_](capi-web-arkweb-resourcehandler-.md) | ArkWeb_ResourceHandler | Used to intercept url requests.Response headers and body can be sent through ArkWeb_ResourceHandler.<br> |
| [ArkWeb_Response_](capi-web-arkweb-response-.md) | ArkWeb_Response | The response of the intercepted request. |
| [ArkWeb_ResourceRequest_](capi-web-arkweb-resourcerequest-.md) | ArkWeb_ResourceRequest | The info of the request.You can obtain the requested URL, method, post data, and other information through OH_ArkWeb_ResourceRequest.<br> |
| [ArkWeb_RequestHeaderList_](capi-web-arkweb-requestheaderlist-.md) | ArkWeb_RequestHeaderList | The request headers of the request. |
| [ArkWeb_HttpBodyStream_](capi-web-arkweb-httpbodystream-.md) | ArkWeb_HttpBodyStream | The http body of the request.Use OH_ArkWebHttpBodyStream_* interface to read the body.<br> |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_CustomSchemeOption](#arkweb_customschemeoption) | ArkWeb_CustomSchemeOption | Configuration information for custom schemes. |
| [ArkWeb_ResourceType](#arkweb_resourcetype) | ArkWeb_ResourceType | Resource type for a request.These constants match their equivalents in Chromium's ResourceType and should not be renumbered.<br> |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*ArkWeb_OnRequestStart)(const ArkWeb_SchemeHandler* schemeHandler, ArkWeb_ResourceRequest* resourceRequest, const ArkWeb_ResourceHandler* resourceHandler, bool* intercept)](#arkweb_onrequeststart) | ArkWeb_OnRequestStart | Callback for handling the request.This will be called on the IO thread.<br> |
| [typedef void (\*ArkWeb_OnRequestStop)(const ArkWeb_SchemeHandler* schemeHandler, const ArkWeb_ResourceRequest* resourceRequest)](#arkweb_onrequeststop) | ArkWeb_OnRequestStop | Callback when the request is completed.This will be called on the IO thread.<br> Should destroy the resourceRequest by ArkWeb_ResourceRequest_Destroy and use ArkWeb_ResourceHandler_Destroy<br> destroy the ArkWeb_ResourceHandler received in ArkWeb_OnRequestStart.<br> |
| [typedef void (\*ArkWeb_HttpBodyStreamReadCallback)(const ArkWeb_HttpBodyStream* httpBodyStream, uint8_t* buffer, int bytesRead)](#arkweb_httpbodystreamreadcallback) | ArkWeb_HttpBodyStreamReadCallback | Callback when the read operation done. |
| [typedef void (\*ArkWeb_HttpBodyStreamAsyncReadCallback)(const ArkWeb_HttpBodyStream *httpBodyStream, uint8_t *buffer, int bytesRead)](#arkweb_httpbodystreamasyncreadcallback) | ArkWeb_HttpBodyStreamAsyncReadCallback | Callback when the read operation done. |
| [typedef void (\*ArkWeb_HttpBodyStreamInitCallback)(const ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_NetError result)](#arkweb_httpbodystreaminitcallback) | ArkWeb_HttpBodyStreamInitCallback | Callback when the init operation done. |
| [void OH_ArkWebRequestHeaderList_Destroy(ArkWeb_RequestHeaderList* requestHeaderList)](#oh_arkwebrequestheaderlist_destroy) | - | Destroy the ArkWeb_RequestHeaderList. |
| [int32_t OH_ArkWebRequestHeaderList_GetSize(const ArkWeb_RequestHeaderList* requestHeaderList)](#oh_arkwebrequestheaderlist_getsize) | - | Get the request headers size. |
| [void OH_ArkWebRequestHeaderList_GetHeader(const ArkWeb_RequestHeaderList* requestHeaderList, int32_t index, char** key, char** value)](#oh_arkwebrequestheaderlist_getheader) | - | Get the specified request header. |
| [int32_t OH_ArkWebResourceRequest_SetUserData(ArkWeb_ResourceRequest* resourceRequest, void* userData)](#oh_arkwebresourcerequest_setuserdata) | - | Set a user data to ArkWeb_ResourceRequest. |
| [void* OH_ArkWebResourceRequest_GetUserData(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_getuserdata) | - | Get the user data from ArkWeb_ResourceRequest. |
| [void OH_ArkWebResourceRequest_GetMethod(const ArkWeb_ResourceRequest* resourceRequest, char** method)](#oh_arkwebresourcerequest_getmethod) | - | Get the method of request. |
| [void OH_ArkWebResourceRequest_GetUrl(const ArkWeb_ResourceRequest* resourceRequest, char** url)](#oh_arkwebresourcerequest_geturl) | - | Get the url of request. |
| [void OH_ArkWebResourceRequest_GetHttpBodyStream(const ArkWeb_ResourceRequest* resourceRequest, ArkWeb_HttpBodyStream** httpBodyStream)](#oh_arkwebresourcerequest_gethttpbodystream) | - | Create a ArkWeb_HttpBodyStream which used to read the http body. |
| [void OH_ArkWebResourceRequest_DestroyHttpBodyStream(ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebresourcerequest_destroyhttpbodystream) | - | Destroy the http body stream. |
| [int32_t OH_ArkWebResourceRequest_GetResourceType(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_getresourcetype) | - | Get the resource type of request. |
| [void OH_ArkWebResourceRequest_GetFrameUrl(const ArkWeb_ResourceRequest* resourceRequest, char** frameUrl)](#oh_arkwebresourcerequest_getframeurl) | - | Get the url of frame which trigger this request. |
| [int32_t OH_ArkWebHttpBodyStream_SetUserData(ArkWeb_HttpBodyStream* httpBodyStream, void* userData)](#oh_arkwebhttpbodystream_setuserdata) | - | Set a user data to ArkWeb_HttpBodyStream. |
| [void* OH_ArkWebHttpBodyStream_GetUserData(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_getuserdata) | - | Get the user data from ArkWeb_HttpBodyStream. |
| [int32_t OH_ArkWebHttpBodyStream_SetReadCallback(ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_HttpBodyStreamReadCallback readCallback)](#oh_arkwebhttpbodystream_setreadcallback) | - | Set the callback for OH_ArkWebHttpBodyStream_Read.The result of OH_ArkWebHttpBodyStream_Read will be notified to caller through the readCallback.<br> The callback will run in the same thread as OH_ArkWebHttpBodyStream_Read.<br> |
| [int32_t OH_ArkWebHttpBodyStream_SetAsyncReadCallback(ArkWeb_HttpBodyStream *httpBodyStream, ArkWeb_HttpBodyStreamAsyncReadCallback readCallback)](#oh_arkwebhttpbodystream_setasyncreadcallback) | - | Set the callback for OH_ArkWebHttpBodyStream_AsyncRead.The result of OH_ArkWebHttpBodyStream_AsyncRead will be notified to caller through the<br> readCallback. The callback will runs in the ArkWeb worker thread.<br> |
| [int32_t OH_ArkWebHttpBodyStream_Init(ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_HttpBodyStreamInitCallback initCallback)](#oh_arkwebhttpbodystream_init) | - | Init the http body stream.This function must be called before calling any other functions.<br> |
| [void OH_ArkWebHttpBodyStream_Read(const ArkWeb_HttpBodyStream* httpBodyStream, uint8_t* buffer, int bufLen)](#oh_arkwebhttpbodystream_read) | - | Read the http body to the buffer.The buffer must be larger than the bufLen. We will be reading data from a worker thread to the buffer,<br> so should not use the buffer in other threads before the callback to avoid concurrency issues.<br> |
| [void OH_ArkWebHttpBodyStream_AsyncRead(const ArkWeb_HttpBodyStream *httpBodyStream, uint8_t *buffer, int bufLen)](#oh_arkwebhttpbodystream_asyncread) | - | Read the http body to the buffer.The buffer must be larger than the bufLen. We will read data from a worker thread to the buffer,<br> so should not use the buffer in other threads before the callback to avoid concurrency issues.<br> |
| [uint64_t OH_ArkWebHttpBodyStream_GetSize(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_getsize) | - | Get the total size of the data stream.When data is chunked or httpBodyStream is invalid, always return zero.<br> |
| [uint64_t OH_ArkWebHttpBodyStream_GetPosition(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_getposition) | - | Get the current position of the data stream. |
| [bool OH_ArkWebHttpBodyStream_IsChunked(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_ischunked) | - | Get if the data stream is chunked. |
| [bool OH_ArkWebHttpBodyStream_IsEof(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_iseof) | - | Returns true if all data has been consumed from this upload data stream.For chunked uploads, returns false until the first read attempt.<br> |
| [bool OH_ArkWebHttpBodyStream_IsInMemory(const ArkWeb_HttpBodyStream* httpBodyStream)](#oh_arkwebhttpbodystream_isinmemory) | - | Returns true if the upload data in the stream is entirely in memory,and all read requests will succeed synchronously.Expected to return false for chunked requests.<br> |
| [int32_t OH_ArkWebResourceRequest_Destroy(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_destroy) | - | Destroy the ArkWeb_ResourceRequest. |
| [void OH_ArkWebResourceRequest_GetReferrer(const ArkWeb_ResourceRequest* resourceRequest, char** referrer)](#oh_arkwebresourcerequest_getreferrer) | - | Get the referrer of request. |
| [void OH_ArkWebResourceRequest_GetRequestHeaders(const ArkWeb_ResourceRequest* resourceRequest, ArkWeb_RequestHeaderList** requestHeaderList)](#oh_arkwebresourcerequest_getrequestheaders) | - | Get the OH_ArkWeb_RequestHeaderList of the request. |
| [bool OH_ArkWebResourceRequest_IsRedirect(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_isredirect) | - | Get if this is a redirect request. |
| [bool OH_ArkWebResourceRequest_IsMainFrame(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_ismainframe) | - | Get if this is a request from main frame. |
| [bool OH_ArkWebResourceRequest_HasGesture(const ArkWeb_ResourceRequest* resourceRequest)](#oh_arkwebresourcerequest_hasgesture) | - | Get if this is a request is triggered by user gesture. |
| [int32_t OH_ArkWeb_RegisterCustomSchemes(const char* scheme, int32_t option)](#oh_arkweb_registercustomschemes) | - | Register custom scheme to the ArkWeb.Should not be called for built-in HTTP, HTTPS, FILE, FTP, ABOUT and DATA schemes.<br> This function should be called on main thread.<br> |
| [bool OH_ArkWebServiceWorker_SetSchemeHandler(const char* scheme, ArkWeb_SchemeHandler* schemeHandler)](#oh_arkwebserviceworker_setschemehandler) | - | Set a ArkWeb_SchemeHandler for a specific scheme to intercept requests of that scheme type.SchemeHandler should be set after the BrowserContext created.<br> Use WebviewController.initializeWebEngine to initialize the BrowserContext without create a ArkWeb.<br> |
| [bool OH_ArkWeb_SetSchemeHandler(const char* scheme, const char* webTag, ArkWeb_SchemeHandler* schemeHandler)](#oh_arkweb_setschemehandler) | - | Set a ArkWeb_SchemeHandler for a specific scheme to intercept requests of that scheme type.SchemeHandler should be set after the BrowserContext created.<br> Use WebviewController.initializeWebEngine to initialize the BrowserContext without create a ArkWeb.<br> |
| [int32_t OH_ArkWebServiceWorker_ClearSchemeHandlers()](#oh_arkwebserviceworker_clearschemehandlers) | - | Clear the handler registered on the specified web for service worker. |
| [int32_t OH_ArkWeb_ClearSchemeHandlers(const char* webTag)](#oh_arkweb_clearschemehandlers) | - | Clear the handler registered on the specified web. |
| [void OH_ArkWeb_CreateSchemeHandler(ArkWeb_SchemeHandler** schemeHandler)](#oh_arkweb_createschemehandler) | - | Create a SchemeHandler. |
| [void OH_ArkWeb_DestroySchemeHandler(ArkWeb_SchemeHandler* schemeHandler)](#oh_arkweb_destroyschemehandler) | - | Destroy a SchemeHandler. |
| [int32_t OH_ArkWebSchemeHandler_SetUserData(ArkWeb_SchemeHandler* schemeHandler, void* userData)](#oh_arkwebschemehandler_setuserdata) | - | Set a user data to ArkWeb_SchemeHandler. |
| [void* OH_ArkWebSchemeHandler_GetUserData(const ArkWeb_SchemeHandler* schemeHandler)](#oh_arkwebschemehandler_getuserdata) | - | Get the user data from ArkWeb_SchemeHandler. |
| [int32_t OH_ArkWebSchemeHandler_SetOnRequestStart(ArkWeb_SchemeHandler* schemeHandler, ArkWeb_OnRequestStart onRequestStart)](#oh_arkwebschemehandler_setonrequeststart) | - | Set the OnRequestStart callback for SchemeHandler. |
| [int32_t OH_ArkWebSchemeHandler_SetOnRequestStop(ArkWeb_SchemeHandler* schemeHandler, ArkWeb_OnRequestStop onRequestStop)](#oh_arkwebschemehandler_setonrequeststop) | - | Set the OnRequestStop callback for SchemeHandler. |
| [void OH_ArkWeb_CreateResponse(ArkWeb_Response** response)](#oh_arkweb_createresponse) | - | Create a Response for a request. |
| [void OH_ArkWeb_DestroyResponse(ArkWeb_Response* response)](#oh_arkweb_destroyresponse) | - | Destroy the Reponse. |
| [int32_t OH_ArkWebResponse_SetUrl(ArkWeb_Response* response, const char* url)](#oh_arkwebresponse_seturl) | - | Set the resolved URL after redirects or changed as a result of HSTS. |
| [void OH_ArkWebResponse_GetUrl(const ArkWeb_Response* response, char** url)](#oh_arkwebresponse_geturl) | - | Get the resolved URL after redirects or changed as a result of HSTS. |
| [int32_t OH_ArkWebResponse_SetError(ArkWeb_Response* response, ArkWeb_NetError errorCode)](#oh_arkwebresponse_seterror) | - | Set a error code to ArkWeb_Response. |
| [ArkWeb_NetError OH_ArkWebResponse_GetError(const ArkWeb_Response* response)](#oh_arkwebresponse_geterror) | - | Get the response's error code. |
| [int32_t OH_ArkWebResponse_SetStatus(ArkWeb_Response* response, int status)](#oh_arkwebresponse_setstatus) | - | Set a status code to ArkWebResponse. |
| [int OH_ArkWebResponse_GetStatus(const ArkWeb_Response* response)](#oh_arkwebresponse_getstatus) | - | Get the response's status code. |
| [int32_t OH_ArkWebResponse_SetStatusText(ArkWeb_Response* response, const char* statusText)](#oh_arkwebresponse_setstatustext) | - | Set a status text to ArkWebResponse. |
| [void OH_ArkWebResponse_GetStatusText(const ArkWeb_Response* response, char** statusText)](#oh_arkwebresponse_getstatustext) | - | Get the response's status text. |
| [int32_t OH_ArkWebResponse_SetMimeType(ArkWeb_Response* response, const char* mimeType)](#oh_arkwebresponse_setmimetype) | - | Set mime type to ArkWebResponse. |
| [void OH_ArkWebResponse_GetMimeType(const ArkWeb_Response* response, char** mimeType)](#oh_arkwebresponse_getmimetype) | - | Get the response's mime type. |
| [int32_t OH_ArkWebResponse_SetCharset(ArkWeb_Response* response, const char* charset)](#oh_arkwebresponse_setcharset) | - | Set charset to ArkWeb_Response. |
| [void OH_ArkWebResponse_GetCharset(const ArkWeb_Response* response, char** charset)](#oh_arkwebresponse_getcharset) | - | Get the response's charset. |
| [int32_t OH_ArkWebResponse_SetHeaderByName(ArkWeb_Response* response, const char* name, const char* value, bool overwrite)](#oh_arkwebresponse_setheaderbyname) | - | Set a header to ArkWeb_Response. |
| [void OH_ArkWebResponse_GetHeaderByName(const ArkWeb_Response* response, const char* name, char** value)](#oh_arkwebresponse_getheaderbyname) | - | Get the header from the response. |
| [int32_t OH_ArkWebResourceHandler_Destroy(const ArkWeb_ResourceHandler* resourceHandler)](#oh_arkwebresourcehandler_destroy) | - | Destroy the ArkWeb_ResourceHandler. |
| [int32_t OH_ArkWebResourceHandler_DidReceiveResponse(const ArkWeb_ResourceHandler* resourceHandler, const ArkWeb_Response* response)](#oh_arkwebresourcehandler_didreceiveresponse) | - | Pass response headers to intercepted requests. |
| [int32_t OH_ArkWebResourceHandler_DidReceiveData(const ArkWeb_ResourceHandler* resourceHandler, const uint8_t* buffer, int64_t bufLen)](#oh_arkwebresourcehandler_didreceivedata) | - | Pass response body data to intercepted requests. |
| [int32_t OH_ArkWebResourceHandler_DidFinish(const ArkWeb_ResourceHandler* resourceHandler)](#oh_arkwebresourcehandler_didfinish) | - | Notify the ArkWeb that this request should be finished and there is no more data available. |
| [int32_t OH_ArkWebResourceHandler_DidFailWithError(const ArkWeb_ResourceHandler* resourceHandler, ArkWeb_NetError errorCode)](#oh_arkwebresourcehandler_didfailwitherror) | - | Notify the ArkWeb that this request should be failed. |
| [int32_t OH_ArkWebResourceHandler_DidFailWithErrorV2(const ArkWeb_ResourceHandler* resourceHandler, ArkWeb_NetError errorCode, bool completeIfNoResponse)](#oh_arkwebresourcehandler_didfailwitherrorv2) | - | Notify the ArkWeb that this request should be failed. |
| [void OH_ArkWeb_ReleaseString(char* string)](#oh_arkweb_releasestring) | - | Release the string acquired by native function. |
| [void OH_ArkWeb_ReleaseByteArray(uint8_t* byteArray)](#oh_arkweb_releasebytearray) | - | Release the byte array acquired by native function. |

## Enum type description

### ArkWeb_CustomSchemeOption

```c
enum ArkWeb_CustomSchemeOption
```

**Description**

Configuration information for custom schemes.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKWEB_SCHEME_OPTION_STANDARD = 1 << 0 | If ARKWEB_SCHEME_OPTION_STANDARD is set, the scheme will be handled as a standard scheme. The standardschemes need to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738,which can be found in the http://www.ietf.org/rfc/rfc1738.txt. |
| ARKWEB_SCHEME_OPTION_LOCAL = 1 << 1 | If ARKWEB_SCHEME_OPTION_LOCAL is set, the same security rules as those applied to the "file" URL will beused to handle the scheme. |
| ARKWEB_SCHEME_OPTION_DISPLAY_ISOLATED = 1 << 2 | If ARKWEB_SCHEME_OPTION_DISPLAY_ISOLATED is set, then the scheme can only be displayed from other contenthosted using the same scheme. |
| ARKWEB_SCHEME_OPTION_SECURE = 1 << 3 | If ARKWEB_SCHEME_OPTION_SECURE is set, the same security rules as those applied to the "https" URL will beused to handle the scheme. |
| ARKWEB_SCHEME_OPTION_CORS_ENABLED = 1 << 4 | If ARKWEB_SCHEME_OPTION_CORS_ENABLED is set, then the scheme can be sent CORS requests. In most cases thisvalue should be set when ARKWEB_SCHEME_OPTION_STANDARD is set. |
| ARKWEB_SCHEME_OPTION_CSP_BYPASSING = 1 << 5 | If ARKWEB_SCHEME_OPTION_CSP_BYPASSING is set, then this scheme can bypass Content Security Policy (CSP)checks. In most cases, this value should not be set when ARKWEB_SCHEME_OPTION_STANDARD is set. |
| ARKWEB_SCHEME_OPTION_FETCH_ENABLED = 1 << 6 | If ARKWEB_SCHEME_OPTION_FETCH_ENABLED is set, then this scheme can perform FETCH API requests. |
| ARKWEB_SCHEME_OPTION_CODE_CACHE_ENABLED = 1 << 7 | If ARKWEB_SCHEME_OPTION_CODE_CACHE_ENABLED is set, then the js of this scheme can generate code cache. |

### ArkWeb_ResourceType

```c
enum ArkWeb_ResourceType
```

**Description**

Resource type for a request.These constants match their equivalents in Chromium's ResourceType and should not be renumbered.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

| Enum item | Description |
| -- | -- |
| MAIN_FRAME = 0 | Top level page. |
| SUB_FRAME = 1 | Frame or Iframe. |
| STYLE_SHEET = 2 | CSS stylesheet. |
| SCRIPT = 3 | External script. |
| IMAGE = 4 | Image(jpg/gif/png/etc). |
| FONT_RESOURCE = 5 | Font. |
| SUB_RESOURCE = 6 | Some other subresource. This is the default type if the actual type is unknown. |
| OBJECT = 7 | Object (or embed) tag for a plugin, or a resource that a plugin requested. |
| MEDIA = 8 | Media resource. |
| WORKER = 9 | Main resource of a dedicated worker. |
| SHARED_WORKER = 10 | Main resource of a shared worker. |
| PREFETCH = 11 | Explicitly requested prefetch. |
| FAVICON = 12 | Favicon. |
| XHR = 13 | XMLHttpRequest. |
| PING = 14 | Ping request for <a ping>/sendBeacon. |
| SERVICE_WORKER = 15 | The main resource of a service worker. |
| CSP_REPORT = 16 | Report of Content Security Policy violations. |
| PLUGIN_RESOURCE = 17 | Resource that a plugin requested. |
| NAVIGATION_PRELOAD_MAIN_FRAME = 19 | A main-frame service worker navigation preload request. |
| NAVIGATION_PRELOAD_SUB_FRAME = 20 | A sub-frame service worker navigation preload request. |


## Function description

### ArkWeb_OnRequestStart()

```c
typedef void (*ArkWeb_OnRequestStart)(const ArkWeb_SchemeHandler* schemeHandler, ArkWeb_ResourceRequest* resourceRequest, const ArkWeb_ResourceHandler* resourceHandler, bool* intercept)
```

**Description**

Callback for handling the request.This will be called on the IO thread.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const ArkWeb_SchemeHandler\* schemeHandler | The ArkWeb_SchemeHandler. |
| [ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)\* resourceRequest | Obtain request's information through this. |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)\* resourceHandler | The ArkWeb_ResourceHandler for the request. It should not be used if intercept is set tofalse. |
| bool\* intercept | If true will intercept the request, if false otherwise. |

### ArkWeb_OnRequestStop()

```c
typedef void (*ArkWeb_OnRequestStop)(const ArkWeb_SchemeHandler* schemeHandler, const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Callback when the request is completed.This will be called on the IO thread.<br> Should destroy the resourceRequest by ArkWeb_ResourceRequest_Destroy and use ArkWeb_ResourceHandler_Destroy<br> destroy the ArkWeb_ResourceHandler received in ArkWeb_OnRequestStart.<br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const ArkWeb_SchemeHandler\* schemeHandler | The ArkWeb_SchemeHandler. |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)\* resourceRequest | The ArkWeb_ResourceRequest. |

### ArkWeb_HttpBodyStreamReadCallback()

```c
typedef void (*ArkWeb_HttpBodyStreamReadCallback)(const ArkWeb_HttpBodyStream* httpBodyStream, uint8_t* buffer, int bytesRead)
```

**Description**

Callback when the read operation done.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const ArkWeb_HttpBodyStream\* httpBodyStream | The ArkWeb_HttpBodyStream. |
| uint8_t\* buffer | The buffer to receive data. |
| int bytesRead | Callback after OH_ArkWebHttpBodyStream_Read. bytesRead greater than 0 means that the buffer isfilled with data of bytesRead size. Caller can read from the buffer, and ifOH_ArkWebHttpBodyStream_IsEOF is false, caller can continue to read the remaining data. |

### ArkWeb_HttpBodyStreamAsyncReadCallback()

```c
typedef void (*ArkWeb_HttpBodyStreamAsyncReadCallback)(const ArkWeb_HttpBodyStream *httpBodyStream, uint8_t *buffer, int bytesRead)
```

**Description**

Callback when the read operation done.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const ArkWeb_HttpBodyStream \*httpBodyStream | The ArkWeb_HttpBodyStream. |
| uint8_t \*buffer | The buffer to receive data. |
| int bytesRead | Callback after OH_ArkWebHttpBodyStream_AsyncRead. bytesRead greater than 0 means thatthe buffer is filled with data of bytesRead size. Caller can read from the buffer, and ifOH_ArkWebHttpBodyStream_IsEOF is false, caller can continue to read the remaining data. |

### ArkWeb_HttpBodyStreamInitCallback()

```c
typedef void (*ArkWeb_HttpBodyStreamInitCallback)(const ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_NetError result)
```

**Description**

Callback when the init operation done.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const ArkWeb_HttpBodyStream\* httpBodyStream | The ArkWeb_HttpBodyStream. |
| ArkWeb_NetError result | {@link ARKWEB_NET_OK} on success otherwise refer to arkweb_net_error_list.h. |

### OH_ArkWebRequestHeaderList_Destroy()

```c
void OH_ArkWebRequestHeaderList_Destroy(ArkWeb_RequestHeaderList* requestHeaderList)
```

**Description**

Destroy the ArkWeb_RequestHeaderList.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_RequestHeaderList](capi-web-arkweb-requestheaderlist-.md)* requestHeaderList | The ArkWeb_RequestHeaderList to be destroyed. |

### OH_ArkWebRequestHeaderList_GetSize()

```c
int32_t OH_ArkWebRequestHeaderList_GetSize(const ArkWeb_RequestHeaderList* requestHeaderList)
```

**Description**

Get the request headers size.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_RequestHeaderList](capi-web-arkweb-requestheaderlist-.md)* requestHeaderList | The list of request header. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | The size of request headers. -1 if requestHeaderList is invalid. |

### OH_ArkWebRequestHeaderList_GetHeader()

```c
void OH_ArkWebRequestHeaderList_GetHeader(const ArkWeb_RequestHeaderList* requestHeaderList, int32_t index, char** key, char** value)
```

**Description**

Get the specified request header.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_RequestHeaderList](capi-web-arkweb-requestheaderlist-.md)* requestHeaderList | The list of request header. |
| int32_t index | The index of request header. |
| char** key | The header key. Caller must release the string by OH_ArkWeb_ReleaseString. |
| char** value | The header value. Caller must release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResourceRequest_SetUserData()

```c
int32_t OH_ArkWebResourceRequest_SetUserData(ArkWeb_ResourceRequest* resourceRequest, void* userData)
```

**Description**

Set a user data to ArkWeb_ResourceRequest.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| void* userData | The user data to set. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceRequest_GetUserData()

```c
void* OH_ArkWebResourceRequest_GetUserData(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Get the user data from ArkWeb_ResourceRequest.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | The set user data. |

### OH_ArkWebResourceRequest_GetMethod()

```c
void OH_ArkWebResourceRequest_GetMethod(const ArkWeb_ResourceRequest* resourceRequest, char** method)
```

**Description**

Get the method of request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| char** method | The request's http method. This function will allocate memory for the method string and caller mustrelease the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResourceRequest_GetUrl()

```c
void OH_ArkWebResourceRequest_GetUrl(const ArkWeb_ResourceRequest* resourceRequest, char** url)
```

**Description**

Get the url of request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| char** url | The request's url. This function will allocate memory for the url string and caller must release thestring by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResourceRequest_GetHttpBodyStream()

```c
void OH_ArkWebResourceRequest_GetHttpBodyStream(const ArkWeb_ResourceRequest* resourceRequest, ArkWeb_HttpBodyStream** httpBodyStream)
```

**Description**

Create a ArkWeb_HttpBodyStream which used to read the http body.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)** httpBodyStream | The request's http body. This function will allocate memory for the http body stream andcaller must release the httpBodyStream by OH_ArkWebResourceRequest_DestroyHttpBodyStream. |

### OH_ArkWebResourceRequest_DestroyHttpBodyStream()

```c
void OH_ArkWebResourceRequest_DestroyHttpBodyStream(ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Destroy the http body stream.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The httpBodyStream to be destroyed. |

### OH_ArkWebResourceRequest_GetResourceType()

```c
int32_t OH_ArkWebResourceRequest_GetResourceType(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Get the resource type of request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | The resource type of request. -1 if resourceRequest is invalid. |

### OH_ArkWebResourceRequest_GetFrameUrl()

```c
void OH_ArkWebResourceRequest_GetFrameUrl(const ArkWeb_ResourceRequest* resourceRequest, char** frameUrl)
```

**Description**

Get the url of frame which trigger this request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| char** frameUrl | The url of frame which trigger this request. This function will allocate memory for the url stringand caller must release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebHttpBodyStream_SetUserData()

```c
int32_t OH_ArkWebHttpBodyStream_SetUserData(ArkWeb_HttpBodyStream* httpBodyStream, void* userData)
```

**Description**

Set a user data to ArkWeb_HttpBodyStream.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |
| void* userData | The user data to set. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebHttpBodyStream_GetUserData()

```c
void* OH_ArkWebHttpBodyStream_GetUserData(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Get the user data from ArkWeb_HttpBodyStream.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | The set user data. |

### OH_ArkWebHttpBodyStream_SetReadCallback()

```c
int32_t OH_ArkWebHttpBodyStream_SetReadCallback(ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_HttpBodyStreamReadCallback readCallback)
```

**Description**

Set the callback for OH_ArkWebHttpBodyStream_Read.The result of OH_ArkWebHttpBodyStream_Read will be notified to caller through the readCallback.<br> The callback will run in the same thread as OH_ArkWebHttpBodyStream_Read.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |
| [ArkWeb_HttpBodyStreamReadCallback](capi-arkweb-scheme-handler-h.md#arkweb_httpbodystreamreadcallback) readCallback | The callback of read function. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebHttpBodyStream_SetAsyncReadCallback()

```c
int32_t OH_ArkWebHttpBodyStream_SetAsyncReadCallback(ArkWeb_HttpBodyStream *httpBodyStream, ArkWeb_HttpBodyStreamAsyncReadCallback readCallback)
```

**Description**

Set the callback for OH_ArkWebHttpBodyStream_AsyncRead.The result of OH_ArkWebHttpBodyStream_AsyncRead will be notified to caller through the<br> readCallback. The callback will runs in the ArkWeb worker thread.<br>

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md) *httpBodyStream | The ArkWeb_HttpBodyStream. |
| [ArkWeb_HttpBodyStreamAsyncReadCallback](capi-arkweb-scheme-handler-h.md#arkweb_httpbodystreamasyncreadcallback) readCallback | The callback of read function. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br> {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebHttpBodyStream_Init()

```c
int32_t OH_ArkWebHttpBodyStream_Init(ArkWeb_HttpBodyStream* httpBodyStream, ArkWeb_HttpBodyStreamInitCallback initCallback)
```

**Description**

Init the http body stream.This function must be called before calling any other functions.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |
| [ArkWeb_HttpBodyStreamInitCallback](capi-arkweb-scheme-handler-h.md#arkweb_httpbodystreaminitcallback) initCallback | The callback of init. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebHttpBodyStream_Read()

```c
void OH_ArkWebHttpBodyStream_Read(const ArkWeb_HttpBodyStream* httpBodyStream, uint8_t* buffer, int bufLen)
```

**Description**

Read the http body to the buffer.The buffer must be larger than the bufLen. We will be reading data from a worker thread to the buffer,<br> so should not use the buffer in other threads before the callback to avoid concurrency issues.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |
| uint8_t* buffer | The buffer to receive data. |
| int bufLen | The size of bytes to read. |

### OH_ArkWebHttpBodyStream_AsyncRead()

```c
void OH_ArkWebHttpBodyStream_AsyncRead(const ArkWeb_HttpBodyStream *httpBodyStream, uint8_t *buffer, int bufLen)
```

**Description**

Read the http body to the buffer.The buffer must be larger than the bufLen. We will read data from a worker thread to the buffer,<br> so should not use the buffer in other threads before the callback to avoid concurrency issues.<br>

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md) *httpBodyStream | The ArkWeb_HttpBodyStream. |
| uint8_t *buffer | The buffer to receive data. |
| int bufLen | The size of bytes to read. |

### OH_ArkWebHttpBodyStream_GetSize()

```c
uint64_t OH_ArkWebHttpBodyStream_GetSize(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Get the total size of the data stream.When data is chunked or httpBodyStream is invalid, always return zero.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | The size of data stream. |

### OH_ArkWebHttpBodyStream_GetPosition()

```c
uint64_t OH_ArkWebHttpBodyStream_GetPosition(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Get the current position of the data stream.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | The current position of data stream. 0 if httpBodyStream is invalid. |

### OH_ArkWebHttpBodyStream_IsChunked()

```c
bool OH_ArkWebHttpBodyStream_IsChunked(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Get if the data stream is chunked.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if is chunked; false otherwise. |

### OH_ArkWebHttpBodyStream_IsEof()

```c
bool OH_ArkWebHttpBodyStream_IsEof(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Returns true if all data has been consumed from this upload data stream.For chunked uploads, returns false until the first read attempt.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if all data has been consumed; false otherwise. |

### OH_ArkWebHttpBodyStream_IsInMemory()

```c
bool OH_ArkWebHttpBodyStream_IsInMemory(const ArkWeb_HttpBodyStream* httpBodyStream)
```

**Description**

Returns true if the upload data in the stream is entirely in memory,and all read requests will succeed synchronously.Expected to return false for chunked requests.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_HttpBodyStream](capi-web-arkweb-httpbodystream-.md)* httpBodyStream | The ArkWeb_HttpBodyStream. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if the upload data is in memory; false otherwise. |

### OH_ArkWebResourceRequest_Destroy()

```c
int32_t OH_ArkWebResourceRequest_Destroy(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Destroy the ArkWeb_ResourceRequest.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceRequest_GetReferrer()

```c
void OH_ArkWebResourceRequest_GetReferrer(const ArkWeb_ResourceRequest* resourceRequest, char** referrer)
```

**Description**

Get the referrer of request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| char** referrer | The request's referrer. This function will allocate memory for the post data string and callermust release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResourceRequest_GetRequestHeaders()

```c
void OH_ArkWebResourceRequest_GetRequestHeaders(const ArkWeb_ResourceRequest* resourceRequest, ArkWeb_RequestHeaderList** requestHeaderList)
```

**Description**

Get the OH_ArkWeb_RequestHeaderList of the request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |
| [ArkWeb_RequestHeaderList](capi-web-arkweb-requestheaderlist-.md)** requestHeaderList | The RequestHeaderList of request. |

### OH_ArkWebResourceRequest_IsRedirect()

```c
bool OH_ArkWebResourceRequest_IsRedirect(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Get if this is a redirect request.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if this is a redirect; false otherwise. |

### OH_ArkWebResourceRequest_IsMainFrame()

```c
bool OH_ArkWebResourceRequest_IsMainFrame(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Get if this is a request from main frame.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if this is from main frame; false otherwise. |

### OH_ArkWebResourceRequest_HasGesture()

```c
bool OH_ArkWebResourceRequest_HasGesture(const ArkWeb_ResourceRequest* resourceRequest)
```

**Description**

Get if this is a request is triggered by user gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceRequest](capi-web-arkweb-resourcerequest-.md)* resourceRequest | The ArkWeb_ResourceRequest. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | True if this is triggered by user gesture; false otherwise. |

### OH_ArkWeb_RegisterCustomSchemes()

```c
int32_t OH_ArkWeb_RegisterCustomSchemes(const char* scheme, int32_t option)
```

**Description**

Register custom scheme to the ArkWeb.Should not be called for built-in HTTP, HTTPS, FILE, FTP, ABOUT and DATA schemes.<br> This function should be called on main thread.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* scheme | The scheme to regist. |
| int32_t option | The configuration of the scheme. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_ERROR_UNKNOWN} 17100100 - Unknown error.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param.<br>         {@link ARKWEB_SCHEME_REGISTER_FAILED} 17100102 - Register custom schemes should be called<br>                                                          before create any ArkWeb. |

### OH_ArkWebServiceWorker_SetSchemeHandler()

```c
bool OH_ArkWebServiceWorker_SetSchemeHandler(const char* scheme, ArkWeb_SchemeHandler* schemeHandler)
```

**Description**

Set a ArkWeb_SchemeHandler for a specific scheme to intercept requests of that scheme type.SchemeHandler should be set after the BrowserContext created.<br> Use WebviewController.initializeWebEngine to initialize the BrowserContext without create a ArkWeb.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* scheme | Scheme that need to be intercepted. |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The SchemeHandler for the scheme. Only requests triggered by ServiceWorker will be notifiedthrough this handler. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Return true if set SchemeHandler for specific scheme successful, return false otherwise. |

### OH_ArkWeb_SetSchemeHandler()

```c
bool OH_ArkWeb_SetSchemeHandler(const char* scheme, const char* webTag, ArkWeb_SchemeHandler* schemeHandler)
```

**Description**

Set a ArkWeb_SchemeHandler for a specific scheme to intercept requests of that scheme type.SchemeHandler should be set after the BrowserContext created.<br> Use WebviewController.initializeWebEngine to initialize the BrowserContext without create a ArkWeb.<br>

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* scheme | Scheme that need to be intercepted. |
| const char* webTag | The name of the web component. |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The SchemeHandler for the scheme. Only requests triggered from the specified web will benotified through this handler. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Return true if set SchemeHandler for specific scheme successful, return false otherwise. |

### OH_ArkWebServiceWorker_ClearSchemeHandlers()

```c
int32_t OH_ArkWebServiceWorker_ClearSchemeHandlers()
```

**Description**

Clear the handler registered on the specified web for service worker.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success. |

### OH_ArkWeb_ClearSchemeHandlers()

```c
int32_t OH_ArkWeb_ClearSchemeHandlers(const char* webTag)
```

**Description**

Clear the handler registered on the specified web.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWeb_CreateSchemeHandler()

```c
void OH_ArkWeb_CreateSchemeHandler(ArkWeb_SchemeHandler** schemeHandler)
```

**Description**

Create a SchemeHandler.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)** schemeHandler | Return the created SchemeHandler. Use OH_ArkWeb_DestroySchemeHandler destroy it when don'tneed it. |

### OH_ArkWeb_DestroySchemeHandler()

```c
void OH_ArkWeb_DestroySchemeHandler(ArkWeb_SchemeHandler* schemeHandler)
```

**Description**

Destroy a SchemeHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The ArkWeb_SchemeHandler to be destroy. |

### OH_ArkWebSchemeHandler_SetUserData()

```c
int32_t OH_ArkWebSchemeHandler_SetUserData(ArkWeb_SchemeHandler* schemeHandler, void* userData)
```

**Description**

Set a user data to ArkWeb_SchemeHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The ArkWeb_SchemeHandler. |
| void* userData | The user data to set. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebSchemeHandler_GetUserData()

```c
void* OH_ArkWebSchemeHandler_GetUserData(const ArkWeb_SchemeHandler* schemeHandler)
```

**Description**

Get the user data from ArkWeb_SchemeHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The ArkWeb_SchemeHandler. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | The set user data. |

### OH_ArkWebSchemeHandler_SetOnRequestStart()

```c
int32_t OH_ArkWebSchemeHandler_SetOnRequestStart(ArkWeb_SchemeHandler* schemeHandler, ArkWeb_OnRequestStart onRequestStart)
```

**Description**

Set the OnRequestStart callback for SchemeHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The SchemeHandler for the scheme. |
| [ArkWeb_OnRequestStart](capi-arkweb-scheme-handler-h.md#arkweb_onrequeststart) onRequestStart | The OnRequestStart callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebSchemeHandler_SetOnRequestStop()

```c
int32_t OH_ArkWebSchemeHandler_SetOnRequestStop(ArkWeb_SchemeHandler* schemeHandler, ArkWeb_OnRequestStop onRequestStop)
```

**Description**

Set the OnRequestStop callback for SchemeHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_SchemeHandler](capi-web-arkweb-schemehandler-.md)* schemeHandler | The SchemeHandler for the scheme. |
| [ArkWeb_OnRequestStop](capi-arkweb-scheme-handler-h.md#arkweb_onrequeststop) onRequestStop | The OnRequestStop callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWeb_CreateResponse()

```c
void OH_ArkWeb_CreateResponse(ArkWeb_Response** response)
```

**Description**

Create a Response for a request.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)** response | The created Response. Use OH_ArkWeb_DestroyResponse to destroy when don't need it. |

### OH_ArkWeb_DestroyResponse()

```c
void OH_ArkWeb_DestroyResponse(ArkWeb_Response* response)
```

**Description**

Destroy the Reponse.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The Response needs destroy. |

### OH_ArkWebResponse_SetUrl()

```c
int32_t OH_ArkWebResponse_SetUrl(ArkWeb_Response* response, const char* url)
```

**Description**

Set the resolved URL after redirects or changed as a result of HSTS.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* url | The resolved URL. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetUrl()

```c
void OH_ArkWebResponse_GetUrl(const ArkWeb_Response* response, char** url)
```

**Description**

Get the resolved URL after redirects or changed as a result of HSTS.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| char** url | The resolved URL. |

### OH_ArkWebResponse_SetError()

```c
int32_t OH_ArkWebResponse_SetError(ArkWeb_Response* response, ArkWeb_NetError errorCode)
```

**Description**

Set a error code to ArkWeb_Response.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| ArkWeb_NetError errorCode | The error code for the failed request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetError()

```c
ArkWeb_NetError OH_ArkWebResponse_GetError(const ArkWeb_Response* response)
```

**Description**

Get the response's error code.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_NetError | The response's error code. |

### OH_ArkWebResponse_SetStatus()

```c
int32_t OH_ArkWebResponse_SetStatus(ArkWeb_Response* response, int status)
```

**Description**

Set a status code to ArkWebResponse.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| int status | The http status code for the request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetStatus()

```c
int OH_ArkWebResponse_GetStatus(const ArkWeb_Response* response)
```

**Description**

Get the response's status code.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |

**Returns**:

| Type | Description |
| -- | -- |
| int | The response's http status code. -1 if response is invalid. |

### OH_ArkWebResponse_SetStatusText()

```c
int32_t OH_ArkWebResponse_SetStatusText(ArkWeb_Response* response, const char* statusText)
```

**Description**

Set a status text to ArkWebResponse.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* statusText | The status text for the request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetStatusText()

```c
void OH_ArkWebResponse_GetStatusText(const ArkWeb_Response* response, char** statusText)
```

**Description**

Get the response's status text.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| char** statusText | Return the response's statusText. This function will allocate memory for the statusText string andcaller must release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResponse_SetMimeType()

```c
int32_t OH_ArkWebResponse_SetMimeType(ArkWeb_Response* response, const char* mimeType)
```

**Description**

Set mime type to ArkWebResponse.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* mimeType | The mime type for the request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetMimeType()

```c
void OH_ArkWebResponse_GetMimeType(const ArkWeb_Response* response, char** mimeType)
```

**Description**

Get the response's mime type.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| char** mimeType | Return the response's mime type. This function will allocate memory for the mime type string andcaller must release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResponse_SetCharset()

```c
int32_t OH_ArkWebResponse_SetCharset(ArkWeb_Response* response, const char* charset)
```

**Description**

Set charset to ArkWeb_Response.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* charset | The charset for the request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetCharset()

```c
void OH_ArkWebResponse_GetCharset(const ArkWeb_Response* response, char** charset)
```

**Description**

Get the response's charset.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| char** charset | Return the response's charset. This function will allocate memory for the charset string and callermust release the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResponse_SetHeaderByName()

```c
int32_t OH_ArkWebResponse_SetHeaderByName(ArkWeb_Response* response, const char* name, const char* value, bool overwrite)
```

**Description**

Set a header to ArkWeb_Response.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* name | The name of the header. |
| const char* value | The value of the header. |
| bool overwrite | If true will overwrite the exists header, if false otherwise. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResponse_GetHeaderByName()

```c
void OH_ArkWebResponse_GetHeaderByName(const ArkWeb_Response* response, const char* name, char** value)
```

**Description**

Get the header from the response.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response. |
| const char* name | The name of the header. |
| char** value | Return the header's value. This function will allocate memory for the value string and caller mustrelease the string by OH_ArkWeb_ReleaseString. |

### OH_ArkWebResourceHandler_Destroy()

```c
int32_t OH_ArkWebResourceHandler_Destroy(const ArkWeb_ResourceHandler* resourceHandler)
```

**Description**

Destroy the ArkWeb_ResourceHandler.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceHandler_DidReceiveResponse()

```c
int32_t OH_ArkWebResourceHandler_DidReceiveResponse(const ArkWeb_ResourceHandler* resourceHandler, const ArkWeb_Response* response)
```

**Description**

Pass response headers to intercepted requests.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler for the request. |
| [const ArkWeb_Response](capi-web-arkweb-response-.md)* response | The ArkWeb_Response for the intercepting requests. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceHandler_DidReceiveData()

```c
int32_t OH_ArkWebResourceHandler_DidReceiveData(const ArkWeb_ResourceHandler* resourceHandler, const uint8_t* buffer, int64_t bufLen)
```

**Description**

Pass response body data to intercepted requests.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler for the request. |
| const uint8_t* buffer | Buffer data to send. |
| int64_t bufLen | The size of buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceHandler_DidFinish()

```c
int32_t OH_ArkWebResourceHandler_DidFinish(const ArkWeb_ResourceHandler* resourceHandler)
```

**Description**

Notify the ArkWeb that this request should be finished and there is no more data available.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler for the request. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceHandler_DidFailWithError()

```c
int32_t OH_ArkWebResourceHandler_DidFailWithError(const ArkWeb_ResourceHandler* resourceHandler, ArkWeb_NetError errorCode)
```

**Description**

Notify the ArkWeb that this request should be failed.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler for the request. |
| ArkWeb_NetError errorCode | The error code for this request. Refer to arkweb_net_error_list.h. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param. |

### OH_ArkWebResourceHandler_DidFailWithErrorV2()

```c
int32_t OH_ArkWebResourceHandler_DidFailWithErrorV2(const ArkWeb_ResourceHandler* resourceHandler, ArkWeb_NetError errorCode, bool completeIfNoResponse)
```

**Description**

Notify the ArkWeb that this request should be failed.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkWeb_ResourceHandler](capi-web-arkweb-resourcehandler-.md)* resourceHandler | The ArkWeb_ResourceHandler for the request. |
| ArkWeb_NetError errorCode | The error code for this request. Refer to arkweb_net_error_list.h. |
| bool completeIfNoResponse | If completeIfNoResponse is true, when DidFailWithErrorV2 is called,if DidReceiveResponse has not been called,a response is automatically constructed and the current request is terminated. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | {@link ARKWEB_NET_OK} 0 - Success.<br>         {@link ARKWEB_INVALID_PARAM} 17100101 - Invalid param, the resourceHandler is nullptr. |

### OH_ArkWeb_ReleaseString()

```c
void OH_ArkWeb_ReleaseString(char* string)
```

**Description**

Release the string acquired by native function.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char* string | The string to be released. |

### OH_ArkWeb_ReleaseByteArray()

```c
void OH_ArkWeb_ReleaseByteArray(uint8_t* byteArray)
```

**Description**

Release the byte array acquired by native function.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint8_t* byteArray | The byte array to be released. |


