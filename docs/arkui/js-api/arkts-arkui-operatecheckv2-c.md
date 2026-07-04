# OperateCheckV2

Declare type OperateCheckV2

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OperateCheckV2Options, ComposeListItemV2, IconTypeV2, OperateIconV2, OperateCheckV2, OperateItemV2, OperateItemV2Options, OperateIconV2Options, OperateButtonV2, OperateButtonV2Options, ContentItemV2, ContentItemV2Options } from '@ohos.arkui.advanced.ComposeListItemV2';
```

## constructor

```TypeScript
constructor(options?: OperateCheckV2Options)
```

The constructor of OperateCheckV2.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | OperateCheckV2Options | No | The options of OperateCheckV2 |

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

The accessibilityDescription of the checkbox/switch/radio.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

The accessibilityLevel of the checkbox/switch/radio.

**Type:** string

**Default:** auto

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
public accessibilityText?: ResourceStr
```

The accessibilityText of the checkbox/switch/radio.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isCheck

```TypeScript
public isCheck?: boolean
```

Whether is checked on default.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
public onChange?: OnChangeCallback
```

Callback function when operate the checkbox/switch/radio.

**Type:** OnChangeCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

