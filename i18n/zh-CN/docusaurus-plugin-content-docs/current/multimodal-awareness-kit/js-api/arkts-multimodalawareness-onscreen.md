# @ohos.multimodalAwareness.onScreen

This module provides the onscreen awareness capability. > **NOTE** >

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalAwareness.OnScreenAwareness

## 导入模块

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[apperceive](arkts-onscreen-apperceive-f-sys.md#apperceive-1) | Proactively triggers screen content awareness to obtain the screen content for snapshot analysis. |
| <!--DelRow-->[capture](arkts-onscreen-capture-f-sys.md#capture-1) | Proactively triggers screen content awareness to obtain page information. |
| <!--DelRow-->[getPageContent](arkts-onscreen-getpagecontent-f-sys.md#getPageContent-1) | Obtains the onscreen content when a window is displayed on the screen. |
| <!--DelRow-->[interact](arkts-onscreen-interact-f-sys.md#interact-1) | Proactively triggers screen behavior interaction to identify screen behaviors and return behavior receipts. For <br> example, after a link is clicked, the system accurately jumps to the specified paragraph and <br> highlights the text based on the receipt information. |
| <!--DelRow-->[offReadingScreenPermissionListener](arkts-onscreen-offreadingscreenpermissionlistener-f-sys.md#offReadingScreenPermissionListener-1) | Disables the screen content access permission monitoring. |
| <!--DelRow-->[onReadingScreenPermissionListener](arkts-onscreen-onreadingscreenpermissionlistener-f-sys.md#onReadingScreenPermissionListener-1) | Enables the screen content access permission monitoring and returns the permission status in real time. |
| <!--DelRow-->[sendControlEvent](arkts-onscreen-sendcontrolevent-f-sys.md#sendControlEvent-1) | If the target window is displayed on the screen, you can use this API to send screen control events based on the paragraph information obtained via [onScreen.getPageContent]{@link onScreen.getPageContent}. |
| <!--DelRow-->[subscribe](arkts-onscreen-subscribe-f-sys.md#subscribe-1) | Enables proactive awareness on screen content and subscribes to a screen awareness result. |
| <!--DelRow-->[trigger](arkts-onscreen-trigger-f-sys.md#trigger-1) | Proactively triggers screen content awareness and obtains the current screen awareness result. |
| <!--DelRow-->[unsubscribe](arkts-onscreen-unsubscribe-f-sys.md#unsubscribe-1) | Disables proactive awareness on screen content and unsubscribes from a screen awareness result. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AwarenessItem](arkts-onscreen-awarenessitem-i-sys.md) | Provides page information, which includes: * Basic page information, such as page content, links, and screenshots. * Page entity information, such as the title and body of a page article. * Page interaction information, such as clicks and scrolling. |
| <!--DelRow-->[ContentOptions](arkts-onscreen-contentoptions-i-sys.md) | Defines the options for obtaining the onscreen content. |
| <!--DelRow-->[ControlEvent](arkts-onscreen-controlevent-i-sys.md) | Defines a control event. |
| <!--DelRow-->[EntityInfo](arkts-onscreen-entityinfo-i-sys.md) | Provides entity information perceived, including content, links, images, and other types of entities. |
| <!--DelRow-->[OnscreenAwarenessCap](arkts-onscreen-onscreenawarenesscap-i-sys.md) | Defines onscreen awareness capabilities (including but not limited to awareness in a reading scenario and OCR). |
| <!--DelRow-->[OnscreenAwarenessInfo](arkts-onscreen-onscreenawarenessinfo-i-sys.md) | Returns the list of onscreen awareness information. |
| <!--DelRow-->[OnscreenAwarenessOptions](arkts-onscreen-onscreenawarenessoptions-i-sys.md) | Defines the list of onscreen awareness parameters, which is used to obtain onscreen information in specific scenarios. For example, a window ID is provided to collect application UI content and links. |
| <!--DelRow-->[PageContent](arkts-onscreen-pagecontent-i-sys.md) | Defines the onscreen content. |
| <!--DelRow-->[Paragraph](arkts-onscreen-paragraph-i-sys.md) | Defines the paragraph information. |
| <!--DelRow-->[ReadingScreenPermissionStatus](arkts-onscreen-readingscreenpermissionstatus-i-sys.md) | Returns the status of the permission for reading screen information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CollectStrategy](arkts-onscreen-collectstrategy-e-sys.md) | Defines a page information collection policy. |
| [EventType](arkts-onscreen-eventtype-e.md) | Enumerates the control event types. |
| [Scenario](arkts-onscreen-scenario-e.md) | Enumerates the scenarios of the onscreen content. |

