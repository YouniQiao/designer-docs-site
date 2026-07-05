# FormInfo

Provides information about a form.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

## Modules to Import

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## isTemplateForm

```TypeScript
readonly isTemplateForm?: boolean
```

Obtains whether the form is template form.

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## enableBlurBackground

```TypeScript
readonly enableBlurBackground?: boolean
```

Indicates whether the form uses a blur background provided by the form host.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## displayName

```TypeScript
displayName: string
```

Obtains the display name of this form.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## groupId

```TypeScript
readonly groupId?: string
```

Obtains the group id of the form.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName: string
```

Obtains the name of the application module to which this form belongs.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## description

```TypeScript
description: string
```

Obtains the description of this form.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isPrivacySensitive

```TypeScript
readonly isPrivacySensitive?: boolean
```

Obtains whether the form is privacy sensitive.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## transparencyEnabled

```TypeScript
transparencyEnabled: boolean
```

Indicates whether the form can be set as a transparent background

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## type

```TypeScript
type: FormType
```

Obtains the type of this form. Currently, JS forms are supported.

**Type:** FormType

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isFontScaleFollowSystem

```TypeScript
isFontScaleFollowSystem?: boolean
```

Obtains whether the font scaling factor follows system settings. <br>Default value:The default value is true.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## sceneAnimationParams

```TypeScript
readonly sceneAnimationParams?: SceneAnimationParams
```

Indicates the scene animation form params

**Type:** SceneAnimationParams

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## previewImages

```TypeScript
readonly previewImages?: Array<int>
```

Indicates the form previewImage IDs map corresponds to the \"supportDimensions\". The maximum length is +∞, positive integer.

**Type:** Array<int>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## jsComponentName

```TypeScript
jsComponentName: string
```

Obtains the JS component name of this JS form.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## renderingMode

```TypeScript
readonly renderingMode?: RenderingMode
```

Obtains the rendering mode of the form.

**Type:** RenderingMode

**Since:** 18

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## descriptionId

```TypeScript
descriptionId: int
```

Obtains the description id of this form. The value must be a positive integer.

**Type:** int

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## defaultDimension

```TypeScript
defaultDimension: int
```

Obtains the default grid style of this form. The value must be a positive integer, refer to {@link formInfo.FormDimension}.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isStandbySupported

```TypeScript
readonly isStandbySupported?: boolean
```

Obtains whether the form supports standby.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## abilityName

```TypeScript
abilityName: string
```

Obtains the class name of the ability to which this form belongs.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## formConfigAbility

```TypeScript
formConfigAbility: string
```

Obtains the form config ability about this form.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## funInteractionParams

```TypeScript
readonly funInteractionParams?: FunInteractionParams
```

Indicates the fun interaction form params

**Type:** FunInteractionParams

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## updateEnabled

```TypeScript
updateEnabled: boolean
```

Obtains the updateEnabled.

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## updateDuration

```TypeScript
updateDuration: int
```

Obtains the updateDuration. The value must be an integer within [0,336].

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isDynamic

```TypeScript
isDynamic: boolean
```

Obtains whether this form is a dynamic form.

**Type:** boolean

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## resizable

```TypeScript
readonly resizable?: boolean
```

Obtains the resizable of the form.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## displayNameId

```TypeScript
displayNameId: int
```

Obtains the displayName resource id of this form. The value must be a positive integer.

**Type:** int

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isStandbyAdapted

```TypeScript
readonly isStandbyAdapted?: boolean
```

Obtains whether the form is adapted for standby.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## supportedShapes

```TypeScript
supportedShapes: Array<int>
```

Obtains the shape supported by this form. The minimum length is 1, refer to {@link formInfo.FormShape}.

**Type:** Array<int>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## colorMode

```TypeScript
colorMode: ColorMode
```

Obtains the color mode of this form.

**Type:** ColorMode

**Since:** 9

**Deprecated since:** 20

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## supportDimensions

```TypeScript
supportDimensions: Array<int>
```

Obtains the grid styles supported by this form. The minimum length is 1, refer to {@link formInfo.FormDimension}.

**Type:** Array<int>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## isDefault

```TypeScript
isDefault: boolean
```

Checks whether this form is a default form.

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## customizeData

```TypeScript
customizeData: Record<string, string>
```

Obtains the custom data defined in this form.

**Type:** Record<string, string>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## scheduledUpdateTime

```TypeScript
scheduledUpdateTime: string
```

Obtains the scheduledUpdateTime.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## formVisibleNotify

```TypeScript
formVisibleNotify: boolean
```

Obtains whether notify visible of this form.

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## name

```TypeScript
name: string
```

Obtains the name of this form.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## bundleName

```TypeScript
bundleName: string
```

Obtains the bundle name of the application to which this form belongs.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

