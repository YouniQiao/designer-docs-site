# RunningFormInfo

The class of a running form information.

**起始版本：** 10

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## formId

```TypeScript
readonly formId: string
```

Obtains the id of the this form.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## extraData

```TypeScript
readonly extraData?: Record<string, Object>
```

Obtains the extra data of the this form.

**类型：** Record<string, Object>

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## abilityName

```TypeScript
readonly abilityName: string
```

Obtains the class name of the ability to which this form belongs.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## formName

```TypeScript
readonly formName: string
```

Obtains the name of this form.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## moduleName

```TypeScript
readonly moduleName: string
```

Obtains the name of the application module to which this form belongs.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## hostBundleName

```TypeScript
readonly hostBundleName: string
```

Obtains the bundle name of the form host application.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
readonly bundleName: string
```

Obtains the bundle name of the application to which this form belongs.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## formDescription

```TypeScript
readonly formDescription: string
```

Obtains the description of this form.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## formLocation

```TypeScript
readonly formLocation: FormLocation
```

The location of this form.

**类型：** FormLocation

**起始版本：** 12

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## formUsageState

```TypeScript
readonly formUsageState: FormUsageState
```

Obtains the stage of form use.

**类型：** FormUsageState

**起始版本：** 11

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## dimension

```TypeScript
readonly dimension: int
```

Obtains the grid style of this form. The value must be a positive integer, refer to {@link formInfo.FormDimension}.

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## visibilityType

```TypeScript
readonly visibilityType: VisibilityType
```

Obtains the visibility of this form.

**类型：** VisibilityType

**起始版本：** 10

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

