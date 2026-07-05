# GestureHandlingResolution

智慧手势处理结果声明类。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(isConsumed: boolean)
```

智慧手势处理结果的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isConsumed | boolean | Yes | 是否消费当前智慧手势。 true表示消费当前智慧手势，此时如果未设置  [selectedProposal](arkts-gesturehandlingresolution-c.md#selectedProposal)沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。  false表示不消费，系统将本次智慧手势视为未处理。 |

## selectedProposal

```TypeScript
selectedProposal?: BaseGestureHandlingProposal
```

用户指定的智慧手势处理行为。 当isConsumed为true时，如果未设置selectedProposal沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。 当isConsumed为false时，selectedProposal设置不生效。

**Type:** BaseGestureHandlingProposal

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isConsumed

```TypeScript
isConsumed: boolean
```

是否消费当前智慧手势。 true表示消费当前智慧手势，此时如果未设置selectedProposal沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。 false表示不消费，系统将本次智慧手势视为未处理。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

