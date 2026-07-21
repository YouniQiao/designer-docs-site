# AppForegroundStateObserver (System API)

The module defines the listener used to listen for application startup and exit state changes. It can be used as an input parameter of [appManager.on('appForegroundState')](./../@ohos.app.ability.appManager:appManager.on(type: 'appForegroundState', observer: AppForegroundStateObserver))to listen for the state changes of all applications.

**Since:** 11

<!--Device-unnamed-export default class AppForegroundStateObserver--><!--Device-unnamed-export default class AppForegroundStateObserver-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

<a id="onappstatechanged"></a>
## onAppStateChanged

```TypeScript
onAppStateChanged(appStateData: AppStateData): void
```

Called when the application launch or exit state changes.

**Since:** 11

<!--Device-AppForegroundStateObserver-onAppStateChanged(appStateData: AppStateData): void--><!--Device-AppForegroundStateObserver-onAppStateChanged(appStateData: AppStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | [AppStateData](arkts-ability-appmanager-appstatedata-t.md) | Yes | Application state data. |

