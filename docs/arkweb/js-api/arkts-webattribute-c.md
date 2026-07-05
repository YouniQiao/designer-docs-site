# WebAttribute

Defines the Web attribute functions.

**Inheritance:** WebAttributeextends: CommonMethod<WebAttribute>.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## aiSessionOptions

```TypeScript
aiSessionOptions(aiSessions: Array<AISessionEvent>)
```

Web组件的自定义AI会话配置。 用于注册多个自定义AI会话。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aiSessions | Array&lt;AISessionEvent> | Yes | AISessionOptions对象的数组。 |

## allowWindowOpenMethod

```TypeScript
allowWindowOpenMethod(flag : boolean)
```

Whether the window can be open automatically through JavaScript.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | boolean | Yes | If it is true, the window can be opened automatically through JavaScript.  If it is false and user behavior, the window can be opened automatically through JavaScript.  Otherwise, the window cannot be opened. |

## backToTop

```TypeScript
backToTop(backToTop: boolean)
```

Set whether to enable the back-to-top feature for web component when the status bar is touched.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backToTop | boolean | Yes | {@code true} means enable the back-to-top feature,  when the status bar is touched. {@code false} otherwise. The default value is true.  True when passing in undefined and null. |

## bindSelectionMenu

```TypeScript
bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
    options?: SelectionMenuOptionsExt)
```

绑定到选择菜单。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementType | WebElementType | Yes | 表示选择菜单的类型。 |
| content | CustomBuilder | Yes | 表示选择菜单的内容。 |
| responseType | WebResponseType | Yes | 表示选择菜单的响应类型。 |
| options | SelectionMenuOptionsExt | No |  |

## blankScreenDetectionConfig

```TypeScript
blankScreenDetectionConfig(detectConfig: BlankScreenDetectionConfig)
```

设置白屏检测的策略配置，如使能开关、检测时间和检测策略等。当属性没有显式调用时，默认关闭白屏检测。 > **说明：** > > - 根据detectConfig的配置，在网页加载后检测到白屏或者近似白屏现象，可触发回调 > [onDetectedBlankScreen](arkts-webattribute-c.md#onDetectedBlankScreen)。 > > - 设置后下次导航生效。 > > - 当用户与网页发生交互后，不再会继续检查是否白屏。 > > - 不支持layoutMode为WebLayoutMode.FIT_CONTENT的场景。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| detectConfig | BlankScreenDetectionConfig | Yes | 白屏检测的策略配置。 |

## blockNetwork

```TypeScript
blockNetwork(block: boolean)
```

设置Web组件是否阻止从网络加载资源。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| block | boolean | Yes | {@code true} 不允许从网络加载资源; {@code false} 表示允许从网络加载资源。 |

## blurOnKeyboardHideMode

```TypeScript
blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode)
```

Sets the blur on for elements on webview when soft keyboard is hidden manually.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlurOnKeyboardHideMode | Yes | Default value is SILENT. Set BLUR to enable the blur on keyboard hide mode, which can be {@link BlurOnKeyboardHideMode}. |

## bypassVsyncCondition

```TypeScript
bypassVsyncCondition(condition: WebBypassVsyncCondition)
```

当开发者调用scrollBy接口进行页面滚动时，可以通过bypassVsyncCondition接口设置渲染流程跳过vsync（垂直同步）调度，直接触发绘制。该属性没有显式调用时，默认不跳过vsync调度。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | WebBypassVsyncCondition | Yes | 触发渲染流程跳过vsync调度的条件。 传入undefined或null时为NONE。 |

## cacheMode

```TypeScript
cacheMode(cacheMode: CacheMode)
```

设置缓存模式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cacheMode | CacheMode | Yes | 要设置的缓存模式。 |

## copyOptions

```TypeScript
copyOptions(value: CopyOptions)
```

调用以设置复制选项

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CopyOptions | Yes | 复制选项。 |

## darkMode

```TypeScript
darkMode(mode: WebDarkMode)
```

设置Web深色模式。当属性没有显式调用时，默认Web深色模式关闭。 当深色模式开启时，Web将启用媒体查询prefers-color-scheme中网页所定义的深色样式，若网页未定义深色样式，则保持原状。如需开启强制深色模式，建议配合 [forceDarkAccess](arkts-webattribute-c.md#forceDarkAccess)使用。深色模式具体用法可参考[Web深色模式适配](docroot://web/web-set-dark-mode.md)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebDarkMode | Yes | 设置Web的深色模式为关闭、开启或跟随系统。 传入null或undefined时为`WebDarkMode.Off`。 |

## databaseAccess

```TypeScript
databaseAccess(databaseAccess: boolean)
```

Sets whether the Web access the database.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| databaseAccess | boolean | Yes | {@code true} means the Web access the database; {@code false} otherwise.  The default value is false. |

## dataDetectorConfig

```TypeScript
dataDetectorConfig(config: TextDataDetectorConfig)
```

实体识词配置

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | TextDataDetectorConfig | Yes | 实体识词配置 |

## defaultFixedFontSize

```TypeScript
defaultFixedFontSize(size: number)
```

Sets the default font size for the web page.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 设置网页的默认等宽字体大小，单位px。 输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。 传入null或undefined时为13。 |

## defaultFontSize

```TypeScript
defaultFontSize(size: number)
```

Sets the default font size for the web page.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 设置网页的默认字体大小，单位px。 输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。 传  入null或undefined时为16。 |

## defaultTextEncodingFormat

```TypeScript
defaultTextEncodingFormat(textEncodingFormat: string)
```

设置网页的默认字符编码。当属性没有显式调用时，网页的默认字符编码为"UTF-8"。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textEncodingFormat | string | Yes | 默认字符编码。 传入null或undefined时为"UTF-8"。 |

## domStorageAccess

```TypeScript
domStorageAccess(domStorageAccess: boolean)
```

Sets whether to enable the DOM Storage API permission. The default value is false.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domStorageAccess | boolean | Yes | {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise. |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

设置自定义文本菜单。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | EditMenuOptions | Yes | 自定义文本菜单选项。  菜单项数量、菜单内容尺寸和图标尺寸需与 ArkUI Menu 组件保持一致。  菜单中仅支持使用系统提供的 id 枚举值（TextMenuItemId），  包括剪切、复制、粘贴、全选、翻译、搜索以及网页中的部分 AI 菜单。  onMenuItemClick 函数中的 textRange 参数在网页场景下无意义，  传入值为 -1。 |

## enableAutoFill

```TypeScript
enableAutoFill(value: boolean)
```

设置是否启用自动填充功能。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 表示是否启用自动填充的标识。  默认值为 true。true：启用，false：禁用。 |

## enableDataDetector

```TypeScript
enableDataDetector(enable: boolean)
```

开启实体识词

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | true为开启实体识词，false关闭，默认值关闭 |

## enableDefaultContextMenu

```TypeScript
enableDefaultContextMenu(enable: boolean)
```

设置是否使能默认右键菜单

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} means the Web enable the default right-click context menu,  {@code false} otherwise.  The default value is false. |

## enableDrag

```TypeScript
enableDrag(value: boolean)
```

启用或禁用此组件的拖动。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | {@code true}启用拖动，{@code false}禁用拖动。  默认值为true。 |

## enableFollowSystemFontWeight

```TypeScript
enableFollowSystemFontWeight(follow: boolean)
```

设置Web组件是否开启字重跟随系统设置变化。当属性没有显式调用时，Web组件默认开启字重跟随系统设置变化。 > **说明：** > > 目前该能力只支持前端文本元素跟随变化，暂不支持canvas元素、内嵌docx和pdf格式中的文本跟随变化。

**Since:** 18

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| follow | boolean | Yes | 设置Web组件是否开启字重跟随系统设置变化。 true表示字重跟随系统设置中的字体粗细变化，系统设置改变时字重跟随变化。false表示字重不再跟随系统设置中的字体粗细变  化，系统设置改变时维持当前字重不变。 传入undefined或null时为true。 |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enabled: boolean)
```

启用或禁用触觉反馈。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 默认值为 true，设置为 false 可禁用触觉反馈。 |

## enableImageAnalyzer

```TypeScript
enableImageAnalyzer(enable: boolean)
```

设置 Web 组件支持 AI 图像识别能力。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} 表示启用 Web AI 图像识别能力，  {@code false} 表示禁用。  默认值为 true。 |

## enableNativeEmbedMode

```TypeScript
enableNativeEmbedMode(enabled: boolean)
```

Sets the enable native embed mode for web. <p><strong>API Note</strong>: <strong>Performance Note</strong>: <p>For details about how to rendering native components on the Web using same-layer rendering, see [Rendering Native Components on the Web Using Same-Layer Rendering]https://developer.huawei.com/consumer/en/doc/best-practices/bpta-render-web-using-same-layer-render </p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the same-layer rendering feature.  The value true means to enable the same-layer rendering feature, and false means the opposite. |

## enableNativeMediaPlayer

```TypeScript
enableNativeMediaPlayer(config: NativeMediaPlayerConfig)
```

开启[应用接管网页媒体播放功能](docroot://web/app-takeovers-web-media.md)。当属性没有显式调用时，默认不开启接管网页媒体播放功能。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | NativeMediaPlayerConfig | Yes | enable: 是否开启该功能。 shouldOverlay: 该功能开启后， 应用接管网页视频的播放器画面是否覆盖网页内容。传入undefined或null时为`{enable: false, shouldOverlay: false}`。 |

## enableScrollDirectionalLock

```TypeScript
enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType)
```

在WebView组件中启用或禁用滚动手势的方向锁定。 当启用方向锁定时，滚动轴将根据初始 滑动向量方向。此行为有助于防止意外的滚动方向更改 在触摸交互过程中，特别是在嵌套滚动场景中。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否使能定向锁定。  - `true`：为对应的类型类别启用方向锁定。  - `false`：禁用对应类型类别的方向锁定。 |
| type | ScrollDirectionalLockType | Yes | 指定方向锁的应用场景。 |

## enableSelectedDataDetector

```TypeScript
enableSelectedDataDetector(enable: boolean)
```

设置是否启用文本选择的AI菜单功能，启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。 AI菜单功能启用时，在网页中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId](../../apis-arkui/arkts-apis/arkts-textmenuitemid-c.md#TextMenuItemId)中的url（打开链接）、email（新建邮件）、 phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。 AI菜单生效时，需在选中范围内，包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId](../../apis-arkui/arkts-apis/arkts-textmenuitemid-c.md#TextMenuItemId)中的askAI菜单项不同时出现。 示例使用场景详见[使用Web组件的智能分词能力](docroot://web/web-data-detector.md)。 > **说明：** > > 当enableSelectedDataDetector未配置或设置为true时，将遵循 > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20) > 中types的配置；若 > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20) > 也未配置，则默认识别所有类型。 > > 当enableSelectedDataDetector设置为false时，不激活实体文本选择AI菜单项。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否启用Web文本识别，true表示启用，false表示不启用。 传入undefined或null时属性重置为默认值。 |

## enableWebAVSession

```TypeScript
enableWebAVSession(enabled: boolean)
```

设置是否对接播控

**Since:** 18

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | true为开启，false为关闭 |

## fileAccess

```TypeScript
fileAccess(fileAccess: boolean)
```

Sets whether to enable access to the file system in the application. This setting dose not affect the access to the files specified though $rawfile(filepath/filename). <p><strong>API Note</strong>:<br> fileAccess is disabled by default since API version 12. When fileAccess is set to false, files in the read-only /data/storage/el1/bundle/entry/resources/resfile<br> directory can still be accessed through the file protocol. </p>

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fileAccess | boolean | Yes | {@code true} means enable local file system access in Web; {@code false} otherwise.  The default value is false. |

## forceDarkAccess

```TypeScript
forceDarkAccess(access: boolean)
```

设置网页是否开启强制深色模式。该属性仅在[darkMode](arkts-webattribute-c.md#darkMode)开启深色模式时生效。当属性没有显式调用时，默认网页不开启强制深色模式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| access | boolean | Yes | 设置网页是否开启强制深色模式。 true表示设置网页开启强制深色模式，false表示设置网页不开启强制深色模式。 传入null或undefined时为false。 |

## forceDisplayScrollBar

```TypeScript
forceDisplayScrollBar(enabled: boolean)
```

是否强制显示滚动条。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | {@code true} 表示显示；{@code false} 表示不显示。 |

## forceEnableZoom

```TypeScript
forceEnableZoom(enable: boolean)
```

设置是否遵守网页中 <meta name="viewport"> 标签设置的缩放限制。

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} 表示 Web 遵守  网页中 标签设置的缩放限制；{@code false} 表示不遵守。  默认值为 true。 |

## geolocationAccess

```TypeScript
geolocationAccess(geolocationAccess: boolean)
```

Sets whether to allow access to geographical locations.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| geolocationAccess | boolean | Yes | Whether to enable geolocation access. {@code true} means the Web  allows access to geographical locations; {@code false} means the  Web disallows access to geographical locations. The default value is true. |

## gestureFocusMode

```TypeScript
gestureFocusMode(mode: GestureFocusMode)
```

设置手势获焦的模式。当用户使用不同手势操作web时，根据所设置的模式决定是否获焦和获焦时机。默认值DEFAULT，所有手势均会在touchDown时获焦。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | GestureFocusMode | Yes | The gesture focus mode, which can be {@link GestureFocusMode}.  The default value is FocusMode.DEFAULT. |

## horizontalScrollBarAccess

```TypeScript
horizontalScrollBarAccess(horizontalScrollBar: boolean)
```

设置是否绘制水平滚动条。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| horizontalScrollBar | boolean | Yes | 若需要绘制水平滚动条则为 true。  默认值为 true。 |

## imageAccess

```TypeScript
imageAccess(imageAccess: boolean)
```

设置是否允许自动加载图片资源。当属性没有显式调用时，允许自动加载图片资源。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageAccess | boolean | Yes | 设置是否允许自动加载图片资源。 true表示设置允许自动加载图片资源，false表示设置不允许自动加载图片资源。 传入undefined或null时为  false。 |

## initialScale

```TypeScript
initialScale(percent: number)
```

设置网页的初始缩放比例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| percent | number | Yes | 网页初始缩放比例。  取值范围：(0, 1000]。  默认值：100。 |

## javaScriptAccess

```TypeScript
javaScriptAccess(javaScriptAccess: boolean)
```

设置是否允许执行JavaScript脚本。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| javaScriptAccess | boolean | Yes | {@code true} true表示允许执行JavaScript脚本，false表示不允许执行JavaScript脚本。  默认值为true. |

## javaScriptOnDocumentEnd

```TypeScript
javaScriptOnDocumentEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts script into the Web component. When the specified page or document has been loaded, the script is executed on any page whose source matches scriptRules. <p><strong>API NOTE</strong>:<br> The script runs before any Javascript code of the page, when the DOM tree has been loaded and rendered. The script is excuted in the lexicographic order, not the array order. You are not advised to use this API together with runJavaScriptOnDocumentEnd. <p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem> | Yes | The array of the JavaScripts to be injected. |

## javaScriptOnDocumentStart

```TypeScript
javaScriptOnDocumentStart(scripts: Array<ScriptItem>)
```

Injects the JavaScripts script into the Web component. When the specified page or document starts to be loaded, the script is executed on any page whose source matches scriptRules. <p><strong>API Note</strong>:<br> The script runs before any JavaScript code of the page, when the DOM tree may not have been loaded or rendered. The script is executed in the lexicographic order instead of array sequence. if the array sequemce is required, you are advised to use the runJavaScriptOnDocumentStart interface. You are not advised to use this API together with runJavaScriptOnDocumentStart. </p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem> | Yes | The array of the JavaScripts to be injected. |

## javaScriptProxy

```TypeScript
javaScriptProxy(javaScriptProxy: JavaScriptProxy)
```

Injects the JavaScript object into window and invoke the function in window.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| javaScriptProxy | JavaScriptProxy | Yes | The ArkTs object in javaScriptProxy will be registered into this Web  component,  and the methods within the methodList of the injected ArkTs object declared in javaScriptProxy can be accessed  by JavaScript. [since 12] |

## keyboardAppearance

```TypeScript
keyboardAppearance(mode: WebKeyboardAppearanceMode)
```

设置WebKeyboardAppearanceMode以决定软键盘的沉浸式模式。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebKeyboardAppearanceMode | Yes | 此网站的WebKeyboardAppearanceMode。 |

## keyboardAvoidMode

```TypeScript
keyboardAvoidMode(mode: WebKeyboardAvoidMode)
```

Set web avoidance keyboard mode. The default value is WebKeyboardAvoidMode.RESIZE_CONTENT.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebKeyboardAvoidMode | Yes | The web keyboard avoid mode, which can be {@link WebKeyboardAvoidMode}. |

## layoutMode

```TypeScript
layoutMode(mode: WebLayoutMode)
```

设置Web布局模式。当属性没有显式调用时，默认Web布局跟随系统模式。常见问题请参考[Web组件大小自适应页面内容布局](docroot://web/web-fit-content.md)。 > **说明：** > > 目前只支持两种Web布局模式，分别为Web布局跟随系统（`WebLayoutMode.NONE`）和Web组件高度基于前端页面高度的自适应网页布局（`WebLayoutMode.FIT_CONTENT`）。 > > Web组件高度基于前端页面自适应布局有如下限制： > > - 如果Web组件宽或长度超过7680px，请在Web组件创建的时候指定`RenderMode.SYNC_RENDER`模式，否则会整个白屏。 > > - Web组件创建后不支持动态切换layoutMode模式。 > > - Web组件宽高规格：指定`RenderMode.ASYNC_RENDER`模式时，分别不超过7680px。 > > - 频繁更改页面宽高会触发Web组件重新布局，影响体验。 > > - 不支持瀑布流网页（下拉到底部加载更多）。 > > - 不支持宽度自适应，仅支持高度自适应。 > > - 由于高度自适应网页高度，您无法通过修改组件高度属性来修改组件高度。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebLayoutMode | Yes | 设置web布局模式，跟随系统或自适应布局。 传入null或undefined时为`WebLayoutMode.NONE` |

## mediaOptions

```TypeScript
mediaOptions(options: WebMediaOptions)
```

设置Web媒体播放的策略，其中包括：Web中的音频在重新获焦后能够自动续播的有效期、应用内多个Web实例的音频是否独占。当该属性未显式设置时，默认Web中的音频重新获焦后无法自动续播、应用内多个Web实例的音频是独占的。 > **说明：** > > - 同一Web实例中的多个音频均视为同一音频。 > > - 该媒体播放策略将同时管控有声视频。 > > - 建议为所有Web组件设置相同的[audioExclusive](arkts-webmediaoptions-i.md#WebMediaOptions)值。 > > - 音视频互相打断在应用内和应用间生效，续播只在应用间生效。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | WebMediaOptions | Yes | 设置Web的媒体策略。 属性参数更新后需重新播放音频方可生效。 传入undefined或null时为`{resumeInterval: 0,  audioExclusive: true}` |

## mediaPlayGestureAccess

```TypeScript
mediaPlayGestureAccess(access: boolean)
```

设置有声视频的自动播放是否需要用户手动点击，静音视频播放不受该接口管控。当该属性未显式设置时，默认有声视频的自动播放需要用户手动点击。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| access | boolean | Yes | 设置有声视频的自动播放是否需要用户手动点击。 true表示设置有声视频的自动播放需要用户手动点击，false表示设置有声视频的自动播放不需要用户手动点击，能自动播放。传入undefined或null时为false。 |

## metaViewport

```TypeScript
metaViewport(enabled: boolean)
```

设置meta标签的viewport属性是否可用。当属性没有显式调用时，默认支持meta标签的viewport属性。 > **说明：** > > - 当前通过User-Agent中是否含有"Mobile"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有"Mobile"字段时，meta标签中viewport属性默认关闭 > ，此时可通过显性设置metaViewport属性为true来覆盖关闭状态。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 是否支持meta标签的viewport属性。 true表示支持meta标签的viewport属性，将解析viewport属性，并根据viewport属性布局。  false表示不支持meta标签的viewport属性，将不解析viewport属性，进行默认布局。 传入null或undefined时为true。 |

## minFontSize

```TypeScript
minFontSize(size: number)
```

Sets the minimum font size for the web page.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 设置网页字体大小最小值，单位px。 输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。 传  入null或undefined时为8。 |

## minLogicalFontSize

```TypeScript
minLogicalFontSize(size: number)
```

Sets the minimum logical font size for the web page.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 设置网页逻辑字体大小最小值，单位px。 输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。传入null或undefined时为18。 |

## mixedMode

```TypeScript
mixedMode(mixedMode: MixedMode)
```

设定当安全源尝试从非安全源加载资源时的行为。当属性没有显式调用时，默认值为MixedMode.None，即禁止安全源从非安全源加载内容。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mixedMode | MixedMode | Yes | 要设置的混合内容模式。 |

## multiWindowAccess

```TypeScript
multiWindowAccess(multiWindow: boolean)
```

Set whether multiple windows are supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multiWindow | boolean | Yes | True if it needs to be triggered manually by the user else false.  The default value is false. |

## nativeEmbedOptions

```TypeScript
nativeEmbedOptions(options?: EmbedOptions)
```

设置同层渲染相关配置，该属性仅在[enableNativeEmbedMode](arkts-webattribute-c.md#enableNativeEmbedMode)开启时生效，不支持动态修改。当属性没有显式调用时，默认为`{ supportDefaultIntrinsicSize: false}`。

**Since:** 16

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EmbedOptions | No | 同层渲染相关配置。 传入undefined或null时为`{supportDefaultIntrinsicSize: false}`。 |

## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt)
```

调用以设置嵌套滚动选项。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NestedScrollOptions \| NestedScrollOptionsExt | Yes | 嵌套滚动  选项。[since 14] |

## onActivateContent

```TypeScript
onActivateContent(callback: Callback<void>)
```

设置绕过vsync的条件。 如果条件匹配，则绘制不依赖于Vsync信号，直接绘制

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | The triggered function when the web page is active for window.open called by other web component. |

## onAdsBlocked

```TypeScript
onAdsBlocked(callback: OnAdsBlockedCallback)
```

Called when received Ads blocked results. If blocked results exist at the end of page loading, the first call will be triggered. To avoid performance issues, subsequent results will be periodically reported through this api.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsBlockedCallback | Yes | The callback for OnAdsBlockedCallback. |

## onAlert

```TypeScript
onAlert(callback: Callback<OnAlertEvent, boolean>)
```

Web 想要显示 JavaScript alert() 弹窗时触发。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnAlertEvent, boolean> | Yes | 网页中调用 alert() 显示警告弹窗时使用的回调函数。[since 8 - 11] |

## onAudioStateChanged

```TypeScript
onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>)
```

设置网页上的音频播放状态发生改变时的回调函数。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnAudioStateChangedEvent> | Yes | 网页上的音频播放状态发生改变时触发。在API 12之前，使用 { function } 作为参数类型。 |

## onBeforeUnload

```TypeScript
onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>)
```

Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnBeforeUnloadEvent, boolean> | Yes | The triggered function when the web page wants to confirm navigation from JavaScript  onbeforeunload. [since 8 - 11] |

## onCameraCaptureStateChange

```TypeScript
onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback)
```

通知用户当前网页的摄像头状态，摄像头有三个状态，无状态（None），捕获中（Active），暂停中（Paused）。使用callback异步回调。 可以通过startCamera，stopCamera，closeCamera这三个接口来切换摄像头的状态。这三个接口分别对应开启，暂停，停止摄像头功能。示例使用场景详见 [startCamera]./../../../@ohos.web.webview:webview.WebviewController.startCamera。 > **说明：** > > 当前网页正在使用摄像头时，返回在捕获中状态。 > > 当前网页暂停使用摄像头时，返回暂停中状态。 > > 当前网页完全没有使用摄像头时，返回无状态。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCameraCaptureStateChangeCallback | Yes | 回调函数。当摄像头捕获状态改变时触发该回调，返回原来的状态和改变后的状态。 |

## onClientAuthenticationRequest

```TypeScript
onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>)
```

通知用户收到SSL客户端证书请求事件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnClientAuthenticationEvent> | Yes | The triggered callback when needs ssl client certificate from the user. [since 9 - 11] |

## onConfirm

```TypeScript
onConfirm(callback: Callback<OnConfirmEvent, boolean>)
```

网页需要显示 JavaScript confirm() 确认弹窗时触发。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnConfirmEvent, boolean> | Yes | 网页调用 confirm() 时触发的回调函数。[since 8 - 11] |

## onConsole

```TypeScript
onConsole(callback: Callback<OnConsoleEvent, boolean>)
```

通知宿主应用JavaScript console消息。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnConsoleEvent, boolean> | Yes | The triggered function when the web page receives a JavaScript console  message. [since 8 - 11] |

## onContextMenuHide

```TypeScript
onContextMenuHide(callback: OnContextMenuHideCallback)
```

调用时触发，允许自定义隐藏上下文菜单。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnContextMenuHideCallback | Yes | 调用以允许自定义隐藏上下文菜单时触发的函数。 |

## onContextMenuShow

```TypeScript
onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>)
```

调用时触发，允许自定义显示上下文菜单。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnContextMenuShowEvent, boolean> | Yes | 调用以允许自定义显示上下文菜单时触发的回调。[9 - 11 版本起支持] |

## onControllerAttached

```TypeScript
onControllerAttached(callback: () => void)
```

Triggered when The controller is bound to the web component, this controller must be a WebviewController. This callback can not use the interface about manipulating web pages.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | The triggered callback when web controller initialization success. |

## onDataResubmitted

```TypeScript
onDataResubmitted(callback: Callback<OnDataResubmittedEvent>)
```

Triggered when the form could be resubmitted.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnDataResubmittedEvent> | Yes | The triggered callback to decision whether resend form data or not. |

## onDetectedBlankScreen

```TypeScript
onDetectedBlankScreen(callback: OnDetectBlankScreenCallback)
```

Web组件检测到白屏时触发此回调。 > **说明：** > > - 需配合[blankScreenDetectionConfig](arkts-webattribute-c.md#blankScreenDetectionConfig)使用。否则，默认关闭白屏检测功能，不会返回检测到白屏时的回 > 调函数。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnDetectBlankScreenCallback | Yes | Web组件检测到白屏时的回调函数。 |

## onDownloadStart

```TypeScript
onDownloadStart(callback: Callback<OnDownloadStartEvent>)
```

通知主应用开始下载一个文件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnDownloadStartEvent> | Yes | The triggered function when starting to download. [since 8 - 11] |

## onErrorReceive

```TypeScript
onErrorReceive(callback: Callback<OnErrorReceiveEvent>)
```

网页加载遇到错误时触发该回调。主资源与子资源出错都会回调该接口，可以通过[isMainFrame](arkts-webresourcerequest-c.md#isMainFrame)来判断是否是主资源报错。出于性能考虑，建议此回调 中尽量执行简单逻辑。在无网络的情况下，触发此回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnErrorReceiveEvent> | Yes | The triggered function when the web page receives a web resource loading  error. [since 8 - 11] |

## onFaviconReceived

```TypeScript
onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>)
```

设置应用为当前页面接收到新的favicon时的回调函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnFaviconReceivedEvent> | Yes | The triggered callback when the application receive a new favicon for the  current web page. [since 9 - 11] |

## onFileSelectorShow

```TypeScript
onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void)
```

Triggered when the file selector shows.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.WebAttribute#onShowFileSelector

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { callback: Function, fileSelector: object }) => void | Yes | The triggered when the file selector shows. |

## onFirstContentfulPaint

```TypeScript
onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>)
```

设置网页首次内容绘制回调函数。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnFirstContentfulPaintEvent> | Yes | 网页首次内容绘制回调函数。 [since 12] |

## onFirstMeaningfulPaint

```TypeScript
onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback)
```

设置网页绘制页面主要内容回调函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFirstMeaningfulPaintCallback | Yes | 网页绘制页面主要内容度量信息的回调。 |

## onFirstScreenPaint

```TypeScript
onFirstScreenPaint(callback: OnFirstScreenPaintCallback)
```

网页首屏渲染结束时触发此回调，使用callback异步回调。 > **说明：** > > - 首屏渲染（First Screen Paint，FSP），记录了视口内图片、文本或视频元素完成渲染所需的时间，是衡量页面首次加载到渲染完成的核心性能指标。当一定时间内视口内没有可见元素超出历史绘制区域时，将视口内元素绘制的 > 历史最大的时刻视为首屏渲染完成时刻。 > > - 接口在首屏绘制完成后，需要等待一定时间没有新的渲染信息需要处理后，才会上报回调。接口回调时刻和首屏渲染完成时刻不同。 > > - 渲染未完成时，若用户输入或滚动页面，将会立即上报回调函数。 > > - 该接口适用于在即时加载场景下获取首屏渲染时间，在预加载或预渲染场景下使用无法达到预期。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFirstScreenPaintCallback | Yes | 回调函数，设置Web组件的检测到首屏渲染。 |

## onFullScreenEnter

```TypeScript
onFullScreenEnter(callback: OnFullScreenEnterCallback)
```

通知开发者Web组件进入全屏模式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFullScreenEnterCallback | Yes | Web组件进入全屏时的回调信息。在API 12之前，使用 { function } 作为参数类型。 |

## onFullScreenExit

```TypeScript
onFullScreenExit(callback: () => void)
```

通知开发者Web组件退出全屏模式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | 退出全屏模式时的回调函数。 |

## onGeolocationHide

```TypeScript
onGeolocationHide(callback: () => void)
```

Triggered when requesting to hide the geolocation.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | Callback invoked when the request for obtaining geolocation information has been  canceled. |

## onGeolocationShow

```TypeScript
onGeolocationShow(callback: Callback<OnGeolocationShowEvent>)
```

Triggered when requesting to show the geolocation permission.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnGeolocationShowEvent> | Yes | Callback invoked when a request to obtain the geolocation  information is received. [since 12] |

## onHttpAuthRequest

```TypeScript
onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>)
```

通知收到http auth认证请求。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnHttpAuthRequestEvent, boolean> | Yes | The triggered when the browser needs credentials from the user. [since 9 - 11] |

## onHttpErrorReceive

```TypeScript
onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>)
```

网页加载资源遇到的HTTP错误（响应码>=400）时触发该回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnHttpErrorReceiveEvent> | Yes | The triggered function when the web page receives a web resource loading HTTP  error. [since 8 - 11] |

## onInputmethodAttached

```TypeScript
onInputmethodAttached(callback: OnInputmethodAttachedCallback)
```

当inputmethod被附加到IMF时，会触发回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnInputmethodAttachedCallback | Yes | 当inputmethod被附加到IMF时触发的回调。 |

## onIntelligentTrackingPreventionResult

```TypeScript
onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback)
```

Called when tracker's cookie is prevented.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnIntelligentTrackingPreventionCallback | Yes | Callback triggered when tracker's cookie is prevented. |

## onInterceptKeyboardAttach

```TypeScript
onInterceptKeyboardAttach(callback: WebKeyboardCallback)
```

When the soft keyboard is about to be displayed on the current Web, it gives the application the opportunity to intercept the system keyboard attachment. The application can return the keyboard options to control the web to pull up the soft keyboard of the different type.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | WebKeyboardCallback | Yes | The callback for onInterceptKeyboardAttach. |

## onInterceptKeyEvent

```TypeScript
onInterceptKeyEvent(callback: (event: KeyEvent) => boolean)
```

Key events notify the application before the WebView consumes them.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: KeyEvent) => boolean | Yes | Key event info. |

## onInterceptRequest

```TypeScript
onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>)
```

当Web组件加载URL之前触发该回调，用于拦截URL并返回响应数据。`onInterceptRequest`可拦截所有跳转请求并返回响应数据，但无法访问POST请求体（Body）内容。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnInterceptRequestEvent, WebResourceResponse> | Yes | The triggered callback when the resources loading is intercepted. [since 9 - 11] |

## onLargestContentfulPaint

```TypeScript
onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback)
```

设置网页绘制页面最大内容回调函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnLargestContentfulPaintCallback | Yes | 网页绘制页面最大内容度量信息的回调。 |

## onlineImageAccess

```TypeScript
onlineImageAccess(onlineImageAccess: boolean)
```

设置是否允许从网络加载图片资源（通过HTTP和HTTPS访问的资源）。当属性没有显式调用时，默认允许从网络加载图片资源。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onlineImageAccess | boolean | Yes | 设置是否允许从网络加载图片资源。 true表示设置允许从网络加载图片资源，false表示设置不允许从网络加载图片资源。 传入  undefined或null时为false。 |

## onLoadFinished

```TypeScript
onLoadFinished(callback: Callback<OnLoadFinishedEvent>)
```

通知宿主应用程序页面已加载完成。此方法仅为主框架调用。 与 onPageEnd 不同，fragment导航也会触发 onLoadFinished

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadFinishedEvent> | Yes | 网页加载结束时触发的函数。 |

## onLoadIntercept

```TypeScript
onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>)
```

当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadInterceptEvent, boolean> | Yes | The triggered callback when the navigation is intercepted. [since 10 - 11] |

## onLoadStarted

```TypeScript
onLoadStarted(callback: Callback<OnLoadStartedEvent>)
```

在页面加载开始时触发。此方法每次主框架加载时调用一次。 嵌入框架的更改，例如点击目标为 iframe 的链接和片段导航（导航到 #fragment_id） 不会触发此回调。 与 onPageBegin 不同，onLoadStarted 仅在页面完全加载之前自动重定向时触发一次。 OnPageBegin 每次导航时都会触发。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadStartedEvent> | Yes | 网页加载开始时触发的函数。 |

## onMicrophoneCaptureStateChange

```TypeScript
onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback)
```

通知用户当前网页中麦克风状态，麦克风有三个状态，未工作（None），捕获中（Active），暂停中（Paused）。使用callback异步回调。 可以通过resumeMicrophone，pauseMicrophone，stopMicrophone这三个接口来切换麦克风的状态。这三个接口功能分别对应解除暂停，暂停，停止麦克风。示例使用场景详见 [网页中麦克风的使用](docroot://reference/apis-arkweb/arkts-apis-webview-WebviewController.md#resumemicrophone23)。 > **说明：** > > 当前网页正在使用麦克风时，返回捕获中状态；当前网页暂停使用麦克风时，返回暂停中状态；当前网页完全没有使用麦克风时，返回未工作状态。 > > 当前麦克风处于捕获中状态时，设置暂停使用，当前麦克风变为暂停中状态。可通过ArkWeb设置麦克风开始使用状态进行恢复捕捉。 > > 当前麦克风处于捕获中状态时，设置停止使用，当前麦克风停止捕捉，麦克风变为未工作状态。除非重新前端开始捕捉，否则无法恢复。 > > 当前麦克风处于暂停中状态时，设置开始使用，当前麦克风继续捕捉，变为捕获中状态。 > > 当前麦克风处于暂停中状态时，设置停止使用，当前麦克风停止捕捉，变为未工作状态。除非重新前端开始捕捉，否则无法恢复。 > > 当前麦克风处于未工作状态时，设置开始使用以及暂停使用，麦克风状态均不发生变化。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnMicrophoneCaptureStateChangeCallback | Yes | 回调函数。当麦克风捕获状态改变时触发该回调，返回原来的状态和改变后的状态。 |

## onNativeEmbedGestureEvent

```TypeScript
onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void)
```

当手指触摸到同层标签时触发该回调。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: NativeEmbedTouchInfo) => void | Yes | 手指触摸到同层标签时触发该回调。 |

## onNativeEmbedLifecycleChange

```TypeScript
onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void)
```

当同层标签生命周期变化时触发该回调。

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: NativeEmbedDataInfo) => void | Yes | 同层标签生命周期变化时触发该回调。 |

## onNativeEmbedMouseEvent

```TypeScript
onNativeEmbedMouseEvent(callback: MouseInfoCallback)
```

在同层标签上执行以下行为时触发该回调： - 使用鼠标左键、中键、右键进行点击或长按。 - 使用触摸板进行对应鼠标左键、中键、右键点击长按的操作。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MouseInfoCallback | Yes | 当鼠标/触摸板点击到同层标签时触发该回调。 |

## onNativeEmbedObjectParamChange

```TypeScript
onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback)
```

当同层渲染object标签内嵌param元素变化时触发此回调。

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNativeEmbedObjectParamChangeCallback | Yes | 增加、修改或删除同层渲染object标签内嵌param元素时触发此回调。 |

## onNativeEmbedVisibilityChange

```TypeScript
onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback)
```

当网页中同层标签（例如<embed\>标签或<object\>标签）在视口内的可见性发生变化时，将触发该回调。同层标签默认不可见，若在页面首次加载时已可见，则会上报；若不可见，则不会上报。同层标签全部不可见才视为不可见，部分可见或 全部可见则视为可见。若要获取因同层标签CSS属性（包括visibility、display以及尺寸变化）导致的可见状态变化，需配置 [nativeEmbedOptions](arkts-webattribute-c.md#nativeEmbedOptions)，并将[EmbedOptions](arkts-embedoptions-i.md#EmbedOptions)中的 supportCssDisplayChange参数设为true。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNativeEmbedVisibilityChangeCallback | Yes | 同层标签可见性变化时触发该回调。 |

## onNavigationEntryCommitted

```TypeScript
onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback)
```

Called when the load committed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNavigationEntryCommittedCallback | Yes | Function Triggered when a load committed. |

## onOverrideErrorPage

```TypeScript
onOverrideErrorPage(callback: OnOverrideErrorPageCallback)
```

页面文档资源发生错误的时候触发，只有主frame会触发

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnOverrideErrorPageCallback | Yes | The triggered function when the  web page's document resource error. |

## onOverrideUrlLoading

```TypeScript
onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback)
```

When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control. This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnOverrideUrlLoadingCallback | Yes | The callback for onOverrideUrlLoading. |

## onOverScroll

```TypeScript
onOverScroll(callback: Callback<OnOverScrollEvent>)
```

过度滚动时触发。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnOverScrollEvent> | Yes | 发生过度滚动时触发的函数。[since 10 - 11] |

## onPageBegin

```TypeScript
onPageBegin(callback: Callback<OnPageBeginEvent>)
```

Called when the web page starts to be loaded. This API is called only for the main frame, and not for the iframe or frameset content.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageBeginEvent> | Yes | The triggered function at the begin of web page loading. |

## onPageEnd

```TypeScript
onPageEnd(callback: Callback<OnPageEndEvent>)
```

网页加载完成时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageEndEvent> | Yes | The triggered function at the end of web page loading. [since 8 - 11] |

## onPageVisible

```TypeScript
onPageVisible(callback: Callback<OnPageVisibleEvent>)
```

Triggered when previous page will no longer be drawn and next page begin to draw.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageVisibleEvent> | Yes | The triggered callback when previous page will no longer be drawn and next  page begin to draw. |

## onPdfLoadEvent

```TypeScript
onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>)
```

通知用户PDF页面加载状态，包括成功或失败。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPdfLoadEvent> | Yes | 当PDF加载成功或失败时，会触发回调，通知用户PDF页面加载状态。 |

## onPdfScrollAtBottom

```TypeScript
onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>)
```

通知用户PDF页面已滚动到底。

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPdfScrollEvent> | Yes | 当PDF滚动到垂直方向底部时，会触发回调，通知用户PDF页面已滚动到底。 |

## onPermissionRequest

```TypeScript
onPermissionRequest(callback: Callback<OnPermissionRequestEvent>)
```

Triggered when the host application that web content from the specified origin is attempting to access the resources.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPermissionRequestEvent> | Yes | The triggered callback when the host application that web content from the specified origin is  attempting to access the resources. |

## onProgressChange

```TypeScript
onProgressChange(callback: Callback<OnProgressChangeEvent>)
```

网页加载进度变化时触发该回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnProgressChangeEvent> | Yes | The triggered function when the page loading progress changes. [since 8 - 11] |

## onPrompt

```TypeScript
onPrompt(callback: Callback<OnPromptEvent, boolean>)
```

网页需要显示 JavaScript prompt() 输入弹窗时触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPromptEvent, boolean> | Yes | 网页调用 prompt() 时使用的回调函数。[since 9 - 11] |

## onRefreshAccessedHistory

```TypeScript
onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>)
```

Triggered when the Web page refreshes accessed history.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnRefreshAccessedHistoryEvent> | Yes | The triggered callback when the Web page refreshes accessed history. [since 8 - 11] |

## onRenderExited

```TypeScript
onRenderExited(callback: Callback<OnRenderExitedEvent>)
```

Triggered when the render process exits.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnRenderExitedEvent> | Yes | The triggered when the render process exits. |

## onRenderExited

```TypeScript
onRenderExited(callback: (event?: { detail: object }) => boolean)
```

Triggered when the render process exits.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.WebAttribute#onRenderExited

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { detail: object }) => boolean | Yes | The triggered when the render process exits. |

## onRenderProcessNotResponding

```TypeScript
onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback)
```

Triggered when render process not responding.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnRenderProcessNotRespondingCallback | Yes | The triggered function when render process not responding. |

## onRenderProcessResponding

```TypeScript
onRenderProcessResponding(callback: OnRenderProcessRespondingCallback)
```

Triggered when the unresponsive render process becomes responsive.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnRenderProcessRespondingCallback | Yes | The triggered function when the unresponsive render process becomes responsive. |

## onRequestSelected

```TypeScript
onRequestSelected(callback: () => void)
```

Web 获取焦点时触发。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | Web 获取焦点时触发的函数。 |

## onResourceLoad

```TypeScript
onResourceLoad(callback: Callback<OnResourceLoadEvent>)
```

通知Web组件所加载的资源文件url信息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnResourceLoadEvent> | Yes | The triggered when the url loading. [since 9 - 11] |

## onSafeBrowsingCheckFinish

```TypeScript
onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback)
```

Triggered when the website security risk check is completed. <p><strong>API Note</strong>:<br> Unlike onSafeBrowsingCheckResult, which is only triggered when a URL has security risks, onSafeBrowsingCheckFinish is also triggered when the website security risk check is not performed or no risks are found.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnSafeBrowsingCheckResultCallback | Yes | Triggered when received website security risk check result. |

## onSafeBrowsingCheckResult

```TypeScript
onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback)
```

Called when received website security risk check result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnSafeBrowsingCheckResultCallback | Yes | Function triggered when received website security risk check result. |

## onScaleChange

```TypeScript
onScaleChange(callback: Callback<OnScaleChangeEvent>)
```

WebView 缩放比例变化时触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScaleChangeEvent> | Yes | 缩放比例变化时触发的回调。[9 - 11 版本起支持] |

## onScreenCaptureRequest

```TypeScript
onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>)
```

Triggered when the host application that web content from the specified origin is requesting to capture screen.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScreenCaptureRequestEvent> | Yes | The triggered callback when the host application that web content from the specified origin is  requesting to capture screen. |

## onScroll

```TypeScript
onScroll(callback: Callback<OnScrollEvent>)
```

滚动条滑动到指定位置时触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScrollEvent> | Yes | 网页滚动到指定位置时触发的函数。[since 9 - 11] |

## onSearchResultReceive

```TypeScript
onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>)
```

Notify search result to host application through onSearchResultReceive.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnSearchResultReceiveEvent> | Yes | Function Triggered when the host application call searchAllAsync.  or searchNext api on WebController and the request is valid. |

## onShowFileSelector

```TypeScript
onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>)
```

文件选择器显示时触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnShowFileSelectorEvent, boolean> | Yes | 文件选择器显示时触发的回调函数。[since 9 - 11] |

## onSslErrorEvent

```TypeScript
onSslErrorEvent(callback: OnSslErrorEventCallback)
```

通知用户加载资源（主资源+子资源）时发生SSL错误，如果只想处理主资源的SSL错误，请用 isMainFrame 字段进行区分。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnSslErrorEventCallback | Yes | The triggered callback when the Web page receives an ssl Error. |

## onSslErrorEventReceive

```TypeScript
onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>)
```

通知用户加载资源时发生SSL错误，只支持主资源。 如果需要支持子资源，请使用 OnSslErrorEvent 接口。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnSslErrorEventReceiveEvent> | Yes | The triggered callback when the Web page receives an ssl Error. [since 9 - 11] |

## onSslErrorReceive

```TypeScript
onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void)
```

Triggered when the Web page receives an ssl Error.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.WebAttribute#onSslErrorEventReceive

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { handler: Function, error: object }) => void | Yes | The triggered callback when the Web page receives an ssl Error. |

## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: TextSelectionChangeCallback)
```

文本选择发生变化时调用。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TextSelectionChangeCallback | Yes | 文本选择变化时的回调函数。 |

## onTitleReceive

```TypeScript
onTitleReceive(callback: Callback<OnTitleReceiveEvent>)
```

当页面文档标题`<title>`元素发生变更时，触发回调。若当前页面未显示设置标题，ArkWeb将在加载完成前基于页面的URL生成标题并返回给应用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnTitleReceiveEvent> | Yes | The triggered function when the title of the main application document  changes. [since 8 - 11] |

## onTouchIconUrlReceived

```TypeScript
onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>)
```

设置接收到apple-touch-icon url地址时的回调函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnTouchIconUrlReceivedEvent> | Yes | The triggered callback when the application receive an new url of an  apple-touch-icon. [since 9 - 11] |

## onUrlLoadIntercept

```TypeScript
onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean)
```

Triggered when the URL loading is intercepted.

**Since:** 8

**Deprecated since:** 10

**Substitute:** ohos.web.WebAttribute#onLoadIntercept

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { data: string \| WebResourceRequest }) => boolean | Yes | The triggered callback when the URL loading is intercepted. |

## onVerifyPin

```TypeScript
onVerifyPin(callback: OnVerifyPinCallback)
```

Triggered when the Web page needs verify pin from the user.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnVerifyPinCallback | Yes | The triggered callback when needs verify pin from the user. |

## onViewportFitChanged

```TypeScript
onViewportFitChanged(callback: OnViewportFitChangedCallback)
```

网页meta中viewport-fit配置项更改时触发该回调，应用可在此回调中自适应布局视口。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnViewportFitChangedCallback | Yes | 网页meta中viewport-fit配置项更改时触发的回调。 |

## onWindowExit

```TypeScript
onWindowExit(callback: () => void)
```

Triggered when web page requires the user to close a window.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | The triggered callback when web page requires the user to close a window. |

## onWindowNew

```TypeScript
onWindowNew(callback: Callback<OnWindowNewEvent>)
```

Triggered when web page requires the user to create a window.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnWindowNewEvent> | Yes | The triggered callback when web page requires the user to create a window. |

## onWindowNewExt

```TypeScript
onWindowNewExt(callback: Callback<OnWindowNewExtEvent>)
```

Triggered when web page requires to create a new window. If the {@link setWebController} interface is not called, the render process will be blocked. If no new window is created, it is set to null when calling the {@link setWebController} interface, informing the Web that no new window is created. New windows must not be placed to directly cover the original Web component. Additionally, their URLs?specifically the content shown in the address bar?should follow the same display format as the main page, ensuring clarity for users and avoiding confusion. In cases where reliable visual management of URLs is not feasible, restricting the creation of new windows should be considered. It is also important to note that the origin of new window requests cannot be tracked with certainty; such requests may even be triggered by third-party iframes. For this reason, applications must implement default defensive measures like sandbox isolation and permission controls to safeguard security.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnWindowNewExtEvent> | Yes | The triggered callback when web page requires the user  to create a window. |

## optimizeParserBudget

```TypeScript
optimizeParserBudget(optimizeParserBudget: boolean)
```

设置是否开启分段解析HTML优化。当属性没有显式调用时，默认使用解析时间作为HTML分段解析的分段点。 ArkWeb内核在解析HTML文档结构时采取分段解析策略，旨在避免过多占用主线程资源，并使网页具有渐进式加载能力。ArkWeb内核默认使用解析时间作为分段点，当单次解析时间超过阈值时，会中断解析，随后进行布局和渲染操作。 开启优化后，ArkWeb内核将不仅检查解析时间是否超出限制，还会额外判断解析的Token（HTML文档的最小解析单位，例如`<div>`、`attr="xxx"`等）数量是否超过内核规定的阈值，并下调此阈值。当页面的FCP（ First Contentful Paint 首次内容绘制）触发时会恢复成默认的中断判断逻辑。这将使得网页在FCP到来之前的解析操作更频繁，从而提高首帧内容被提前解析完成并进入渲染阶段的可能性，同时有效缩减首帧渲染的工作量，最终实 现FCP时间提前。 由于页面的FCP触发时会恢复成默认分段解析逻辑，因此分段解析HTML优化仅对每个Web组件加载的首个页面生效。

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optimizeParserBudget | boolean | Yes | 设置开启分段解析HTML优化。 true表示使用解析个数代替解析时间作为HTML分段解析的分段点，并减少每段解析的个数上限。false表示使用  解析时间作为HTML分段解析的分段点。 传入undefined或null时为false。 |

## overScrollMode

```TypeScript
overScrollMode(mode: OverScrollMode)
```

设置网页的过度滚动模式

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | OverScrollMode | Yes | 过度滚动模式，可参考 {@link OverScrollMode}。  默认值为 OverScrollMode.NEVER。 |

## overviewModeAccess

```TypeScript
overviewModeAccess(overviewModeAccess: boolean)
```

设置是否使用概览模式加载网页，即缩小内容以适应屏幕宽度。当属性没有显式调用时，默认允许使用概览模式加载网页。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| overviewModeAccess | boolean | Yes | 设置是否使用概览模式加载网页。 true表示设置使用概览模式加载网页，false表示设置不使用概览模式加载网页。 传入undefined或  null时为false。 |

## password

```TypeScript
password(password: boolean)
```

设置网页是否允许保存密码。

**Since:** 8

**Deprecated since:** 10

**Substitute:** ohos.web.WebAttribute#enableAutofill

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| password | boolean | Yes | {@code true} 表示允许网页保存密码；{@code false} 表示不允许。 |

## pinchSmooth

```TypeScript
pinchSmooth(isEnabled: boolean)
```

设置网页是否开启捏合流畅模式。该属性没有显式调用时，默认不开启捏合流畅模式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | 网页是否开启捏合流畅模式。 true表示设置网页开启捏合流畅模式，false表示设置网页不开启捏合流畅模式。 传入undefined或null时为false  。 |

## registerNativeEmbedRule

```TypeScript
registerNativeEmbedRule(tag: string, type:string)
```

注册使用同层渲染的HTML标签名和类型。标签名仅支持使用<object\>和<embed\>。标签类型只能使用ASCII可显示字符。 若指定类型与W3C定义的<object\>或<embed\>标准类型重合，ArkWeb内核将其识别为非同层标签。 本接口同样受enableNativeEmbedMode接口控制，在未使能同层渲染时本接口无效。在不使用本接口的情况下，ArkWeb内核默认将"native/"前缀类型的<embed\>标签识别为同层标签。 具体使用详情请参考[同层渲染](docroot://web/web-same-layer.md#web页面中同层渲染输入框)指南。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tag | string | Yes | 标签名。 |
| type | string | Yes | 标签类型，内核使用前缀匹配此参数。 |

## rotateRenderEffect

```TypeScript
rotateRenderEffect(effect: WebRotateEffect)
```

设置Web组件旋转时，宽高动画过程中组件内容的填充方式。若未显式调用属性，默认保持动画终态的内容大小，内容始终与组件左上角对齐。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | WebRotateEffect | Yes | 设置Web组件旋转时，宽高动画过程中组件内容的填充方式。 |

## runJavaScriptOnDocumentEnd

```TypeScript
runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run after document has been parsed finished. > **说明：** > > - 网页文档根元素（HTML Element）创建后、但尚未加载任何其他内容之前注入脚本。 > > - 该脚本按照数组本身顺序执行。 > > - 不建议与[javaScriptOnDocumentStart](arkts-webattribute-c.md#javaScriptOnDocumentStart)同时使用。 > > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem> | Yes | The JavaScripts executed in array order. |

## runJavaScriptOnDocumentStart

```TypeScript
runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run just after document object has been created. > **说明：** > > - 网页文档根元素（HTML Element）创建后、但尚未加载任何其他内容之前注入脚本。 > > - 该脚本按照数组本身顺序执行。 > > - 不建议与[javaScriptOnDocumentStart](arkts-webattribute-c.md#javaScriptOnDocumentStart)同时使用。 > > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem> | Yes | The JavaScripts executed in array order. |

## runJavaScriptOnHeadEnd

```TypeScript
runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run after head element has been parsed finished. > **说明：** > > - 该脚本按照数组本身顺序执行。 > > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem> | Yes | The JavaScripts executed in array order. |

## scrollbarLayoutPolicy

```TypeScript
scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy)
```

设置滚动条布局策略。 控制滚动条在容器中的布局方式——要么遵循W3C标准，要么遵循系统默认值。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | ScrollbarLayoutPolicy | Yes | 要应用的布局策略。 |

## selectionMenuOptions

```TypeScript
selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>)
```

设置自定义文本菜单。

**Since:** 12

**Deprecated since:** 20

**Substitute:** ohos.web.WebAttribute#editMenuOptions

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| expandedMenuOptions | Array&lt;ExpandedMenuItemOptions> | Yes | 自定义文本菜单配置项。  菜单项数量、菜单内容尺寸、startIcon 图标尺寸  均与 ArkUI Menu 组件保持一致。 |

## tableData

```TypeScript
tableData(tableData: boolean)
```

设置网页是否保存表格数据。

**Since:** 8

**Deprecated since:** 10

**Substitute:** ohos.web.WebAttribute#enableAutofill

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tableData | boolean | Yes | {@code true} 表示允许网页保存表格数据；{@code false} 表示不允许。 |

## textAutosizing

```TypeScript
textAutosizing(textAutosizing: boolean)
```

设置Web组件是否开启文本字体大小自动调整。当属性没有显式调用时，Web组件默认开启文本字体大小自动调整。 文本字体大小自动调整生效后，对于字号过小的文本将自动加大字号至16px~32px，避免屏幕较小（默认视口宽度 < 980px）的设备因为缺少移动端适配出现字体过小的可读性问题。 > **说明：** > > - 文本字体大小自动调整生效需要满足的前置条件： > > - 设备形态为：Phone、Tablet、Wearable、TV。 > > - Web组件视口宽度 < 980px。 > > - 页面文本量大，页面文本的字号*字符数 ≥ 3920。 > > - 前端无metaViewport设置，或metaViewport设置中无"width"和"initial-scale"属性。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textAutosizing | boolean | Yes | 文本自动调整大小。 true表示文本自动调整大小，false表示文本不自动调整大小。 传入undefined或null时为true。 |

## textZoomAtio

```TypeScript
textZoomAtio(textZoomAtio: number)
```

设置页面的文本缩放百分比。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[textZoomRatio<sup>9+</sup>](arkts-webattribute-c.md#textZoomRatio)代替。

**Since:** 8

**Deprecated since:** 9

**Substitute:** WebAttribute.textZoomRatio

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textZoomAtio | number | Yes | 要设置的页面的文本缩放百分比。 取值范围为正整数。 默认值：100。 |

## textZoomRatio

```TypeScript
textZoomRatio(textZoomRatio: number)
```

设置页面的文本缩放百分比。当属性没有显式调用时，默认缩放百分比为100%。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textZoomRatio | number | Yes | 要设置的页面的文本缩放百分比。 取值为整数，范围为(0, 2147483647]。 |

## userAgent

```TypeScript
userAgent(userAgent: string)
```

Sets the Web's user agent.

**Since:** 8

**Deprecated since:** 10

**Substitute:** ohos.web.webview.webview.WebviewController#setCustomUserAgent

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The Web's user agent. |

## verticalScrollBarAccess

```TypeScript
verticalScrollBarAccess(verticalScrollBar: boolean)
```

设置是否绘制垂直滚动条。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| verticalScrollBar | boolean | Yes | 若需要绘制垂直滚动条则为 true。  默认值为 true。 |

## webCursiveFont

```TypeScript
webCursiveFont(family: string)
```

设置网页的cursive font字体库，用于渲染html前端使用cursive字体的元素。 当属性没有显式调用时，默认网页的cursive font字体库为cursive。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的cursive font字体库。 传入null或undefined时为cursive。 |

## webFantasyFont

```TypeScript
webFantasyFont(family: string)
```

设置网页的fantasy font字体库，用于渲染html前端使用fantasy字体的元素。 当属性没有显式调用时，默认网页的fantasy font字体库为fantasy。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的fantasy font字体库。 传入null或undefined时为fantasy。 |

## webFixedFont

```TypeScript
webFixedFont(family: string)
```

设置网页的fixed font字体库，用于渲染html前端使用monospace字体的元素。 当属性没有显式调用时，默认网页的fixed font字体库为monospace。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的fixed font字体库。 传入null或undefined时为monospace。 |

## webSansSerifFont

```TypeScript
webSansSerifFont(family: string)
```

设置网页的sans-serif font字体库，用于渲染html前端使用sans-serif字体的元素。 当属性没有显式调用时，默认网页的sans-serif font字体库为sans-serif。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的sans-serif font字体库。 传入null或undefined时为sans-serif。 |

## webSerifFont

```TypeScript
webSerifFont(family: string)
```

设置网页的serif font字体库，用于渲染html前端使用serif字体的元素。 当属性没有显式调用时，默认网页的serif font字体库为serif。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的serif font字体库。 传入null或undefined时为serif。 |

## webStandardFont

```TypeScript
webStandardFont(family: string)
```

设置网页的standard font字体库，用于渲染html前端未指定字体样式的元素。 当属性没有显式调用时，默认网页的standard font字体库为sans-serif。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | 设置网页的standard font字体库。 传入null或undefined时为sans-serif。 |

## wideViewModeAccess

```TypeScript
wideViewModeAccess(wideViewModeAccess: boolean)
```

设置Web是否支持html中meta标签的viewport属性。该接口为空接口。 > **说明：** > > 从API version 8开始支持，从API version 10开始废弃，建议使用[metaViewport<sup>12+</sup>](arkts-webattribute-c.md#metaViewport)替代。

**Since:** 8

**Deprecated since:** 10

**Substitute:** WebAttribute.metaViewport

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wideViewModeAccess | boolean | Yes | 设置Web是否支持html中meta标签的viewport属性。 true表示支持html中meta标签的viewport属性，false表示  不支持html中meta标签的viewport属性。 |

## zoomAccess

```TypeScript
zoomAccess(zoomAccess: boolean)
```

设置网页是否支持手势缩放。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomAccess | boolean | Yes | {@code true} 表示网页支持手势缩放；{@code false} 表示不支持。  默认值为 true。 |

## zoomControlAccess

```TypeScript
zoomControlAccess(zoomControlAccess: boolean)
```

设置网页是否支持使用 Ctrl 键进行缩放。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomControlAccess | boolean | Yes | {@code true} 表示网页支持使用 Ctrl 键缩放，  {@code false} 表示不支持。  默认值为 true。 |

