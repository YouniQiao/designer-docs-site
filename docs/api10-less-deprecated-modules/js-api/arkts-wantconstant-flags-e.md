# Flags

```TypeScript
export enum Flags
```

Flags说明。用于表示处理Want的方式。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantConstant/wantConstant#Flags

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_AUTH_READ_URI_PERMISSION

```TypeScript
FLAG_AUTH_READ_URI_PERMISSION = 0x00000001
```

指示对URI执行读取操作的授权。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_AUTH_READ_URI_PERMISSION

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_AUTH_WRITE_URI_PERMISSION

```TypeScript
FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002
```

指示对URI执行写入操作的授权。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_AUTH_WRITE_URI_PERMISSION

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_FORWARD_RESULT

```TypeScript
FLAG_ABILITY_FORWARD_RESULT = 0x00000004
```

将结果返回给元能力。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_CONTINUATION

```TypeScript
FLAG_ABILITY_CONTINUATION = 0x00000008
```

确定是否可以将本地设备上的功能迁移到远程设备。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_NOT_OHOS_COMPONENT

```TypeScript
FLAG_NOT_OHOS_COMPONENT = 0x00000010
```

指定组件是否属于OHOS。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_FORM_ENABLED

```TypeScript
FLAG_ABILITY_FORM_ENABLED = 0x00000020
```

指定是否启动某个能力。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_AUTH_PERSISTABLE_URI_PERMISSION

```TypeScript
FLAG_AUTH_PERSISTABLE_URI_PERMISSION = 0x00000040
```

指示URI上可能持久化的授权。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

**System API:** This is a system API.

## FLAG_AUTH_PREFIX_URI_PERMISSION

```TypeScript
FLAG_AUTH_PREFIX_URI_PERMISSION = 0x00000080
```

按照前缀匹配的方式验证URI权限。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

**System API:** This is a system API.

## FLAG_ABILITYSLICE_MULTI_DEVICE

```TypeScript
FLAG_ABILITYSLICE_MULTI_DEVICE = 0x00000100
```

支持分布式调度系统中的多设备启动。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_START_FOREGROUND_ABILITY

```TypeScript
FLAG_START_FOREGROUND_ABILITY = 0x00000200
```

指示无论主机应用程序是否已启动，都将启动使用服务模板的功能。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_CONTINUATION_REVERSIBLE

```TypeScript
FLAG_ABILITY_CONTINUATION_REVERSIBLE = 0x00000400
```

表示迁移是可拉回的。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

**System API:** This is a system API.

## FLAG_INSTALL_ON_DEMAND

```TypeScript
FLAG_INSTALL_ON_DEMAND = 0x00000800
```

如果未安装指定的功能，请安装该功能。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.app.ability.wantConstant/wantConstant.Flags#FLAG_INSTALL_ON_DEMAND

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_INSTALL_WITH_BACKGROUND_MODE

```TypeScript
FLAG_INSTALL_WITH_BACKGROUND_MODE = 0x80000000
```

如果未安装，使用后台模式安装该功能。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_CLEAR_MISSION

```TypeScript
FLAG_ABILITY_CLEAR_MISSION = 0x00008000
```

指示清除其他任务的操作。可以为传递给 **FeatureAbility** 中 [startAbility](../../apis-ability-kit/arkts-apis/arkts-featureability-startability-f.md#startAbility-1) 方法的**Want**设置此标志，并且必须与**FLAG_ABILITY_NEW_MISSION**一起使用。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_NEW_MISSION

```TypeScript
FLAG_ABILITY_NEW_MISSION = 0x10000000
```

指示在历史任务堆栈上创建任务的操作。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## FLAG_ABILITY_MISSION_TOP

```TypeScript
FLAG_ABILITY_MISSION_TOP = 0x20000000
```

指示如果启动能力的现有实例已位于任务堆栈的顶部，则将重用该实例。否则，将创建一个新的能力实例。

**Since:** 6

**Deprecated since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

