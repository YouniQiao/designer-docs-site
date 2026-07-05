# @ohos.app.ability.AbilityLifecycleCallback

## Modules to Import

```TypeScript
import { AbilityLifecycleCallback } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AbilityLifecycleCallback](arkts-abilitylifecyclecallback-c.md) | [UIAbility]{@link ./@ohos.app.ability.UIAbility}从创建到销毁过程其生命周期是动态变化的。 AbilityLifecycleCallback模块提供监听[UIAbility]{@link ./@ohos.app.ability.UIAbility}生命周期变化的能力， 可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。 |

### Types

| Name | Description |
| --- | --- |
| [OnAbilitySaveStateFn](arkts-onabilitysavestatefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onSaveState触发后回调。 |
| [OnAbilityWillBackgroundFn](arkts-onabilitywillbackgroundfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onBackground触发前回调。 |
| [OnAbilityWillContinueFn](arkts-onabilitywillcontinuefn-t.md) | 注册监听应用上下文的生命周期后，在Ability迁移前触发回调。 |
| [OnAbilityWillCreateFn](arkts-onabilitywillcreatefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onCreate触发前回调。 |
| [OnAbilityWillDestroyFn](arkts-onabilitywilldestroyfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onDestroy触发前回调。 |
| [OnAbilityWillForegroundFn](arkts-onabilitywillforegroundfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onForeground触发前回调。 |
| [OnAbilityWillSaveStateFn](arkts-onabilitywillsavestatefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onSaveState触发前回调。 |
| [OnNewWantFn](arkts-onnewwantfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onNewWant触发后回调。 |
| [OnWillNewWantFn](arkts-onwillnewwantfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onNewWant触发前回调。 |
| [OnWindowStageRestoreFn](arkts-onwindowstagerestorefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageRestore触发后回调。 |
| [OnWindowStageWillCreateFn](arkts-onwindowstagewillcreatefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageCreate触发前回调。 |
| [OnWindowStageWillDestroyFn](arkts-onwindowstagewilldestroyfn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageDestroy触发前回调。 |
| [OnWindowStageWillRestoreFn](arkts-onwindowstagewillrestorefn-t.md) | 注册监听应用上下文的生命周期后，在UIAbility的onWindowStageRestore触发前回调。 |

