# accessibility

Accessibility

**Since:** 7

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [isOpenAccessibility](arkts-accessibility-isopenaccessibility-f.md#isopenaccessibility-1) | Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenAccessibility](arkts-accessibility-isopenaccessibility-f.md#isopenaccessibility-2) | Checks whether an accessibility application is enabled. This API uses a promise to return the result. |
| [isOpenAccessibilitySync](arkts-accessibility-isopenaccessibilitysync-f.md#isopenaccessibilitysync-1) | Checks whether any accessibility application has been enabled in the system. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). |
| [isOpenTouchGuide](arkts-accessibility-isopentouchguide-f.md#isopentouchguide-1) | Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenTouchGuide](arkts-accessibility-isopentouchguide-f.md#isopentouchguide-2) | Checks whether touch guide mode is enabled. This API uses a promise to return the result. |
| [isOpenTouchGuideSync](arkts-accessibility-isopentouchguidesync-f.md#isopentouchguidesync-1) | Checks whether touch guide mode is enabled. |
| [isScreenReaderOpenSync](arkts-accessibility-isscreenreaderopensync-f.md#isscreenreaderopensync-1) | Checks whether screen reader mode is enabled. |
| [getAbilityLists](arkts-accessibility-getabilitylists-f.md#getabilitylists-1) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAbilityLists](arkts-accessibility-getabilitylists-f.md#getabilitylists-2) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-1) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-2) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1) | Query the list of accessibility applications in the current system, which can be queried by criteria. |
| [sendEvent](arkts-accessibility-sendevent-f.md#sendevent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendEvent](arkts-accessibility-sendevent-f.md#sendevent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [sendAccessibilityEvent](arkts-accessibility-sendaccessibilityevent-f.md#sendaccessibilityevent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendAccessibilityEvent](arkts-accessibility-sendaccessibilityevent-f.md#sendaccessibilityevent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [getTouchModeSync](arkts-accessibility-gettouchmodesync-f.md#gettouchmodesync-1) | Queries single- or double-touch mode. |
| [on](arkts-accessibility-on-f.md#on-1) | Subscribes to the state changes of the accessibility application. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.off('accessibilityStateChange')](arkts-accessibility-off-f.md#off-1) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-2) | Subscribes to the state changes in touch guide mode. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.off('touchGuideStateChange')](arkts-accessibility-off-f.md#off-2) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-3) | Subscribes to the state changes of the screen reader. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.off('screenReaderStateChange')](arkts-accessibility-off-f.md#off-3) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [on](arkts-accessibility-on-f.md#on-4) | Subscribes to the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.off('touchModeChange')](arkts-accessibility-off-f.md#off-4) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [off](arkts-accessibility-off-f.md#off-1) | Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-2) | Unsubscribes from the state changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-3) | Unsubscribes from the state changes of the screen reader. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-off-f.md#off-4) | Unsubscribes from the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [getCaptionsManager](arkts-accessibility-getcaptionsmanager-f.md#getcaptionsmanager-1) | Obtains a **CaptionsManager** instance. |
| [onAnimationReduceStateChange](arkts-accessibility-onanimationreducestatechange-f.md#onanimationreducestatechange-1) | Subscribes to the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.offAnimationReduceStateChange](arkts-accessibility-offanimationreducestatechange-f.md#offanimationreducestatechange-1) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [offAnimationReduceStateChange](arkts-accessibility-offanimationreducestatechange-f.md#offanimationreducestatechange-1) | Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. |
| [isAnimationReduceEnabledSync](arkts-accessibility-isanimationreduceenabledsync-f.md#isanimationreduceenabledsync-1) | Checks whether animation reduction mode is enabled with a synchronous method. |
| [isAnimationReduceEnabled](arkts-accessibility-isanimationreduceenabled-f.md#isanimationreduceenabled-1) | Checks whether animation reduction mode is enabled. This API uses a promise to return the result. |
| [onFlashReminderStateChange](arkts-accessibility-onflashreminderstatechange-f.md#onflashreminderstatechange-1) | Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.offFlashReminderStateChange](arkts-accessibility-offflashreminderstatechange-f.md#offflashreminderstatechange-1) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [offFlashReminderStateChange](arkts-accessibility-offflashreminderstatechange-f.md#offflashreminderstatechange-1) | Unsubscribes from the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. |
| [isFlashReminderEnabledSync](arkts-accessibility-isflashreminderenabledsync-f.md#isflashreminderenabledsync-1) | Checks whether flash alerts mode is enabled with a synchronous method. |
| [isFlashReminderEnabled](arkts-accessibility-isflashreminderenabled-f.md#isflashreminderenabled-1) | Checks whether flash alerts mode is enabled. This API uses a promise to return the result. |
| [onAudioMonoStateChange](arkts-accessibility-onaudiomonostatechange-f.md#onaudiomonostatechange-1) | Subscribes to the state changes in mono audio mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.offAudioMonoStateChange](arkts-accessibility-offaudiomonostatechange-f.md#offaudiomonostatechange-1) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [offAudioMonoStateChange](arkts-accessibility-offaudiomonostatechange-f.md#offaudiomonostatechange-1) | Unsubscribes from the state changes in mono audio mode. This API uses an asynchronous callback to return the result. |
| [isAudioMonoEnabledSync](arkts-accessibility-isaudiomonoenabledsync-f.md#isaudiomonoenabledsync-1) | Checks whether mono audio mode is enabled with a synchronous mode. |
| [isAudioMonoEnabled](arkts-accessibility-isaudiomonoenabled-f.md#isaudiomonoenabled-1) | Checks whether mono audio mode is enabled. This API uses a promise to return the result. |
| [isSeniorModeEnabled](arkts-accessibility-isseniormodeenabled-f.md#isseniormodeenabled-1) | Checks whether the senior mode is enabled. This API uses a promise to return the result. |
| [onSeniorModeStateChange](arkts-accessibility-onseniormodestatechange-f.md#onseniormodestatechange-1) | Listens for enabling status changes of the senior mode. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - The callback parameter for registering a listener must use a named function instead of an anonymous function. &gt; Otherwise, a new underlying object is created each time the function is called, causing memory leakage. &gt; &gt; - After calling this method, you must use &gt; [accessibility.offSeniorModeStateChange](arkts-accessibility-offseniormodestatechange-f.md#offseniormodestatechange-1) &gt; to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur. |
| [offSeniorModeStateChange](arkts-accessibility-offseniormodestatechange-f.md#offseniormodestatechange-1) | Cancels listening for the senior mode change event. This API uses an asynchronous callback to return the result. |
| [onSeniorModeStateChangeForSelf](arkts-accessibility-onseniormodestatechangeforself-f.md#onseniormodestatechangeforself-1) | Register an observer for this application's senior mode state changes. |
| [offSeniorModeStateChangeForSelf](arkts-accessibility-offseniormodestatechangeforself-f.md#offseniormodestatechangeforself-1) | Unregister the observer for this application's senior mode state changes. |
| [getSeniorModeStateForSelf](arkts-accessibility-getseniormodestateforself-f.md#getseniormodestateforself-1) | Check if this application's senior mode is enabled. |
| [setSeniorModeStateForSelf](arkts-accessibility-setseniormodestateforself-f.md#setseniormodestateforself-1) | Set this application's senior mode. |

### Classes

| Name | Description |
| --- | --- |
| [EventInfo](arkts-accessibility-eventinfo-c.md) | Describes a GUI change event. |

### Interfaces

| Name | Description |
| --- | --- |
| [CaptionsManager](arkts-accessibility-captionsmanager-i.md) | Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the [accessibility.getCaptionsManager()](arkts-accessibility-getcaptionsmanager-f.md#getcaptionsmanager-1) API to obtain a **CaptionsManager** instance. |
| [CaptionsStyle](arkts-accessibility-captionsstyle-i.md) | Describes the style of captions. |
| [AccessibilityAbilityInfo](arkts-accessibility-accessibilityabilityinfo-i.md) | Provides information about an accessibility application. |

### Types

| Name | Description |
| --- | --- |
| [AbilityType](arkts-accessibility-abilitytype-t.md) | Enumerates the types of accessibility applications. |
| [Action](arkts-accessibility-action-t.md) | Target actions supported by the application. The target actions for which parameters need to be set have been specified in the description of the following table. |
| [EventType](arkts-accessibility-eventtype-t.md) | Accessibility event types. |
| [WindowUpdateType](arkts-accessibility-windowupdatetype-t.md) | Window update type. |
| [AbilityState](arkts-accessibility-abilitystate-t.md) | Enumerates the states of an accessibility application. |
| [Capability](arkts-accessibility-capability-t.md) | Enumerates the capabilities of an accessibility application. |
| [TextMoveUnit](arkts-accessibility-textmoveunit-t.md) | Enumerates the movement units for traversing the node text. |
| [CaptionsFontEdgeType](arkts-accessibility-captionsfontedgetype-t.md) | Enumerates the font edge types of captions. |
| [CaptionsFontFamily](arkts-accessibility-captionsfontfamily-t.md) | Enumerates the font families of captions. |

