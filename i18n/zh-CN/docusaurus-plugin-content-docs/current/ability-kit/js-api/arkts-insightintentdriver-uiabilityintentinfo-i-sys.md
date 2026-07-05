# UIAbilityIntentInfo

用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的UIAbility组件信息。

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## executeMode

```TypeScript
readonly executeMode: ExecuteModeForConfiguration[]
```

意图调用执行模式。

**类型：** ExecuteModeForConfiguration[]

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## abilityName

```TypeScript
readonly abilityName: string
```

意图绑定的UIAbility组件名称。

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

