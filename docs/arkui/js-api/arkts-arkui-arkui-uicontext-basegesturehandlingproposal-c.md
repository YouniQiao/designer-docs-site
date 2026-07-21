# BaseGestureHandlingProposal

Base class for smart gesture handling. When dynamically customizing smart gesture behavior through the [registerMonitor](arkts-arkui-arkui-uicontext-smartgesturecontroller-c.md#registermonitor-1) API, the callback parameter type is an instance of a specific subclass type.

**Since:** 26.0.0

<!--Device-unnamed-export abstract class BaseGestureHandlingProposal--><!--Device-unnamed-export abstract class BaseGestureHandlingProposal-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## action

```TypeScript
action: SmartGestureAction
```

Final action of the smart gesture.

**Type:** SmartGestureAction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-BaseGestureHandlingProposal-action: SmartGestureAction--><!--Device-BaseGestureHandlingProposal-action: SmartGestureAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operateIntention

```TypeScript
operateIntention: OperateIntention
```

Underlying operation intention of the smart gesture.

**Type:** OperateIntention

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-BaseGestureHandlingProposal-operateIntention: OperateIntention--><!--Device-BaseGestureHandlingProposal-operateIntention: OperateIntention-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

