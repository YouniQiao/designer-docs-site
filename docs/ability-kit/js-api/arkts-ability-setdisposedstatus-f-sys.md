# setDisposedStatus (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## setDisposedStatus

```TypeScript
function setDisposedStatus(appId: string, disposedWant: Want, callback: AsyncCallback<void>): void
```

Sets the disposed status for an application. This API uses an asynchronous callback to return the result. If the
operation is successful, **null** is returned. If the operation fails, an error message is returned.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | ID of the target application.<br> **appId** is the unique identifier of an applicationand is determined by the bundle name and signature information of the application. For details about how toobtain **appId**, see[How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information). |
| disposedWant | Want | Yes | Disposal intent of the application. |
| callback | AsyncCallback&lt;void&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md) used to return the result. Ifthe operation is successful, **err** is **null**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700005](../errorcode-bundle.md#17700005-appid-is-an-empty-string) | The specified app ID is empty string. |

**Example**

```TypeScript
import { appControl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

let appId = "com.example.myapplication_xxxxx";
let want: Want = { bundleName: 'com.example.myapplication' };

try {
  appControl.setDisposedStatus(appId, want, (error: BusinessError, data) => {
    if (error) {
      let message = (error as BusinessError).message;
      console.error('setDisposedStatus failed ' + message);
      return;
    }
    console.info('setDisposedStatus success');
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('setDisposedStatus failed ' + message);
}

```


## setDisposedStatus

```TypeScript
function setDisposedStatus(appId: string, disposedWant: Want): Promise<void>
```

Sets the disposed status for an application. This API uses a promise to return the result. If the operation is
successful, **null** is returned. If the operation fails, an error message is returned.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | ID of the target application.<br> **appId** is the unique identifier of an applicationand is determined by the bundle name and signature information of the application. For details about how toobtain **appId**, see[How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information). |
| disposedWant | Want | Yes | Disposal intent of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700005](../errorcode-bundle.md#17700005-appid-is-an-empty-string) | The specified app ID is empty string. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';
import { appControl } from '@kit.AbilityKit';

let appId = "com.example.myapplication_xxxxx";
let want: Want = { bundleName: 'com.example.myapplication' };

try {
  appControl.setDisposedStatus(appId, want)
    .then(() => {
      console.info('setDisposedStatus success');
    }).catch((error: BusinessError) => {
    let message = (error as BusinessError).message;
    console.error('setDisposedStatus failed ' + message);
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('setDisposedStatus failed ' + message);
}

```

