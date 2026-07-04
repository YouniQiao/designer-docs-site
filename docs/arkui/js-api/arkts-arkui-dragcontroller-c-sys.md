# DragController

Provides APIs for initiating drag actions. When receiving a gesture event, such as a touch or long-press event, an application can initiate a drag action and carry drag information therein. > **NOTE** > > In the following API examples, you must first use [getDragController()](arkts-arkui-uicontext-c.md#getdragcontroller-1) in > **UIContext** to obtain a **DragController** instance, and then call the APIs using the obtained instance.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## interruptFollowHandMorphDropAnimation

```TypeScript
interruptFollowHandMorphDropAnimation(): boolean
```

Interrupt the pending follow-hand morph drop animation and trigger the finish sequence immediately.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Interruption result.<br>Returns **true** if the interruption is successful, and **false**if there is no pending follow-hand morph drop animation to interrupt. |

