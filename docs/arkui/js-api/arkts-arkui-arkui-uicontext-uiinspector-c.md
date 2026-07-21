# UIInspector

Provides APIs for registering the component layout and drawing display completion callbacks.

**Since:** 10

<!--Device-unnamed-export class UIInspector--><!--Device-unnamed-export class UIInspector-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="createcomponentobserver"></a>
## createComponentObserver

```TypeScript
createComponentObserver(id: string): inspector.ComponentObserver
```

Registers a callback for layout and drawing display completion notifications for a specific component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-UIInspector-createComponentObserver(id: string): inspector.ComponentObserver--><!--Device-UIInspector-createComponentObserver(id: string): inspector.ComponentObserver-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | ID of the target component, set using the universal attributes [id](../arkts-components/arkts-arkui-commonmethod-c.md#id-1)or [key](../arkts-components/arkts-arkui-commonmethod-c.md#key-1). |

**Return value:**

| Type | Description |
| --- | --- |
| inspector.ComponentObserver | Component observer, which is used to register or unregister listeners for completion of component layout or drawing display. |

<a id="createcomponentobserver-1"></a>
## createComponentObserver

```TypeScript
createComponentObserver(id: string | number): inspector.ComponentObserver
```

Registers a callback for layout and drawing display completion notifications for a specific component.<br>Display refers to the process of sending the drawing command of a node to the graphics service and completing<br>the display. Compared with createComponentObserver, this API supports the input of **UniqueID** (the unique ID<br>allocated by the system to a node).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIInspector-createComponentObserver(id: string | number): inspector.ComponentObserver--><!--Device-UIInspector-createComponentObserver(id: string | number): inspector.ComponentObserver-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string \| number | Yes | When the type is string, it indicates the ID of the specified component, set using the universal attributes [id](../arkts-components/arkts-arkui-commonmethod-c.md#id-1) or [key](../arkts-components/arkts-arkui-commonmethod-c.md#key-1).<br>When the type is number, it indicates the unique ID of the node allocated by the system, obtained through<br>[getUniqueId](arkts-arkui-framenode-c.md#getuniqueid-1). When using the unique ID to create a listener handle,<br>ensure that the node corresponding to the unique ID exists. Otherwise, the listener does not take effect.<br>The value of the parameter in the number type is an integer ranging from 1 to 2147483647. |

**Return value:**

| Type | Description |
| --- | --- |
| inspector.ComponentObserver | Component observer, which is used to register or unregister listeners for completion of component layout or drawing display. |

