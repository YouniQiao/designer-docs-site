# FormInfo

Provides information about a form.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

## 导入模块

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## isTemplateForm

```TypeScript
readonly isTemplateForm?: boolean
```

Obtains whether the form is template form.

**类型：** boolean

**起始版本：** 23

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## enableBlurBackground

```TypeScript
readonly enableBlurBackground?: boolean
```

Indicates whether the form uses a blur background provided by the form host.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## displayName

```TypeScript
displayName: string
```

Obtains the display name of this form.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## groupId

```TypeScript
readonly groupId?: string
```

Obtains the group id of the form.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## moduleName

```TypeScript
moduleName: string
```

Obtains the name of the application module to which this form belongs.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## description

```TypeScript
description: string
```

Obtains the description of this form.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isPrivacySensitive

```TypeScript
readonly isPrivacySensitive?: boolean
```

Obtains whether the form is privacy sensitive.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## transparencyEnabled

```TypeScript
transparencyEnabled: boolean
```

Indicates whether the form can be set as a transparent background

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## type

```TypeScript
type: FormType
```

Obtains the type of this form. Currently, JS forms are supported.

**类型：** FormType

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isFontScaleFollowSystem

```TypeScript
isFontScaleFollowSystem?: boolean
```

Obtains whether the font scaling factor follows system settings. <br>Default value:The default value is true.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## sceneAnimationParams

```TypeScript
readonly sceneAnimationParams?: SceneAnimationParams
```

Indicates the scene animation form params

**类型：** SceneAnimationParams

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## previewImages

```TypeScript
readonly previewImages?: Array<int>
```

Indicates the form previewImage IDs map corresponds to the \"supportDimensions\". The maximum length is +∞, positive integer.

**类型：** Array<int>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## jsComponentName

```TypeScript
jsComponentName: string
```

Obtains the JS component name of this JS form.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## renderingMode

```TypeScript
readonly renderingMode?: RenderingMode
```

Obtains the rendering mode of the form.

**类型：** RenderingMode

**起始版本：** 18

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## descriptionId

```TypeScript
descriptionId: int
```

Obtains the description id of this form. The value must be a positive integer.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## defaultDimension

```TypeScript
defaultDimension: int
```

Obtains the default grid style of this form. The value must be a positive integer, refer to {@link formInfo.FormDimension}.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isStandbySupported

```TypeScript
readonly isStandbySupported?: boolean
```

Obtains whether the form supports standby.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## abilityName

```TypeScript
abilityName: string
```

Obtains the class name of the ability to which this form belongs.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## formConfigAbility

```TypeScript
formConfigAbility: string
```

Obtains the form config ability about this form.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## funInteractionParams

```TypeScript
readonly funInteractionParams?: FunInteractionParams
```

Indicates the fun interaction form params

**类型：** FunInteractionParams

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## updateEnabled

```TypeScript
updateEnabled: boolean
```

Obtains the updateEnabled.

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## updateDuration

```TypeScript
updateDuration: int
```

Obtains the updateDuration. The value must be an integer within [0,336].

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isDynamic

```TypeScript
isDynamic: boolean
```

Obtains whether this form is a dynamic form.

**类型：** boolean

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## resizable

```TypeScript
readonly resizable?: boolean
```

Obtains the resizable of the form.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## displayNameId

```TypeScript
displayNameId: int
```

Obtains the displayName resource id of this form. The value must be a positive integer.

**类型：** int

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isStandbyAdapted

```TypeScript
readonly isStandbyAdapted?: boolean
```

Obtains whether the form is adapted for standby.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## supportedShapes

```TypeScript
supportedShapes: Array<int>
```

Obtains the shape supported by this form. The minimum length is 1, refer to {@link formInfo.FormShape}.

**类型：** Array<int>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## colorMode

```TypeScript
colorMode: ColorMode
```

Obtains the color mode of this form.

**类型：** ColorMode

**起始版本：** 9

**废弃版本：** 20

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## supportDimensions

```TypeScript
supportDimensions: Array<int>
```

Obtains the grid styles supported by this form. The minimum length is 1, refer to {@link formInfo.FormDimension}.

**类型：** Array<int>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## isDefault

```TypeScript
isDefault: boolean
```

Checks whether this form is a default form.

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## customizeData

```TypeScript
customizeData: Record<string, string>
```

Obtains the custom data defined in this form.

**类型：** Record<string, string>

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## scheduledUpdateTime

```TypeScript
scheduledUpdateTime: string
```

Obtains the scheduledUpdateTime.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## formVisibleNotify

```TypeScript
formVisibleNotify: boolean
```

Obtains whether notify visible of this form.

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## name

```TypeScript
name: string
```

Obtains the name of this form.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## bundleName

```TypeScript
bundleName: string
```

Obtains the bundle name of the application to which this form belongs.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

