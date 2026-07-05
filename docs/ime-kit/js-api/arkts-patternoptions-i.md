# PatternOptions

Define pattern options of keyboard.

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { Pattern,InputMethodListDialog,PatternOptions } from '@kit.IMEKit';
```

## defaultSelected

```TypeScript
defaultSelected?: int
```

Optional. Default selected pattern.

**Type:** int

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

## action

```TypeScript
action: (index: int) => void
```

Mandatory. Callback invoked when the pattern option changes.

**Type:** (index: int) => void

**Since:** 11

**System capability:** SystemCapability.MiscServices.InputMethodFramework

