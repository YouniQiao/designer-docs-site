# ScrollActionProposal

智慧手势滚动动作处理，默认方向为向前滚动，包括向右和向下。当通过[registerMonitor](arkts-smartgesturecontroller-c.md#registerMonitor)接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution](arkts-gesturehandlingresolution-c.md#GestureHandlingResolution)的selectedProposal为该类型对象，会触发目标组件的滚动操作。

**Inheritance:** ScrollActionProposalextends: TargetedGestureProposal.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(node: FrameNode, distance: double)
```

智慧手势滚动动作处理的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 响应滚动动作的目标节点。 |
| distance | double | Yes | 滚动距离。 取值范围：[0, +∞)，小于0时按0处理。 单位为vp。 |

## distance

```TypeScript
distance?: double
```

智慧手势滚动距离。 取值范围：[0, +∞)，小于0时按0处理。 单位为vp。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

