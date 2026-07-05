# BackPressActionProposal

智慧手势返回动作处理。当通过[registerMonitor](arkts-smartgesturecontroller-c.md#registerMonitor)接口动态自定义智慧手势行为时，设置返回值 [GestureHandlingResolution](arkts-gesturehandlingresolution-c.md#GestureHandlingResolution)的selectedProposal为该类型对象，会返回上一页面。

**Inheritance:** BackPressActionProposalextends: BaseGestureHandlingProposal.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor()
```

智慧手势返回动作处理的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

