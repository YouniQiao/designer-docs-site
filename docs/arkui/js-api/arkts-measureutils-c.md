# MeasureUtils

class MeasureUtils <p><strong>NOTE</strong>: <br>You must first use getMeasureUtils() in UIContext to obtain a MeasureUtils instance, and then call the APIs using the obtained instance. </p>

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## getParagraphs

```TypeScript
getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>
```

获取样式字符串的布局信息。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 样式化的字符串值。 |
| options | TextLayoutOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Paragraph> | 段落结果 |

## measureText

```TypeScript
measureText(options: MeasureOptions): number
```

Obtains the width of the specified text in a single line layout.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | MeasureOptions | Yes | Options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | - The unit is px. |

## measureTextSize

```TypeScript
measureTextSize(options: MeasureOptions): SizeOptions
```

Obtains the width and height of the specified text in a single line layout.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | MeasureOptions | Yes | Options of measure area occupied by text. |

**Return value:**

| Type | Description |
| --- | --- |
| SizeOptions | width and height for text to display.The return values for text width and height are both  in px. |

