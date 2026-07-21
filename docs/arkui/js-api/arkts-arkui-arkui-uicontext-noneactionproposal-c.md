# NoneActionProposal

Smart gesture no-op action handling. When dynamically customizing smart gesture behavior through the [registerMonitor](arkts-arkui-arkui-uicontext-smartgesturecontroller-c.md#registermonitor-1) API, setting the return value [GestureHandlingResolution](arkts-arkui-arkui-uicontext-gesturehandlingresolution-c.md)'s **selectedProposal** to an object of this type triggers no action.

**Inheritance/Implementation:** NoneActionProposal extends [BaseGestureHandlingProposal](arkts-arkui-arkui-uicontext-basegesturehandlingproposal-c.md)

**Since:** 26.0.0

<!--Device-unnamed-export class NoneActionProposal extends BaseGestureHandlingProposal--><!--Device-unnamed-export class NoneActionProposal extends BaseGestureHandlingProposal-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor for the smart gesture no-op action handling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-NoneActionProposal-constructor()--><!--Device-NoneActionProposal-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

