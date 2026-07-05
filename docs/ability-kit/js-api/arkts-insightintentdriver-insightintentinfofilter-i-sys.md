# InsightIntentInfoFilter

意图筛选器，描述目标意图的筛选条件，用于筛选设备上符合条件的意图。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## intentName

```TypeScript
intentName?: string
```

目标意图名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName?: string
```

目标意图所属的模块名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName?: string
```

目标意图所属的应用包名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## intentFlags

```TypeScript
intentFlags: int
```

意图信息（[InsightIntentInfo]insightIntentDriver.InsightIntentInfo）的标识，用于表示查询全量意图信息或者简要意图信息，取值可参考 [GetInsightIntentFlag]insightIntentDriver.GetInsightIntentFlag。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## userId

```TypeScript
userId?: int
```

目标意图所属的用户ID。 **说明：** 如果调用方应用的用户ID与目标意图所属的用户ID不同，则需要申请权限`ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

