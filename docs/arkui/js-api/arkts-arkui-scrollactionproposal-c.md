# ScrollActionProposal

Smart gesture scroll action handling. The default direction is forward scrolling, including right and down. When
dynamically customizing smart gesture behavior through the
[registerMonitor](arkts-arkui-smartgesturecontroller-c.md#registermonitor-1) API, setting the return value
[GestureHandlingResolution](arkts-arkui-gesturehandlingresolution-c.md)'s **selectedProposal** to an object of this type
triggers a scroll operation on the target component.

**Inheritance/Implementation:** ScrollActionProposal extends [TargetedGestureProposal](arkts-arkui-targetedgestureproposal-c.md)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(node: FrameNode, distance: number)
```

Constructor for the smart gesture scroll action handling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node that responds to the scroll action. |
| distance | number | Yes | Scroll distance.<br/>Value range:[0, +∞). Values less than 0 are treated as 0.<br/>Unit: vp. |

## distance

```TypeScript
distance?: number
```

Scroll distance of the smart gesture.

Value range: [0, +∞). Values less than 0 are treated as 0.

Unit: vp.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

