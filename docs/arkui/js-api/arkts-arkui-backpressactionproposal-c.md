# BackPressActionProposal

Smart gesture back press action handling. When dynamically customizing smart gesture behavior through the
[registerMonitor](arkts-arkui-smartgesturecontroller-c.md#registermonitor-1) API, setting the return value
[GestureHandlingResolution](arkts-arkui-gesturehandlingresolution-c.md)'s **selectedProposal** to an object of this type
navigates back to the previous page.

**Inheritance/Implementation:** BackPressActionProposal extends [BaseGestureHandlingProposal](arkts-arkui-basegesturehandlingproposal-c.md)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor()
```

Constructor for the smart gesture back press action handling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

