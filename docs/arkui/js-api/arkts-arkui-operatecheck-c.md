# OperateCheck

Declare type OperateCheck

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OperateCheck, OperateIcon, ComposeListItem, OperateItem, IconType, ContentItem, OperateButton } from '@kit.ArkUI';
```

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

The accessibilityDescription of the checkbox/switch/radio.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

The accessibilityLevel of the checkbox/switch/radio.

**Type:** string

**Default:** "auto"

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

The accessibilityText of the checkbox/switch/radio.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isCheck

```TypeScript
isCheck?: boolean
```

Whether is checked by default.

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: (value: boolean) => void
```

Callback function when operate the checkbox/switch/radio.

**Type:** (value: boolean) => void

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

