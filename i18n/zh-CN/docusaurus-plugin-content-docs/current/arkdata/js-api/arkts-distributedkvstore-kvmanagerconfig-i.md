# KVManagerConfig

Provides the **KVManager** instance configuration, including the bundle name of the invoker and the application context.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## context

```TypeScript
context: BaseContext
```

Application context. For details about the application context of the FA model, see [Context](../apis-ability-kit/js-apis-inner-app-context.md). For details about the application context of the stage model, see [Context](../apis-ability-kit/js-apis-inner-application-uiAbilityContext.md). Since API version 10, the parameter type of context is [BaseContext](../apis-ability-kit/js-apis-inner-application-baseContext.md).

**类型：** BaseContext

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

