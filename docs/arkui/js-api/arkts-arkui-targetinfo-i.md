# TargetInfo

Specifies the target node for component binding.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## componentId

```TypeScript
componentId?: number
```

Unique ID of the custom component where the target node is located. When the above **id** is specified as a string, this property can be used to narrow down the scope, helping you ensure the uniqueness of **id: string** within a certain range.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id: string | number
```

Target node for binding popups or menus.<br>**NOTE**<br>1. When **id** is a number, it corresponds to the component's **UniqueID**, whose uniqueness is guaranteed by the system.<br>2. When **id** is a string, it corresponds to the component specified by the universal attribute [id](../arkts-components/arkts-arkui-commonmethod-c.md#id-1). You must ensure the uniqueness of this ID, although there may be multiple instances.

**Type:** string | number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

