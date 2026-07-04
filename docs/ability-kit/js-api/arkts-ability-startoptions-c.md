---
last_update:
  date: 2026-07-04
---

# StartOptions

StartOptions is the basic communication component of the system.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { StartOptions } from '@ohos.app.ability.StartOptions';
```

## completionHandler

```TypeScript
completionHandler?: CompletionHandler
```

The completion handler of StartAbility.

**Type:** CompletionHandler

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## displayId

```TypeScript
displayId?: number
```

The type of displayId

**Type:** number

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## hideStartWindow

```TypeScript
hideStartWindow?: boolean
```

Hide start window or not when launch ability from same bundle.

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## maxWindowHeight

```TypeScript
maxWindowHeight?: number
```

The max height of window rectangle, in vp.

**Type:** number

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## maxWindowWidth

```TypeScript
maxWindowWidth?: number
```

The max width of window rectangle, in vp.

**Type:** number

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## minWindowHeight

```TypeScript
minWindowHeight?: number
```

The min height of window rectangle, in vp.

**Type:** number

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## minWindowWidth

```TypeScript
minWindowWidth?: number
```

The min width of window rectangle, in vp.

**Type:** number

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processMode

```TypeScript
processMode?: contextConstant.ProcessMode
```

The process mode. This property only takes effect when calling UIAbilityContext.startAbility. The properties processMode and startupVisibility must be set simultaneously.

**Type:** contextConstant.ProcessMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## splitRatio

```TypeScript
splitRatio?: window.SplitRatioPreference
```

The type of split ratio preference

**Type:** window.SplitRatioPreference

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startWindowBackgroundColor

```TypeScript
startWindowBackgroundColor?: string
```

The start window backgroundColor.

**Type:** string

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startWindowIcon

```TypeScript
startWindowIcon?: image.PixelMap
```

The start window Icon.

**Type:** image.PixelMap

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startupVisibility

```TypeScript
startupVisibility?: contextConstant.StartupVisibility
```

The ability visibility after the new process startup. This property only takes effect when calling UIAbilityContext.startAbility. The properties processMode and startupVisibility must be set simultaneously.

**Type:** contextConstant.StartupVisibility

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## supportWindowModes

```TypeScript
supportWindowModes?: Array<bundleManager.SupportWindowMode>
```

The support window modes.

**Type:** Array<bundleManager.SupportWindowMode>

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowCreateParams

```TypeScript
windowCreateParams?: window.WindowCreateParams
```

Indicates the window creation parameters during application startup.

**Type:** window.WindowCreateParams

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowHeight

```TypeScript
windowHeight?: number
```

The height of window rectangle, in px.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowLeft

```TypeScript
windowLeft?: number
```

The left position of window rectangle, in px.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowMode

```TypeScript
windowMode?: number
```

The type of {@link ohos.app.ability.AbilityConstant#WindowMode} {@link ohos.app.ability.AbilityConstant#WindowMode.WINDOW_MODE_SPLIT_PRIMARY} and {@link ohos.app.ability.AbilityConstant#WindowMode.WINDOW_MODE_SPLIT_SECONDARY} are valid only in intra-app redirection scenarios.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowTop

```TypeScript
windowTop?: number
```

The top position of window rectangle, in px.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## windowWidth

```TypeScript
windowWidth?: number
```

The width of window rectangle, in px.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## withAnimation

```TypeScript
withAnimation?: boolean
```

The target ability with animation or without

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

