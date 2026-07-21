# ContextMenuController

Provides the capability to control the closing of context menus.

> **NOTE**  
>  
> - The initial APIs of this class are supported since API version 12.  
>  
> - In the following API examples, you must first use  
> [getContextMenuController()](arkts-arkui-arkui-uicontext-uicontext-c.md#getcontextmenucontroller-1) in **UIContext** to obtain a  
> **ContextMenuController** instance, and then call the APIs using the obtained instance.

**Since:** 12

<!--Device-unnamed-export declare class ContextMenuController--><!--Device-unnamed-export declare class ContextMenuController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes this context menu.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ContextMenuController-close(): void--><!--Device-ContextMenuController-close(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

