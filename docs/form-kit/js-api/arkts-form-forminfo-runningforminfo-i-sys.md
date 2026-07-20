# RunningFormInfo (System API)

The class of a running form information.

**Since:** 20

<!--Device-formInfo-interface RunningFormInfo--><!--Device-formInfo-interface RunningFormInfo-End-->

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

<!--Device-RunningFormInfo-readonly abilityName: string--><!--Device-RunningFormInfo-readonly abilityName: string-End-->

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

<!--Device-RunningFormInfo-readonly bundleName: string--><!--Device-RunningFormInfo-readonly bundleName: string-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## dimension

```TypeScript
readonly dimension: number
```

Obtains the grid style of this form.The value must be a positive integer, refer to {@link formInfo.FormDimension}.

**Type:** number

**Default:** -

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-RunningFormInfo-readonly dimension: int--><!--Device-RunningFormInfo-readonly dimension: int-End-->

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

<!--Device-RunningFormInfo-readonly extraData?: Record<string, Object>--><!--Device-RunningFormInfo-readonly extraData?: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## formDescription

```TypeScript
readonly formDescription: string
```

Obtains the description of this form.

**Type:** string

**Since:** 11

<!--Device-RunningFormInfo-readonly formDescription: string--><!--Device-RunningFormInfo-readonly formDescription: string-End-->

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

<!--Device-RunningFormInfo-readonly formId: string--><!--Device-RunningFormInfo-readonly formId: string-End-->

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

<!--Device-RunningFormInfo-readonly formLocation: FormLocation--><!--Device-RunningFormInfo-readonly formLocation: FormLocation-End-->

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

<!--Device-RunningFormInfo-readonly formName: string--><!--Device-RunningFormInfo-readonly formName: string-End-->

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

<!--Device-RunningFormInfo-readonly formUsageState: FormUsageState--><!--Device-RunningFormInfo-readonly formUsageState: FormUsageState-End-->

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

<!--Device-RunningFormInfo-readonly hostBundleName: string--><!--Device-RunningFormInfo-readonly hostBundleName: string-End-->

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

<!--Device-RunningFormInfo-readonly moduleName: string--><!--Device-RunningFormInfo-readonly moduleName: string-End-->

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

<!--Device-RunningFormInfo-readonly visibilityType: VisibilityType--><!--Device-RunningFormInfo-readonly visibilityType: VisibilityType-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

