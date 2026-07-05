# UIFontAliasInfo

系统的UI字体配置信息。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@kit.ArkUI';
```

## name

```TypeScript
name: string
```

别名名称。

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## weight

```TypeScript
weight: number
```

当weight>0时表示此字体集只包含所指定weight的字体，当weight=0时，表示此字体集包含所有字体。 可返回的值有0、100、400、700、900。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

