# ApplicationStateObserver

The module defines an observer to listen for application state changes. It can be used as an input parameter in [on('applicationState')](./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver))to listen for lifecycle changes of the application.

**Since:** 14

<!--Device-unnamed-export default class ApplicationStateObserver--><!--Device-unnamed-export default class ApplicationStateObserver-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

<a id="onabilitystatechanged"></a>
## onAbilityStateChanged

```TypeScript
onAbilityStateChanged(abilityStateData: AbilityStateData): void
```

Called when the ability state changes.

**Since:** 14

<!--Device-ApplicationStateObserver-onAbilityStateChanged(abilityStateData: AbilityStateData): void--><!--Device-ApplicationStateObserver-onAbilityStateChanged(abilityStateData: AbilityStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityStateData | [AbilityStateData](arkts-ability-abilitystatedata-c.md) | Yes | Ability state data. |

<a id="onappstarted"></a>
## onAppStarted

```TypeScript
onAppStarted(appStateData: AppStateData): void
```

Called when the first process of the application is created.

**Since:** 14

<!--Device-ApplicationStateObserver-onAppStarted(appStateData: AppStateData): void--><!--Device-ApplicationStateObserver-onAppStarted(appStateData: AppStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | [AppStateData](arkts-ability-appmanager-appstatedata-t.md) | Yes | Application state data. |

<a id="onappstopped"></a>
## onAppStopped

```TypeScript
onAppStopped(appStateData: AppStateData): void
```

Called when the last process of the application is destroyed.

**Since:** 14

<!--Device-ApplicationStateObserver-onAppStopped(appStateData: AppStateData): void--><!--Device-ApplicationStateObserver-onAppStopped(appStateData: AppStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | [AppStateData](arkts-ability-appmanager-appstatedata-t.md) | Yes | Application state data. |

<a id="onforegroundapplicationchanged"></a>
## onForegroundApplicationChanged

```TypeScript
onForegroundApplicationChanged(appStateData: AppStateData): void
```

Called when the foreground or background state of an application changes.

**Since:** 14

<!--Device-ApplicationStateObserver-onForegroundApplicationChanged(appStateData: AppStateData): void--><!--Device-ApplicationStateObserver-onForegroundApplicationChanged(appStateData: AppStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | [AppStateData](arkts-ability-appmanager-appstatedata-t.md) | Yes | Application state data. |

<a id="onprocesscreated"></a>
## onProcessCreated

```TypeScript
onProcessCreated(processData: ProcessData): void
```

Called when a process is created.

**Since:** 14

<!--Device-ApplicationStateObserver-onProcessCreated(processData: ProcessData): void--><!--Device-ApplicationStateObserver-onProcessCreated(processData: ProcessData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | [ProcessData](arkts-ability-processdata-c.md) | Yes | Process data. |

<a id="onprocessdied"></a>
## onProcessDied

```TypeScript
onProcessDied(processData: ProcessData): void
```

Called when a process is destroyed.

**Since:** 14

<!--Device-ApplicationStateObserver-onProcessDied(processData: ProcessData): void--><!--Device-ApplicationStateObserver-onProcessDied(processData: ProcessData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | [ProcessData](arkts-ability-processdata-c.md) | Yes | Process data. |

<a id="onprocessstatechanged"></a>
## onProcessStateChanged

```TypeScript
onProcessStateChanged(processData: ProcessData): void
```

Called when the process state is changed.

**Since:** 14

<!--Device-ApplicationStateObserver-onProcessStateChanged(processData: ProcessData): void--><!--Device-ApplicationStateObserver-onProcessStateChanged(processData: ProcessData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processData | [ProcessData](arkts-ability-processdata-c.md) | Yes | Process data. |

