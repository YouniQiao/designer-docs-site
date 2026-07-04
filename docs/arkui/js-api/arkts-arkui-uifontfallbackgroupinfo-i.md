# UIFontFallbackGroupInfo

UI font configuration of the system.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@ohos.font';
```

## fallback

```TypeScript
fallback: Array<UIFontFallbackInfo>
```

Fallback fonts for the font family. If **fontSetName** is **""**, it indicates that the fonts can be used as fallback fonts for all font families.

**Type:** Array<UIFontFallbackInfo>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSetName

```TypeScript
fontSetName: string
```

Name of the font family corresponding to the fallback fonts.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

