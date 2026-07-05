# ApplicationStateObserver

The module defines an observer to listen for application state changes. It can be used as an input parameter in [on('applicationState')](arkts-ability-on-f.md#on-1) to listen for lifecycle changes of the application.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityStateChanged

```TypeScript
onAbilityStateChanged(abilityStateData: AbilityStateData): void
```

Called when the ability state changes.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityStateData | AbilityStateData | Yes | Ability state data. |

## onAppStarted

```TypeScript
onAppStarted(appStateData: AppStateData): void
```

Called when the first process of the application is created.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | Application state data. |

## onAppStopped

```TypeScript
onAppStopped(appStateData: AppStateData): void
```

Called when the last process of the application is destroyed.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | Application state data. |

## onForegroundApplicationChanged

```TypeScript
onForegroundApplicationChanged(appStateData: AppStateData): void
```

Called when the foreground or background state of an application changes.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | Application state data. |

## onProcessCreated

```TypeScript
onProcessCreated(processData: ProcessData): void
```

Called when a process is created.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | Process data. |

## onProcessDied

```TypeScript
onProcessDied(processData: ProcessData): void
```

Called when a process is destroyed.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | Process data. |

## onProcessStateChanged

```TypeScript
onProcessStateChanged(processData: ProcessData): void
```

Called when the process state is changed.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | ProcessData | Yes | Process data. |

