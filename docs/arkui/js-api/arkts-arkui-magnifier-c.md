# Magnifier

Provides the capability of displaying and hiding of the magnifier. The magnifier enlarges the component content for you to view the component details. > **NOTE** > > - In the following API examples, you must first use [getMagnifier()](arkts-arkui-uicontext-c.md#getmagnifier-1) in **UIContext** > to obtain a **Magnifier** instance, and then call the APIs using the obtained instance. > > - The magnifier capability of this class does not affect that of text components. For text components, you are > advised to use the built-in magnifier capability.

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

## bind

```TypeScript
bind(id: string): void
```

Binds the magnifier to the component with the specified ID.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Component ID, which can be set through the universal attribute [id](../arkts-components/arkts-arkui-commonmethod-c.md#id-1)or [key](../arkts-components/arkts-arkui-commonmethod-c.md#key-1). If the component ID is an empty string or no component is found based on thespecified ID, the magnifier is not displayed. |

## show

```TypeScript
show(x: number, y: number): void
```

Sets the position of the component content displayed by the magnifier relative to the upper left corner of the component. After the setting is successful, the magnifier displays the content centered at the coordinate point. > **NOTE** > > When the content of the component bound to the magnifier changes, the magnifier does not automatically update the > displayed content. You need to call the **show** API to update the displayed content of the magnifier.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Horizontal coordinate of the component content displayed by the magnifier, relative to thecomponent itself, in vp. If the coordinate value is greater than the component width or less than 0, themagnifier is not displayed. If the value is **undefined**, the current display status of the magnifier isretained. |
| y | number | Yes | Vertical coordinate of the component content displayed by the magnifier, relative to thecomponent itself, in vp. If the coordinate value is greater than the component height or less than 0, themagnifier is not displayed. If the value is **undefined**, the current display status of the magnifier isretained. |

## unbind

```TypeScript
unbind(): void
```

Unbinds the magnifier from the current component.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

