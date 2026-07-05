# AbilityType

```TypeScript
export enum AbilityType
```

标识Ability组件的类型。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## PAGE

```TypeScript
PAGE = 1
```

UI界面类型的Ability。表示基于Page模板开发的FA，用于提供与用户交互的能力。

**Since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SERVICE

```TypeScript
SERVICE = 2
```

后台服务类型的Ability，无UI界面。表示基于Service模板开发的[ParticleAbility](arkts-ability-particleability.md#particleAbility)，用于提供后 台运行任务的能力，例如后台下载或者播放音乐。

**Since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## DATA

```TypeScript
DATA = 3
```

表示基于Data模板开发的[ParticleAbility](arkts-ability-particleability.md#particleAbility)，用于对外部提供统一的数据访问对象。

**Since:** 9

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

