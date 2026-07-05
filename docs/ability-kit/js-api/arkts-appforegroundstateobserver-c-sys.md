# AppForegroundStateObserver

定义应用启动和退出的状态监听，可以作为 [appManager.on('appForegroundState')]./../@ohos.app.ability.appManager:appManager.on(type: 'appForegroundState', observer: AppForegroundStateObserver) 的入参监听所有应用的启动和退出的变化。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAppStateChanged

```TypeScript
onAppStateChanged(appStateData: AppStateData): void
```

应用启动和退出状态发生变化时，系统会触发该回调。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStateData | AppStateData | Yes | 应用状态信息。 |

