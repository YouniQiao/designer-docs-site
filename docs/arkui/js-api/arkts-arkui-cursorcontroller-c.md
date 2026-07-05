# CursorController

Provides the capability to set cursor styles. > **NOTE** > > - The initial APIs of this class are supported since API version 12. > > - In the following API examples, you must first use [getCursorController()](arkts-arkui-uicontext-c.md#getcursorcontroller-1) in > **UIContext** to obtain a **CursorController** instance, and then call the APIs using the obtained instance.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## restoreDefault

```TypeScript
restoreDefault(): void
```

Restores the default cursor style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setCursor

```TypeScript
setCursor(value: PointerStyle): void
```

Sets the cursor style. > **NOTE** > > This API does not take effect immediately. The cursor style will be updated in the next rendering frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PointerStyle | Yes | Pointer style. |

## setCustomCursor

```TypeScript
setCustomCursor(value: image.PixelMap, focusX?: number, focusY?: number): void
```

Sets the custom cursor style. > **NOTE** > > This API does not take effect immediately. The cursor style will be updated in the next rendering frame.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | image.PixelMap | Yes | Pixel map of the custom mouse cursor style. |
| focusX | number | No | X coordinate of the custom cursor's hotspot. The hotspot refers to the actual locationwhere the click occurs.<br>Default value: **0**<br>Unit: px<br>Value range: [0, +∞) |
| focusY | number | No | Y coordinate of the custom cursor's hotspot.<br>Default value: **0**<br>Unit: px<br>Valuerange: [0, +∞) |

