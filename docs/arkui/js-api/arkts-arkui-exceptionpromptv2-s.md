# ExceptionPromptV2

Declare struct ExceptionPromptV2 higher-order component.
The exception prompt component is used to show an error message when an error arises.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MarginTypeV2, PromptOptionsV2, ExceptionPromptV2, PromptOptionsV2Config } from '@kit.ArkUI';
```

## onActionTextClick

```TypeScript
onActionTextClick?: OnActionTextClickCallback
```

Callback invoked when the icon on the right is clicked.

**Type:** OnActionTextClickCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTipClick

```TypeScript
onTipClick?: OnTipClickCallback
```

Callback invoked when the prompt text on the left is clicked.

**Type:** OnTipClickCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: PromptOptionsV2
```

ExceptionPromptV2 configuration.

**Type:** PromptOptionsV2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

