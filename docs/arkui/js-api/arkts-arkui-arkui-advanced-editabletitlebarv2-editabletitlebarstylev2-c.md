# EditableTitleBarStyleV2

Declaration of the title bar style configuration.

**Since:** 26.0.0

<!--Device-unnamed-export declare class EditableTitleBarStyleV2--><!--Device-unnamed-export declare class EditableTitleBarStyleV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableSaveButtonV2, EditableTitleBarStyleV2Options, EditableTitleBarStyleV2, EditableTitleBarItemV2, EditableLeftIconV2Options, EditableTitleBarMenuItemV2, EditableTitleBarV2, EditableTitleBarMenuItemV2Options, EditableSaveButtonV2Options, EditableTitleBarItemV2Options, EditableTitleV2Options, EditableTitleV2, EditableLeftIconV2, EditableLeftIconTypeV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: EditableTitleBarStyleV2Options)
```

Constructor of EditableTitleBarStyleV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-constructor(options?: EditableTitleBarStyleV2Options)--><!--Device-EditableTitleBarStyleV2-constructor(options?: EditableTitleBarStyleV2Options)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [EditableTitleBarStyleV2Options](arkts-arkui-arkui-advanced-editabletitlebarv2-editabletitlebarstylev2options-i.md) | No | The style options of the title bar |

## backgroundBlurStyle

```TypeScript
public backgroundBlurStyle?: BlurStyle
```

Background blur style.

**Type:** BlurStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-public backgroundBlurStyle?: BlurStyle--><!--Device-EditableTitleBarStyleV2-public backgroundBlurStyle?: BlurStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
public backgroundColor?: ResourceColor
```

Background color.

**Type:** ResourceColor

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-public backgroundColor?: ResourceColor--><!--Device-EditableTitleBarStyleV2-public backgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentMargin

```TypeScript
public contentMargin?: LocalizedMargin
```

Content margin, supports RTL layout.

**Type:** LocalizedMargin

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-public contentMargin?: LocalizedMargin--><!--Device-EditableTitleBarStyleV2-public contentMargin?: LocalizedMargin-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## safeAreaEdges

```TypeScript
public safeAreaEdges?: Array<SafeAreaEdge>
```

Indicates the edges of the safe area.

**Type:** Array<SafeAreaEdge>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-public safeAreaEdges?: Array<SafeAreaEdge>--><!--Device-EditableTitleBarStyleV2-public safeAreaEdges?: Array<SafeAreaEdge>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## safeAreaTypes

```TypeScript
public safeAreaTypes?: Array<SafeAreaType>
```

Indicates the types of the safe area.

**Type:** Array<SafeAreaType>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarStyleV2-public safeAreaTypes?: Array<SafeAreaType>--><!--Device-EditableTitleBarStyleV2-public safeAreaTypes?: Array<SafeAreaType>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

