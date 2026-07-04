# SelectActionProposal

Smart gesture selection action handling. When dynamically customizing smart gesture behavior through the [registerMonitor](arkts-arkui-smartgesturecontroller-c.md#registermonitor-1) API, setting the return value [GestureHandlingResolution](arkts-arkui-gesturehandlingresolution-c.md#gesturehandlingresolution)'s **selectedProposal** to an object of this type causes the target component to be selected.

**Inheritance/Implementation:** SelectActionProposal extends [TargetedGestureProposal](arkts-arkui-targetedgestureproposal-c.md#targetedgestureproposal)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## constructor

```TypeScript
constructor(node: FrameNode)
```

Constructor for the smart gesture selection action handling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | Target node that responds to the selection action. |

