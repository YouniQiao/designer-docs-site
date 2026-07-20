# EditableTitleBar

Declaration of the editable title bar.

**Since:** 22

<!--Device-unnamed-export declare struct EditableTitleBar--><!--Device-unnamed-export declare struct EditableTitleBar-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableTitleBarOptions, EditableTitleBarMenuItem, EditableTitleBarItem, EditableLeftIconType, EditableTitleBar } from '@kit.ArkUI';
```

## contentMargin

```TypeScript
@Prop contentMargin?: LocalizedMargin
```

Sets the content margins.

**Type:** LocalizedMargin

**Default:** {start: LengthMetrics.resource($r('sys.float.margin_left')),
<br> end: LengthMetrics.resource($r('sys.float.margin_right'))}

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EditableTitleBar-@Prop contentMargin?: LocalizedMargin--><!--Device-EditableTitleBar-@Prop contentMargin?: LocalizedMargin-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageItem

```TypeScript
imageItem?: EditableTitleBarItem
```

Image item between the left icon and the title.

**Type:** EditableTitleBarItem

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EditableTitleBar-imageItem?: EditableTitleBarItem--><!--Device-EditableTitleBar-imageItem?: EditableTitleBarItem-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isSaveIconRequired

```TypeScript
isSaveIconRequired: boolean
```

Whether to require the save icon.

**Type:** boolean

**Default:** true

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EditableTitleBar-isSaveIconRequired: boolean--><!--Device-EditableTitleBar-isSaveIconRequired: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leftIconDefaultFocus

```TypeScript
leftIconDefaultFocus?: boolean
```

Sets the default focus state of left icon.

**Type:** boolean

**Default:** { false }

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-EditableTitleBar-leftIconDefaultFocus?: boolean--><!--Device-EditableTitleBar-leftIconDefaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leftIconStyle

```TypeScript
leftIconStyle: EditableLeftIconType
```

Style of the left icon.

**Type:** EditableLeftIconType

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-EditableTitleBar-leftIconStyle: EditableLeftIconType--><!--Device-EditableTitleBar-leftIconStyle: EditableLeftIconType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menuItems

```TypeScript
menuItems?: Array<EditableTitleBarMenuItem>
```

Menu items on the right side.

**Type:** Array<EditableTitleBarMenuItem>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-EditableTitleBar-menuItems?: Array<EditableTitleBarMenuItem>--><!--Device-EditableTitleBar-menuItems?: Array<EditableTitleBarMenuItem>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCancel

```TypeScript
onCancel?: () => void
```

Callback function when click on the cancel icon at the left side.

**Type:** () => void

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-EditableTitleBar-onCancel?: () => void--><!--Device-EditableTitleBar-onCancel?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSave

```TypeScript
onSave?: () => void
```

Callback function when click on the save icon at the right side.

**Type:** () => void

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-EditableTitleBar-onSave?: () => void--><!--Device-EditableTitleBar-onSave?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: EditableTitleBarOptions
```

Indicates the options of the title bar.

**Type:** EditableTitleBarOptions

**Default:** {expandSafeAreaTypes: SafeAreaType.SYSTEM, expandSafeAreaEdges: SafeAreaEdge.TOP}

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EditableTitleBar-options: EditableTitleBarOptions--><!--Device-EditableTitleBar-options: EditableTitleBarOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## saveIconDefaultFocus

```TypeScript
saveIconDefaultFocus?: boolean
```

Sets the default focus state of save icon.

**Type:** boolean

**Default:** { false }

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-EditableTitleBar-saveIconDefaultFocus?: boolean--><!--Device-EditableTitleBar-saveIconDefaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

Sub-Title of this title bar.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EditableTitleBar-subtitle?: ResourceStr--><!--Device-EditableTitleBar-subtitle?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: ResourceStr
```

Title of this title bar.

**Type:** ResourceStr

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-EditableTitleBar-title: ResourceStr--><!--Device-EditableTitleBar-title: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

