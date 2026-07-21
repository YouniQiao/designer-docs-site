# ExceptionPrompt

Declare struct ExceptionPrompt higher-order component.

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct ExceptionPrompt--><!--Device-unnamed-export declare struct ExceptionPrompt-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ExceptionPrompt, MarginType, PromptOptions } from '@kit.ArkUI';
```

<a id="build"></a>
## build

```TypeScript
build(): void
```

The build function is a member function that must return an ArkTS component type (Element) to represent the component to be rendered as a user interface.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ExceptionPrompt-build(): void--><!--Device-ExceptionPrompt-build(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onActionTextClick

```TypeScript
onActionTextClick?: () => void
```

Callback when click the icon button.

**Type:** () =&gt; void

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ExceptionPrompt-onActionTextClick?: () => void--><!--Device-ExceptionPrompt-onActionTextClick?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTipClick

```TypeScript
onTipClick?: () => void
```

Callback when clicking the text on the left.

**Type:** () =&gt; void

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ExceptionPrompt-onTipClick?: () => void--><!--Device-ExceptionPrompt-onTipClick?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
@Prop options: PromptOptions
```

Configuration information of ExceptionPrompt.

**Type:** PromptOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ExceptionPrompt-@Prop options: PromptOptions--><!--Device-ExceptionPrompt-@Prop options: PromptOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

