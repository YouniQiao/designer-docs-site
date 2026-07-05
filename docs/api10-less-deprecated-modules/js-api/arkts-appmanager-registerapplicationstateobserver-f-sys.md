# registerApplicationStateObserver

## registerApplicationStateObserver

```TypeScript
function registerApplicationStateObserver(observer: ApplicationStateObserver): number
```

注册全部应用程序状态观测器。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#on

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | ApplicationStateObserver | Yes | 表示程序状态观测器，用于观测应用的生命周期变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 已注册观测器的数字代码。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

const observerCode = appManager.registerApplicationStateObserver({
  onForegroundApplicationChanged(appStateData) {
    console.info(`onForegroundApplicationChanged, appStateData: ${appStateData}.`);
  },
  onAbilityStateChanged(abilityStateData) {
    console.info(`onAbilityStateChanged, abilityStateData: ${abilityStateData}.`);
  },
  onProcessCreated(processData) {
    console.info(`onProcessCreated, processData: ${processData}.`);
  },
  onProcessDied(processData) {
    console.info(`onProcessDied, processData: ${processData}.`);
  },
  onProcessStateChanged(processData) {
    console.info(`onProcessStateChanged, processData: ${processData}.`);
  },
  onAppStarted(appStateData) {
    console.info(`onAppStarted, appStateData: ${JSON.stringify(appStateData)}`);
  },
  onAppStopped(appStateData) {
    console.info(`onAppStopped, appStateData: ${JSON.stringify(appStateData)}`);
  }
});
console.info(`observerCode: ${observerCode}.`);

```

