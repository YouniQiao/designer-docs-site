# TextLayoutResult

Represents the text layout result.

**Since:** 24

<!--Device-text-interface TextLayoutResult--><!--Device-text-interface TextLayoutResult-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## correctRect

```TypeScript
correctRect: TextRectSize
```

Rectangle size of the paragraph after layout.

**Type:** TextRectSize

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-TextLayoutResult-correctRect: TextRectSize--><!--Device-TextLayoutResult-correctRect: TextRectSize-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fitStrRange

```TypeScript
fitStrRange: Array<Range>
```

Array of character ranges that can be completely displayed after text layout calculation.

**Type:** Array<Range>

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-TextLayoutResult-fitStrRange: Array<Range>--><!--Device-TextLayoutResult-fitStrRange: Array<Range>-End-->

**System capability:** SystemCapability.Graphics.Drawing

