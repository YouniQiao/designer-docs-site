# SplitLayout

Declare SplitLayout.The SplitLayout is used for upper and lower graphic layouts.

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SplitLayout } from '@ohos.arkui.advanced.SplitLayout';
```

## container

```TypeScript
@BuilderParam container: () => void
```

Container in the user-defined splitlayout display area.

**Type:** () => void

**Since:** 22

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mainImage

```TypeScript
@State mainImage: ResourceStr
```

Image in the layout.

**Type:** ResourceStr

**Since:** 22

**Decorator:** @State

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryText

```TypeScript
@Prop primaryText: ResourceStr
```

Title text in the layout.

**Type:** ResourceStr

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryText

```TypeScript
@Prop secondaryText?: ResourceStr
```

Description text in the layout.

**Type:** ResourceStr

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tertiaryText

```TypeScript
@Prop tertiaryText?: ResourceStr
```

Auxiliary text in the layout.

**Type:** ResourceStr

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

