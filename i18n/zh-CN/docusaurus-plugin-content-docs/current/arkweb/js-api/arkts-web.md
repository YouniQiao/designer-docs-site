# web

Defines Web Component instance.

## web

```TypeScript
web(value: WebOptions)
```

Sets Value.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Web.Webview.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | WebOptions | 是 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ClientAuthenticationHandler](arkts-clientauthenticationhandler-c.md) | Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method. |
| [ConsoleMessage](arkts-consolemessage-c.md) | Encompassed message information as parameters to {@link onConsole} method. |
| [ControllerHandler](arkts-controllerhandler-c.md) | Defines the onWindowNew callback, related to {@link onWindowNew} method. |
| [DataResubmissionHandler](arkts-dataresubmissionhandler-c.md) | Defines the onDataResubmission callback, related to {@link onDataResubmission} method. |
| [EventResult](arkts-eventresult-c.md) | 通知Web组件同层事件消费结果，支持的事件：[触摸事件的类型]{@link enums:TouchType}和[鼠标事件的类型]{@link enums:MouseAction}，鼠标仅支持 [左中右按键]{@link enums:MouseButton}。 如果应用不消费该事件，则应设置消费结果为false，事件将会被Web组件消费；反之如果应用消费了该事件，则应将消费结果设置为true，Web组件将不消费该事件。若应用设置消费结果不符合以上使用规格，将产生与开发者预期不匹配的现象。 触摸事件示例代码参考[onNativeEmbedGestureEvent事件]{@link web:WebAttribute.onNativeEmbedGestureEvent}。 鼠标事件示例代码参考[onNativeEmbedMouseEvent事件]{@link web:WebAttribute.onNativeEmbedMouseEvent}。 |
| [FileSelectorParam](arkts-fileselectorparam-c.md) | 封装消息信息，作为 {@link onFileSelectorShow} 方法的入参。 |
| [FileSelectorResult](arkts-fileselectorresult-c.md) | 定义文件选择器结果，与 {@link onFileSelectorShow} 方法相关联。 |
| [FullScreenExitHandler](arkts-fullscreenexithandler-c.md) | Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event. |
| [HttpAuthHandler](arkts-httpauthhandler-c.md) | Defines the http auth request result, related to {@link onHttpAuthRequest} method. |
| [JsGeolocation](arkts-jsgeolocation-c.md) | Defines the js geolocation request. |
| [JsResult](arkts-jsresult-c.md) | 定义 JS 返回结果。 |
| [PermissionRequest](arkts-permissionrequest-c.md) | 权限请求。 |
| [ScreenCaptureHandler](arkts-screencapturehandler-c.md) | Defines the onScreenCapture callback, related to {@link onScreenCapture} method. |
| [SslErrorHandler](arkts-sslerrorhandler-c.md) | Defines the ssl error request result, related to {@link onSslErrorEventReceive} method. |
| [VerifyPinHandler](arkts-verifypinhandler-c.md) | Handle the result of PIN verification. |
| [WebAttribute](arkts-webattribute-c.md) | Defines the Web attribute functions. |
| [WebContextMenuParam](arkts-webcontextmenuparam-c.md) | 定义上下文菜单参数，关联{@link WebContextMenuParam}方法。 |
| [WebContextMenuResult](arkts-webcontextmenuresult-c.md) | Defines the context menu result, related to {@link WebContextMenuResult} method. |
| [WebController](arkts-webcontroller-c.md) | Defines the Web controller. |
| [WebCookie](arkts-webcookie-c.md) | Defines the Web cookie. |
| [WebKeyboardController](arkts-webkeyboardcontroller-c.md) | Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event. |
| [WebResourceError](arkts-webresourceerror-c.md) | Defines the Web resource error. |
| [WebResourceRequest](arkts-webresourcerequest-c.md) | Encompassed message information as parameters to {@link onConsole} method. |
| [WebResourceResponse](arkts-webresourceresponse-c.md) | Web组件资源响应对象。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AcceptableFileType](arkts-acceptablefiletype-i.md) | 定义文件选择器拉取文件时网页推荐的文件类型信息。 |
| [AdsBlockedDetails](arkts-adsblockeddetails-i.md) | Defines the ads block details. |
| [AISessionEvent](arkts-aisessionevent-i.md) | 自定义AI会话配置对象，用于定义AI会话的生命周期回调。 |
| [BlankScreenDetails](arkts-blankscreendetails-i.md) | 定义检测到白屏时的结果的细节。 |
| [BlankScreenDetectionConfig](arkts-blankscreendetectionconfig-i.md) | 定义白屏检测的策略配置选项。 |
| [BlankScreenDetectionEventInfo](arkts-blankscreendetectioneventinfo-i.md) | 定义检测到白屏时的事件信息。 |
| [CameraCaptureStateChangeInfo](arkts-cameracapturestatechangeinfo-i.md) | 定义摄像头触发回调时的改变前后的状态信息。 |
| [EmbedOptions](arkts-embedoptions-i.md) | Web同层渲染的配置。 |
| [ExpandedMenuItemOptions](arkts-expandedmenuitemoptions-i.md) | > **说明：** > > 从API version 12开始支持，从API version 20开始废弃，建议使用 > [editMenuOptions]{@link WebAttribute#editmenuoptions}替代。 > 自定义菜单扩展项。 |
| [FirstMeaningfulPaint](arkts-firstmeaningfulpaint-i.md) | 提供网页绘制页面主要内容的详细信息。 |
| [FirstScreenPaint](arkts-firstscreenpaint-i.md) | 检测到首屏渲染时的事件信息。 |
| [FullScreenEnterEvent](arkts-fullscreenenterevent-i.md) | Web组件进入全屏回调事件的详情。 |
| [Header](arkts-header-i.md) | Web组件返回的请求/响应头对象。 |
| [IntelligentTrackingPreventionDetails](arkts-intelligenttrackingpreventiondetails-i.md) | 提供智能防跟踪拦截的详细信息。 |
| [JavaScriptProxy](arkts-javascriptproxy-i.md) | 定义要注入的JavaScript对象。 |
| [LargestContentfulPaint](arkts-largestcontentfulpaint-i.md) | 提供网页绘制页面最大内容的详细信息。 |
| [LoadCommittedDetails](arkts-loadcommitteddetails-i.md) | 提供已提交跳转的网页的详细信息。 |
| [MicrophoneCaptureStateChangeInfo](arkts-microphonecapturestatechangeinfo-i.md) | 定义麦克风触发回调时的改变前后的状态信息。 |
| [NativeEmbedDataInfo](arkts-nativeembeddatainfo-i.md) | 提供同层标签生命周期变化的详细信息。 |
| [NativeEmbedInfo](arkts-nativeembedinfo-i.md) | 提供同层标签的详细信息。 |
| [NativeEmbedMouseInfo](arkts-nativeembedmouseinfo-i.md) | 提供鼠标/触摸板在同层标签上点击或长按的详细信息。 |
| [NativeEmbedParamDataInfo](arkts-nativeembedparamdatainfo-i.md) | 提供同层渲染object标签内嵌param元素变化时同层标签的详细信息。 |
| [NativeEmbedParamItem](arkts-nativeembedparamitem-i.md) | 提供同层渲染object标签内嵌param元素的详细信息。 |
| [NativeEmbedTouchInfo](arkts-nativeembedtouchinfo-i.md) | 提供手指触摸到同层标签的详细信息。 |
| [NativeEmbedVisibilityInfo](arkts-nativeembedvisibilityinfo-i.md) | 提供同层标签的可见性信息。 |
| [NativeMediaPlayerConfig](arkts-nativemediaplayerconfig-i.md) | 用于[开启应用接管网页媒体播放功能]{@link web:WebAttribute.enableNativeMediaPlayer}的配置信息。 |
| [NestedScrollOptionsExt](arkts-nestedscrolloptionsext-i.md) | 通过NestedScrollOptionsExt可以设置上下左右四个方向的嵌套滚动规则。 |
| [OnAlertEvent](arkts-onalertevent-i.md) | 定义网页触发 `alert()` 告警时的回调函数。 |
| [OnAudioStateChangedEvent](arkts-onaudiostatechangedevent-i.md) | 定义网页上的音频播放状态发生改变时的回调函数。 |
| [OnBeforeUnloadEvent](arkts-onbeforeunloadevent-i.md) | Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload. |
| [OnClientAuthenticationEvent](arkts-onclientauthenticationevent-i.md) | 定义当需要用户提供SSL客户端证书时触发回调。 |
| [OnConfirmEvent](arkts-onconfirmevent-i.md) | 定义网页触发 `confirm()` 弹窗时的回调函数。 |
| [OnConsoleEvent](arkts-onconsoleevent-i.md) | Defines the triggered function when the web page receives a JavaScript console message. |
| [OnContextMenuShowEvent](arkts-oncontextmenushowevent-i.md) | 定义调用时触发的回调，以允许自定义显示上下文菜单。 |
| [OnDataResubmittedEvent](arkts-ondataresubmittedevent-i.md) | Defines the triggered callback to decision whether resend form data or not. |
| [OnDownloadStartEvent](arkts-ondownloadstartevent-i.md) | 定义通知主应用开始下载一个文件。 |
| [OnErrorReceiveEvent](arkts-onerrorreceiveevent-i.md) | 定义网页加载遇到错误时触发该回调。 |
| [OnFaviconReceivedEvent](arkts-onfaviconreceivedevent-i.md) | 定义应用为当前页面接收到新的网站图标（favicon）时的回调函数。 |
| [OnFirstContentfulPaintEvent](arkts-onfirstcontentfulpaintevent-i.md) | 定义网页首次内容绘制回调函数。 |
| [OnGeolocationShowEvent](arkts-ongeolocationshowevent-i.md) | Defines the triggered function when requesting to show the geolocation permission. |
| [OnHttpAuthRequestEvent](arkts-onhttpauthrequestevent-i.md) | 定义通知收到http auth认证请求。 |
| [OnHttpErrorReceiveEvent](arkts-onhttperrorreceiveevent-i.md) | 定义网页收到资源加载HTTP错误时触发。 |
| [OnInterceptRequestEvent](arkts-oninterceptrequestevent-i.md) | 定义当Web组件加载url之前触发。 |
| [OnLoadFinishedEvent](arkts-onloadfinishedevent-i.md) | 定义网页加载结束时触发的函数。 |
| [OnLoadInterceptEvent](arkts-onloadinterceptevent-i.md) | 定义截获资源加载时触发的回调。 |
| [OnLoadStartedEvent](arkts-onloadstartedevent-i.md) | 定义网页加载开始时触发的函数。 |
| [OnOverScrollEvent](arkts-onoverscrollevent-i.md) | 定义网页过度滚动时触发的回调。 |
| [OnPageBeginEvent](arkts-onpagebeginevent-i.md) | 定义网页加载开始时触发的函数。 |
| [OnPageEndEvent](arkts-onpageendevent-i.md) | 定义网页加载结束时触发的函数。 |
| [OnPageVisibleEvent](arkts-onpagevisibleevent-i.md) | Defines the triggered callback when previous page will no longer be drawn and next page begin to draw. |
| [OnPdfLoadEvent](arkts-onpdfloadevent-i.md) | 定义PDF加载成功或失败时触发的函数。 |
| [OnPdfScrollEvent](arkts-onpdfscrollevent-i.md) | 定义PDF页面滚动到底时触发的回调函数。 |
| [OnPermissionRequestEvent](arkts-onpermissionrequestevent-i.md) | 定义通知收到获取权限请求。 |
| [OnProgressChangeEvent](arkts-onprogresschangeevent-i.md) | 定义网页加载进度变化时触发该回调。 |
| [OnPromptEvent](arkts-onpromptevent-i.md) | 定义网页触发 `prompt()` 弹窗时的回调函数。 |
| [OnRefreshAccessedHistoryEvent](arkts-onrefreshaccessedhistoryevent-i.md) | 定义导航完成时触发。 |
| [OnRenderExitedEvent](arkts-onrenderexitedevent-i.md) | Defines the triggered when the render process exits. |
| [OnResourceLoadEvent](arkts-onresourceloadevent-i.md) | 定义加载url时触发。 |
| [OnScaleChangeEvent](arkts-onscalechangeevent-i.md) | 定义当前页面显示比例的变化时触发。 |
| [OnScreenCaptureRequestEvent](arkts-onscreencapturerequestevent-i.md) | 定义通知收到屏幕捕获请求。 |
| [OnScrollEvent](arkts-onscrollevent-i.md) | 定义滚动条滑动到指定位置时触发。 |
| [OnSearchResultReceiveEvent](arkts-onsearchresultreceiveevent-i.md) | 定义通知调用方网页页内查找的结果。 |
| [OnShowFileSelectorEvent](arkts-onshowfileselectorevent-i.md) | 定义文件选择器结果。 |
| [OnSslErrorEventReceiveEvent](arkts-onsslerroreventreceiveevent-i.md) | 定义网页收到SSL错误时触发。 |
| [OnTitleReceiveEvent](arkts-ontitlereceiveevent-i.md) | 定义网页document标题更改时触发该回调。 |
| [OnTouchIconUrlReceivedEvent](arkts-ontouchiconurlreceivedevent-i.md) | 定义设置接收到apple-touch-icon url地址时的回调函数。 |
| [OnWindowNewEvent](arkts-onwindownewevent-i.md) | 定义网页要求用户创建窗口时触发的回调。 |
| [OnWindowNewExtEvent](arkts-onwindownewextevent-i.md) | Defines the triggered callback when web page requires the user to create a window. |
| [PreviewMenuOptions](arkts-previewmenuoptions-i.md) | 预览菜单选项。 |
| [RenderProcessNotRespondingData](arkts-renderprocessnotrespondingdata-i.md) | Defines the render process not responding info. |
| [ScreenCaptureConfig](arkts-screencaptureconfig-i.md) | Web屏幕捕获的配置。 |
| [ScriptItem](arkts-scriptitem-i.md) | Defines the contents of the JavaScript to be injected. |
| [SelectionMenuOptionsExt](arkts-selectionmenuoptionsext-i.md) | 自定义菜单扩展项。 |
| [SslErrorEvent](arkts-sslerrorevent-i.md) | Defines the ssl error event. |
| [UrlRegexRule](arkts-urlregexrule-i.md) | Defines the regular expression rule. |
| [VerifyPinEvent](arkts-verifypinevent-i.md) | Defines the event for PIN verification. |
| [WebInterface](arkts-webinterface-i.md) | Defines the Web interface. |
| [WebKeyboardCallbackInfo](arkts-webkeyboardcallbackinfo-i.md) | Defines the web keyboard callback info related to the {@link onInterceptKeyboardAttach} event. |
| [WebKeyboardOptions](arkts-webkeyboardoptions-i.md) | Defines the web keyboard options when onInterceptKeyboardAttach event return. |
| [WebMediaOptions](arkts-webmediaoptions-i.md) | Defines the Media Options. |
| [WebOptions](arkts-weboptions-i.md) | Defines the Web options. |
| [WindowFeatures](arkts-windowfeatures-i.md) | Defines the window features info for window.open. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AISessionResultType](arkts-aisessionresulttype-e.md) | AI会话操作的结果状态。 |
| [AISessionType](arkts-aisessiontype-e.md) | 支持的AI会话类型。 |
| [AudioSessionType](arkts-audiosessiontype-e.md) | 应用中Web音频类型。 |
| [BlankScreenDetectionMethod](arkts-blankscreendetectionmethod-e.md) | 白屏检测使用的检测策略的方法。 |
| [BlurOnKeyboardHideMode](arkts-bluronkeyboardhidemode-e.md) | Enum type supplied to {@link blurOnKeyboardHideMode} for setting the web blurOnKeyboardHide mode. |
| [CacheMode](arkts-cachemode-e.md) | Enum type supplied to {@link cacheMode} for setting the Web cache mode. |
| [CameraCaptureState](arkts-cameracapturestate-e.md) | 定义摄像头使用状态的值。 |
| [ConsoleMessageSource](arkts-consolemessagesource-e.md) | The source of console message. |
| [ContextMenuDataMediaType](arkts-contextmenudatamediatype-e.md) | 触发上下文菜单的网页元素类型（增强获取类型能力）。 |
| [ContextMenuEditStateFlags](arkts-contextmenueditstateflags-e.md) | 支持以按位或的方式使用此枚举。例如，如果需要同时支持CAN_CUT、CAN_COPY和CAN_SELECT_ALL，可使用CAN_CUT | CAN_COPY | CAN_SELECT_ALL或11。 |
| [ContextMenuInputFieldType](arkts-contextmenuinputfieldtype-e.md) | 输入框类型。 |
| [ContextMenuMediaType](arkts-contextmenumediatype-e.md) | 触发上下文菜单的网页元素类型。 |
| [ContextMenuSourceType](arkts-contextmenusourcetype-e.md) | 触发上下文菜单的事件来源。 |
| [CredentialType](arkts-credentialtype-e.md) | Enum type supplied to {@link CredentialType} when ClientAuthenticationHandler#confirm being called. |
| [DetectedBlankScreenReason](arkts-detectedblankscreenreason-e.md) | 白屏的具体原因。 |
| [FileSelectorMode](arkts-fileselectormode-e.md) | 文件选择器的模式。 |
| [GestureFocusMode](arkts-gesturefocusmode-e.md) | 手势获焦的模式。 |
| [HitTestType](arkts-hittesttype-e.md) | 点击事件检测结果类型。 |
| [MessageLevel](arkts-messagelevel-e.md) | Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript. |
| [MicrophoneCaptureState](arkts-microphonecapturestate-e.md) | 定义麦克风使用状态的值。 |
| [MixedMode](arkts-mixedmode-e.md) | 混合内容模式。默认设置为 MixedMode.None。 |
| [NativeEmbedParamStatus](arkts-nativeembedparamstatus-e.md) | 定义同层渲染object标签内嵌param元素的状态变化类型，当添加param元素时触发ADD，修改param元素属性触发UPDATE，删除param元素触发DELETE。 |
| [NativeEmbedStatus](arkts-nativeembedstatus-e.md) | 定义同层标签生命周期，当加载页面中有同层标签会触发CREATE，同层标签移动或者放大会触发UPDATE，退出页面会触发DESTROY。 |
| [NavigationPolicy](arkts-navigationpolicy-e.md) | Enum type for navigationPolicy in OnWindowNewExtEvent. |
| [OverScrollMode](arkts-overscrollmode-e.md) | 设置Web的过滚动模式为关闭或开启。 |
| [PdfLoadResult](arkts-pdfloadresult-e.md) | 定义PDF页面的加载结果。 |
| [PinVerifyResult](arkts-pinverifyresult-e.md) | Enum type supplied to {@link PinVerifyResult} when VerifyPinHandler#confirm being called. |
| [ProtectedResourceType](arkts-protectedresourcetype-e.md) | 定义可访问的资源类型，与 {@link onPermissionRequest} 方法相关。 |
| [RenderExitReason](arkts-renderexitreason-e.md) | Enum type supplied to {@link renderExitReason} when onRenderExited being called. |
| [RenderMode](arkts-rendermode-e.md) | Defines the web render mode, related to {@link RenderMode}. |
| [RenderProcessNotRespondingReason](arkts-renderprocessnotrespondingreason-e.md) | Enum type supplied to {@link RenderProcessNotRespondingData} when onRenderProcessNotResponding is called. |
| [ScrollbarLayoutPolicy](arkts-scrollbarlayoutpolicy-e.md) | 定义滚动条布局模式控制参数的枚举类型。 |
| [ScrollDirectionalLockType](arkts-scrolldirectionallocktype-e.md) | 定义滑动方向锁定的场景类型。 |
| [SslError](arkts-sslerror-e.md) | Enum type supplied to {@link error} when onSslErrorEventReceive being called. |
| [ThreatType](arkts-threattype-e.md) | Enum type supplied to {@link threatType} for the website's threat type. |
| [ViewportFit](arkts-viewportfit-e.md) | 网页meta中viewport-fit配置的视口类型。 |
| [WebBypassVsyncCondition](arkts-webbypassvsynccondition-e.md) | 跳过渲染vsync条件。 |
| [WebCaptureMode](arkts-webcapturemode-e.md) | Enum type supplied to {@link captureMode} for setting the web capture mode. |
| [WebDarkMode](arkts-webdarkmode-e.md) | Web深色模式的配置 |
| [WebElementType](arkts-webelementtype-e.md) | 网页元素信息。 |
| [WebKeyboardAppearanceMode](arkts-webkeyboardappearancemode-e.md) | 提供给{@链接键盘外观}的枚举类型，用于设置Web键盘外观模式。 |
| [WebKeyboardAvoidMode](arkts-webkeyboardavoidmode-e.md) | Enum type supplied to {@link keyboardAvoidMode} for setting the web keyboard avoid mode. |
| [WebLayoutMode](arkts-weblayoutmode-e.md) | Web布局模式的配置。 |
| [WebNavigationType](arkts-webnavigationtype-e.md) | Enum type supplied to {@link navigationType} for the navigation's type. |
| [WebResponseType](arkts-webresponsetype-e.md) | 菜单的响应类型。 |
| [WebRotateEffect](arkts-webrotateeffect-e.md) | 组件旋转时，宽高动画过程中组件内容如何填充以适应新尺寸的方式。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [MouseInfoCallback](arkts-mouseinfocallback-t.md) | 当鼠标/触摸板点击到同层标签时触发该回调。 |
| [OnAdsBlockedCallback](arkts-onadsblockedcallback-t.md) | The callback of ads block |
| [OnAISessionCallback](arkts-onaisessioncallback-t.md) | AI会话操作结果回调函数类型。用于报告会话创建或执行的结果。 |
| [OnCameraCaptureStateChangeCallback](arkts-oncameracapturestatechangecallback-t.md) | 当页面摄像设备状态发生改变时触发此回调。 |
| [OnContextMenuHideCallback](arkts-oncontextmenuhidecallback-t.md) | 上下文菜单自定义隐藏的回调。 |
| [OnCreateAISession](arkts-oncreateaisession-t.md) | AI会话创建回调函数类型。允许自定义模型初始化和结果处理。 |
| [OnDestroyAISession](arkts-ondestroyaisession-t.md) | AI会话销毁回调函数类型。用于清理与自定义AI模型关联的资源。 |
| [OnDetectBlankScreenCallback](arkts-ondetectblankscreencallback-t.md) | 检测到白屏时触发此回调。 |
| [OnExecuteAIAction](arkts-onexecuteaiaction-t.md) | AI会话执行操作回调函数类型。用于自定义实现AI模型执行。 |
| [OnFirstMeaningfulPaintCallback](arkts-onfirstmeaningfulpaintcallback-t.md) | 网页绘制页面度量信息的回调，当网页加载完页面主要内容时会触发该回调。 |
| [OnFirstScreenPaintCallback](arkts-onfirstscreenpaintcallback-t.md) | 检测到首屏渲染结束时会触发此回调。 |
| [OnFullScreenEnterCallback](arkts-onfullscreenentercallback-t.md) | Web组件进入全屏时触发的回调。 |
| [OnInputmethodAttachedCallback](arkts-oninputmethodattachedcallback-t.md) | 当inputmethod被附加时，会触发回调。 |
| [OnIntelligentTrackingPreventionCallback](arkts-onintelligenttrackingpreventioncallback-t.md) | The callback of Intelligent Tracking Prevention. |
| [OnLargestContentfulPaintCallback](arkts-onlargestcontentfulpaintcallback-t.md) | 网页绘制页面最大内容度量信息的回调。 |
| [OnMicrophoneCaptureStateChangeCallback](arkts-onmicrophonecapturestatechangecallback-t.md) | 当页面麦克风状态发生改变时触发此回调。 |
| [OnNativeEmbedObjectParamChangeCallback](arkts-onnativeembedobjectparamchangecallback-t.md) | 增加、修改或删除同层渲染object标签内嵌param元素时触发此回调。 |
| [OnNativeEmbedVisibilityChangeCallback](arkts-onnativeembedvisibilitychangecallback-t.md) | 当同层标签可见性变化时触发该回调。 |
| [OnNavigationEntryCommittedCallback](arkts-onnavigationentrycommittedcallback-t.md) | The callback of load committed. |
| [OnOverrideErrorPageCallback](arkts-onoverrideerrorpagecallback-t.md) | The callback of onOverrideErrorPage. |
| [OnOverrideUrlLoadingCallback](arkts-onoverrideurlloadingcallback-t.md) | The callback of onOverrideUrlLoading. Should not call WebviewController.loadUrl with the request's URL and then return true. |
| [OnRenderProcessNotRespondingCallback](arkts-onrenderprocessnotrespondingcallback-t.md) | The callback of render process not responding. |
| [OnRenderProcessRespondingCallback](arkts-onrenderprocessrespondingcallback-t.md) | The callback of render process responding. |
| [OnSafeBrowsingCheckResultCallback](arkts-onsafebrowsingcheckresultcallback-t.md) | The callback of safe browsing check. |
| [OnSslErrorEventCallback](arkts-onsslerroreventcallback-t.md) | SSL错误事件的回调函数。 |
| [OnVerifyPinCallback](arkts-onverifypincallback-t.md) | The callback of verify pin. |
| [OnViewportFitChangedCallback](arkts-onviewportfitchangedcallback-t.md) | 网页meta中viewport-fit配置项更改时触发的回调。 |
| [TextSelectionChangeCallback](arkts-textselectionchangecallback-t.md) | 文本选择内容发生变化后，通过回调返回选中的文本。 |
| [WebKeyboardCallback](arkts-webkeyboardcallback-t.md) | The callback of onInterceptKeyboardAttach event. |
| [WebviewController](arkts-webviewcontroller-t.md) | 提供Web控制器的方法。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Web](arkts-web-con.md#Web) | Defines Web Component. <p><strong>API Note</strong>: <strong>Performance Note</strong>: <p>For details about how to optimize the compilation, resource loading, and JSBridge performance, see [Optimizing Web Page Loading]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-web-develop-optimization} <p>When the white screen duration is long due to complex web page parsing, you can enable [optimizeParserBudget]{@link WebAttribute.optimizeParserBudget} to reduce the first frame rendering content.</p> </p> |
| [WebInstance](arkts-web-con.md#WebInstance) | Defines Web Component instance. |

