# KVManagerConfig

Provides the **KVManager** instance configuration, including the bundle name of the invoker and the application context.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## Modules to Import

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## context

```TypeScript
context: BaseContext
```

Application context. For details about the application context of the FA model, see [Context](../apis-ability-kit/js-apis-inner-app-context.md). For details about the application context of the stage model, see [Context](../apis-ability-kit/js-apis-inner-application-uiAbilityContext.md). Since API version 10, the parameter type of context is [BaseContext](../apis-ability-kit/js-apis-inner-application-baseContext.md).

**Type:** BaseContext

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

