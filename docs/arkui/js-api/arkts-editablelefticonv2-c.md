# EditableLeftIconV2

Declaration of the left icon configuration.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditableSaveButtonV2,EditableTitleBarStyleV2Options,EditableTitleBarStyleV2,EditableTitleBarItemV2,EditableLeftIconV2Options,EditableTitleBarMenuItemV2,EditableTitleBarV2,EditableTitleBarMenuItemV2Options,EditableSaveButtonV2Options,EditableTitleBarItemV2Options,EditableTitleV2Options,EditableTitleV2,EditableLeftIconV2,EditableLeftIconTypeV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: EditableLeftIconV2Options)
```

Constructor of EditableLeftIconV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EditableLeftIconV2Options | No |  |

## onAction

```TypeScript
public onAction?: OnActionCallback
```

Callback function when click on the left icon.

**Type:** OnActionCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconType

```TypeScript
public iconType: EditableLeftIconTypeV2
```

Icon type, Back or Cancel.

**Type:** EditableLeftIconTypeV2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
public defaultFocus: boolean
```

Whether to get focus by default.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

