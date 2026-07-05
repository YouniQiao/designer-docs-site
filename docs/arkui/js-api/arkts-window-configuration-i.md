# Configuration

创建子窗口或系统窗口时的参数。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## defaultDensityEnabled

```TypeScript
defaultDensityEnabled?: boolean
```

是否使用系统默认Density，使用系统默认Density之后，窗口不会跟随系统显示大小变化重新布局。 当创建的系统窗口设置此参数为true时，表示当前窗口使用系统默认Density，且不会受到 [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12) 和[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)设置的主窗口以及 [setDefaultDensityEnabled()]window.Window.setDefaultDensityEnabled设置的本窗口的相关影响。 当创建的系统窗口设置此参数为false时，表示当前窗口不使用系统默认Density，且会受到 [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12) 和[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)设置的主窗口以及 [setDefaultDensityEnabled()]window.Window.setDefaultDensityEnabled设置的本窗口的相关影响。 默认为false。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## ctx

```TypeScript
ctx?: BaseContext
```

当前应用上下文信息。不设置，则默认为空。<br>FA模型下不需要使用该参数，即可创建子窗口，使用该参数时会报错。<br>Stage模型必须使用该参数，用于创建全局悬浮窗、模态窗或系统窗口。 <br>

**Type:** BaseContext

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## name

```TypeScript
name: string
```

窗口名称。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## title

```TypeScript
title?: string
```

`decorEnabled`属性设置为true时，窗口的标题内容。标题显示区域最右端不超过系统三键区域最左端， 超过部分以省略号表示。不设置，则默认为空字符串。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## decorEnabled

```TypeScript
decorEnabled?: boolean
```

是否显示窗口装饰，仅在windowType为TYPE_DIALOG时生效。true表示显示，false表示不显示。此参数默认值为false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## displayId

```TypeScript
displayId?: long
```

当前屏幕ID。不设置，则默认为父窗口屏幕ID。<br>该参数应为非负整数，且对应屏幕ID存在。<br>扩展屏、异源虚拟屏场景下，全局悬浮窗可通过设置屏幕ID显示在指定屏幕上。<br>模态窗、系统窗设置屏幕ID无效，默认为父窗口屏幕ID。

**Type:** long

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## parentId

```TypeScript
parentId?: int
```

父窗口ID。不设置，则默认为-1，默认父窗为当前应用上下文对应主窗。<br>FA模型下，该参数应为非负整数，且对应父窗口ID存在。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## windowType

```TypeScript
windowType: WindowType
```

窗口类型。

**Type:** WindowType

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## zIndex

```TypeScript
zIndex?: int
```

当前系统窗口的层级，仅在[WindowType]window.WindowType为TYPE_DYNAMIC时生效。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

