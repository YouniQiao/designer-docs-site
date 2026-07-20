# FrameCallback

Implements the API for setting the task that needs to be executed during the next frame rendering.

> **NOTE**  
>  
> - The following APIs must be used in conjunction with [postFrameCallback](arkts-arkui-arkui-uicontext-uicontext-c.md#postframecallback-1) and  
> [postDelayedFrameCallback](arkts-arkui-arkui-uicontext-uicontext-c.md#postdelayedframecallback-1) from [UIContext](arkts-arkui-uicontext.md).  
> Extend this class and override either the [onFrame](arkts-arkui-arkui-uicontext-framecallback-c.md#onframe-1) or  
> [onIdle](arkts-arkui-arkui-uicontext-framecallback-c.md#onidle-1) method to implement specific service logic.

**Since:** 12

<!--Device-unnamed-export abstract class FrameCallback--><!--Device-unnamed-export abstract class FrameCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## onFrame

```TypeScript
onFrame(frameTimeInNano: number): void
```

Called when the next frame is rendered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameCallback-onFrame(frameTimeInNano: number): void--><!--Device-FrameCallback-onFrame(frameTimeInNano: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| frameTimeInNano | number | Yes | Time when the rendering of the next frame starts, in nanoseconds.<br>Value range: [0, +∞) |

## onIdle

```TypeScript
onIdle(timeLeftInNano: number): void
```

Called after the rendering of the subsequent frame has finished and there is more than 1 millisecond left before the next VSync signal. If the time left is not more than 1 millisecond, the execution of this API will be deferred to a later frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FrameCallback-onIdle(timeLeftInNano: number): void--><!--Device-FrameCallback-onIdle(timeLeftInNano: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeLeftInNano | number | Yes | Remaining idle time for the current frame, in nanoseconds.<br>Value range:[0, +∞) |

