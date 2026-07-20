# on

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## on('applicationState')

```TypeScript
function on(type: 'applicationState', observer: ApplicationStateObserver): number
```

Registers an observer to listen for lifecycle changes of all applications.

**Since:** 14

**Required permissions:** ohos.permission.RUNNING_STATE_OBSERVER

<!--Device-appManager-function on(type: 'applicationState', observer: ApplicationStateObserver): int--><!--Device-appManager-function on(type: 'applicationState', observer: ApplicationStateObserver): int-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'applicationState' | Yes | Type of the API to call. It is fixed at **'applicationState'**. |
| observer | [ApplicationStateObserver](arkts-ability-applicationstateobserver-c.md) | Yes | Application state observer, which is used to listen for applications lifecycle changes. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the observer registered. You can pass this ID to [off('applicationState')](arkts-ability-appmanager-off-f.md#off-2) to unregister the observer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let applicationStateObserver: appManager.ApplicationStateObserver = {
  onForegroundApplicationChanged(appStateData) {
    console.info(`[appManager] onForegroundApplicationChanged: ${JSON.stringify(appStateData)}`);
  },
  onAbilityStateChanged(abilityStateData) {
    console.info(`[appManager] onAbilityStateChanged: ${JSON.stringify(abilityStateData)}`);
  },
  onProcessCreated(processData) {
    console.info(`[appManager] onProcessCreated: ${JSON.stringify(processData)}`);
  },
  onProcessDied(processData) {
    console.info(`[appManager] onProcessDied: ${JSON.stringify(processData)}`);
  },
  onProcessStateChanged(processData) {
    console.info(`[appManager] onProcessStateChanged: ${JSON.stringify(processData)}`);
  },
  onAppStarted(appStateData) {
    console.info(`[appManager] onAppStarted: ${JSON.stringify(appStateData)}`);
  },
  onAppStopped(appStateData) {
    console.info(`[appManager] onAppStopped: ${JSON.stringify(appStateData)}`);
  }
};

try {
  const observerId = appManager.on('applicationState', applicationStateObserver);
  console.info(`[appManager] observerCode: ${observerId}`);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```


## on('applicationState')

```TypeScript
function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): number
```

Registers an observer to listen for lifecycle changes of the specified application.

**Since:** 14

**Required permissions:** ohos.permission.RUNNING_STATE_OBSERVER

<!--Device-appManager-function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): int--><!--Device-appManager-function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): int-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'applicationState' | Yes | Type of the API to call. It is fixed at **'applicationState'**. |
| observer | [ApplicationStateObserver](arkts-ability-applicationstateobserver-c.md) | Yes | Application state observer, which is used to listen for application lifecycle changes. |
| bundleNameList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | **bundleName** array of the application. A maximum of 128 bundle names can be passed. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the observer registered. You can pass this ID to [off('applicationState')](arkts-ability-appmanager-off-f.md#off-2) to unregister the observer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let applicationStateObserver: appManager.ApplicationStateObserver = {
  onForegroundApplicationChanged(appStateData) {
    console.info(`[appManager] onForegroundApplicationChanged: ${JSON.stringify(appStateData)}`);
  },
  onAbilityStateChanged(abilityStateData) {
    console.info(`[appManager] onAbilityStateChanged: ${JSON.stringify(abilityStateData)}`);
  },
  onProcessCreated(processData) {
    console.info(`[appManager] onProcessCreated: ${JSON.stringify(processData)}`);
  },
  onProcessDied(processData) {
    console.info(`[appManager] onProcessDied: ${JSON.stringify(processData)}`);
  },
  onProcessStateChanged(processData) {
    console.info(`[appManager] onProcessStateChanged: ${JSON.stringify(processData)}`);
  },
  onAppStarted(appStateData) {
    console.info(`[appManager] onAppStarted: ${JSON.stringify(appStateData)}`);
  },
  onAppStopped(appStateData) {
    console.info(`[appManager] onAppStopped: ${JSON.stringify(appStateData)}`);
  }
};

let bundleNameList = ['bundleName1', 'bundleName2'];

try {
  const observerId = appManager.on('applicationState', applicationStateObserver, bundleNameList);
  console.info(`[appManager] observerCode: ${observerId}`);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

