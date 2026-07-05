# FocusController

提供控制焦点的能力，如清除、移动和激活焦点等功能。 > **说明：** > > 以下API需先使用UIContext中的[getFocusController()](arkts-uicontext-c.md#getFocusController)方法获取FocusController实例，再通过该实例调用对应方法。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## activate

```TypeScript
activate(isActive: boolean, autoInactive?: boolean): void
```

设置当前界面的[焦点激活态](docroot://ui/arkts-common-events-focus-event.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isActive | boolean | Yes | 设置是否进入/退出焦点激活态。 true表示设置进入焦点激活态，false表示设置退出焦点激活态。 |
| autoInactive | boolean | No |  |

## clearFocus

```TypeScript
clearFocus(): void
```

清除焦点，将焦点强制转移到页面根容器节点，焦点链路上其他节点失焦。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isActive

```TypeScript
isActive(): boolean
```

返回UI实例的焦点激活态。 焦点激活态可参考[基础概念：焦点激活态](docroot://ui/arkts-common-events-focus-event.md#基础概念)。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回UI实例的焦点激活态。true表示当前进入焦点激活态，false表示当前已退出焦点激活态。 |

## requestFocus

```TypeScript
requestFocus(key: string): void
```

通过组件的id将焦点转移到组件树对应的实体节点，当前帧生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 节点对应的[组件标识]common。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 150001 | the component cannot be focused. |
| 150002 | This component has an unfocusable ancestor. |
| 150003 | the component is not on tree or does not exist. |

## setAutoFocusTransfer

```TypeScript
setAutoFocusTransfer(isAutoFocusTransfer: boolean): void
```

设置页面切换时，新的页面是否需要主动获取焦点。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAutoFocusTransfer | boolean | Yes | 设置页面切换时，新的页面是否需要主动获取焦点，例如[Router](arkts-router.md#router)、  [Navigation]navigation、[Menu]menu、[Dialog]@ohos.arkui.advanced.Dialog、  [Popup]@ohos.arkui.advanced.Popup等。true表示需要主动获取焦点，false表示不需要主动获取焦点。默认值为true。 |

## setKeyProcessingMode

```TypeScript
setKeyProcessingMode(mode: KeyProcessingMode): void
```

设置按键事件处理的优先级。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | KeyProcessingMode | Yes | 按键处理模式。 |

