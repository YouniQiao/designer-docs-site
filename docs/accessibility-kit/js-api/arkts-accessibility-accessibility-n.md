# accessibility

Accessibility

**Since:** 7

<!--Device-unnamed-declare namespace accessibility--><!--Device-unnamed-declare namespace accessibility-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [isOpenAccessibility](arkts-accessibility-accessibility-isopenaccessibility-f.md#isopenaccessibility-1) | Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenAccessibility](arkts-accessibility-accessibility-isopenaccessibility-f.md#isopenaccessibility-2) | Checks whether an accessibility application is enabled. This API uses a promise to return the result. |
| [isOpenAccessibilitySync](arkts-accessibility-accessibility-isopenaccessibilitysync-f.md#isopenaccessibilitysync-1) | Checks whether any accessibility application has been enabled in the system. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). |
| [isOpenTouchGuide](arkts-accessibility-accessibility-isopentouchguide-f.md#isopentouchguide-1) | Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result. |
| [isOpenTouchGuide](arkts-accessibility-accessibility-isopentouchguide-f.md#isopentouchguide-2) | Checks whether touch guide mode is enabled. This API uses a promise to return the result. |
| [isOpenTouchGuideSync](arkts-accessibility-accessibility-isopentouchguidesync-f.md#isopentouchguidesync-1) | Checks whether touch guide mode is enabled. |
| [isScreenReaderOpenSync](arkts-accessibility-accessibility-isscreenreaderopensync-f.md#isscreenreaderopensync-1) | Checks whether screen reader mode is enabled. |
| [getAbilityLists](arkts-accessibility-accessibility-getabilitylists-f.md#getabilitylists-1) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAbilityLists](arkts-accessibility-accessibility-getabilitylists-f.md#getabilitylists-2) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-1) | Obtains the accessibility application list. This API uses a promise to return the result. |
| [getAccessibilityExtensionList](arkts-accessibility-accessibility-getaccessibilityextensionlist-f.md#getaccessibilityextensionlist-2) | Obtains the accessibility application list. This API uses an asynchronous callback to return the result. |
| [getAccessibilityExtensionListSync](arkts-accessibility-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1) | Query the list of accessibility applications in the current system, which can be queried by criteria. |
| [sendEvent](arkts-accessibility-accessibility-sendevent-f.md#sendevent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendEvent](arkts-accessibility-accessibility-sendevent-f.md#sendevent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [sendAccessibilityEvent](arkts-accessibility-accessibility-sendaccessibilityevent-f.md#sendaccessibilityevent-1) | Sends an accessibility event. This API uses an asynchronous callback to return the result. |
| [sendAccessibilityEvent](arkts-accessibility-accessibility-sendaccessibilityevent-f.md#sendaccessibilityevent-2) | Sends an accessibility event. This API uses a promise to return the result. |
| [getTouchModeSync](arkts-accessibility-accessibility-gettouchmodesync-f.md#gettouchmodesync-1) | Queries single- or double-touch mode. |
| [on](arkts-accessibility-accessibility-on-f.md#on-1) | Subscribes to the state changes of the accessibility application. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). |
| [on](arkts-accessibility-accessibility-on-f.md#on-2) | Subscribes to the state changes in touch guide mode. This API uses an asynchronous callback to return the result.To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync](arkts-accessibility-accessibility-getaccessibilityextensionlistsync-f.md#getaccessibilityextensionlistsync-1). |
| [on](arkts-accessibility-accessibility-on-f.md#on-3) | Subscribes to the state changes of the screen reader. This API uses an asynchronous callback to return the result. |
| [on](arkts-accessibility-accessibility-on-f.md#on-4) | Subscribes to the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-accessibility-off-f.md#off-1) | Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-accessibility-off-f.md#off-2) | Unsubscribes from the state changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-accessibility-off-f.md#off-3) | Unsubscribes from the state changes of the screen reader. This API uses an asynchronous callback to return the result. |
| [off](arkts-accessibility-accessibility-off-f.md#off-4) | Unsubscribes from the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. |
| [getCaptionsManager](arkts-accessibility-accessibility-getcaptionsmanager-f.md#getcaptionsmanager-1) | Obtains a **CaptionsManager** instance. |
| [onAnimationReduceStateChange](arkts-accessibility-accessibility-onanimationreducestatechange-f.md#onanimationreducestatechange-1) | Subscribes to the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. |
| [offAnimationReduceStateChange](arkts-accessibility-accessibility-offanimationreducestatechange-f.md#offanimationreducestatechange-1) | Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return the result. |
| [isAnimationReduceEnabledSync](arkts-accessibility-accessibility-isanimationreduceenabledsync-f.md#isanimationreduceenabledsync-1) | Checks whether animation reduction mode is enabled with a synchronous method. |
| [isAnimationReduceEnabled](arkts-accessibility-accessibility-isanimationreduceenabled-f.md#isanimationreduceenabled-1) | Checks whether animation reduction mode is enabled. This API uses a promise to return the result. |
| [onFlashReminderStateChange](arkts-accessibility-accessibility-onflashreminderstatechange-f.md#onflashreminderstatechange-1) | Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. |
| [offFlashReminderStateChange](arkts-accessibility-accessibility-offflashreminderstatechange-f.md#offflashreminderstatechange-1) | Unsubscribes from the state changes in flash alerts mode. This API uses an asynchronous callback to return the result. |
| [isFlashReminderEnabledSync](arkts-accessibility-accessibility-isflashreminderenabledsync-f.md#isflashreminderenabledsync-1) | Checks whether flash alerts mode is enabled with a synchronous method. |
| [isFlashReminderEnabled](arkts-accessibility-accessibility-isflashreminderenabled-f.md#isflashreminderenabled-1) | Checks whether flash alerts mode is enabled. This API uses a promise to return the result. |
| [onAudioMonoStateChange](arkts-accessibility-accessibility-onaudiomonostatechange-f.md#onaudiomonostatechange-1) | Subscribes to the state changes in mono audio mode. This API uses an asynchronous callback to return the result. |
| [offAudioMonoStateChange](arkts-accessibility-accessibility-offaudiomonostatechange-f.md#offaudiomonostatechange-1) | Unsubscribes from the state changes in mono audio mode. This API uses an asynchronous callback to return the result. |
| [isAudioMonoEnabledSync](arkts-accessibility-accessibility-isaudiomonoenabledsync-f.md#isaudiomonoenabledsync-1) | Checks whether mono audio mode is enabled with a synchronous mode. |
| [isAudioMonoEnabled](arkts-accessibility-accessibility-isaudiomonoenabled-f.md#isaudiomonoenabled-1) | Checks whether mono audio mode is enabled. This API uses a promise to return the result. |
| [isSeniorModeEnabled](arkts-accessibility-accessibility-isseniormodeenabled-f.md#isseniormodeenabled-1) | Checks whether the senior mode is enabled. This API uses a promise to return the result. |
| [onSeniorModeStateChange](arkts-accessibility-accessibility-onseniormodestatechange-f.md#onseniormodestatechange-1) | Listens for enabling status changes of the senior mode. This API uses an asynchronous callback to return the result. |
| [offSeniorModeStateChange](arkts-accessibility-accessibility-offseniormodestatechange-f.md#offseniormodestatechange-1) | Cancels listening for the senior mode change event. This API uses an asynchronous callback to return the result. |
| [onSeniorModeStateChangeForSelf](arkts-accessibility-accessibility-onseniormodestatechangeforself-f.md#onseniormodestatechangeforself-1) | Register an observer for this application's senior mode state changes. |
| [offSeniorModeStateChangeForSelf](arkts-accessibility-accessibility-offseniormodestatechangeforself-f.md#offseniormodestatechangeforself-1) | Unregister the observer for this application's senior mode state changes. |
| [getSeniorModeStateForSelf](arkts-accessibility-accessibility-getseniormodestateforself-f.md#getseniormodestateforself-1) | Check if this application's senior mode is enabled. |
| [setSeniorModeStateForSelf](arkts-accessibility-accessibility-setseniormodestateforself-f.md#setseniormodestateforself-1) | Set this application's senior mode. |

### Classes

| Name | Description |
| --- | --- |
| [EventInfo](arkts-accessibility-accessibility-eventinfo-c.md) | Describes a GUI change event. |

### Interfaces

| Name | Description |
| --- | --- |
| [CaptionsManager](arkts-accessibility-accessibility-captionsmanager-i.md) | Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the [accessibility.getCaptionsManager()](arkts-accessibility-accessibility-getcaptionsmanager-f.md#getcaptionsmanager-1) API to obtain a **CaptionsManager** instance. |
| [CaptionsStyle](arkts-accessibility-accessibility-captionsstyle-i.md) | Describes the style of captions. |
| [AccessibilityAbilityInfo](arkts-accessibility-accessibility-accessibilityabilityinfo-i.md) | Provides information about an accessibility application. |

### Types

| Name | Description |
| --- | --- |
| [AbilityType](arkts-accessibility-accessibility-abilitytype-t.md) | Enumerates the types of accessibility applications. |
| [Action](arkts-accessibility-accessibility-action-t.md) | Target actions supported by the application. The target actions for which parameters need to be set have been specified in the description of the following table. |
| [EventType](arkts-accessibility-accessibility-eventtype-t.md) | Accessibility event types. |
| [WindowUpdateType](arkts-accessibility-accessibility-windowupdatetype-t.md) | Window update type. |
| [AbilityState](arkts-accessibility-accessibility-abilitystate-t.md) | Enumerates the states of an accessibility application. |
| [Capability](arkts-accessibility-accessibility-capability-t.md) | Enumerates the capabilities of an accessibility application. |
| [TextMoveUnit](arkts-accessibility-accessibility-textmoveunit-t.md) | Enumerates the movement units for traversing the node text. |
| [CaptionsFontEdgeType](arkts-accessibility-accessibility-captionsfontedgetype-t.md) | Enumerates the font edge types of captions. |
| [CaptionsFontFamily](arkts-accessibility-accessibility-captionsfontfamily-t.md) | Enumerates the font families of captions. |

