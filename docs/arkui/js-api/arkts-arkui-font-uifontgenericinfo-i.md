# UIFontGenericInfo

UI font configuration of the system.

**Since:** 11

<!--Device-font-interface UIFontGenericInfo--><!--Device-font-interface UIFontGenericInfo-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@kit.ArkUI';
```

## adjust

```TypeScript
adjust: Array<UIFontAdjustInfo>
```

Weight of the font when displayed, which corresponds to the original weight.

**Type:** Array<UIFontAdjustInfo>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIFontGenericInfo-adjust: Array<UIFontAdjustInfo>--><!--Device-UIFontGenericInfo-adjust: Array<UIFontAdjustInfo>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alias

```TypeScript
alias: Array<UIFontAliasInfo>
```

Font alias configuration information.

**Type:** Array<UIFontAliasInfo>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIFontGenericInfo-alias: Array<UIFontAliasInfo>--><!--Device-UIFontGenericInfo-alias: Array<UIFontAliasInfo>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## family

```TypeScript
family: string
```

Font family name, which is the value of **family** specified in the font file.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIFontGenericInfo-family: string--><!--Device-UIFontGenericInfo-family: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

