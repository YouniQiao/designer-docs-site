# EditableSaveButtonV2

Declaration of the save button configuration.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableSaveButtonV2, EditableTitleBarStyleV2Options, EditableTitleBarStyleV2, EditableTitleBarItemV2, EditableLeftIconV2Options, EditableTitleBarMenuItemV2, EditableTitleBarV2, EditableTitleBarMenuItemV2Options, EditableSaveButtonV2Options, EditableTitleBarItemV2Options, EditableTitleV2Options, EditableTitleV2, EditableLeftIconV2, EditableLeftIconTypeV2 } from '@ohos.arkui.advanced.EditableTitleBarV2';
```

## constructor

```TypeScript
constructor(options?: EditableSaveButtonV2Options)
```

Constructor of EditableSaveButtonV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EditableSaveButtonV2Options | No | The options of the save button |

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isRequired

```TypeScript
public isRequired: boolean
```

Whether to show the save button.

**Type:** boolean

**Default:** true

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onAction

```TypeScript
public onAction?: OnActionCallback
```

Callback function when click on the save button.

**Type:** OnActionCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

