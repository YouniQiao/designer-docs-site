# UIFontFallbackGroupInfo

系统的UI字体配置信息。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@kit.ArkUI';
```

## fontSetName

```TypeScript
fontSetName: string
```

备用字体集所对应的字体集名称。

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fallback

```TypeScript
fallback: Array<UIFontFallbackInfo>
```

表示以下列表为该字体集的备用字体，如果fontSetName为""，表示可以作为所有字体集的备用字体。

**Type:** Array<UIFontFallbackInfo>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

