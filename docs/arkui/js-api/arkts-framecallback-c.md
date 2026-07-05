# FrameCallback

用于设置下一帧渲染时需要执行的任务。 > **说明：** > > - 以下API需要配合[UIContext]@ohos.arkui.UIContext中的[postFrameCallback](arkts-uicontext-c.md#postFrameCallback)和 > [postDelayedFrameCallback](arkts-uicontext-c.md#postDelayedFrameCallback)使用。开发者需要继承该类并重写 > [onFrame](arkts-framecallback-c.md#onFrame)或[onIdle](arkts-framecallback-c.md#onIdle)方法，实现具体的业务逻辑。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## onFrame

```TypeScript
onFrame(frameTimeInNano: number): void
```

在下一帧进行渲染时，该方法将被执行。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| frameTimeInNano | number | Yes | 下一帧渲染开始执行的时间，以纳秒为单位。 取值范围：[0, +∞) |

## onIdle

```TypeScript
onIdle(timeLeftInNano: number): void
```

在下一帧渲染结束时，如果距离下一个Vsync信号到来还有1ms以上的剩余时间，该方法将被执行，否则将顺延至后面的帧。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeLeftInNano | number | Yes | 这一帧剩余的空闲时间，以纳秒为单位。 取值范围：[0, +∞) |

