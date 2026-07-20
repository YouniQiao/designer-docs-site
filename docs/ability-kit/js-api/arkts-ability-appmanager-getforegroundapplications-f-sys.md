# getForegroundApplications (System API)

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## getForegroundApplications

```TypeScript
function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void
```

Obtains applications that are running in the foreground. The application information is defined by [AppStateData](arkts-ability-appstatedata-c.md). This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-appManager-function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void--><!--Device-appManager-function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<AppStateData>> | Yes | Callback used to return the API call result and an array holding the application state data. You can perform error handling or custom processing in this callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function getForegroundApplicationsCallback(err: BusinessError, data: Array<appManager.AppStateData>) {
  if (err) {
    console.error(`getForegroundApplicationsCallback fail, err: ${JSON.stringify(err)}`);
  } else {
    console.info(`getForegroundApplicationsCallback success, data: ${JSON.stringify(data)}`);
  }
}

try {
  appManager.getForegroundApplications(getForegroundApplicationsCallback);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```


## getForegroundApplications

```TypeScript
function getForegroundApplications(): Promise<Array<AppStateData>>
```

Obtains applications that are running in the foreground. The application information is defined by [AppStateData](arkts-ability-appstatedata-c.md). This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.GET_RUNNING_INFO

<!--Device-appManager-function getForegroundApplications(): Promise<Array<AppStateData>>--><!--Device-appManager-function getForegroundApplications(): Promise<Array<AppStateData>>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<AppStateData>> | Promise used to return an array holding the application state data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

appManager.getForegroundApplications().then((data) => {
  console.info(`getForegroundApplications success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getForegroundApplications fail, err: ${JSON.stringify(err)}`);
});

```

