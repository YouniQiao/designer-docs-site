# PatternOptions

Define pattern options of keyboard.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { Pattern,InputMethodListDialog,PatternOptions } from '@kit.IMEKit';
```

## defaultSelected

```TypeScript
defaultSelected?: int
```

Optional. Default selected pattern.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## patterns

```TypeScript
patterns: Array<Pattern>
```

Mandatory. Resource of the pattern option.

**类型：** Array<Pattern>

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## action

```TypeScript
action: (index: int) => void
```

Mandatory. Callback invoked when the pattern option changes.

**类型：** (index: int) => void

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

