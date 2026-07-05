# SubIntentInfoForConfiguration

用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)的特有信息。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## srcEntry

```TypeScript
readonly srcEntry: string
```

表示意图执行文件的相对路径，取值为长度不超过127字节的字符串。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## form

```TypeScript
readonly form?: FormIntentInfo
```

表示意图绑定的卡片信息。

**Type:** FormIntentInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## entities

```TypeScript
readonly entities?: Record<string, Object>
```

表示意图包含的实体信息。

**Type:** Record<string, Object>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly entities?: Record<string, RecordData>
```

表示意图包含的实体信息。

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## outputParams

```TypeScript
readonly outputParams?: Array<Record<string, Object>>
```

表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。

**Type:** Array<Record<string, Object>>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly outputParams?: Array<Record<string, RecordData>>
```

表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。

**Type:** Array<Record<string, RecordData>>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## inputParams

```TypeScript
readonly inputParams?: Array<Record<string, Object>>
```

表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。

**Type:** Array<Record<string, Object>>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
readonly inputParams?: Array<Record<string, RecordData>>
```

表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。

**Type:** Array<Record<string, RecordData>>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## uiAbility

```TypeScript
readonly uiAbility?: UIAbilityIntentInfo
```

表示意图绑定的UIAbility组件信息，包含"ability"字段和"executeMode"字段。

**Type:** UIAbilityIntentInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## serviceExtension

```TypeScript
readonly serviceExtension?: ServiceExtensionIntentInfo
```

表示意图绑定的ServiceExtensionAbility组件信息。

**Type:** ServiceExtensionIntentInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## uiExtension

```TypeScript
readonly uiExtension?: UIExtensionIntentInfo
```

表示意图绑定的UIExtensionAbility组件信息。

**Type:** UIExtensionIntentInfo

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

