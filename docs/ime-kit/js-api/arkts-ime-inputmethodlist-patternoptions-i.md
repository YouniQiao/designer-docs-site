# PatternOptions

Define pattern options of keyboard.

**Since:** 11

<!--Device-unnamed-export interface PatternOptions--><!--Device-unnamed-export interface PatternOptions-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { Pattern, InputMethodListDialog, PatternOptions } from '@kit.IMEKit';
```

## action

```TypeScript
action: (index: number) => void
```

Mandatory. Callback invoked when the pattern option changes.

**Type:** (index: number) => void

**Since:** 11

<!--Device-PatternOptions-action: (index: int) => void--><!--Device-PatternOptions-action: (index: int) => void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## defaultSelected

```TypeScript
defaultSelected?: number
```

Optional. Default selected pattern.

**Type:** number

**Since:** 11

<!--Device-PatternOptions-defaultSelected?: int--><!--Device-PatternOptions-defaultSelected?: int-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## patterns

```TypeScript
patterns: Array<Pattern>
```

Mandatory. Resource of the pattern option.

**Type:** Array<Pattern>

**Since:** 11

<!--Device-PatternOptions-patterns: Array<Pattern>--><!--Device-PatternOptions-patterns: Array<Pattern>-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

