# FilterCallback

```TypeScript
export enum FilterCallback
```

表示要监听的回调函数，该类型为枚举。可配合[AppStateFilter]appManager.AppStateFilter过滤想要监听的回调函数。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_FOREGROUND_APPLICATION_CHANGED

```TypeScript
ON_FOREGROUND_APPLICATION_CHANGED = 1 << 0
```

该枚举对应应用前后台状态发生变化时执行的回调函数 [ApplicationStateObserver.onForegroundApplicationChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronforegroundapplicationchanged) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_ABILITY_STATE_CHANGED

```TypeScript
ON_ABILITY_STATE_CHANGED = 1 << 1
```

该枚举对应Ability状态发生变化时执行的回调函数 [ApplicationStateObserver.onAbilityStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronabilitystatechanged) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_PROCESS_CREATED

```TypeScript
ON_PROCESS_CREATED = 1 << 2
```

该枚举对应进程创建时执行的回调函数 [ApplicationStateObserver.onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_PROCESS_DIED

```TypeScript
ON_PROCESS_DIED = 1 << 3
```

该枚举对应进程销毁时执行的回调函数 [ApplicationStateObserver.onProcessDied](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessdied) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_PROCESS_STATE_CHANGED

```TypeScript
ON_PROCESS_STATE_CHANGED = 1 << 4
```

该枚举对应进程状态更新时执行的回调函数 [ApplicationStateObserver.onProcessStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_APP_STARTED

```TypeScript
ON_APP_STARTED = 1 << 5
```

该枚举对应应用第一个进程创建时执行的回调函数 [ApplicationStateObserver.onAppStarted](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstarted) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## ON_APP_STOPPED

```TypeScript
ON_APP_STOPPED = 1 << 6
```

该枚举对应应用最后一个进程销毁时执行的回调函数 [ApplicationStateObserver.onAppStopped](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstopped) 。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

