# AppStateFilter

应用生命周期变化事件的过滤器，可作为 [on]appManager.on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter)的参数用 于筛选所需监听的应用生命周期变化事件。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## abilityStateTypes

```TypeScript
abilityStateTypes?: int
```

表示要监听的Ability状态。取值范围是： - 0：表示不监听任何Ability状态。 - [FilterAbilityStateType](#filterabilitystatetype21)中枚举的按位或运算组合：例如 "appManager.FilterAbilityStateType.CREATE | appManager.FilterAbilityStateType.FOREGROUND" ，表示同时监听Ability的创建状态和前台状态。 - 如果该项不设置，则默认监听所有的Ability状态。

**Type:** int

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## processStateTypes

```TypeScript
processStateTypes?: int
```

表示要监听的进程状态。取值范围是： - 0：表示不监听任何进程状态。 - [FilterProcessStateType](#filterprocessstatetype21)中枚举的按位或运算组合：例如 "appManager.FilterProcessStateType.CREATE | appManager.FilterProcessStateType.FOREGROUND" ，表示同时监听进程的创建状态和前台状态。 - 如果该项不设置，则默认监听所有的进程状态。

**Type:** int

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## callbacks

```TypeScript
callbacks?: int
```

表示要监听的回调函数。取值范围是： - 0：表示不监听任何回调函数。 - [FilterCallback](#filtercallback21)中枚举的按位或运算组合：例如 "appManager.FilterCallback.ON_ABILITY_STATE_CHANGED | appManager.FilterCallback.ON_PROCESS_STATE_CHANGED" ，表示同时监听 [ApplicationStateObserver.onAbilityStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronabilitystatechanged) 和 [ApplicationStateObserver.onProcessStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged) 。 - 如果该项不设置，则默认监听[FilterCallback](#filtercallback21)中对应的所有回调函数。

**Type:** int

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleTypes

```TypeScript
bundleTypes?: int
```

表示要监听的应用类型。取值范围是： - 0：表示不监听任何类型的应用。 - [FilterBundleType](#filterbundletype21)中枚举的按位或运算组合：例如 "appManager.FilterBundleType.APP | appManager.FilterBundleType.ATOMIC_SERVICE" ，表示同时监听应用和原子化服务的生命周期变化事件。 - 如果该项不设置，则默认监听所有的应用类型。

**Type:** int

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## appStateTypes

```TypeScript
appStateTypes?: int
```

表示要监听的应用状态。 取值范围是： - 0：表示不监听任何应用状态。 - [FilterAppStateType](#filterappstatetype21)中枚举的按位或运算组合：例如 "appManager.FilterAppStateType.CREATE | appManager.FilterAppStateType.FOREGROUND" ，表示同时监听应用的创建状态和前台状态。 - 如果该项不设置，则默认监听所有的应用状态。

**Type:** int

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

