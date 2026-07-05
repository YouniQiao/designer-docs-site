# InsightIntentInfo

意图信息，表示设备中意图的具体参数配置。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## subIntentInfo

```TypeScript
readonly subIntentInfo: LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo
```

表示特定意图装饰器的意图信息。 **说明：** 对于使用配置文件开发的意图，该字段返回值默认为[EntryIntentInfo](#entryintentinfo20)。

**Type:** LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## schema

```TypeScript
readonly schema: string
```

标准意图名称，如果在标准意图列表中存在schema与intentVersion字段均匹配的意图，则按照标准意图处理。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## displayDescription

```TypeScript
readonly displayDescription: string
```

表示在意图框架中显示的意图描述。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## keywords

```TypeScript
readonly keywords: string[]
```

表示意图的搜索关键字。

**Type:** string[]

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## displayName

```TypeScript
readonly displayName: string
```

表示在意图框架中显示的意图名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## intentName

```TypeScript
readonly intentName: string
```

表示意图名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## icon

```TypeScript
readonly icon: string
```

表示意图图标。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## moduleName

```TypeScript
readonly moduleName: string
```

表示模块名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## subIntentInfoForConfiguration

```TypeScript
readonly subIntentInfoForConfiguration?: SubIntentInfoForConfiguration
```

表示使用配置文件开发的意图的特有信息。

**Type:** SubIntentInfoForConfiguration

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## result

```TypeScript
readonly result: Record<string, Object>
```

表示意图调用返回的结果。

**Type:** Record<string, Object>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly result: Record<string, RecordData>
```

The type definition of the result returned by intent call.

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## intentType

```TypeScript
readonly intentType: InsightIntentType
```

表示通过意图装饰器定义的意图类型。 **说明：** 对于使用配置文件开发的意图，该字段返回值默认为[@InsightIntentEntry](./js-apis-app-ability-InsightIntentDecorator.md#insightintententry)类 型装饰器。

**Type:** InsightIntentType

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## entities

```TypeScript
readonly entities: Array<EntityInfo>
```

表示意图包含的实体信息。

**Type:** Array<EntityInfo>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## llmDescription

```TypeScript
readonly llmDescription: string
```

表示意图的功能，用于大型语言模型理解该意图。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## intentVersion

```TypeScript
readonly intentVersion: string
```

意图版本号，当意图能力演进时，可通过版本号进行区分和管理。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## domain

```TypeScript
readonly domain: string
```

表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见 [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215) 中的垂域字段。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## developType

```TypeScript
readonly developType?: DevelopType
```

表示意图的开发方式。

**Type:** DevelopType

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName: string
```

表示应用包名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## parameters

```TypeScript
readonly parameters: Record<string, Object>
```

表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。

**Type:** Record<string, Object>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly parameters: Record<string, RecordData>
```

The insight intent parameters.

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

