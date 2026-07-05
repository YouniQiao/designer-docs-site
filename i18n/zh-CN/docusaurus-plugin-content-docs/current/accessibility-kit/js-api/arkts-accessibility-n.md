# accessibility

Accessibility

**起始版本：** 7

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

## 导入模块

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getAbilityLists](arkts-accessibility-getabilitylists-f.md#getAbilityLists-1) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAbilityLists](arkts-accessibility-getabilitylists-f.md#getAbilityLists-2) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-getaccessibilityextensionlist-f.md#getAccessibilityExtensionList-1) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-getaccessibilityextensionlist-f.md#getAccessibilityExtensionList-2) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getAccessibilityExtensionListSync-1) | Query the list of accessibility applications in the current system, which can be queried by criteria. |
| [getCaptionsManager](arkts-accessibility-getcaptionsmanager-f.md#getCaptionsManager-1) | Obtains a **CaptionsManager** instance. |
| [getSeniorModeStateForSelf](arkts-accessibility-getseniormodestateforself-f.md#getSeniorModeStateForSelf-1) | Check if this application's senior mode is enabled. |
| [getTouchModeSync](arkts-accessibility-gettouchmodesync-f.md#getTouchModeSync-1) | Queries single- or double-touch mode. |
| [isAnimationReduceEnabled](arkts-accessibility-isanimationreduceenabled-f.md#isAnimationReduceEnabled-1) | Checks whether animation reduction mode is enabled. This API uses a promise to return the result. |
| [isAnimationReduceEnabledSync](arkts-accessibility-isanimationreduceenabledsync-f.md#isAnimationReduceEnabledSync-1) | Checks whether animation reduction mode is enabled with a synchronous method. |
| [isAudioMonoEnabled](arkts-accessibility-isaudiomonoenabled-f.md#isAudioMonoEnabled-1) | Checks whether mono audio mode is enabled. This API uses a promise to return the result. |
| [isAudioMonoEnabledSync](arkts-accessibility-isaudiomonoenabledsync-f.md#isAudioMonoEnabledSync-1) | Checks whether mono audio mode is enabled with a synchronous mode. |
| [isFlashReminderEnabled](arkts-accessibility-isflashreminderenabled-f.md#isFlashReminderEnabled-1) | Checks whether flash alerts mode is enabled. This API uses a promise to return the result. |
| [isFlashReminderEnabledSync](arkts-accessibility-isflashreminderenabledsync-f.md#isFlashReminderEnabledSync-1) | Checks whether flash alerts mode is enabled with a synchronous method. |
| [isOpenAccessibility](arkts-accessibility-isopenaccessibility-f.md#isOpenAccessibility-1) | Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenAccessibility](arkts-accessibility-isopenaccessibility-f.md#isOpenAccessibility-2) | Checks whether an accessibility application is enabled. This API uses a promise to return the result. |
| [isOpenAccessibilitySync](arkts-accessibility-isopenaccessibilitysync-f.md#isOpenAccessibilitySync-1) | Checks whether any accessibility application has been enabled in the system. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getAccessibilityExtensionListSync-1). |
| [isOpenTouchGuide](arkts-accessibility-isopentouchguide-f.md#isOpenTouchGuide-1) | Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenTouchGuide](arkts-accessibility-isopentouchguide-f.md#isOpenTouchGuide-2) | Checks whether touch guide mode is enabled. This API uses a promise to return the result. |
| [isOpenTouchGuideSync](arkts-accessibility-isopentouchguidesync-f.md#isOpenTouchGuideSync-1) | Checks whether touch guide mode is enabled. |
| [isScreenReaderOpenSync](arkts-accessibility-isscreenreaderopensync-f.md#isScreenReaderOpenSync-1) | Checks whether screen reader mode is enabled. |
| [isSeniorModeEnabled](arkts-accessibility-isseniormodeenabled-f.md#isSeniorModeEnabled-1) | Checks whether the senior mode is enabled. This API uses a promise to return the result. |
| [off](arkts-accessibility-off-f.md#off-1) | Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-2) | Unsubscribes from the state changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-3) | Unsubscribes from the state changes of the screen reader. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-4) | Unsubscribes from the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [offAccessibilityStateChange](arkts-accessibility-offaccessibilitystatechange-f.md#offAccessibilityStateChange-1) | Unregister the observe of the accessibility state changed. |
| [offAnimationReduceStateChange](arkts-accessibility-offanimationreducestatechange-f.md#offAnimationReduceStateChange-1) | Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. |
| [offAudioMonoStateChange](arkts-accessibility-offaudiomonostatechange-f.md#offAudioMonoStateChange-1) | Unsubscribes from the state changes in mono audio mode. This API uses an asynchronous callback to return the result. |
| [offFlashReminderStateChange](arkts-accessibility-offflashreminderstatechange-f.md#offFlashReminderStateChange-1) | Unsubscribes from the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. |
| [offScreenReaderStateChange](arkts-accessibility-offscreenreaderstatechange-f.md#offScreenReaderStateChange-1) | Unregister the observe of the screen reader state changed. |
| [offSeniorModeStateChange](arkts-accessibility-offseniormodestatechange-f.md#offSeniorModeStateChange-1) | Cancels listening for the senior mode change event. This API uses an asynchronous callback to return the result. |
| [offSeniorModeStateChangeForSelf](arkts-accessibility-offseniormodestatechangeforself-f.md#offSeniorModeStateChangeForSelf-1) | Unregister the observer for this application's senior mode state changes. |
| [offTouchGuideStateChange](arkts-accessibility-offtouchguidestatechange-f.md#offTouchGuideStateChange-1) | Unregister the observe of the touchGuide state changed. |
| [offTouchModeChange](arkts-accessibility-offtouchmodechange-f.md#offTouchModeChange-1) | Unregister the observe of the touch mode changed. |
| [on](arkts-accessibility-on-f.md#on-1) | Subscribes to the state changes of the accessibility application. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getAccessibilityExtensionListSync-1). > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('accessibilityStateChange')](arkts-accessibility-off-f.md#off-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-2) | Subscribes to the state changes in touch guide mode. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getAccessibilityExtensionListSync-1). > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('touchGuideStateChange')](arkts-accessibility-off-f.md#off-2) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-3) | Subscribes to the state changes of the screen reader. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('screenReaderStateChange')](arkts-accessibility-off-f.md#off-3) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-4) | Subscribes to the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('touchModeChange')](arkts-accessibility-off-f.md#off-4) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [onAccessibilityStateChange](arkts-accessibility-onaccessibilitystatechange-f.md#onAccessibilityStateChange-1) | Register the observe of the accessibility state changed. |
| [onAnimationReduceStateChange](arkts-accessibility-onanimationreducestatechange-f.md#onAnimationReduceStateChange-1) | Subscribes to the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offAnimationReduceStateChange](arkts-accessibility-offanimationreducestatechange-f.md#offAnimationReduceStateChange-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [onAudioMonoStateChange](arkts-accessibility-onaudiomonostatechange-f.md#onAudioMonoStateChange-1) | Subscribes to the state changes in mono audio mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offAudioMonoStateChange](arkts-accessibility-offaudiomonostatechange-f.md#offAudioMonoStateChange-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [onFlashReminderStateChange](arkts-accessibility-onflashreminderstatechange-f.md#onFlashReminderStateChange-1) | Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offFlashReminderStateChange](arkts-accessibility-offflashreminderstatechange-f.md#offFlashReminderStateChange-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [onScreenReaderStateChange](arkts-accessibility-onscreenreaderstatechange-f.md#onScreenReaderStateChange-1) | Register the observe of the screen reader state changed. |
| [onSeniorModeStateChange](arkts-accessibility-onseniormodestatechange-f.md#onSeniorModeStateChange-1) | Listens for enabling status changes of the senior mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.offSeniorModeStateChange](arkts-accessibility-offseniormodestatechange-f.md#offSeniorModeStateChange-1) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [onSeniorModeStateChangeForSelf](arkts-accessibility-onseniormodestatechangeforself-f.md#onSeniorModeStateChangeForSelf-1) | Register an observer for this application's senior mode state changes. |
| [onTouchGuideStateChange](arkts-accessibility-ontouchguidestatechange-f.md#onTouchGuideStateChange-1) | Register the observe of the touchGuide state changed. |
| [onTouchModeChange](arkts-accessibility-ontouchmodechange-f.md#onTouchModeChange-1) | Register the observe of the touch mode changed. |
| [sendAccessibilityEvent](arkts-accessibility-sendaccessibilityevent-f.md#sendAccessibilityEvent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendAccessibilityEvent](arkts-accessibility-sendaccessibilityevent-f.md#sendAccessibilityEvent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [sendEvent](arkts-accessibility-sendevent-f.md#sendEvent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendEvent](arkts-accessibility-sendevent-f.md#sendEvent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [setSeniorModeStateForSelf](arkts-accessibility-setseniormodestateforself-f.md#setSeniorModeStateForSelf-1) | Set this application's senior mode. |

### 类

| 名称 | 描述 |
| --- | --- |
| [EventInfo](arkts-accessibility-eventinfo-c.md) | Describes a GUI change event. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AccessibilityAbilityInfo](arkts-accessibility-accessibilityabilityinfo-i.md) | Provides information about an accessibility application. |
| [CaptionsManager](arkts-accessibility-captionsmanager-i.md) | Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the [accessibility.getCaptionsManager()](arkts-accessibility-getcaptionsmanager-f.md#getCaptionsManager-1) API to obtain a **CaptionsManager** instance. |
| [CaptionsStyle](arkts-accessibility-captionsstyle-i.md) | Describes the style of captions. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AbilityState](arkts-accessibility-abilitystate-t.md) | Enumerates the states of an accessibility application. |
| [AbilityType](arkts-accessibility-abilitytype-t.md) | Enumerates the types of accessibility applications. |
| [Action](arkts-accessibility-action-t.md) | Target actions supported by the application. The target actions for which parameters need to be set have been specified in the description of the following table. |
| [Capability](arkts-accessibility-capability-t.md) | Enumerates the capabilities of an accessibility application. |
| [CaptionsFontEdgeType](arkts-accessibility-captionsfontedgetype-t.md) | Enumerates the font edge types of captions. |
| [CaptionsFontFamily](arkts-accessibility-captionsfontfamily-t.md) | Enumerates the font families of captions. |
| [EventType](arkts-accessibility-eventtype-t.md) | Accessibility event types. |
| [TextMoveUnit](arkts-accessibility-textmoveunit-t.md) | Enumerates the movement units for traversing the node text. |
| [WindowUpdateType](arkts-accessibility-windowupdatetype-t.md) | Window update type. |

