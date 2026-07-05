# ApplicationStateObserver

应用状态监听器，可以作为入参传入 [on('applicationState')]./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver) 方法，监听应用的生命周期变化。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityStateChanged

```TypeScript
onAbilityStateChanged(abilityStateData: AbilityStateData): void
```

Ability状态发生变化时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityStateData | AbilityStateData | Yes | Ability状态信息。 |

## onAppStarted

```TypeScript
onAppStarted(appStateData: AppStateData): void
```

应用第一个进程创建时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | 应用状态信息。 |

## onAppStopped

```TypeScript
onAppStopped(appStateData: AppStateData): void
```

应用最后一个进程销毁时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | 应用状态信息。 |

## onForegroundApplicationChanged

```TypeScript
onForegroundApplicationChanged(appStateData: AppStateData): void
```

应用前后台状态发生变化时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | 应用状态信息。 |

## onProcessCreated

```TypeScript
onProcessCreated(processData: ProcessData): void
```

进程创建时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | 进程数据信息。 |

## onProcessDied

```TypeScript
onProcessDied(processData: ProcessData): void
```

进程销毁时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | 进程数据信息。 |

## onProcessStateChanged

```TypeScript
onProcessStateChanged(processData: ProcessData): void
```

进程状态更新时执行的回调函数。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | 进程数据信息。 |

