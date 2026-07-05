# FormInfoFilter

The optional options used as filters to ask getFormsInfo to return formInfos from only forms that match the options.

**起始版本：** 9

**系统能力：** SystemCapability.Ability.Form

## 导入模块

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## supportedDimensions

```TypeScript
supportedDimensions?: Array<int>
```

optional supportedDimensions that used to ask getFormsInfo to return form infos with the same supportedDimensions. The minimum length is 1, refer to {@link formInfo.FormDimension}.

**类型：** Array<int>

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## supportedShapes

```TypeScript
supportedShapes?: Array<int>
```

optional supportedShapes that used to ask getFormsInfo to return form infos with the same supportedShapes. The minimum length is 1, Refer to {@link formInfo.FormShape}.

**类型：** Array<int>

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

## moduleName

```TypeScript
moduleName?: string
```

optional moduleName that used to ask getFormsInfo to return form infos with the same moduleName.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

## bundleName

```TypeScript
bundleName?: string
```

optional bundleName that used to ask getFormsInfo to return form infos with the same bundleName.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

