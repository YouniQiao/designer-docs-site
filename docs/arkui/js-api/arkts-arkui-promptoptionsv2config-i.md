# PromptOptionsV2Config

Configuration information interface for PromptOptionsV2. Used to construct PromptOptionsV2 object.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MarginTypeV2, PromptOptionsV2, ExceptionPromptV2, PromptOptionsV2Config } from '@ohos.arkui.advanced.ExceptionPromptV2';
```

## actionText

```TypeScript
actionText?: ResourceStr
```

Text of the icon on the right of the ExceptionPromptV2. If this parameter is not set or is set to undefined, the text is not displayed.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

Icon style of the ExceptionPromptV2. If this parameter is not set or is set to undefined, the icon is not displayed.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isShown

```TypeScript
isShown?: boolean
```

Whether the ExceptionPromptV2 is displayed. true: The exception prompt is displayed. false: The exception prompt is hidden. Default value: false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## marginTop

```TypeScript
marginTop: Dimension
```

Top margin of the ExceptionPromptV2. Distance from the top to the content area of ExceptionPromptV2

**Type:** Dimension

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## marginType

```TypeScript
marginType: MarginTypeV2
```

Margin Type of the ExceptionPromptV2. Margin from the content area to the edge of the container

**Type:** MarginTypeV2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStyle

```TypeScript
symbolStyle?: SymbolGlyphModifier
```

Symbol icon style of the ExceptionPromptV2, which has higher priority than icon. If this parameter is not set or is set to undefined, the symbol icon is not displayed.

**Type:** SymbolGlyphModifier

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tip

```TypeScript
tip?: ResourceStr
```

Text content of the ExceptionPromptV2. By default, the following text resources are provided: 1. ohos_network_not_connected: displayed when no Internet connection. 2. ohos_network_connected_unstable: displayed when the Internet connection is unstable. 3. ohos_unstable_connect_server: displayed when the server fails to be connected. 4. ohos_custom_network_tips_left: displayed when an Internet connection is available but the location fails to be obtained. If this parameter is not set or is set to undefined, the text content is not displayed.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

