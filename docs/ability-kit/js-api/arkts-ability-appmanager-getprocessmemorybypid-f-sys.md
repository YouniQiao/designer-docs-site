# getProcessMemoryByPid (System API)

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## getProcessMemoryByPid

```TypeScript
function getProcessMemoryByPid(pid: number): Promise<number>
```

Obtains the memory size of a process. This API uses a promise to return the result.

**Since:** 10

<!--Device-appManager-function getProcessMemoryByPid(pid: int): Promise<int>--><!--Device-appManager-function getProcessMemoryByPid(pid: int): Promise<int>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | number | Yes | Process ID. For details, see [getRunningProcessInfoByBundleName](arkts-ability-appmanager-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the API call result and the memory size (in KB). You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let pid = 0;

try {
  appManager.getProcessMemoryByPid(pid).then((data) => {
    console.info('getProcessMemoryByPid success.');
  }).catch((err: BusinessError) => {
    console.error(`getProcessMemoryByPid fail, err: ${JSON.stringify(err)}`);
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```


## getProcessMemoryByPid

```TypeScript
function getProcessMemoryByPid(pid: number, callback: AsyncCallback<number>): void
```

Obtains the memory size of a process. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-appManager-function getProcessMemoryByPid(pid: int, callback: AsyncCallback<int>): void--><!--Device-appManager-function getProcessMemoryByPid(pid: int, callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pid | number | Yes | Process ID. For details, see [getRunningProcessInfoByBundleName](arkts-ability-appmanager-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-1). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the API call result and the memory size (in KB). You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let pid = 0;
function getProcessMemoryByPidCallback(err: BusinessError, data: number) {
  if (err) {
    console.error(`getProcessMemoryByPidCallback fail, err: ${JSON.stringify(err)}`);
  } else {
    console.info('getProcessMemoryByPidCallback success.');
  }
}

try {
  appManager.getProcessMemoryByPid(pid, getProcessMemoryByPidCallback);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

