# EditableTitleBarMenuItemV2

Declaration of the menu item on the right side.

**Since:** 26.0.0

**Decorator:** @ObservedV2

<!--Device-unnamed-export declare class EditableTitleBarMenuItemV2--><!--Device-unnamed-export declare class EditableTitleBarMenuItemV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableSaveButtonV2, EditableTitleBarStyleV2Options, EditableTitleBarStyleV2, EditableTitleBarItemV2, EditableLeftIconV2Options, EditableTitleBarMenuItemV2, EditableTitleBarV2, EditableTitleBarMenuItemV2Options, EditableSaveButtonV2Options, EditableTitleBarItemV2Options, EditableTitleV2Options, EditableTitleV2, EditableLeftIconV2, EditableLeftIconTypeV2 } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options?: EditableTitleBarMenuItemV2Options)
```

Constructor of EditableTitleBarMenuItemV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-constructor(options?: EditableTitleBarMenuItemV2Options)--><!--Device-EditableTitleBarMenuItemV2-constructor(options?: EditableTitleBarMenuItemV2Options)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [EditableTitleBarMenuItemV2Options](arkts-arkui-arkui-advanced-editabletitlebarv2-editabletitlebarmenuitemv2options-i.md) | No | The options of the menu item |

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

Accessibility description.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public accessibilityDescription?: ResourceStr--><!--Device-EditableTitleBarMenuItemV2-public accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
public accessibilityLevel: string
```

Accessibility level, options: 'auto', 'yes', 'no'.

**Type:** string

**Default:** 'auto'

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public accessibilityLevel: string--><!--Device-EditableTitleBarMenuItemV2-public accessibilityLevel: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
public accessibilityText?: ResourceStr
```

Accessibility text for screen reader.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public accessibilityText?: ResourceStr--><!--Device-EditableTitleBarMenuItemV2-public accessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
public action?: OnActionCallback
```

Callback function when click on this menu item.

**Type:** OnActionCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public action?: OnActionCallback--><!--Device-EditableTitleBarMenuItemV2-public action?: OnActionCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
public defaultFocus: boolean
```

Whether to get focus by default.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public defaultFocus: boolean--><!--Device-EditableTitleBarMenuItemV2-public defaultFocus: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isEnabled

```TypeScript
public isEnabled: boolean
```

Whether to enable this menu item.

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public isEnabled: boolean--><!--Device-EditableTitleBarMenuItemV2-public isEnabled: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
public label?: ResourceStr
```

Label text for long press dialog.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public label?: ResourceStr--><!--Device-EditableTitleBarMenuItemV2-public label?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStyle

```TypeScript
public symbolStyle?: SymbolGlyphModifier
```

Symbol icon style modifier.

**Type:** SymbolGlyphModifier

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public symbolStyle?: SymbolGlyphModifier--><!--Device-EditableTitleBarMenuItemV2-public symbolStyle?: SymbolGlyphModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
public value: ResourceStr
```

Icon resource, supports Symbol or Image.

**Type:** ResourceStr

**Default:** ''

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableTitleBarMenuItemV2-public value: ResourceStr--><!--Device-EditableTitleBarMenuItemV2-public value: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

