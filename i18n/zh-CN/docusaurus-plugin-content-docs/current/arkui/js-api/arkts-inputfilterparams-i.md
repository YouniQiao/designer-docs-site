# InputFilterParams

Defines the InputFilter parameters.

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SearchParams,AtomicServiceSearch,SearchButtonParams,OperationParams,SelectParams,InputFilterParams,MenuAlignParams } from '@kit.ArkUI';
```

## inputFilterValue

```TypeScript
inputFilterValue: ResourceStr
```

Regular expression.

**类型：** ResourceStr

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## error

```TypeScript
error?: Callback<string>
```

If the regular expression matching fails, the filtered content is returned.

**类型：** Callback<string>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

