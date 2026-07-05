# on

## on('applicationState')

```TypeScript
function on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter): int
```

注册应用程序的状态监听器，并通过设置过滤条件来筛选所需监听的应用生命周期变化事件。

**Since:** 21

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'applicationState' | Yes | 调用接口类型，固定填'applicationState'字符串。 |
| observer | ApplicationStateObserver | Yes | 应用状态监听器，用于监听应用的生命周期变化。 |
| filter | AppStateFilter | Yes | 应用生命周期变化事件的过滤器。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 已注册监听器ID，可用于  [off](arkts-appmanager-off-f.md#off-2)接口注销监听器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service failed to communicate with dependency module. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let applicationStateObserver: appManager.ApplicationStateObserver = {
  onForegroundApplicationChanged(appStateData: appManager.AppStateData) {
    console.info(`[appManager] onForegroundApplicationChanged: ${JSON.stringify(appStateData)}`);
  },
  onAbilityStateChanged(abilityStateData: appManager.AbilityStateData) {
    console.info(`[appManager] onAbilityStateChanged: ${JSON.stringify(abilityStateData)}`);
  },
  onProcessCreated(processData: appManager.ProcessData) {
    console.info(`[appManager] onProcessCreated: ${JSON.stringify(processData)}`);
  },
  onProcessDied(processData: appManager.ProcessData) {
    console.info(`[appManager] onProcessDied: ${JSON.stringify(processData)}`);
  },
  onProcessStateChanged(processData: appManager.ProcessData) {
    console.info(`[appManager] onProcessStateChanged: ${JSON.stringify(processData)}`);
  },
  onAppStarted(appStateData: appManager.AppStateData) {
    console.info(`[appManager] onAppStarted: ${JSON.stringify(appStateData)}`);
  },
  onAppStopped(appStateData: appManager.AppStateData) {
    console.info(`[appManager] onAppStopped: ${JSON.stringify(appStateData)}`);
  }
};

/* This example uses the filter to listen for the following application callbacks:
 * 1. onAbilityStateChanged, a callback function used to listen for ability components in the creating state.
 * 2. onProcessCreated, a callback function used to listen for processes in the created state.
 */
let appStateFilter: appManager.AppStateFilter = {
    bundleTypes: appManager.FilterBundleType.APP,
    appStateTypes: appManager.FilterAppStateType.CREATE | appManager.FilterAppStateType.FOREGROUND,
    processStateTypes: appManager.FilterProcessStateType.CREATE,
    abilityStateTypes: appManager.FilterAbilityStateType.CREATE,
    callbacks: appManager.FilterCallback.ON_ABILITY_STATE_CHANGED | appManager.FilterCallback.ON_PROCESS_CREATED
};

try {
  const observerId = appManager.on('applicationState', applicationStateObserver, appStateFilter);
  console.info(`[appManager] observerCode: ${observerId}`);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

## on('appForegroundState')

```TypeScript
function on(type: 'appForegroundState', observer: AppForegroundStateObserver): void
```

注册应用启动和退出的监听器，可用于系统应用监听所有应用的启动和退出。

**Since:** 11

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appForegroundState' | Yes | 调用接口类型，固定填'appForegroundState'字符串。 |
| observer | AppForegroundStateObserver | Yes | 应用状态监听器，用于监听应用的启动和退出。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: appManager.AppForegroundStateObserver = {
  onAppStateChanged(appStateData) {
    console.info(`[appManager] onAppStateChanged: ${JSON.stringify(appStateData)}`);
  },
};

try {
  appManager.on('appForegroundState', observer);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

## on('abilityFirstFrameState')

```TypeScript
function on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string): void
```

注册监听Ability首帧绘制完成事件观察者对象，可用于系统应用监听Ability首帧绘制事件。

**Since:** 12

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'abilityFirstFrameState' | Yes | 调用接口类型，固定填'abilityFirstFrameState'字符串。 |
| observer | AbilityFirstFrameStateObserver | Yes | 表示待注册的Ability首帧绘制完成事件观察者对象。 |
| bundleName | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let abilityFirstFrameStateObserverForAll: appManager.AbilityFirstFrameStateObserver = {
  onAbilityFirstFrameDrawn(abilityStateData: appManager.AbilityFirstFrameStateData) {
    console.info("abilityFirstFrame: ", JSON.stringify(abilityStateData));
  }
};

try {
  appManager.on('abilityFirstFrameState', abilityFirstFrameStateObserverForAll);
} catch (e) {
  let code = (e as BusinessError).code;
  let message = (e as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

