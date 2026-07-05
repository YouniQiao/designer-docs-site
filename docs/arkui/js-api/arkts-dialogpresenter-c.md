# DialogPresenter

提供统一的Dialog API。

**Since:** 26.1.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## dismiss

```TypeScript
dismiss(target: int | ComponentContent<Object>): Promise<void>
```

关闭对话框。 接受对话ID（由当前返回）或ComponentContent引用。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | int \| ComponentContent&lt;Object> | Yes | 要取消的对话ID或组件内容。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 不会返回任何值的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 103301 | Dialog content error. The ComponentContent is incorrect. |
| 103303 | Dialog content not found. The ComponentContent cannot be found. |

## present

```TypeScript
present(options?: dialog.DialogStyleOptions): Promise<DialogResult>
```

提供一个固定样式的对话框。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | dialog.DialogStyleOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogResult> | 用于返回对话结果的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 103306 | The dialog cannot be opened due to node mount failure. |
| 103308 | The dialog cannot be opened due to subwindow create failure. |

## present

```TypeScript
present(content: CustomBuilder | CustomBuilderWithId | ComponentContent<Object>, options?: dialog.DialogCustomOptions): Promise<DialogResult>
```

提供一个自定义样式的对话框，其中包含所提供的内容。 content参数通过联合类型接受CustomBuilder或ComponentContent： -CustomBuilder：自定义对话框内容的生成器函数。 - ComponentContent：支持状态驱动更新的ComponentContent。 > **说明** > isModal = true和showInSubWindow = true不能同时使用。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | CustomBuilder \| CustomBuilderWithId \| ComponentContent&lt;Object> | Yes | 自定义对话框内容。 |
| options | dialog.DialogCustomOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogResult> | 用于返回对话结果的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 103301 | Dialog content error. The ComponentContent is incorrect. |
| 103302 | Dialog content already exist. The ComponentContent has already been opened. |
| 103306 | The dialog cannot be opened due to node mount failure. |
| 103308 | The dialog cannot be opened due to subwindow create failure. |

## update

```TypeScript
update(content: ComponentContent<Object>, options?: dialog.DialogBaseOptions): Promise<void>
```

更新已呈现的自定义对话框。

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ComponentContent&lt;Object> | Yes | 用于标识对话框的内容。 |
| options | dialog.DialogBaseOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 不会返回任何值的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 103301 | Dialog content error. The ComponentContent is incorrect. |
| 103303 | Dialog content not found. The ComponentContent cannot be found. |

