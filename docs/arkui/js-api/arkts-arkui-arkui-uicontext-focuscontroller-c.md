# FocusController

Provides capabilities to control focus, including features such as clearing, moving, and activating focus.

> **NOTE**  
>  
> In the following API examples, you must first use [getFocusController()](arkts-arkui-arkui-uicontext-uicontext-c.md#getfocuscontroller-1) in  
> **UIContext** to obtain a **FocusController** instance, and then call the APIs using the obtained instance.

**Since:** 12

<!--Device-unnamed-export class FocusController--><!--Device-unnamed-export class FocusController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="activate"></a>
## activate

```TypeScript
activate(isActive: boolean, autoInactive?: boolean): void
```

Sets the [focus activation state](docroot://ui/arkts-common-events-focus-event.md) of this page.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-FocusController-activate(isActive: boolean, autoInactive?: boolean): void--><!--Device-FocusController-activate(isActive: boolean, autoInactive?: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isActive | boolean | Yes | Whether to enter or exit the focus activation state.<br>The value **true** means to enter the focus activation state, and **false** means to exit the focus activation state. |
| autoInactive | boolean | No | Logic for exiting the focus activation state.<br>The value **true** means the focus activation state will be exited automatically when touch or mouse events are triggered, and **false** means the state is controlled solely by API calls.<br>Default value: **true** |

<a id="clearfocus"></a>
## clearFocus

```TypeScript
clearFocus(): void
```

Clears the focus and forcibly moves the focus to the root container node of the page, causing other nodes in the focus chain to lose focus.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FocusController-clearFocus(): void--><!--Device-FocusController-clearFocus(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="isactive"></a>
## isActive

```TypeScript
isActive(): boolean
```

Obtains the focus activation state of the UI instance.

For details about the focus activation state, see [Basic Concepts](docroot://ui/arkts-common-events-focus-event.md#basic-concepts).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-FocusController-isActive(): boolean--><!--Device-FocusController-isActive(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Focus activation state of the UI instance. The value **true** means that the instance has entered the focus activation state, and **false** means that the instance has exited the focus activation state. |

<a id="requestfocus"></a>
## requestFocus

```TypeScript
requestFocus(key: string): void
```

Transfers focus to a component node by the component ID, which is effective immediately.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FocusController-requestFocus(key: string): void--><!--Device-FocusController-requestFocus(key: string): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | [Component ID](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) of the target node. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [150001](../errorcode-focus.md#150001-component-not-focusable) | the component cannot be focused. |
| [150002](../errorcode-focus.md#150002-ancestor-component-not-focusable) | This component has an unfocusable ancestor. |
| [150003](../errorcode-focus.md#150003-component-does-not-exist) | the component is not on tree or does not exist. |

<a id="setautofocustransfer"></a>
## setAutoFocusTransfer

```TypeScript
setAutoFocusTransfer(isAutoFocusTransfer: boolean): void
```

Sets whether the new page automatically obtains focus during page switching.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-FocusController-setAutoFocusTransfer(isAutoFocusTransfer: boolean): void--><!--Device-FocusController-setAutoFocusTransfer(isAutoFocusTransfer: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAutoFocusTransfer | boolean | Yes | Whether the new page automatically obtains focus during page switching using navigation components or APIs, such as [Router](arkts-router.md),[Navigation](../arkts-components/arkts-arkui-navigation.md), [Menu](../arkts-components/arkts-arkui-menu.md), [Dialog](arkts-arkui-advanced-dialog.md), and [Popup](arkts-arkui-advanced-popup.md). The value **true** means the new page automatically obtains focus,and **false** means the opposite. Default value: **true**. |

<a id="setkeyprocessingmode"></a>
## setKeyProcessingMode

```TypeScript
setKeyProcessingMode(mode: KeyProcessingMode): void
```

Sets the mode for processing key events.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-FocusController-setKeyProcessingMode(mode: KeyProcessingMode): void--><!--Device-FocusController-setKeyProcessingMode(mode: KeyProcessingMode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [KeyProcessingMode](arkts-arkui-keyprocessingmode-e.md) | Yes | Mode for processing key events. |

