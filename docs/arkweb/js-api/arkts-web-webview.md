# @ohos.web.webview

This module provides the capability to manage web modules.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [once](arkts-arkweb-once-f.md#once-1) | Registers a one-time callback for web events of the specified type. Currently, only **webInited** is supported.This callback is triggered when the Web engine initialization is complete.When the first **Web** component is loaded in an application, the web engine is initialized. When other **Web**components are loaded in the same application, **once()** is not triggered. When the first **Web** component isloaded after the last **Web** component is destroyed in the application, the web engine will be initialized again. |

### Classes

| Name | Description |
| --- | --- |
| [AdsBlockManager](arkts-arkweb-adsblockmanager-c.md) | This class is used to set adblock config. |
| [BackForwardCacheOptions](arkts-arkweb-backforwardcacheoptions-c.md) | This class is used to set back forward cache options. |
| [BackForwardCacheSupportedFeatures](arkts-arkweb-backforwardcachesupportedfeatures-c.md) | This class is used to enable back forward cache supported features. |
| [GeolocationPermissions](arkts-arkweb-geolocationpermissions-c.md) | Implements a **GeolocationPermissions** object.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device.&gt;&gt; - You must load the **Web** component before calling the APIs in **GeolocationPermissions**.&gt;&gt; - Required Permissions&gt; **ohos.permission.LOCATION**, **ohos.permission.APPROXIMATELY_LOCATION**, and&gt; **ohos.permission.LOCATION_IN_BACKGROUND**, which are required for accessing the location information. For details&gt; about the permissions, see&gt; [@ohos.geolocation (Geolocation)](../../../../reference/apis-location-kit/js-apis-geolocation.md). |
| [JsMessageExt](arkts-arkweb-jsmessageext-c.md) | The message for indicating the of result of JavaScript code execution. |
| [MediaSourceInfo](arkts-arkweb-mediasourceinfo-c.md) | Implements a **MediaSourceInfo** object to provide the information about the media source.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device. |
| [NativeMediaPlayerSurfaceInfo](arkts-arkweb-nativemediaplayersurfaceinfo-c.md) | Implements a **NativeMediaPlayerSurfaceInfo** object to provide the surface information used for same-layerrendering [when the application takes over the media playback of the web page](../../../../reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12).&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device. |
| [PdfData](arkts-arkweb-pdfdata-c.md) | Implements the output data stream class of **createPdf()**.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device.&gt;&gt; - When a PDF file is generated on a web page, a data stream is returned, which is encapsulated by the **PdfData**&gt; class. |
| [PrefetchOptions](arkts-arkweb-prefetchoptions-c.md) | Defines the PrefetchOptions class. |
| [ProxyConfig](arkts-arkweb-proxyconfig-c.md) | The ProxyConfig used by applyProxyOverride. |
| [ProxyController](arkts-arkweb-proxycontroller-c.md) | This class is used for set proxy for ArkWeb. |
| [ProxyRule](arkts-arkweb-proxyrule-c.md) | The ProxyRule used by insertProxyRule. |
| [UserAgentBrandVersion](arkts-arkweb-useragentbrandversion-c.md) | Class that holds brand name, major version and full version. Brand name and major version used to generatedUser-Agent client hints sec-cu-ua. Brand name and full version used to generated user-agent client hintsec-ch-ua-full-version-list. |
| [UserAgentMetadata](arkts-arkweb-useragentmetadata-c.md) | Holds User-Agent metadata information and uses to generate User-Agent client hints. |
| [WebCookieManager](arkts-arkweb-webcookiemanager-c.md) | Provides methods for managing the web cookies. |
| [WebDataBase](arkts-arkweb-webdatabase-c.md) | Implements a **WebDataBase** object.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device.&gt;&gt; - You must load the **Web** component before calling the APIs in **WebDataBase**. |
| [WebDownloadDelegate](arkts-arkweb-webdownloaddelegate-c.md) | The download state is notified through this delegate. |
| [WebDownloadItem](arkts-arkweb-webdownloaditem-c.md) | Represents a download task, You can use this object to operate the corresponding download task.Currently, the maximum length of the download file name supported by **WebDownloadItem** is 255 bytes. |
| [WebDownloadManager](arkts-arkweb-webdownloadmanager-c.md) | You can trigger download manually through this interface, or resume failed or canceled downloads. |
| [WebHttpBodyStream](arkts-arkweb-webhttpbodystream-c.md) | The http body stream of the request. |
| [WebMessageExt](arkts-arkweb-webmessageext-c.md) | The message received or sent from web message port. |
| [WebResourceHandler](arkts-arkweb-webresourcehandler-c.md) | Used to intercept url requests. Response headers and body can be sent throughWebResourceHandler. |
| [WebSchemeHandler](arkts-arkweb-webschemehandler-c.md) | This class is used to intercept requests for a specified scheme. |
| [WebSchemeHandlerRequest](arkts-arkweb-webschemehandlerrequest-c.md) | Defines the Web resource request used for scheme handler. |
| [WebSchemeHandlerResponse](arkts-arkweb-webschemehandlerresponse-c.md) | Defines the Web resource response used for scheme handler. |
| [WebStorage](arkts-arkweb-webstorage-c.md) | Implements a **WebStorage** object to manage the Web SQL database and HTML5 Web Storage APIs. All **Web**components in an application share a **WebStorage** object.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device.&gt;&gt; - You must load the **Web** component before calling the APIs in **WebStorage**.&gt;&gt; - After the ArkWeb kernel is upgraded to M132, the Web SQL database management becomes invalid because the kernel&gt; discards Web SQL. For details about the ArkWeb kernel version, see&gt; [Constraints](../../../../web/web-component-overview.md#constraints). |
| [WebviewController](arkts-arkweb-webviewcontroller-c.md) | Represents a **WebviewController** object used to control various behaviors of **Web** components, including pagenavigation, lifecycle status, and JavaScript interaction. A **WebviewController** object can control only one**Web** component, and the APIs (except static APIs) in the **WebviewController** can be invoked only after it hasbeen bound to the target **Web** component. |

### Interfaces

| Name | Description |
| --- | --- |
| [BackForwardList](arkts-arkweb-backforwardlist-i.md) | Provides back and forward history list information method. related to {@link HistoryItem}. |
| [BlanklessFrameInterpolationInfo](arkts-arkweb-blanklessframeinterpolationinfo-i.md) | Defines the frame interpolation state information in the scenario where the ArkWeb blankless loadingoptimization is enabled.Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned. |
| [BlanklessInfo](arkts-arkweb-blanklessinfo-i.md) | Describes the prediction information about blankless loading, including the first screen similarity, first screenloading duration, and error code. The application determines whether to enable the blankless loading solution basedon the prediction information. |
| [BlanklessLoadingParam](arkts-arkweb-blanklessloadingparam-i.md) | Defines the blankless loading parameter.Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned. |
| [CacheOptions](arkts-arkweb-cacheoptions-i.md) | Represents a configuration object for precompiling JavaScript in the **Web** component to generate bytecode cache,which is designed to control the updating of the bytecode cache. |
| [HistoryItem](arkts-arkweb-historyitem-i.md) | Provides information for history item in BackForwardList. |
| [HitTestValue](arkts-arkweb-hittestvalue-i.md) | Provides the element information of the area being clicked. For the sample code, see[getLastHitTest](arkts-arkweb-webviewcontroller-c.md#getlasthittest-1). |
| [MediaInfo](arkts-arkweb-mediainfo-i.md) | Represents a **MediaInfo** object used as a parameter of the[CreateNativeMediaPlayerCallback](arkts-arkweb-createnativemediaplayercallback-t.md) callback. Theobject contains information about media on the web page. The application may create, based on the information, aplayer that takes over media playback of the web page. |
| [NativeMediaPlayerBridge](arkts-arkweb-nativemediaplayerbridge-i.md) | Instance of the API class between the web media player and the ArkWeb kernel.The ArkWeb kernel uses an object of this interface class tocontrol the player created by the application to take over web page media.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device. |
| [NativeMediaPlayerHandler](arkts-arkweb-nativemediaplayerhandler-i.md) | Implements a **NativeMediaPlayerHandler** object used as a parameter of the[CreateNativeMediaPlayerCallback](arkts-arkweb-createnativemediaplayercallback-t.md) callback. Theapplication uses this object to report the player status to the ArkWeb engine.&gt; **NOTE**&gt;&gt; - The sample effect is subject to the actual device. |
| [OfflineResourceMap](arkts-arkweb-offlineresourcemap-i.md) | Implements an **OfflineResourceMap** object, which is used to set information related to local offline resourcesthat will be injected into memory cache through the[injectOfflineResources](arkts-arkweb-webviewcontroller-c.md#injectofflineresources-1) API. The ArkWebengine will generate resource caches based on this information and control the validity period of the cacheaccordingly. |
| [PdfConfiguration](arkts-arkweb-pdfconfiguration-i.md) | Specifies the input parameters of **createPdf()**.&gt; **NOTE**&gt;&gt; The number of pixels is calculated as follows: Number of pixels = 96 x Number of inches. |
| [RectEvent](arkts-arkweb-rectevent-i.md) | Defines a rectangle. |
| [RequestInfo](arkts-arkweb-requestinfo-i.md) | Describes the information about the resource request sent by the **Web** component. |
| [ScrollOffset](arkts-arkweb-scrolloffset-i.md) | Represents the current scrolling offset of a web page. |
| [SecurityParams](arkts-arkweb-securityparams-i.md) | Security feature option configuration. |
| [SnapshotInfo](arkts-arkweb-snapshotinfo-i.md) | Provides information used to obtain a full drawing result. |
| [SnapshotResult](arkts-arkweb-snapshotresult-i.md) | Represents a full drawing result. |
| [WebCustomScheme](arkts-arkweb-webcustomscheme-i.md) | Defines the configuration of web custom scheme, related to {@link customizeSchemes} method. |
| [WebHeader](arkts-arkweb-webheader-i.md) | Defines the Web's request/response header. |
| [WebHttpCookie](arkts-arkweb-webhttpcookie-i.md) | Defines the Web's HTTPCookie.&lt;p&gt;<strong>API Note</strong>:<br>The maximum length allowed for each attribute value in a cookie string is 1024.&lt;/p&gt; |
| [WebMessagePort](arkts-arkweb-webmessageport-i.md) | Define html web message port. |
| [WebStorageOrigin](arkts-arkweb-webstorageorigin-i.md) | Provides usage information of the Web SQL Database. |

### Enums

| Name | Description |
| --- | --- |
| [ArkWebEngineVersion](arkts-arkweb-arkwebengineversion-e.md) | For details about the ArkWeb kernel version, see[Adaptation Guide for the M114 Kernel on OpenHarmony 6.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md). |
| [BlanklessFrameInterpolationState](arkts-arkweb-blanklessframeinterpolationstate-e.md) | Enumerates the current frame interpolation states.Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned. |
| [ControllerAttachState](arkts-arkweb-controllerattachstate-e.md) | Describes the attach status of WebViewController and the **Web** component. |
| [JsMessageType](arkts-arkweb-jsmessagetype-e.md) | Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution. |
| [MediaError](arkts-arkweb-mediaerror-e.md) | Enumerates the error types of the player. |
| [MediaPlaybackState](arkts-arkweb-mediaplaybackstate-e.md) | Enumerates the playback states on the current web page. |
| [MediaType](arkts-arkweb-mediatype-e.md) | Enumerates the media types. |
| [NetworkState](arkts-arkweb-networkstate-e.md) | Enumerates the network statuses of the player. |
| [OfflineResourceType](arkts-arkweb-offlineresourcetype-e.md) | Enumerates the offline resource types corresponding to the[OfflineResourceMap](arkts-arkweb-offlineresourcemap-i.md) object. |
| [PlaybackStatus](arkts-arkweb-playbackstatus-e.md) | Enumerates the playback statuses of the player, which is an input parameter of the[handleStatusChanged](arkts-arkweb-nativemediaplayerhandler-i.md#handlestatuschanged-1) API. |
| [Preload](arkts-arkweb-preload-e.md) | Enumerates how the player preloads media data. |
| [PressureLevel](arkts-arkweb-pressurelevel-e.md) | Enumerates the memory pressure levels. When an application clears the cache occupied by the **Web** component, the**Web** kernel releases the cache based on the memory pressure level.\| Name\| Value\| Description\|\| ------------------------------- \| - \| ---------- \|\| MEMORY_PRESSURE_LEVEL_MODERATE \| 1 \| Moderate memory pressure level. At this level, the **Web** kernel attemptsto release the cache that has low reallocation overhead and does not need to be used immediately.\|\| MEMORY_PRESSURE_LEVEL_CRITICAL \| 2 \| Critical memory pressure level. At this level, the **Web** kernel attemptsto release all possible memory caches.\| |
| [ProxySchemeFilter](arkts-arkweb-proxyschemefilter-e.md) | Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy. |
| [ReadyState](arkts-arkweb-readystate-e.md) | Enumerates the cache states of the player. |
| [RenderProcessMode](arkts-arkweb-renderprocessmode-e.md) | Enumerates the ArkWeb render subprocess modes. |
| [ScrollType](arkts-arkweb-scrolltype-e.md) | Enumerates the scroll types for [setScrollable](setScrollable). |
| [ScrollbarMode](arkts-arkweb-scrollbarmode-e.md) | Enumerates the global scrollbar modes in the web page. |
| [SecureDnsMode](arkts-arkweb-securednsmode-e.md) | Defines the mode for using HttpDns. |
| [SecurityLevel](arkts-arkweb-securitylevel-e.md) | Defines the security level for the page. |
| [SiteIsolationMode](arkts-arkweb-siteisolationmode-e.md) | Enumerates the site isolation modes. The site isolation mechanism isolates websites from different sources indifferent render processes to reduce the cross-domain attack surface. For example, on a PC, each tab corresponds toa render process. After site isolation is enabled, Iframes from different sources run in independent renderprocesses. |
| [SourceType](arkts-arkweb-sourcetype-e.md) | Enumerates the media source types. |
| [SuspendType](arkts-arkweb-suspendtype-e.md) | Enumerates the suspension types of the player. |
| [UserAgentFormFactor](arkts-arkweb-useragentformfactor-e.md) | The form factors for User-Agent metadata. |
| [WebBlanklessErrorCode](arkts-arkweb-webblanklesserrorcode-e.md) | Enumerates the error codes of the blankless loading. |
| [WebDestroyMode](arkts-arkweb-webdestroymode-e.md) | Enumerates the destroy modes of the **Web** component. When the Web component is destroyed, the destroy modeaffects the resource release time of the Web kernel, such as the JavaScript running context and rendering context. |
| [WebDownloadErrorCode](arkts-arkweb-webdownloaderrorcode-e.md) | Defines the error code for download. |
| [WebDownloadState](arkts-arkweb-webdownloadstate-e.md) | Defines the state for download. |
| [WebHitTestType](arkts-arkweb-webhittesttype-e.md) | Enumerates the cursor node types for the[getLastHitTest](arkts-arkweb-webviewcontroller-c.md#getlasthittest-1) API. |
| [WebHttpCookieSameSitePolicy](arkts-arkweb-webhttpcookiesamesitepolicy-e.md) | Indicates whether to restrict cookies so that only requests sent back to the same site thatcreated them can carry them. |
| [WebMessageType](arkts-arkweb-webmessagetype-e.md) | Enum type supplied to {@link onMessageEventExt} for indicating the type of web message. |
| [WebResourceType](arkts-arkweb-webresourcetype-e.md) | Defines the resource type of request. |
| [WebSoftKeyboardBehaviorMode](arkts-arkweb-websoftkeyboardbehaviormode-e.md) | Enumerates the behavior modes of the web soft keyboard. |

### Types

| Name | Description |
| --- | --- |
| [CreateNativeMediaPlayerCallback](arkts-arkweb-createnativemediaplayercallback-t.md) | Defines a **CreateNativeMediaPlayerCallback** object used as a parameter of the[onCreateNativeMediaPlayer](arkts-arkweb-webviewcontroller-c.md#oncreatenativemediaplayer-1)callback. This object is used to create a player to take over media playback of the web page. |
| [OnProxyConfigChangeCallback](arkts-arkweb-onproxyconfigchangecallback-t.md) | The callback for proxy changed. |
| [WebMessage](arkts-arkweb-webmessage-t.md) | Defines the data types supported by {@link onMessageEventExt}. |

