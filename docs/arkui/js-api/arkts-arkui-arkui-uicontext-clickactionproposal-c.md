# ClickActionProposal

Smart gesture click action handling. When dynamically customizing smart gesture behavior through the [registerMonitor](arkts-arkui-arkui-uicontext-smartgesturecontroller-c.md#registermonitor-1) API, setting the return value [GestureHandlingResolution](arkts-arkui-arkui-uicontext-gesturehandlingresolution-c.md)'s **selectedProposal** to an object of this type triggers a click operation on the target component.

> **NOTE**  
>  
> - This action handling follows the "select first, then click" processing semantics.  
>  
> - If the target node is not yet selected, this handling first establishes the selected state without immediately  
> triggering the click.

**Inheritance/Implementation:** ClickActionProposal extends [TargetedGestureProposal](arkts-arkui-arkui-uicontext-targetedgestureproposal-c.md)

**Since:** 26.0.0

<!--Device-unnamed-export class ClickActionProposal extends TargetedGestureProposal--><!--Device-unnamed-export class ClickActionProposal extends TargetedGestureProposal-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(node: FrameNode)
```

Constructor for the smart gesture click action handling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ClickActionProposal-constructor(node: FrameNode)--><!--Device-ClickActionProposal-constructor(node: FrameNode)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](../arkts-components/arkts-arkui-framenode-t.md) | Yes | Target node that responds to the click action. |

