# RunningFormInfo (System API)

The class of a running form information.

**Since:** 20

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## abilityName

```TypeScript
readonly abilityName: string
```

Obtains the class name of the ability to which this form belongs.

**Type:** string

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName: string
```

Obtains the bundle name of the application to which this form belongs.

**Type:** string

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## dimension

```TypeScript
readonly dimension: number
```

Obtains the grid style of this form. The value must be a positive integer, refer to {@link formInfo.FormDimension}.

**Type:** number

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## extraData

```TypeScript
readonly extraData?: Record<string, Object>
```

Obtains the extra data of the this form.

**Type:** Record<string, Object>

**Default:** -

**Since:** 12

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formDescription

```TypeScript
readonly formDescription: string
```

Obtains the description of this form.

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formId

```TypeScript
readonly formId: string
```

Obtains the id of the this form.

**Type:** string

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formLocation

```TypeScript
readonly formLocation: FormLocation
```

The location of this form.

**Type:** FormLocation

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formName

```TypeScript
readonly formName: string
```

Obtains the name of this form.

**Type:** string

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formUsageState

```TypeScript
readonly formUsageState: FormUsageState
```

Obtains the stage of form use.

**Type:** FormUsageState

**Default:** FormUsageState.USED

**Since:** 11

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## hostBundleName

```TypeScript
readonly hostBundleName: string
```

Obtains the bundle name of the form host application.

**Type:** string

**Default:** -

**Since:** 10

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## moduleName

```TypeScript
readonly moduleName: string
```

Obtains the name of the application module to which this form belongs.

**Type:** string

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## visibilityType

```TypeScript
readonly visibilityType: VisibilityType
```

Obtains the visibility of this form.

**Type:** VisibilityType

**Default:** -

**Since:** 10

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

