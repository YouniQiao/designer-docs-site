# OverlayManagerOptions

Provides the parameters used for initializing [OverlayManager](arkts-arkui-uicontext.md).

**Since:** 15

<!--Device-unnamed-export interface OverlayManagerOptions--><!--Device-unnamed-export interface OverlayManagerOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## enableBackPressedEvent

```TypeScript
enableBackPressedEvent?: boolean
```

hether to enable the swipe-to-dismiss gesture for **ComponentContent** under **OverlayManager**.The value **true** means to enable the swipe-to-dismiss gesture, and **false** means the opposite. Default value: **false**.<br>**Atomic service API**: This API can be used in atomic services since API version 19.

**Type:** boolean

**Default:** false

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-OverlayManagerOptions-enableBackPressedEvent?: boolean--><!--Device-OverlayManagerOptions-enableBackPressedEvent?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## renderRootOverlay

```TypeScript
renderRootOverlay?: boolean
```

Whether to render the overlay root node. The value **true** means to render the overlay root node,and **false** means the opposite. The default value is **true**.<br>**Atomic service API**: This API can be used in atomic services since API version 15.

**Type:** boolean

**Default:** true

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-OverlayManagerOptions-renderRootOverlay?: boolean--><!--Device-OverlayManagerOptions-renderRootOverlay?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

