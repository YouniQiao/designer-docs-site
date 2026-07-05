# @ohos.ability.particleAbility

particleAbility模块提供了操作Data和Service类型的Ability的能力，包括启动、停止指定的particleAbility，获取dataAbilityHelper，连接、断连指定的ServiceAbility等 。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## Modules to Import

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acquireDataAbilityHelper](arkts-particleability-acquiredataabilityhelper-f.md#acquireDataAbilityHelper-1) | 获取dataAbilityHelper对象。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > 跨应用访问dataAbility，对端应用需配置关联启动。 |
| [cancelBackgroundRunning](arkts-particleability-cancelbackgroundrunning-f.md#cancelBackgroundRunning-1) | 向系统申请取消长时任务。使用callback异步回调。 |
| [cancelBackgroundRunning](arkts-particleability-cancelbackgroundrunning-f.md#cancelBackgroundRunning-2) | 向系统申请取消长时任务。使用Promise异步回调。 |
| [connectAbility](arkts-particleability-connectability-f.md#connectAbility-1) | 将当前ability与指定的ServiceAbility进行连接。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > > 跨应用连接serviceAbility，对端应用需配置关联启动。 |
| [disconnectAbility](arkts-particleability-disconnectability-f.md#disconnectAbility-1) | 断开当前ability与指定ServiceAbility的连接。使用callback异步回调。 |
| [disconnectAbility](arkts-particleability-disconnectability-f.md#disconnectAbility-2) | 断开当前ability与指定ServiceAbility的连接。使用Promise异步回调。 |
| [startAbility](arkts-particleability-startability-f.md#startAbility-1) | 启动指定的particleAbility。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [startAbility](arkts-particleability-startability-f.md#startAbility-2) | 启动指定的particleAbility。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 |
| [startBackgroundRunning](arkts-particleability-startbackgroundrunning-f.md#startBackgroundRunning-1) | 向系统申请长时任务。使用callback异步回调。 |
| [startBackgroundRunning](arkts-particleability-startbackgroundrunning-f.md#startBackgroundRunning-2) | 向系统申请长时任务。使用Promise异步回调。 |
| [terminateSelf](arkts-particleability-terminateself-f.md#terminateSelf-1) | 销毁当前particleAbility。使用callback异步回调。 |
| [terminateSelf](arkts-particleability-terminateself-f.md#terminateSelf-2) | 销毁当前particleAbility。使用Promise异步回调。 |

### Enums

| Name | Description |
| --- | --- |
| [ErrorCode](arkts-particleability-errorcode-e.md) | 定义启动Ability时返回的错误码。 |

