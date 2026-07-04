# PatternOptions

Define pattern options of keyboard.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { Pattern, InputMethodListDialog, PatternOptions } from '@ohos.inputMethodList';
```

## action

```TypeScript
action: (index: number) => void
```

Mandatory. Callback invoked when the pattern option changes.

**Type:** (index: number) => void

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## defaultSelected

```TypeScript
defaultSelected?: number
```

Optional. Default selected pattern.

**Type:** number

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## patterns

```TypeScript
patterns: Array<Pattern>
```

Mandatory. Resource of the pattern option.

**Type:** Array<Pattern>

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

