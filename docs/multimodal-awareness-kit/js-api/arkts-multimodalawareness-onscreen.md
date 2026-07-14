# @ohos.multimodalAwareness.onScreen

This module provides the onscreen awareness capability. > **NOTE** >

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [apperceive](arkts-multimodalawareness-apperceive-f-sys.md#apperceive-1) | Proactively triggers screen content awareness to obtain the screen content for snapshot analysis. |
| [capture](arkts-multimodalawareness-capture-f-sys.md#capture-1) | Proactively triggers screen content awareness to obtain page information. |
| [getPageContent](arkts-multimodalawareness-getpagecontent-f-sys.md#getpagecontent-1) | Obtains the onscreen content when a window is displayed on the screen. |
| [interact](arkts-multimodalawareness-interact-f-sys.md#interact-1) | Proactively triggers screen behavior interaction to identify screen behaviors and return behavior receipts. For <br> example, after a link is clicked, the system accurately jumps to the specified paragraph and <br> highlights the text based on the receipt information. |
| [offReadingScreenPermissionListener](arkts-multimodalawareness-offreadingscreenpermissionlistener-f-sys.md#offreadingscreenpermissionlistener-1) | Disables the screen content access permission monitoring. |
| [onReadingScreenPermissionListener](arkts-multimodalawareness-onreadingscreenpermissionlistener-f-sys.md#onreadingscreenpermissionlistener-1) | Enables the screen content access permission monitoring and returns the permission status in real time. |
| [sendControlEvent](arkts-multimodalawareness-sendcontrolevent-f-sys.md#sendcontrolevent-1) | If the target window is displayed on the screen, you can use this API to send screen control events based on the paragraph information obtained via [onScreen.getPageContent](arkts-multimodalawareness-getpagecontent-f-sys.md#getpagecontent-1). |
| [subscribe](arkts-multimodalawareness-subscribe-f-sys.md#subscribe-1) | Enables proactive awareness on screen content and subscribes to a screen awareness result. |
| [trigger](arkts-multimodalawareness-trigger-f-sys.md#trigger-1) | Proactively triggers screen content awareness and obtains the current screen awareness result. |
| [unsubscribe](arkts-multimodalawareness-unsubscribe-f-sys.md#unsubscribe-1) | Disables proactive awareness on screen content and unsubscribes from a screen awareness result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AwarenessItem](arkts-multimodalawareness-awarenessitem-i-sys.md) | Provides page information, which includes: * Basic page information, such as page content, links, and screenshots. * Page entity information, such as the title and body of a page article. * Page interaction information, such as clicks and scrolling. |
| [ContentOptions](arkts-multimodalawareness-contentoptions-i-sys.md) | Defines the options for obtaining the onscreen content. |
| [ControlEvent](arkts-multimodalawareness-controlevent-i-sys.md) | Defines a control event. |
| [EntityInfo](arkts-multimodalawareness-entityinfo-i-sys.md) | Provides entity information perceived, including content, links, images, and other types of entities. |
| [OnscreenAwarenessCap](arkts-multimodalawareness-onscreenawarenesscap-i-sys.md) | Defines onscreen awareness capabilities (including but not limited to awareness in a reading scenario and OCR). |
| [OnscreenAwarenessInfo](arkts-multimodalawareness-onscreenawarenessinfo-i-sys.md) | Returns the list of onscreen awareness information. |
| [OnscreenAwarenessOptions](arkts-multimodalawareness-onscreenawarenessoptions-i-sys.md) | Defines the list of onscreen awareness parameters, which is used to obtain onscreen information in specific scenarios. For example, a window ID is provided to collect application UI content and links. |
| [PageContent](arkts-multimodalawareness-pagecontent-i-sys.md) | Defines the onscreen content. |
| [Paragraph](arkts-multimodalawareness-paragraph-i-sys.md) | Defines the paragraph information. |
| [ReadingScreenPermissionStatus](arkts-multimodalawareness-readingscreenpermissionstatus-i-sys.md) | Returns the status of the permission for reading screen information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [CollectStrategy](arkts-multimodalawareness-collectstrategy-e-sys.md) | Defines a page information collection policy. |
| [EventType](arkts-multimodalawareness-eventtype-e-sys.md) | Enumerates the control event types. |
| [Scenario](arkts-multimodalawareness-scenario-e-sys.md) | Enumerates the scenarios of the onscreen content. |
<!--DelEnd-->

