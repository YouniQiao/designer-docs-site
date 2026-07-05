# CursorController

提供光标样式设置的能力。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 以下API需先使用UIContext中的[getCursorController()](arkts-uicontext-c.md#getCursorController)方法获取CursorController实例，再通过此实例调用对应方法。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## restoreDefault

```TypeScript
restoreDefault(): void
```

恢复默认的光标样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCursor

```TypeScript
setCursor(value: PointerStyle): void
```

更改当前的鼠标光标样式。 > **说明：** > > 该接口调用后不会立即生效，而是在下一帧改变鼠标光标样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PointerStyle | Yes | 光标样式。 |

## setCustomCursor

```TypeScript
setCustomCursor(value: image.PixelMap, focusX?: int, focusY?: int): void
```

设置自定义鼠标光标样式。 > **说明：** > > 该接口调用后不会立即生效，而是在下一帧改变鼠标光标样式。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | image.PixelMap | Yes | 自定义鼠标光标样式的像素图。最大尺寸为256256px，超过该尺寸时设置自定义鼠标光标样式不生效。 |
| focusX | int | No |  |
| focusY | int | No |  |

