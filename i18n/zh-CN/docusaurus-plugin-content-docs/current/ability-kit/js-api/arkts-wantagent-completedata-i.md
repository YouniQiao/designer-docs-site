# CompleteData

表示主动触发WantAgent返回的数据。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## finalData

```TypeScript
finalData: string
```

触发wantAgent的返回数据。返回**canceled**时表示触发失败，WantAgent实例已经被取消。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## finalCode

```TypeScript
finalCode: int
```

触发wantAgent的返回码。

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## want

```TypeScript
want: Want
```

触发wantAgent时实际使用的want信息。

**类型：** Want

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: Record<string, Object>
```

额外数据。

**类型：** Record<string, Object>

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfo?: Record<string, RecordData>
```

额外数据。

**类型：** Record<string, RecordData>

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## info

```TypeScript
info: WantAgent
```

触发的wantAgent。

**类型：** WantAgent

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

