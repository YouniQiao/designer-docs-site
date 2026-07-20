# deleteDisposedStatus (System API)

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## deleteDisposedStatus

```TypeScript
function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void
```

Deletes the disposed status for an application. This API uses an asynchronous callback to return the result. If the operation is successful, **null** is returned. If the operation fails, an error message is returned.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

<!--Device-appControl-function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void--><!--Device-appControl-function deleteDisposedStatus(appId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId or appIdentifier of the target application. If a rule is set using appId, it must be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique identifier of an application and is determined by the bundle name and signature information of the application.For details about how to obtain **appId**, see [How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information).<br> [appIdentifier](arkts-ability-bundleinfo-signatureinfo-i.md) is also the unique identifier of an app.For details, see [What is appIdentifier](../../../../quick-start/common_problem_of_application.md#what-is-appidentifier). For details about how to obtain **appIdentifier**, see [How do I obtain appIdentifier from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md) used to return the result. If the operation is successful, **err** is **null**. otherwise, **err** is an error object. |

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

let appId = "com.example.myapplication_xxxxx";
try {
  appControl.deleteDisposedStatus(appId, (error: BusinessError, data) => {
    if (error) {
      console.error('deleteDisposedStatus failed ' + error.message);
      return;
    }
    console.info('deleteDisposedStatus success');
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('deleteDisposedStatus failed ' + message);
}

```


## deleteDisposedStatus

```TypeScript
function deleteDisposedStatus(appId: string): Promise<void>
```

Deletes the disposed status for an application. This API uses a promise to return the result. If the operation is successful, **null** is returned. If the operation fails, an error message is returned.

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_DISPOSED_APP_STATUS

<!--Device-appControl-function deleteDisposedStatus(appId: string): Promise<void>--><!--Device-appControl-function deleteDisposedStatus(appId: string): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId or appIdentifier of the target application. If a rule is set using appId, it must be deleted using appId; the same principle applies to appIdentifier.<br>**NOTE**<br> **appId** is the unique identifier of an application and is determined by the bundle name and signature information of the application.For details about how to obtain **appId**, see [How do I obtain appId from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appid-from-application-information).<br> [appIdentifier](arkts-ability-bundleinfo-signatureinfo-i.md) is also the unique identifier of an app.For details, see [What is appIdentifier](../../../../quick-start/common_problem_of_application.md#what-is-appidentifier). For details about how to obtain **appIdentifier**, see [How do I obtain appIdentifier from application information](../../../../quick-start/common_problem_of_application.md#how-do-i-obtain-appidentifier-from-application-information). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

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

let appId = "com.example.myapplication_xxxxx";

try {
  appControl.deleteDisposedStatus(appId)
    .then(() => {
      console.info('deleteDisposedStatus success');
    }).catch((error: BusinessError) => {
    let message = (error as BusinessError).message;
    console.error('deleteDisposedStatus failed ' + message);
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('deleteDisposedStatus failed ' + message);
}

```

