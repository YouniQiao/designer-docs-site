# Web properties/events

Defines the Web attribute functions.

**Inheritance/Implementation:** WebAttribute extends [CommonMethod<WebAttribute>](CommonMethod<WebAttribute>)

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## aiSessionOptions

```TypeScript
aiSessionOptions(aiSessions: Array<AISessionEvent>)
```

Custom AI session configuration for Web components.
Used to register multiple custom AI sessions.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aiSessions | Array&lt;AISessionEvent&gt; | Yes | Array of AISessionEvent objects. |

## allowWindowOpenMethod

```TypeScript
allowWindowOpenMethod(flag: boolean)
```

Whether the window can be open automatically through JavaScript.
<p><strong>API Note</strong>:<br>
This API takes effect only when {@link JavaScript} is enabled.
This API opens a new window when {@link multiWindowAccess} is enabled and opens a local window
when {@link multiWindowAccess} is disabled.
The default value of **flag** is subject to the settings of the **persist.web.allowWindowOpenMethod.enabled** system attribute.
If this attribute is not set, the default value of **flag** is **false**.
To check the settings of **persist.web.allowWindowOpenMethod.enabled**,
run the **hdc shell param get persist.web.allowWindowOpenMethod.enabled** command.
If the attribute value is 1, it means the system attribute is enabled;
If the attribute value is 0 or does not exist, it means that the system attribute has not been enabled.
you can run the **hdc shell param set persist.web.allowWindowOpenMethod.enabled 1** command to enable it.
</p>

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | boolean | Yes | If it is true, the window can be opened automatically through JavaScript. |

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
| backToTop | boolean | Yes | { |

## bindSelectionMenu

```TypeScript
bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
      options?: SelectionMenuOptionsExt)
```

Bind to the selection menu.

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementType | WebElementType | Yes | Indicates the type of selection menu. |
| content | CustomBuilder | Yes | Indicates the content of selection menu. |
| responseType | WebResponseType | Yes | Indicates response type of selection menu. |
| options | SelectionMenuOptionsExt | No | Indicates the options of selection menu. |

## blankScreenDetectionConfig

```TypeScript
blankScreenDetectionConfig(detectConfig: BlankScreenDetectionConfig)
```

Sets the blank screen detection configuration, such as whether to enable the detection, detection time, and
detection policy. When this attribute is not explicitly called, blank screen detection is disabled by default.
> **NOTE**
>
> - Based on the configuration of **detectConfig**,
> [onDetectedBlankScreen](web:WebAttribute.onDetectedBlankScreen) may be triggered when a blank screen or
> near-blank screen is detected after a web page is loaded.
>
> - The setting takes effect in the next navigation.
>
> - After the user interacts with the web page, the system does not check whether a blank screen occurs.
>
> - This feature is not supported when **layoutMode** is set to **WebLayoutMode.FIT_CONTENT**.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| detectConfig | BlankScreenDetectionConfig | Yes | Blank screen detection policy. |

## blockNetwork

```TypeScript
blockNetwork(block: boolean)
```

Whether web component can load resource from network.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| block | boolean | Yes | { |

## blurOnKeyboardHideMode

```TypeScript
blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode)
```

Sets whether to enable blur mode for the web element when soft keyboard is hidden.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlurOnKeyboardHideMode | Yes | Whether to enable blur mode of the webelement when soft keyboard is hidden. The default value is **BlurOnKeyboardHideMode.SILENT**. |

## bypassVsyncCondition

```TypeScript
bypassVsyncCondition(condition: WebBypassVsyncCondition)
```

Sets the rendering process to bypass vsync (vertical synchronization) scheduling and directly trigger drawing when
the **scrollBy** API is called to scroll the page. When this attribute is not explicitly called, vsync scheduling
is not skipped by default.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | WebBypassVsyncCondition | Yes | Condition for triggering the rendering process to bypass vsyncscheduling.<br> When **undefined** or **null** is passed in, the value is **NONE**. |

## cacheMode

```TypeScript
cacheMode(cacheMode: CacheMode)
```

Sets the mode of cache in Web.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cacheMode | CacheMode | Yes | The cache mode, which can be {@link CacheMode}. |

## copyOptions

```TypeScript
copyOptions(value: CopyOptions)
```

Called to set copy option

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CopyOptions | Yes | copy option.The default value is CopyOptions.LocalDevice. |

## darkMode

```TypeScript
darkMode(mode: WebDarkMode)
```

Sets dark mode for the web page. When this attribute is not explicitly called, dark mode is disabled by default.

When dark mode is enabled, the **Web** component enables the dark style defined in the media query
**prefers-color-scheme** of the web page. If it is not defined, the web page remains unchanged. To enable forcible
dark mode, use this API with [forceDarkAccess](WebAttribute.forceDarkAccess). For details about how to use
dark mode, see [Setting Dark Mode](../../../../web/web-set-dark-mode.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebDarkMode | Yes | Dark mode for the web page, which can be set to **Off**, **On**, or **Auto**.<br>When**null** or **undefined** is passed, the value is **WebDarkMode.Off**. |

## dataDetectorConfig

```TypeScript
dataDetectorConfig(config: TextDataDetectorConfig)
```

Data detector with config.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | TextDataDetectorConfig | Yes | The config of text data detector. |

## databaseAccess

```TypeScript
databaseAccess(databaseAccess: boolean)
```

Sets whether to enable the Web SQL Database storage API permission. If this permission is not explicitly called, it
is disabled by default.

> **NOTE**
>
> - After the ArkWeb kernel is upgraded to M132, the API's control over the Web SQL Database becomes invalid
> because the kernel discards Web SQL. For details about the ArkWeb kernel version, see
> [Constraints](../../../../web/web-component-overview.md#constraints).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| databaseAccess | boolean | Yes | Whether to enable Web SQL Database storage API permission.<br>**true** meansenabling the detection, and **false** means disabling it.<br>If **undefined** or **null** is passed in, thevalue is **false**. |

## defaultFixedFontSize

```TypeScript
defaultFixedFontSize(size: number)
```

Sets the default fixed font size for the web page. For HTML elements that use the **monospace** font and do not
specify **font-size**, the font size is rendered based on this value.

When this attribute is not explicitly called, the default fixed font size is **13**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Default fixed font size to set, in px.<br>Value range: [-2^31, 2^31-1]. In actualrendering, values greater than 72 px are handled as 72 px, and values less than 1 px are handled as 1 px.<br>&lt;br&gt;When **null** or **undefined** is passed in, the value is **13**. |

## defaultFontSize

```TypeScript
defaultFontSize(size: number)
```

Sets the default font size for the web page. For HTML elements that use non-monospace fonts and do not specify
**font-size**, the font size is rendered based on this value.

When this attribute is not explicitly called, the default font size of the web page is **16**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Default font size to set, in px.<br>Value range: [-2^31, 2^31-1]. In actual rendering,values greater than 72 px are handled as 72 px, and values less than 1 px are handled as 1 px.<br>When **null**or **undefined** is passed in, the value is **16**. |

## defaultTextEncodingFormat

```TypeScript
defaultTextEncodingFormat(textEncodingFormat: string)
```

Sets the default text encoding format for the web page. When this attribute is not explicitly called, the default
text encoding format of the web page is UTF-8.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textEncodingFormat | string | Yes | Default text encoding format.<br>When **null** or **undefined** is passed in, the value is **UTF-8**. |

## domStorageAccess

```TypeScript
domStorageAccess(domStorageAccess: boolean)
```

Sets whether to enable the DOM Storage API permission. If this attribute is not explicitly called, the DOM Storage
API permission is disabled by default.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domStorageAccess | boolean | Yes | Whether to enable the DOM Storage API.<br>The value **true** means to the DOMStorage API, and **false** means the opposite.<br>If **undefined** or **null** is passed in, the value is**false**. |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Set the custom text menu.

<p><strong>API Note</strong>:<br>
The onCreateMenu interface is used to modify, add, and delete menu options.If you want to hide the text menu,
you need to return an empty array.<br>
The onMenuItemClick interface allows you to define the callback function for menu options.This function is
triggered when a menu option is clicked, and it determines whether to execute the system's default callback
based on the return value. Returning true prevents the system callback from executing, while returning false
continues with the system callback.<br>
The editMenuOptions interface makes the selectionMenuOptions (deprecated) not work when used at the same time.
</p>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | EditMenuOptions | Yes | Customize text menu options.The number of menu items, as well as the content size and icon size of the menu,should be consistent with the ArkUI Menu component.The system-provided id enumeration values (TextMenuItemId) in the menu are onlysupported for CUT, COPY, PASTE, SELECT_ALL, TRANSLATE, SEARCH and some AI menu in the web.The textRange parameter in the onMenuItemClick function is meaningless in the web,and the input value is -1. |

## enableAutoFill

```TypeScript
enableAutoFill(value: boolean)
```

Sets whether enable auto fill or not.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Indicates the flag whether autofill is enabled.Default value is true.true: enable, false: disable. |

## enableDataDetector

```TypeScript
enableDataDetector(enable: boolean)
```

Enable data detector.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} means enable data detector in Web;{@code false} otherwise.The default value is false. |

## enableDefaultContextMenu

```TypeScript
enableDefaultContextMenu(enable: boolean)
```

Set whether to enable the default right-click context menu.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} means the Web enable the default right-click context menu,{@code false} otherwise.The default value is false. |

## enableDrag

```TypeScript
enableDrag(value: boolean)
```

Enables or disables dragging for this component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | {@code true} to enable dragging, {@code false} to disable it.The default value is true. |

## enableFollowSystemFontWeight

```TypeScript
enableFollowSystemFontWeight(follow: boolean)
```

Sets whether to follow the system font weight.

**Since:** 18

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| follow | boolean | Yes | The value true means to follow the system font weight, and false means the opposite. |

## enableFullscreenVideoOverlay

```TypeScript
enableFullscreenVideoOverlay(enabled: boolean)
```

Enables or disables fullscreen video overlay in the WebView component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | {@code true} to enable the fullscreen video overlay,{@code false} to disable it.The default value is false. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enabled: boolean)
```

Enable or disable haptic feedback.

<p><strong>API Note</strong>:<br>
Permissions need to be configured: ohos.permission.VIBRATE.
</p>

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Default value is true, set false to disable haptic feedback. |

## enableImageAnalyzer

```TypeScript
enableImageAnalyzer(enable: boolean)
```

Set up web component to support AI image recognition capability.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} means the Web AI image recognition capability,{@code false} otherwise.The default value is true. |

## enableMediaNetworkProxy

```TypeScript
enableMediaNetworkProxy(enabled: boolean)
```

Set whether to enable media network proxy for Web components.
When enabled, network requests for media resources are routed through the web components network stack.
This attribute takes effect for HLS media, other media formats are unaffected.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | {@code true} to enable media network proxy, {@code false} to disable it.The default value is false. |

## enableNativeEmbedMode

```TypeScript
enableNativeEmbedMode(enabled: boolean)
```

Sets whether to enable the same-layer rendering feature. When this method is not explicitly called, the same-layer
rendering feature is disabled by default.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the same-layer rendering feature.<br>The value **true** means toenable the same-layer rendering feature, and **false** means the opposite.<br>When **undefined** or **null** ispassed in, the value is **false**. |

## enableNativeMediaPlayer

```TypeScript
enableNativeMediaPlayer(config: NativeMediaPlayerConfig)
```

Sets whether to enable the
[application to take over web page media playback](../../../../web/app-takeovers-web-media.md). When this attribute
is not explicitly called, the web page media playback takeover feature is disabled by default.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | NativeMediaPlayerConfig | Yes | **enable**: whether to enable the feature.<br> **shouldOverlay**:whether the image of the video player taken over by the application will overlay the web page content, if thisfeature is enabled.<br>When **undefined** or **null** is passed in, the value is**{enable: false, shouldOverlay: false}**. |

## enableScrollDirectionalLock

```TypeScript
enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType)
```

Enables or disables directional lock for scroll gestures in the WebView component.

When directional lock is enabled, the scroll axis is locked based on the initial
swipe vector direction. This behavior helps prevent unintended scroll direction changes
during touch interactions, especially in nested scroll scenarios.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable directional lock.- `true`: Enables direction locking for the corresponding type category.- `false`: Disables direction locking for the corresponding type category. |
| type | ScrollDirectionalLockType | Yes | Specifies the scenario in which directional lock is applied. |

## enableSelectedDataDetector

```TypeScript
enableSelectedDataDetector(enable: boolean)
```

Sets whether to enable the AI menu feature for text selection menu. After the AI menu feature is enabled, the email
, phone number, website, date, and address in the selection can be identified, and the corresponding AI menu items
are displayed in the text selection menu. By default, the AI menu feature is enabled.

When the AI menu feature is enabled, the corresponding AI menu items can be displayed in the text selection menu
after text is selected on the web page, including **url** (opening a link), **email** (creating an email),
**phoneNumber** (calling), **address** (navigating to the address), and **dateTime** (creating an event) in
[TextMenuItemId](../../apis-arkui/arkts-components/arkts-arkui-textmenuitemid-c.md).

When the AI menu takes effect, the corresponding option can be displayed only when the selection contains a
complete AI entity. This menu item and the askAI menu item in [TextMenuItemId](../../apis-arkui/arkts-components/arkts-arkui-textmenuitemid-c.md) do
not appear at the same time.

For details about the application scenario, see
[Using Smart Text Data Detector](../../../../web/web-data-detector.md).

> **NOTE**
>
> If **enableSelectedDataDetector** is not set or is set to **true**, the **types** in
> [dataDetectorConfig](../../../../reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20)
> are used. If **dataDetectorConfig** is not set, all types are recognized by default.
>
> If **enableSelectedDataDetector** is set to false, the AI menu for text selection is not activated.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable web text recognition. The value **true** means to enable web textrecognition, and **false** means the opposite.<br>If **undefined** or **null** is passed in, the attribute isreset to the default value. |

## enableWebAVSession

```TypeScript
enableWebAVSession(enabled: boolean)
```

Sets whether to support an application to connect to media controller. If this attribute is not explicitly set,
the application can connect to media controller by default.

**Since:** 18

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to support an application to connect to media controller.<br>Thevalue **true** means to support an application to connect to media controller, and **false** means theopposite.<br>When **undefined** or **null** is passed in, the value is **true**. |

## fileAccess

```TypeScript
fileAccess(fileAccess: boolean)
```

Sets whether to enable access to the file system in the application. This setting does not affect the access to the
files specified through
[$rawfile(filepath/filename)](../../../../quick-start/resource-categories-and-access.md#accessing-resources). For API
version 11 and earlier versions, access to the file system in the application is enabled by default if this
attribute is not explicitly called. Since API version 12, access to the file system in the application is disabled
by default if this attribute is not explicitly called.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fileAccess | boolean | Yes | Whether to enable access to the file system in the application.<br>The value**true** means to enable access to the file system in the application, and **false** means the opposite.<br>When **fileAccess** is set to **false**, only the resources in the read-only resource directory**\/data/storage/el1/bundle/entry/resources/resfile** can be accessed using the file protocol, regardless of thevalue of **fileAccess**.<br>For API version 11 and earlier versions, if **undefined** or **null** is passed in,the value is **true**. Since API version 12, if **undefined** or **null** is passed in, the value is **false**. |

## forceDarkAccess

```TypeScript
forceDarkAccess(access: boolean)
```

Sets whether to enable forcible dark mode for the web page. This API is applicable only when
[darkMode](WebAttribute.darkMode) is enabled. When this attribute is not explicitly called, forcible dark
mode is disabled for the web page by default.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| access | boolean | Yes | Whether to enable forcible dark mode for the web page.<br>The value **true** means toenable forcible dark mode for the web page, and **false** means the opposite.<br>When **null** or **undefined**is passed in, the value is **false**. |

## forceDisplayScrollBar

```TypeScript
forceDisplayScrollBar(enabled: boolean)
```

Set whether the scroll bar is permanent. In the resident state,
when the page size exceeds one page, the scroll bar appears and does not disappear.

Scroll bar resident is not supported in full expansion mode,
that is, when layoutMode is WebLayoutMode.FIT_CONTENT mode, the parameter enabled is false.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | { |

## forceEnableZoom

```TypeScript
forceEnableZoom(enable: boolean)
```

Set whether to comply with the zoom restrictions set by the<meta name="viewport">tag in the webpage.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | { |

## geolocationAccess

```TypeScript
geolocationAccess(geolocationAccess: boolean)
```

Set whether to enable geolocation access. By default, this feature is enabled.
For details, see Managing Location Permissions.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| geolocationAccess | boolean | Yes | Whether to enable geolocation access. {@code true} means the Weballows access to geographical locations; {@code false} means theWeb disallows access to geographical locations. The default value is true. |

## gestureFocusMode

```TypeScript
gestureFocusMode(mode: GestureFocusMode)
```

Set the gesture focus acquisition mode.
When users interact with the web using different gestures,
this determines whether and when focus is acquired based on the configured mode.
Default value: DEFAULT, where all gestures acquire focus on touch down.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | GestureFocusMode | Yes | The gesture focus mode, which can be {@link GestureFocusMode}.The default value is FocusMode.DEFAULT. |

## horizontalScrollBarAccess

```TypeScript
horizontalScrollBarAccess(horizontalScrollBar: boolean)
```

Set whether paint horizontal scroll bar.

<p><strong>API Note</strong>:<br>
After controlling the horizontal scrollbar's visibility through the @State variable, you need to call controller.refresh() to take effect.<br>
When frequently changing the @State variable dynamically, it is recommended to match the toggle variable with the Web component one-to-one.
</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| horizontalScrollBar | boolean | Yes | True if it needs to paint horizontal scroll bar. |

## imageAccess

```TypeScript
imageAccess(imageAccess: boolean)
```

Sets whether to enable automatic image loading. When this attribute is not explicitly called, automatic loading of
image resources is allowed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageAccess | boolean | Yes | Whether to enable automatic image loading.<br>The value **true** means to enableautomatic image loading, and **false** means the opposite.<br>If **undefined** or **null** is passed in, thevalue is **false**. |

## initialScale

```TypeScript
initialScale(percent: number)
```

Sets the initial scale for the Web.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| percent | number | Yes | the initial scale for the Web. |

## javaScriptAccess

```TypeScript
javaScriptAccess(javaScriptAccess: boolean)
```

Sets whether the Web allows JavaScript scripts to execute.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| javaScriptAccess | boolean | Yes | {@code true} means the Web can allows JavaScript scripts to execute;{@code false} otherwise.The default value is true. |

## javaScriptOnDocumentEnd

```TypeScript
javaScriptOnDocumentEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts script into the Web component. When the specified page or document has been loaded,
the script is executed on any page whose source matches scriptRules.

<p><strong>API NOTE</strong>:<br>
The script runs before any Javascript code of the page, when the DOM tree has been loaded and rendered.
The script is excuted in the lexicographic order, not the array order.
You are not advised to use this API together with runJavaScriptOnDocumentEnd.
<p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem&gt; | Yes | The array of the JavaScripts to be injected. |

## javaScriptOnDocumentStart

```TypeScript
javaScriptOnDocumentStart(scripts: Array<ScriptItem>)
```

Injects the JavaScripts script into the Web component.
When the specified page or document starts to be loaded, the script is executed on any page whose source matches
scriptRules.

<p><strong>API Note</strong>:<br>
The script runs before any JavaScript code of the page, when the DOM tree may not have been loaded or rendered.
The script is executed in the lexicographic order instead of array sequence.
if the array sequemce is required, you are advised to use the runJavaScriptOnDocumentStart interface.
You are not advised to use this API together with runJavaScriptOnDocumentStart.
</p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem&gt; | Yes | The array of the JavaScripts to be injected. |

## javaScriptProxy

```TypeScript
javaScriptProxy(javaScriptProxy: JavaScriptProxy)
```

Registers the supplied ArkTs object in javaScriptProxy into this Web component.
The object is registered into all frames of the web page, including all frames, using the specified name in
javaScriptProxy.
This allows the methods of the ArkTs object in javaScriptProxy to be accessed from JavaScript.

<p><strong>API Note</strong>:
<strong>Performance Note</strong>:
<p>For details about how to arkWeb rendering framework adaptation solution,
see [ArkWeb Rendering Framework Adaptation]
{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-arkweb_rendering_framework}
</p>

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| javaScriptProxy | JavaScriptProxy | Yes | The ArkTs object in javaScriptProxy will be registered into this Webcomponent,and the methods within the methodList of the injected ArkTs object declared in javaScriptProxy can be accessedby JavaScript.<br>**Since:** 12 |

## keyboardAppearance

```TypeScript
keyboardAppearance(mode: WebKeyboardAppearanceMode)
```

Set the WebKeyboardAppearanceMode to determine the immersive mode for the soft keyboard.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebKeyboardAppearanceMode | Yes | The WebKeyboardAppearanceMode of this web |

## keyboardAvoidMode

```TypeScript
keyboardAvoidMode(mode: WebKeyboardAvoidMode)
```

Sets the custom soft keyboard avoidance mode.
If the keyboard avoidance mode set in **UIContext** is [KeyboardAvoidMode.RESIZE]
{@link ./../../../@ohos.arkui.UIContext:KeyboardAvoidMode}, this API does not take effect.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebKeyboardAvoidMode | Yes | Web soft keyboard avoidance mode. Inthe nested scrolling scenario, the soft keyboard avoidance mode of the **Web** component is not recommended,including **RESIZE_VISUAL** and **RESIZE_CONTENT**. Default value: **WebKeyboardAvoidMode.RESIZE_CONTENT**. |

## layoutMode

```TypeScript
layoutMode(mode: WebLayoutMode)
```

Sets the web layout mode. When this attribute is not explicitly called, the web layout follows the system mode by
default. For details, see [Fitting In the Page Content Layout](../../../../web/web-fit-content.md).

> **NOTE**
>
> Currently, only two web layout modes are supported: **WebLayoutMode.NONE** and **WebLayoutMode.FIT_CONTENT**.
>
> The following restrictions apply with the usage of **WebLayoutMode.FIT_CONTENT**:
>
> - If the **Web** component is wider or longer than 7680 px, specify the **RenderMode.SYNC_RENDER** mode when
> creating the **Web** component; otherwise, the screen may be blank.
>
> - After the **Web** component is created, dynamic switching of the **layoutMode** is not supported.
>
> - When the **RenderMode.ASYNC_RENDER** mode is specified, the width and height of a **Web** component cannot
> exceed 7680 px.
>
> - Frequent changes to the page width and height will trigger a re-layout of the **Web** component, which can
> affect the user experience.
>
> - Waterfall web pages are not supported (pull down to the bottom to load more).
>
> - Width adaptation is not supported. Only height adaptation is supported.
>
> - Because the height is adaptive to the web page height, the component height cannot be changed by modifying the
> component height attribute.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WebLayoutMode | Yes | Web layout mode.<br>When **null** or **undefined** is passed in, the value is**WebLayoutMode.NONE**. |

## mediaOptions

```TypeScript
mediaOptions(options: WebMediaOptions)
```

Sets the web-based media playback policy, including the validity period for automatically resuming a paused web
audio, and whether the audio of multiple **Web** instances in an application is exclusive. When this attribute is
not explicitly set, the web audio cannot be automatically resumed after regaining the focus by default, and the
audio of multiple **Web** instances in an application is exclusive.

> **NOTE**
>
> - Audios in the same **Web** instance are considered as the same audio.
>
> - The media playback policy controls videos with an audio track.
>
> - You are advised to set [audioExclusive](arkts-arkweb-webmediaoptions-i.md) to the same value for all **Web**
> components.
>
> - Audio and video interruption takes effect within an application and between applications, and playback
> resumption takes effect only between applications.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | WebMediaOptions | Yes | Web-based media playback policy.<br>After the parameter settings are updated,the playback must be started again for the settings to take effect.<br>When **undefined** or **null** is passedin, **{resumeInterval: 0, audioExclusive: true}** is used. |

## mediaPlayGestureAccess

```TypeScript
mediaPlayGestureAccess(access: boolean)
```

Sets whether video playback must be started by user gestures. This API is not applicable to muted videos. When this
attribute is not explicitly set, users need to click the video to play it by default.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| access | boolean | Yes | Whether video playback must be started by user gestures.<br>The value **true**indicates that video playback must be started by user gestures, and **false** indicates the opposite.<br>If**undefined** or **null** is passed in, the value is **false**. |

## metaViewport

```TypeScript
metaViewport(enabled: boolean)
```

Sets whether the viewport property of the meta tag is enabled.

<p><strong>API Note</strong>:<br>
If the device is 2-in-1, the viewport property is not supported. This means that,
regardless of whether this parameter is set to true or false,
the viewport property will not be parsed and a default layout will be used.<br>
If the device is a tablet, the viewport-fit property of the meta tag is parsed regardless of
whether this parameter is set to true or false. When viewport-fit is set to cover,
the size of the safe area can be obtained through the CSS attribute.<br>
The viewport parameter of the meta tag on the frontend HTML page is enabled or
disabled based on whether User-Agent contains the Mobile field.
If a User-Agent does not contain the Mobile field, the viewport property in the meta tag is disabled by default.
In this case, you can explicitly set the metaViewport property to true to overwrite the disabled state.
</p>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the viewport property of the meta tag is enabled. |

## minFontSize

```TypeScript
minFontSize(size: number)
```

Sets the minimum font size for the web page. If the font size of HTML elements is smaller than the value set by
this API, the font size is rendered based on the value set by this API.

When no attribute is explicitly called, the default minimum font size of the web page is **8**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Minimum font size to set, in px.<br>Value range: [-2^31, 2^31-1]. In actual rendering,values greater than 72 px are handled as 72 px, and values less than 1 px are handled as 1 px.<br>When **null**or **undefined** is passed in, the value is **8**. |

## minLogicalFontSize

```TypeScript
minLogicalFontSize(size: number)
```

Sets the minimum logical font size for the web page.

For HTML elements whose font size is not specified:

1. If the font size of the element is smaller than the value set by this API, the font size is rendered based on the API value.
2. If **minLogicalFontSize** and **minFontSize** are both set, the larger value of the two will be used for elements whose font size is not specified.

When this attribute is not explicitly called, the default minimum logical font size of the web page is **8**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Minimum logical font size to set, in px.<br>Value range: [-2^31, 2^31-1]. In actualrendering, values greater than 72 px are handled as 72 px, and values less than 1 px are handled as 1 px.<br>When **null** or **undefined** is passed in, the value is **18**. |

## mixedMode

```TypeScript
mixedMode(mixedMode: MixedMode)
```

Sets the behavior when a secure origin attempts to load a resource from an insecure origin.
The default is MixedMode.None, meaning not allow a secure origin to load content from an insecure origin.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mixedMode | MixedMode | Yes | The mixed mode, which can be {@link MixedMode}. |

## multiWindowAccess

```TypeScript
multiWindowAccess(multiWindow: boolean)
```

Sets whether to enable the multi-window permission.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multiWindow | boolean | Yes | True if it needs to be triggered manually by the user else false. |

## nativeEmbedOptions

```TypeScript
nativeEmbedOptions(options?: EmbedOptions)
```

Sets the same-layer rendering configuration. This attribute takes effect only when
[enableNativeEmbedMode](WebAttribute.enableNativeEmbedMode) is enabled and cannot be dynamically modified. If
this attribute is not explicitly called, the default value **{supportDefaultIntrinsicSize: false}** is used.

**Since:** 16

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EmbedOptions | No | Configuration options of the same-layer rendering.<br>If **undefined** or**null** is passed in, the value **{supportDefaultIntrinsicSize: false}** is used. |

## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt)
```

Called to setting the nested scroll options.

<p><strong>API Note</strong>:<br>
You can set four directions: up, down, left, and right, or set nested scrolling modes for forward and backward directions
to achieve scrolling linkage with the parent component.<br>
When value is of type NestedScrollOptionsExt (four directions: up, down, left, and right), the default scrolling options
for scrollUp, scrollDown, scrollLeft, and scrollRight are NestedScrollMode.SELF_FIRST.<br>
When value is of type NestedScrollOptions (two directions: forward and backward), the default scrolling options for scrollForward
and scrollBackward are NestedScrollMode.SELF_FIRST.<br>
Supported nested scrolling containers: Grid, List, Scroll, Swiper, Tabs, WaterFlow, Refresh, bindSheet.<br>
Supported nested scrolling input events: gestures, mouse, and trackpad.<br>
In nested scrolling scenarios, since web scrolling to the edge will prioritize triggering the overscroll bounce effect,
it is recommended to set overScrollMode to OverScrollMode.NEVER to avoid affecting the user experience in this scenario.
</p>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NestedScrollOptions \| NestedScrollOptionsExt | Yes | options fornested scrolling.<br>**Since:** 14 |

## onActivateContent

```TypeScript
onActivateContent(callback: Callback<void>)
```

Triggered to check whether a bound **Web** instance exists based on the name when a web page triggers
**window.open(url, name)**. If the instance exists, it receives this callback to notify the application of displaying
it on the front end. If it does not exist, the application is notified to create a new **Web** instance through
[onWindowNew](../../../../reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9).

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; | Yes | Callback triggered on a new page after **window.open** is triggered on the |

## onAdsBlocked

```TypeScript
onAdsBlocked(callback: OnAdsBlockedCallback)
```

Called when received Ads blocked results.
If blocked results exist at the end of page loading, the first call will be triggered.
To avoid performance issues, subsequent results will be periodically reported through this api.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsBlockedCallback | Yes | The callback for OnAdsBlockedCallback. |

## onAlert

```TypeScript
onAlert(callback: Callback<OnAlertEvent, boolean>)
```

Triggered when alert() is invoked to display an alert dialog box on the web page.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnAlertEvent, boolean&gt; | Yes | Callback used when alert() is invoked to display an alert dialog box on the web |

## onAudioStateChanged

```TypeScript
onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>)
```

Triggered when the audio playback status on the web page changes.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnAudioStateChangedEvent&gt; | Yes | Callback invoked when the audio playback status on the webpage changes. Before API 12�� use { function } as param. |

## onBeforeUnload

```TypeScript
onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>)
```

Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnBeforeUnloadEvent, boolean&gt; | Yes | The triggered function when the web page wants to confirm navigation from JavaScript |

## onCameraCaptureStateChange

```TypeScript
onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback)
```

Triggered to notify the user of the camera state on the current web page, which can be **None**, **Active**, or
**Paused**. This API uses an asynchronous callback to return the result.

You can use the **startCamera**, **stopCamera**, and **closeCamera** APIs to enable, pause, and stop the camera
respectively. For details about how to use them, see
[startCamera](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#startcamera-1).

> **NOTE**
>
> **Active** is returned when the camera is being used on the current web page.
>
> **Paused** is returned when the camera is paused on the current web page.
>
> **None** is returned when the camera is not being used on the current web page.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCameraCaptureStateChangeCallback | Yes | Callback triggered when the camera capture state changes.It returns the original and new states. |

## onClientAuthenticationRequest

```TypeScript
onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>)
```

Triggered when the Web page needs ssl client certificate from the user.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnClientAuthenticationEvent&gt; | Yes | The triggered callback when needs ssl client certificate from the user. [since 9 - 11] |

## onConfirm

```TypeScript
onConfirm(callback: Callback<OnConfirmEvent, boolean>)
```

Triggered when confirm() is invoked by the web page.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnConfirmEvent, boolean&gt; | Yes | Callback triggered when confirm() is invoked by the web page. [since 8 - 11] |

## onConsole

```TypeScript
onConsole(callback: Callback<OnConsoleEvent, boolean>)
```

Triggered when the web page receives a JavaScript console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnConsoleEvent, boolean&gt; | Yes | The triggered function when the web page receives a JavaScript console |

## onContextMenuHide

```TypeScript
onContextMenuHide(callback: OnContextMenuHideCallback)
```

Triggered when called to allow custom hide of the context menu.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnContextMenuHideCallback | Yes | The triggered function when called to allow custom hide of the |

## onContextMenuShow

```TypeScript
onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>)
```

Triggered when called to allow custom display of the context menu.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnContextMenuShowEvent, boolean&gt; | Yes | The triggered callback when called to allow custom display of the context |

## onControllerAttached

```TypeScript
onControllerAttached(callback: () => void)
```

Triggered when the controller is successfully bound to the **Web** component. The controller must be
**WebviewController**. Do not call APIs related to the **Web** component before this callback event. Otherwise, a js-
error exception will be thrown.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | The triggered callback when web controller initialization success. |

## onDataResubmitted

```TypeScript
onDataResubmitted(callback: Callback<OnDataResubmittedEvent>)
```

Triggered when the form could be resubmitted.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnDataResubmittedEvent&gt; | Yes | The triggered callback to decision whether resend form data or not. [since 9 - 11] |

## onDetectedBlankScreen

```TypeScript
onDetectedBlankScreen(callback: OnDetectBlankScreenCallback)
```

Called when the **Web** component detects a blank screen.
> **NOTE**
>
> - This method must be used with [blankScreenDetectionConfig](web:WebAttribute.blankScreenDetectionConfig).
> Otherwise, the blank screen detection is disabled by default, and the callback is not returned when a blank
> screen is detected.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnDetectBlankScreenCallback | Yes | Callback triggered when the **Web** component detects a blankscreen. |

## onDownloadStart

```TypeScript
onDownloadStart(callback: Callback<OnDownloadStartEvent>)
```

Triggered when starting to download.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnDownloadStartEvent&gt; | Yes | The triggered function when starting to download. [since 8 - 11] |

## onErrorReceive

```TypeScript
onErrorReceive(callback: Callback<OnErrorReceiveEvent>)
```

Triggered when an error occurs during web page loading. The error may occur on the main resource or sub-resource.
You can use [isMainFrame](arkts-arkweb-webresourcerequest-c.md#ismainframe-1) to determine whether the error occurs on the
main resource. This API is called when there is no network connection.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnErrorReceiveEvent&gt; | Yes | The triggered function when the web page receives a web resource loading |

## onFaviconReceived

```TypeScript
onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>)
```

Triggered when the application receive a new favicon for the current web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnFaviconReceivedEvent&gt; | Yes | The triggered callback when the application receive a new favicon for the |

## onFileSelectorShow

```TypeScript
onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void)
```

Triggered when the file selector shows.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onShowFileSelector

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { callback: Function, fileSelector: object }) =&gt; void | Yes | The triggered when the file selector shows. |

## onFirstContentfulPaint

```TypeScript
onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>)
```

Triggered when the first content paint occurs on the web page.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnFirstContentfulPaintEvent&gt; | Yes | Callback invoked when the first content paint occurs onthe web page.<br>**Since:** 12 |

## onFirstMeaningfulPaint

```TypeScript
onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback)
```

Triggered when the first meaningful paint occurs on the web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFirstMeaningfulPaintCallback | Yes | Callback invoked when the First Meaningful Paint occurs on theweb page. |

## onFirstScreenPaint

```TypeScript
onFirstScreenPaint(callback: OnFirstScreenPaintCallback)
```

Triggered when the first screen of the web page has been painted.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFirstScreenPaintCallback | Yes | callback triggered toreport the info for the first screen painting of the current web page. |

## onFullScreenEnter

```TypeScript
onFullScreenEnter(callback: OnFullScreenEnterCallback)
```

Triggered when the **Web** component enters full screen mode.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFullScreenEnterCallback | Yes | Callback invoked when the **Web** component enters full screenmode. Before API 12�� use { function } as param. |

## onFullScreenExit

```TypeScript
onFullScreenExit(callback: () => void)
```

Triggered when the **Web** component exits full screen mode.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | Callback invoked when the component exits full screen mode. |

## onGeolocationHide

```TypeScript
onGeolocationHide(callback: () => void)
```

Called to notify the user that the request for obtaining the geolocation information received
when {@link onGeolocationShow} is called has been canceled.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | Callback invoked when the request for obtaining geolocation information has been |

## onGeolocationShow

```TypeScript
onGeolocationShow(callback: Callback<OnGeolocationShowEvent>)
```

Called when a request to obtain the geolocation information is received.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnGeolocationShowEvent&gt; | Yes | Callback invoked when a request to obtain the geolocationinformation is received.<br>**Since:** 12 |

## onHttpAuthRequest

```TypeScript
onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>)
```

Triggered when the browser needs credentials from the user.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnHttpAuthRequestEvent, boolean&gt; | Yes | The triggered when the browser needs credentials from the user. [since 9 - 11] |

## onHttpErrorReceive

```TypeScript
onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>)
```

Triggered when the web page receives a web resource loading HTTP error.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnHttpErrorReceiveEvent&gt; | Yes | The triggered function when the web page receives a web resource loading HTTP |

## onInputmethodAttached

```TypeScript
onInputmethodAttached(callback: OnInputmethodAttachedCallback)
```

The callback is triggered when the inputmethod is attached to the IMF.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnInputmethodAttachedCallback | Yes | The triggeredcallback when the inputmethod is attached to the IMF. |

## onIntelligentTrackingPreventionResult

```TypeScript
onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback)
```

Called when tracker's cookie is prevented.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnIntelligentTrackingPreventionCallback | Yes | Callback triggered when tracker's cookie isprevented. |

## onInterceptKeyEvent

```TypeScript
onInterceptKeyEvent(callback: (event: KeyEvent) => boolean)
```

Triggered when the key event is intercepted and before it is consumed by the webview.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: KeyEvent) =&gt; boolean | Yes | Key event info. |

## onInterceptKeyboardAttach

```TypeScript
onInterceptKeyboardAttach(callback: WebKeyboardCallback)
```

Triggered before any editable element (such as the **input** tag) on the web page invokes the soft keyboard. The
application can use this API to intercept the display of the system's soft keyboard and configure a custom soft
keyboard. (With this API, the application can determine whether to use the system's default soft keyboard, a system
soft keyboard with a custom Enter key, or a completely application-defined soft keyboard).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | WebKeyboardCallback | Yes | Callback invoked for intercepting the soft keyboard started by the web page. |

## onInterceptRequest

```TypeScript
onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>)
```

This API is used to intercept the resource loading and return the response data.

<p><strong>API Note</strong>:<br>
POST data cannot be retrieved when intercepting POST requests.
</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnInterceptRequestEvent, WebResourceResponse&gt; | Yes | The triggered callback when the resources loading is intercepted. [since 9 - 11] |

## onLargestContentfulPaint

```TypeScript
onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback)
```

Triggered when the largest content paint occurs on the web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnLargestContentfulPaintCallback | Yes | Callback invoked when the largest content paint occurs onthe web page. |

## onLoadFinished

```TypeScript
onLoadFinished(callback: Callback<OnLoadFinishedEvent>)
```

Notify the host application that a page has finished loading. This method is called only for main frame.

<p><strong>API Note</strong>:<br>
1. Fragment navigation also triggers onLoadFinished, but onPageEnd will not be triggered.
2. onLoadFinished is triggered only once if the mainframe is automatically redirected before the page is
completely loaded. onPageEnd is triggered every navigation on mainframe.
3. When the document of a pop-up window has been modified by JavaScript before it is loaded, it will simulate the
triggering of onLoadStarted with the URL set to empty because displaying the URL that is currently
loading may be unsafe. onPageBegin will not be simulated.
</p>

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadFinishedEvent&gt; | Yes | The triggered function at the end of web page loading. |

## onLoadIntercept

```TypeScript
onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>)
```

Triggered when the navigation is intercepted.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadInterceptEvent, boolean&gt; | Yes | The triggered callback when the navigation is intercepted. [since 10 - 11] |

## onLoadStarted

```TypeScript
onLoadStarted(callback: Callback<OnLoadStartedEvent>)
```

Triggered at the begin of web page loading. This method is called once for each main frame load. Embedded frame
changes, i.e. clicking a link whose target is an iframe and fragment navigations (navigations to #fragment_id)
will not trigger this callback.

<p><strong>API Note</strong>:<br>
When the document of a pop-up window has been modified by JavaScript before it is loaded, it will simulate the
triggering of onLoadStarted with the URL set to empty because displaying the URL that is currently loading maybe
unsafe. onPageBegin will not be simulated.
</p>

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnLoadStartedEvent&gt; | Yes | The triggered function at the begin of web page loading. |

## onMicrophoneCaptureStateChange

```TypeScript
onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback)
```

Triggered to notify the user of the microphone state on the current web page, which can be **None**, **Active**,
or **Paused**. This API uses an asynchronous callback to return the result.

You can use the **resumeMicrophone**, **pauseMicrophone**, and **stopMicrophone** APIs to resume, pause, and stop
the microphone. For details about how to use them, see
[resumeMicrophone](../../../../reference/apis-arkweb/arkts-apis-webview-WebviewController.md#resumemicrophone23).

> **NOTE**
>
> **Active** is returned when the current web page is using the microphone; **Paused** is returned when the
> current web page pauses using the microphone; **None** is returned when the current web page does not use the
> microphone.
>
> When the microphone is being used and the **pauseMicrophone** API is called, the microphone pauses capturing
> audio and **Paused** is returned. You can call the **resumeMicrophone** API using ArkWeb to resume the capture.
>
> When the microphone is being used and the **stopMicrophone** API is called, the microphone stops capturing audio
> and **None** is returned. Capture cannot be resumed unless the frontend capture is restarted.
>
> When the microphone is paused and the **resumeMicrophone** API is called, the microphone continues capturing
> audio and **Active** is returned.
>
> When the microphone is paused and the **stopMicrophone** API is called, the microphone stops capturing audio and
> **None** is returned. Capture cannot be resumed unless the frontend capture is restarted.
>
> When the microphone is in the **None** state and the **resumeMicrophone** or **pauseMicrophone** API is called,
> the microphone state remains unchanged.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnMicrophoneCaptureStateChangeCallback | Yes | Callback triggered when the microphone capture statechanges. It returns the original and new states. |

## onNativeEmbedGestureEvent

```TypeScript
onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void)
```

Triggered when a finger touches a same-layer tag.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: NativeEmbedTouchInfo) =&gt; void | Yes | Callback invoked when a finger touches a same-layer tag. |

## onNativeEmbedLifecycleChange

```TypeScript
onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void)
```

Triggered when the lifecycle of the same-layer tag changes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event: NativeEmbedDataInfo) =&gt; void | Yes | Callback invoked when the lifecycle of the same-layer tag changes. |

## onNativeEmbedMouseEvent

```TypeScript
onNativeEmbedMouseEvent(callback: MouseInfoCallback)
```

Triggered when the following operations are performed on the same-layer tag:

- Tapping or holding with the left, middle, or right mouse button.
- Tapping or holding the left, middle, or right mouse button using the touchpad.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | MouseInfoCallback | Yes | Callback triggered when a same-layer tag is clicked using the mouse ortouchpad. |

## onNativeEmbedObjectParamChange

```TypeScript
onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback)
```

Called when the **param** element embedded in the same-layer rendering tag **object** changes.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNativeEmbedObjectParamChangeCallback | Yes | Callback triggered when the **param** element embeddedin the same-layer rendering tag **object** is added, modified, or deleted. |

## onNativeEmbedVisibilityChange

```TypeScript
onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback)
```

Triggered when embed visibility changes.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNativeEmbedVisibilityChangeCallback | Yes | Callback triggered when embed visibility changes. |

## onNavigationEntryCommitted

```TypeScript
onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback)
```

Called when the load committed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnNavigationEntryCommittedCallback | Yes | Function Triggered when a load committed. |

## onOverScroll

```TypeScript
onOverScroll(callback: Callback<OnOverScrollEvent>)
```

Triggered when the overscroll occurs.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnOverScrollEvent&gt; | Yes | Function triggered when the overscroll occurs. [since 10 - 11] |

## onOverrideErrorPage

```TypeScript
onOverrideErrorPage(callback: OnOverrideErrorPageCallback)
```

Triggered when the web page's document resource error.

<p><strong>API Note</strong>:<br>
This only triggered for main frame.
</p>

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnOverrideErrorPageCallback | Yes | The triggered function when the |

## onOverrideUrlLoading

```TypeScript
onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback)
```

When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnOverrideUrlLoadingCallback | Yes | The callback for onOverrideUrlLoading. |

## onPageBegin

```TypeScript
onPageBegin(callback: Callback<OnPageBeginEvent>)
```

Called when the web page starts to be loaded.
This API is called only for the main frame, and not for the iframe or frameset content.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageBeginEvent&gt; | Yes | The triggered function at the begin of web page loading. [since 8 - 11] |

## onPageEnd

```TypeScript
onPageEnd(callback: Callback<OnPageEndEvent>)
```

Triggered at the end of web page loading.This callback is called only for the main frame content, and not
for the iframe or frameset content.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageEndEvent&gt; | Yes | The triggered function at the end of web page loading. [since 8 - 11] |

## onPageVisible

```TypeScript
onPageVisible(callback: Callback<OnPageVisibleEvent>)
```

Triggered when the old page is not displayed and the new page is about to be visible.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPageVisibleEvent&gt; | Yes | Callback invoked when the old |

## onPdfLoadEvent

```TypeScript
onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>)
```

Called to notify the user of whether the PDF page is successfully loaded.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPdfLoadEvent&gt; | Yes | Callback triggered to notify users of whether the PDF page issuccessfully loaded. |

## onPdfScrollAtBottom

```TypeScript
onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>)
```

Called to notify the user that the PDF page has been scrolled to the bottom.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPdfScrollEvent&gt; | Yes | Callback triggered to notify the user that the PDF page has beenscrolled to the bottom. |

## onPermissionRequest

```TypeScript
onPermissionRequest(callback: Callback<OnPermissionRequestEvent>)
```

Triggered when a permission request is received. To call this API, you need to declare the
**ohos.permission.CAMERA** and **ohos.permission.MICROPHONE** permissions.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPermissionRequestEvent&gt; | Yes | Callback invoked when a permission request is received. |

## onProgressChange

```TypeScript
onProgressChange(callback: Callback<OnProgressChangeEvent>)
```

Triggered when the page loading progress changes.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnProgressChangeEvent&gt; | Yes | The triggered function when the page loading progress changes. [since 8 - 11] |

## onPrompt

```TypeScript
onPrompt(callback: Callback<OnPromptEvent, boolean>)
```

Triggered when prompt() is invoked by the web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnPromptEvent, boolean&gt; | Yes | Callback used when prompt() is invoked by the web page. [since 9 - 11] |

## onRefreshAccessedHistory

```TypeScript
onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>)
```

Triggered when the Web page refreshes accessed history.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnRefreshAccessedHistoryEvent&gt; | Yes | The triggered callback when the Web page refreshes accessed history. [since 8 - 11] |

## onRenderExited

```TypeScript
onRenderExited(callback: Callback<OnRenderExitedEvent>)
```

Triggered when the rendering process exits abnormally. A rendering process may be shared by multiple **Web** components.
Each affected **Web** component triggers this callback. You can call the bound **webviewController** APIs to restore the
web page when this callback is triggered. For example, [refresh](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#refresh-1) and
[loadUrl](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#loadurl-1).
For details about the component lifecycle, see [Lifecycle of the Web Components](../../../../web/web-event-sequence.md)

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnRenderExitedEvent&gt; | Yes | Triggered when the rendering process exits abnormally.<br>**Since:** 12 |

## onRenderExited

```TypeScript
onRenderExited(callback: (event?: { detail: object }) => boolean)
```

Triggered when the render process exits.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onRenderExited

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { detail: object }) =&gt; boolean | Yes | The triggered when the render process exits. |

## onRenderProcessNotResponding

```TypeScript
onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback)
```

Triggered when the rendering process does not respond. If the **Web** component cannot process the input event or
navigate to a new URL within a proper time range, the web page process is considered unresponsive and the callback is
triggered. If the web page process does not respond, this callback may be triggered until the web page process responds again.
In this case, [onRenderProcessResponding] is triggered.
You can terminate the associated rendering process through
[terminateRenderProcess](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#terminaterenderprocess-1), which
may affect other **Web** components in the same rendering process.

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

Triggered when the rendering process transitions back to a normal operating state from an unresponsive state. This
callback indicates that the web page was not actually frozen.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnRenderProcessRespondingCallback | Yes | Callback |

## onRequestSelected

```TypeScript
onRequestSelected(callback: () => void)
```

Triggered when the Web gets the focus.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | The triggered function when the Web gets the focus. |

## onResourceLoad

```TypeScript
onResourceLoad(callback: Callback<OnResourceLoadEvent>)
```

Triggered when the url loading.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnResourceLoadEvent&gt; | Yes | The triggered when the url loading. [since 9 - 11] |

## onSafeBrowsingCheckFinish

```TypeScript
onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback)
```

Triggered when the website security risk check is completed.

<p><strong>API Note</strong>:<br>
Unlike onSafeBrowsingCheckResult, which is only triggered when a URL has security risks, onSafeBrowsingCheckFinish
is also triggered when the website security risk check is not performed or no risks are found.

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

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnSafeBrowsingCheckResultCallback | Yes | Function triggered when received website security risk check result. |

## onScaleChange

```TypeScript
onScaleChange(callback: Callback<OnScaleChangeEvent>)
```

Triggered when the scale of WebView changed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScaleChangeEvent&gt; | Yes | The triggered when the scale of WebView changed. [since 9 - 11] |

## onScreenCaptureRequest

```TypeScript
onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>)
```

Triggered when a screen capture request is received.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScreenCaptureRequestEvent&gt; | Yes | Callback invoked when a screen capture request isreceived. Before API 12�� use { function } as param. |

## onScroll

```TypeScript
onScroll(callback: Callback<OnScrollEvent>)
```

Notify the global scroll position of the web page

Description:

What is notified is the global scroll position of the page.
Changes in the local scroll position cannot trigger this callback.

Determine whether the page is globally scrolled and print window.pagYOffset
or window.pagXOffset before and after scrolling.

If it is global scrolling, the value of window.pagYOffset
or window.pagXOffset will change before and after scrolling, and vice versa.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnScrollEvent&gt; | Yes | Function triggered when the web page scroll to the specified position. [since 9 - 11] |

## onSearchResultReceive

```TypeScript
onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>)
```

Notify search result to host application through onSearchResultReceive.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnSearchResultReceiveEvent&gt; | Yes | Function Triggered when the host application call searchAllAsync. |

## onShowFileSelector

```TypeScript
onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>)
```

Triggered when the file selector shows.
Call this function to handle HTML forms with a "file" input type. If this function is not called or returns false,
the web component provides the default "select file" handling interface. If it returns true, the application can
customize
the "select file" response behavior.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnShowFileSelectorEvent, boolean&gt; | Yes | The triggered when the file selector shows. [since 9 - 11] |

## onSslErrorEvent

```TypeScript
onSslErrorEvent(callback: OnSslErrorEventCallback)
```

Called to notify users when an SSL error occurs during the loading of resources (for the main frame and subframes).
To handle SSL errors for requests for the main frame, use the isMainFrame field to distinguish.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnSslErrorEventCallback | Yes | The triggered callback when the Web page receives an ssl Error. |

## onSslErrorEventReceive

```TypeScript
onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>)
```

Called to notify users when an SSL error occurs with a request for the main frame.
To include errors with requests for subframes, use the OnSslErrorEvent API.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnSslErrorEventReceiveEvent&gt; | Yes | The triggered callback when the Web page receives an ssl Error. [since 9 - 11] |

## onSslErrorReceive

```TypeScript
onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void)
```

Triggered when the Web page receives an ssl Error.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onSslErrorEventReceive

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { handler: Function, error: object }) =&gt; void | Yes | The triggered callback when the Web page receives an ssl Error. |

## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: TextSelectionChangeCallback)
```

Called when the text selection changes.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TextSelectionChangeCallback | Yes | when the text selection changes. |

## onTitleReceive

```TypeScript
onTitleReceive(callback: Callback<OnTitleReceiveEvent>)
```

Notifies the application that the title has changed.
If the page being loaded does not specify a title via the <title> element,
ArkWeb will generate a title baseed on the URL and return it to the application.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnTitleReceiveEvent&gt; | Yes | The triggered function when the title of the main application document |

## onTouchIconUrlReceived

```TypeScript
onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>)
```

Triggered when the application receive the url of an apple-touch-icon.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnTouchIconUrlReceivedEvent&gt; | Yes | The triggered callback when the application receive an new url of an |

## onUrlLoadIntercept

```TypeScript
onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean)
```

Triggered when the URL loading is intercepted.

**Since:** 8

**Deprecated since:** 10

**Substitutes:** onLoadIntercept

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (event?: { data: string \| WebResourceRequest }) =&gt; boolean | Yes | The triggered callback when the URL loading is intercepted. |

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

Triggered when the **viewport-fit** configuration in the web page's **meta** tag changes. The application can adapt
its layout to the viewport within this callback.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnViewportFitChangedCallback | Yes | Callback invoked when the **viewport-fit** configuration in theweb page's **meta** tag changes. |

## onWindowExit

```TypeScript
onWindowExit(callback: () => void)
```

Triggered when this window is closed. This API works in the same way as
[onWindowNew](../../../../reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9). For security,
applications should notify users that the pages they interact with are closed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | The triggered callback when web page requires the user to close a window. |

## onWindowNew

```TypeScript
onWindowNew(callback: Callback<OnWindowNewEvent>)
```

Triggered when web page requires to create a new window.
If the {@link setWebController} interface is not called, the render process will be blocked.
If no new window is created, it is set to null when calling the {@link setWebController} interface,
informing the Web that no new window is created.
New windows must not be placed to directly cover the original Web component. Additionally,
their URLs―specifically the content shown in the address bar―should follow the same display
format as the main page, ensuring clarity for users and avoiding confusion. In cases where
reliable visual management of URLs is not feasible, restricting the creation of new windows
should be considered. It is also important to note that the origin of new window requests
cannot be tracked with certainty; such requests may even be triggered by third-party iframes.
For this reason, applications must implement default defensive measures like sandbox isolation
and permission controls to safeguard security.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnWindowNewEvent&gt; | Yes | The web page requests the user to create a window. [since 12] |

## onWindowNewExt

```TypeScript
onWindowNewExt(callback: Callback<OnWindowNewExtEvent>)
```

Triggered when web page requires to create a new window.
If the {@link setWebController} interface is not called, the render process will be blocked.
If no new window is created, it is set to null when calling the {@link setWebController} interface,
informing the Web that no new window is created.
New windows must not be placed to directly cover the original Web component. Additionally,
their URLs—specifically the content shown in the address bar—should follow the same display
format as the main page, ensuring clarity for users and avoiding confusion. In cases where
reliable visual management of URLs is not feasible, restricting the creation of new windows
should be considered. It is also important to note that the origin of new window requests
cannot be tracked with certainty; such requests may even be triggered by third-party iframes.
For this reason, applications must implement default defensive measures like sandbox isolation
and permission controls to safeguard security.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;OnWindowNewExtEvent&gt; | Yes | The triggered callback when web page requires the user |

## onlineImageAccess

```TypeScript
onlineImageAccess(onlineImageAccess: boolean)
```

Sets whether to enable access to online images through HTTP and HTTPS. When this attribute is not explicitly called
, online image resources can be loaded by default.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onlineImageAccess | boolean | Yes | Whether to enable access to online images through HTTP and HTTPS.<br>Thevalue **true** means to enable access to online images through HTTP and HTTPS, and **false** means theopposite.<br>If **undefined** or **null** is passed in, the value is **false**. |

## optimizeParserBudget

```TypeScript
optimizeParserBudget(optimizeParserBudget: boolean)
```

Sets whether to enable segment-based HTML parsing optimization. If no attribute is explicitly called, the parsing
time is used as the segment point by default.

To avoid occupying too many main thread resources and enable progressive loading of web pages, the ArkWeb kernel
uses the segment-based parsing policy when parsing the HTML files. By default, the ArkWeb kernel uses the parsing
time as the segment point. When the parsing time exceeds the threshold, the parsing is interrupted and then the
layout and rendering operations are performed.

After this optimization is enabled, the ArkWeb kernel checks whether the parsing time exceeds the limit and whether
the number of parsed tokens (minimum parsing unit of HTML files, such as **\<div>** and **attr="xxx"**) exceeds the
threshold specified by the kernel. If yes, the ArkWeb kernel decreases the threshold. When the First Contentful
Paint (FCP) of the page is triggered, the default interrupt judgment logic is restored. In this way, the web page
is parsed more frequently before the FCP is triggered, thereby the first-frame content may be parsed in advance and
enter a rendering phase, effectively reducing the workload of first-frame rendering, and finally advancing the FCP.

When the FCP of a page is triggered, the default segment parsing logic is restored. Therefore, the segment-based
HTML parsing optimization takes effect only for the first page loaded by each **Web** component.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optimizeParserBudget | boolean | Yes | Whether to enable segment-based HTML parsing optimization.<br>The value |

## overScrollMode

```TypeScript
overScrollMode(mode: OverScrollMode)
```

Sets the over-scroll mode for web

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | OverScrollMode | Yes | The over-scroll mode, which can be {@link OverScrollMode}.The default value is OverScrollMode.NEVER. |

## overviewModeAccess

```TypeScript
overviewModeAccess(overviewModeAccess: boolean)
```

Sets whether to load web pages by using the overview mode. That is, zoom out the content to fit the screen width.
When this attribute is not explicitly called, web pages can be loaded in overview mode by default.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| overviewModeAccess | boolean | Yes | Whether to load web pages by using the overview mode.<br>The value **true**means to load web pages by using the overview mode, and **false** means the opposite.<br>If **undefined** or**null** is passed in, the value is **false**. |

## password

```TypeScript
password(password: boolean)
```

Sets whether the Web should save the password.

**Since:** 8

**Deprecated since:** 10

**Substitutes:** enableAutofill

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| password | boolean | Yes | {@code true} means the Web can save the password; {@code false} otherwise. |

## pinchSmooth

```TypeScript
pinchSmooth(isEnabled: boolean)
```

Sets whether to enable pinch smooth mode for the web page. When this attribute is not explicitly called, pinch
smooth mode is disabled by default.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable pinch smooth mode for the web page.<br>The value **true** means toenable pinch smooth mode, and **false** means the opposite.<br>If **undefined** or **null** is passed in, thevalue is **false**. |

## registerNativeEmbedRule

```TypeScript
registerNativeEmbedRule(tag: string, type:string)
```

Registers the HTML tag name and type for same-layer rendering. The tag name only supports <object\> and <embed\>.
The tag type only supports visible ASCII characters.

If the specified type is the same as the W3C standard <object\> or <embed\> type, the ArkWeb kernel identifies the
type as a non-same-layer tag.

This API is also controlled by **enableNativeEmbedMode** and does not take effect when same-layer rendering is
disabled. When this API is not used, the ArkWeb kernel recognizes the <embed\> tags with the "native/" prefix as
same-layer tags.

For details, see
[Using Same-Layer Rendering](../../../../web/web-same-layer.md#rendering-text-boxes-at-the-same-layer-on-web-pages).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tag | string | Yes | Tag name. |
| type | string | Yes | Tag type. The ArkWeb kernel uses a prefix to match this parameter. |

## rotateRenderEffect

```TypeScript
rotateRenderEffect(effect: WebRotateEffect)
```

Sets how the final state of the **Web** component's content is rendered during its width and height animation
process when the component rotates. If this attribute is not explicitly called, by default, the component's
content stays at the final size and always aligned with the upper left corner of the component.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | WebRotateEffect | Yes | How the final state of the **Web** component's content is rendered duringits width and height animation process when the component rotates. |

## runJavaScriptOnDocumentEnd

```TypeScript
runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run after document has been parsed finished.

> **NOTE**
>
> - The script runs before any JavaScript code of the page, when the DOM tree has been loaded and rendered.
>
> - This script is executed in the array order.
>
> - You are advised not to use this API together with
> [javaScriptOnDocumentEnd](WebAttribute.javaScriptOnDocumentEnd).
>
> - If a script with the same content is injected for multiple times, the script is silently deduplicated, not
> displayed, and no notification is displayed. The **scriptRules** of the first injection is used.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem&gt; | Yes | The JavaScripts executed in array order. |

## runJavaScriptOnDocumentStart

```TypeScript
runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run just after document object has been created.

> **NOTE**
>
> - Inject the script after the root element (HTML Element) of the web page file is created, but before any other
> content is loaded.
>
> - This script is executed in the array order.
>
> - You are advised not to use this API together with
> [javaScriptOnDocumentStart](WebAttribute.javaScriptOnDocumentStart).
>
> - If a script with the same content is injected for multiple times, the script is silently deduplicated, not
> displayed, and no notification is displayed. The **scriptRules** of the first injection is used.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem&gt; | Yes | The JavaScripts executed in array order. |

## runJavaScriptOnHeadEnd

```TypeScript
runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>)
```

Injects the JavaScripts that will be run after head element has been parsed finished.

> **NOTE**
>
> - This script is executed in the array order.
>
> - If a script with the same content is injected for multiple times, the script is silently deduplicated, not
> displayed, and no notification is displayed. The **scriptRules** of the first injection is used.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scripts | Array&lt;ScriptItem&gt; | Yes | The JavaScripts executed in array order. |

## scrollbarLayoutPolicy

```TypeScript
scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy)
```

Sets the scrollbar layout policy.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | ScrollbarLayoutPolicy | Yes | The layout policy to apply. |

## selectionMenuOptions

```TypeScript
selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>)
```

Set the custom text menu.
The Web component custom menu extension item interface allows users to set the extension item's text content, icon,
and callback method.

<p><strong>API Note</strong>:<br>
This interface only supports selecting plain text. When the selected content contains images and other non-text content,
garbled characters will be displayed in the action information.
</p>

**Since:** 12

**Deprecated since:** 20

**Substitutes:** editMenuOptions

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| expandedMenuOptions | Array&lt;ExpandedMenuItemOptions&gt; | Yes | Customize text menu options.The number of menu items, the content size of the menu, and the startIconicon size are consistent with the ArkUI Menu component. |

## tableData

```TypeScript
tableData(tableData: boolean)
```

Sets whether the Web should save the table data.

**Since:** 8

**Deprecated since:** 10

**Substitutes:** enableAutofill

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tableData | boolean | Yes | { |

## textAutosizing

```TypeScript
textAutosizing(textAutosizing: boolean)
```

Sets whether to enable automatic font sizing for the **Web** component. When no attribute is explicitly called,
automatic font sizing is enabled for the **Web** component by default.

After automatic font sizing takes effect, any text smaller than 16 px is enlarged to fall between 16 px and 32 px.
This eliminates readability issues on narrow screens (viewport < 980 px) where mobile-specific layouts are absent.

> **NOTE**
>
> - The preconditions for automatic font sizing to take effect are as follows:
> > - The device type should be phone, tablet, wearable, or TV.
> > - The viewport width of the **Web** component is less than 980 px.
> > - The page is text-heavy: font size (px) × character count ≥ 3920.
> > - **metaViewport** is not set on the frontend, or the **metaViewport** does not contain the **width** and
> **initial-scale** attributes.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textAutosizing | boolean | Yes | Whether to enable automatic text resizing.<br>The value **true** means toenable automatic text resizing, and **false** means the opposite.<br>When **undefined** or **null** is passedin, the value is **true**. |

## textZoomAtio

```TypeScript
textZoomAtio(textZoomAtio: number)
```

Sets the text zoom ratio of the page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** textZoomRatio

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textZoomAtio | number | Yes | Text zoom ratio to set.<br>The value is a positive integer.<br>Default value:**100** |

## textZoomRatio

```TypeScript
textZoomRatio(textZoomRatio: number)
```

Sets the text zoom ratio of the page. When this attribute is not explicitly called, the default zoom ratio is 100%.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textZoomRatio | number | Yes | Text zoom ratio to set.<br>The value is an integer. The value range is (0, 2147483647]. |

## userAgent

```TypeScript
userAgent(userAgent: string)
```

Sets the Web's user agent.

**Since:** 8

**Deprecated since:** 10

**Substitutes:** setCustomUserAgent

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The Web's user agent. |

## verticalScrollBarAccess

```TypeScript
verticalScrollBarAccess(verticalScrollBar: boolean)
```

Set whether paint vertical scroll bar, including the system default scrollbar and user-defined scrollbar.

<p><strong>API Note</strong>:<br>
After controlling the vertical scrollbar's visibility through the @State variable, you need to call controller.refresh() to take effect.<br>
When frequently changing the @State variable dynamically, it is recommended to match the toggle variable with the Web component one-to-one.
</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| verticalScrollBar | boolean | Yes | True if it needs to paint vertical scroll bar. |

## webCursiveFont

```TypeScript
webCursiveFont(family: string)
```

Sets the cursive font family of the web page to render HTML elements that use the **cursive** font.

When this attribute is not explicitly called, the default cursive font family of the web page is **cursive**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Cursive font family to set.<br>When **null** or **undefined** is passed in, the value is**cursive**. |

## webFantasyFont

```TypeScript
webFantasyFont(family: string)
```

Sets the fantasy font family of the web page to render HTML elements that use the **fantasy** font.

When this attribute is not explicitly called, the default fantasy font family of the web page is **fantasy**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Fantasy font family to set.<br>When **null** or **undefined** is passed in, the value is**fantasy**. |

## webFixedFont

```TypeScript
webFixedFont(family: string)
```

Sets the fixed font family of the web page to render HTML elements that use the **monospace** font.

When this attribute is not explicitly called, the default fixed font family of the web page is **monospace**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Fixed font family to set.<br>When **null** or **undefined** is passed in, the value is**monospace**. |

## webSansSerifFont

```TypeScript
webSansSerifFont(family: string)
```

Sets the sans-serif font family of the web page to render HTML elements that use the **sans-serif** font.

When this attribute is not explicitly called, the sans-serif font family of the web page is **sans-serif** by
default.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Sans-serif font family to set.<br>When **null** or **undefined** is passed in, the sans-serif font family is **sans-serif**. |

## webSerifFont

```TypeScript
webSerifFont(family: string)
```

Sets the serif font family of the web page to render HTML elements that use the **serif** font.

When this attribute is not explicitly called, the default serif font family of the web page is **serif**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Serif font family to set.<br>When **null** or **undefined** is passed in, the sans-seriffont family is **serif**. |

## webStandardFont

```TypeScript
webStandardFont(family: string)
```

Sets the standard font family of the web page to render HTML elements whose font style is not specified.

When this attribute is not explicitly called, the default standard font family of the web page is **sans-serif**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| family | string | Yes | Standard font family to set.<br>When **null** or **undefined** is passed in, the sans-serif font family is **sans-serif**. |

## wideViewModeAccess

```TypeScript
wideViewModeAccess(wideViewModeAccess: boolean)
```

Sets whether to support the **viewport** attribute of the HTML **\<meta>** tag. This API is an empty API.

**Since:** 8

**Deprecated since:** 10

**Substitutes:** metaViewport

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wideViewModeAccess | boolean | Yes | Whether to support the **viewport** attribute of the HTML **&lt;meta&gt;** tag.&lt;br&gt;The value **true** means to support the **viewport** attribute of the HTML **&lt;meta&gt;** tag, and **false**means the opposite. |

## zoomAccess

```TypeScript
zoomAccess(zoomAccess: boolean)
```

Sets whether the Web supports zooming using gestures.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomAccess | boolean | Yes | { |

## zoomControlAccess

```TypeScript
zoomControlAccess(zoomControlAccess: boolean)
```

Sets whether the Web supports zooming using Ctrl.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomControlAccess | boolean | Yes | {@code true} means the Web supports zooming using Ctrl,{@code false} otherwise.The default value is true. |

