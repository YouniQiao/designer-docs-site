# EditableLeftIconV2

Declaration of the left icon configuration.

**Since:** 26.0.0

<!--Device-unnamed-export declare class EditableLeftIconV2--><!--Device-unnamed-export declare class EditableLeftIconV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableSaveButtonV2, EditableTitleBarStyleV2Options, EditableTitleBarStyleV2, EditableTitleBarItemV2, EditableLeftIconV2Options, EditableTitleBarMenuItemV2, EditableTitleBarV2, EditableTitleBarMenuItemV2Options, EditableSaveButtonV2Options, EditableTitleBarItemV2Options, EditableTitleV2Options, EditableTitleV2, EditableLeftIconV2, EditableLeftIconTypeV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: EditableLeftIconV2Options)
```

Constructor of EditableLeftIconV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableLeftIconV2-constructor(options?: EditableLeftIconV2Options)--><!--Device-EditableLeftIconV2-constructor(options?: EditableLeftIconV2Options)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [EditableLeftIconV2Options](arkts-arkui-arkui-advanced-editabletitlebarv2-editablelefticonv2options-i.md) | No | The options of the left icon |

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

<!--Device-EditableLeftIconV2-public defaultFocus: boolean--><!--Device-EditableLeftIconV2-public defaultFocus: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconType

```TypeScript
public iconType: EditableLeftIconTypeV2
```

Icon type, Back or Cancel.

**Type:** EditableLeftIconTypeV2

**Default:** EditableLeftIconTypeV2.Back

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableLeftIconV2-public iconType: EditableLeftIconTypeV2--><!--Device-EditableLeftIconV2-public iconType: EditableLeftIconTypeV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onAction

```TypeScript
public onAction?: OnActionCallback
```

Callback function when click on the left icon.

**Type:** OnActionCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EditableLeftIconV2-public onAction?: OnActionCallback--><!--Device-EditableLeftIconV2-public onAction?: OnActionCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

