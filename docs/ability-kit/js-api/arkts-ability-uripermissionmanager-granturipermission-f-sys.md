# grantUriPermission (System API)

## Modules to Import

```TypeScript
import { uriPermissionManager } from '@kit.AbilityKit';
```

## grantUriPermission

```TypeScript
function grantUriPermission(
    uri: string,
    flag: wantConstant.Flags,
    targetBundleName: string,
    callback: AsyncCallback<number>
  ): void
```

Grants the URI permission to an application. If the call is successful, the application obtains the permission to access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For details about how to access the file based on the URI, see [Sharing an Application File](../../../../file-management/share-app-file.md). This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs  
> of another application. If the application does not have this permission, it can grant only its own URI  
> permissions.  
>  
> - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the  
> [getUriFromPath](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-geturifrompath-f.md#geturifrompath-1) API. For URIs combined by the application, the  
> system cannot guarantee their functions.

**Since:** 10

**Required permissions:** ohos.permission.PROXY_AUTHORIZATION_URI

<!--Device-uriPermissionManager-function grantUriPermission(
    uri: string,
    flag: wantConstant.Flags,
    targetBundleName: string,
    callback: AsyncCallback<number>
  ): void--><!--Device-uriPermissionManager-function grantUriPermission(
    uri: string,
    flag: wantConstant.Flags,
    targetBundleName: string,
    callback: AsyncCallback<number>
  ): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. The scheme has a fixed value of **file**. For details, see [FileUri](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-fileuri-c.md#constructor-1). |
| flag | wantConstant.Flags | Yes | Read or write permission on the file to grant. |
| targetBundleName | string | Yes | Bundle name of the target application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the result. If the operation is successful, **0** is returned; otherwise, **-1** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000058](../errorcode-ability.md#16000058-specified-uri-flag-is-invalid) | Invalid URI flag. |
| [16000059](../errorcode-ability.md#16000059-specified-uri-type-is-invalid) | Invalid URI type. |
| [16000060](../errorcode-ability.md#16000060-sandbox-applications-cannot-grant-uri-permission) | A sandbox application cannot grant URI permission. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 19 and later |

**Example**

```TypeScript
import { uriPermissionManager, wantConstant } from '@kit.AbilityKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';

let targetBundleName = 'com.example.test_case1'
let path = 'file://com.example.test_case1/data/storage/el2/base/haps/entry_test/files/newDir';
fileIo.mkdir(path, (err) => {
  if (err) {
    console.error(`mkdir failed, err code: ${err.code}, err msg: ${err.message}.`);
  } else {
    console.info(`mkdir success.`);
  }
});
let uri = fileUri.getUriFromPath(path);
uriPermissionManager.grantUriPermission(uri, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION, targetBundleName,
  (error) => {
    if (error && error.code !== 0) {
      console.error(`grantUriPermission failed, err code: ${error.code}, err msg: ${error.message}.`);
      return;
    }
    console.info(`grantUriPermission success.`);
  });

```


## grantUriPermission

```TypeScript
function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string): Promise<number>
```

Grants the URI permission to an application. If the call is successful, the application obtains the permission to access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For details about how to access the file based on the URI, see [Sharing an Application File](../../../../file-management/share-app-file.md). This API uses a promise to return the result.

> **NOTE**  
>  
> - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs  
> of another application. If the application does not have this permission, it can grant only its own URI  
> permissions.  
>  
> - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the  
> [getUriFromPath](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-geturifrompath-f.md#geturifrompath-1) API. For URIs combined by the application, the  
> system cannot guarantee their functions.

**Since:** 10

**Required permissions:** ohos.permission.PROXY_AUTHORIZATION_URI

<!--Device-uriPermissionManager-function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string): Promise<number>--><!--Device-uriPermissionManager-function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string): Promise<number>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. The scheme has a fixed value of **file**. For details, see [FileUri](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-fileuri-c.md#constructor-1). |
| flag | wantConstant.Flags | Yes | Read or write permission on the file to grant. |
| targetBundleName | string | Yes | Bundle name of the target application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the result. If the operation is successful, **0** is returned;otherwise, **-1** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000058](../errorcode-ability.md#16000058-specified-uri-flag-is-invalid) | Invalid URI flag. |
| [16000059](../errorcode-ability.md#16000059-specified-uri-type-is-invalid) | Invalid URI type. |
| [16000060](../errorcode-ability.md#16000060-sandbox-applications-cannot-grant-uri-permission) | A sandbox application cannot grant URI permission. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 19 and later |

**Example**

```TypeScript
import { uriPermissionManager, wantConstant } from '@kit.AbilityKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

let targetBundleName = 'com.example.test_case1'
let path = 'file://com.example.test_case1/data/storage/el2/base/haps/entry_test/files/newDir';

fileIo.mkdir(path, (err) => {
  if (err) {
    console.error(`mkdir failed, err code: ${err.code}, err msg: ${err.message}.`);
  } else {
    console.info(`mkdir succeed.`);
  }
});
let uri = fileUri.getUriFromPath(path);
uriPermissionManager.grantUriPermission(uri, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION, targetBundleName)
  .then((data) => {
    console.info(`Verification succeeded, data: ${JSON.stringify(data)}.`);
  }).catch((err: BusinessError) => {
  console.error(`Verification failed, err code: ${err.code}, err msg: ${err.message}.`);
});

```


## grantUriPermission

```TypeScript
function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string, appCloneIndex: number): Promise<void>
```

Grants the URI permission to an application. If the call is successful, the application obtains the permission to access the file specified by the URI. Once the application exits, the permission will be automatically revoked. For details about how to access the file based on the URI, see [Sharing an Application File](../../../../file-management/share-app-file.md). This API uses a promise to return the result.

> **NOTE**  
>  
> - If an application has the ohos.permission.PROXY_AUTHORIZATION_URI permission, it can grant the accessible URIs  
> of another application. If the application does not have this permission, it can grant only its own URI  
> permissions.  
>  
> - This API can be used to grant URI access permission to a cloned application. You need to specify the  
> application bundle name and index of the cloned application.  
>  
> - URI processing involves encoding and decoding. Therefore, the input URI must be obtained through the  
> [getUriFromPath](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-geturifrompath-f.md#geturifrompath-1) API. For URIs combined by the application, the  
> system cannot guarantee their functions.

**Since:** 14

**Required permissions:** ohos.permission.PROXY_AUTHORIZATION_URI

<!--Device-uriPermissionManager-function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string, appCloneIndex: int): Promise<void>--><!--Device-uriPermissionManager-function grantUriPermission(uri: string, flag: wantConstant.Flags, targetBundleName: string, appCloneIndex: int): Promise<void>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the file. The scheme has a fixed value of **file**. For details, see [FileUri](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-fileuri-c.md#constructor-1). |
| flag | wantConstant.Flags | Yes | Read or write permission on the file to grant. |
| targetBundleName | string | Yes | Bundle name of the target application. |
| appCloneIndex | number | Yes | Index of the cloned application. The value range is [0, 1000]. The value **0** indicates the application itself. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000058](../errorcode-ability.md#16000058-specified-uri-flag-is-invalid) | Invalid URI flag. |
| [16000059](../errorcode-ability.md#16000059-specified-uri-type-is-invalid) | Invalid URI type. |
| [16000060](../errorcode-ability.md#16000060-sandbox-applications-cannot-grant-uri-permission) | A sandbox application cannot grant URI permission. |
| [16000081](../errorcode-ability.md#16000081-failed-to-obtain-the-target-application-information) | Failed to obtain the target application information. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 19 and later |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want, wantConstant, uriPermissionManager } from '@kit.AbilityKit';
import { fileUri } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  }

  onForeground(): void {
    let targetBundleName: string = 'com.example.demo1';
    let filePath: string = this.context.filesDir + "/test.txt";
    let uri: string = fileUri.getUriFromPath(filePath);
    // grant uri permission to main application
    try {
      let appCloneIndex: number = 0;
      uriPermissionManager.grantUriPermission(uri, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION, targetBundleName,
        appCloneIndex)
        .then(() => {
          console.info('grantUriPermission succeeded.');
        }).catch((error: BusinessError) => {
        console.error(`grantUriPermission failed. error: ${JSON.stringify(error)}.`);
      });
    } catch (error) {
      console.error(`grantUriPermission failed. error: ${JSON.stringify(error)}.`);
    }

    // grant uri permission to clone application
    try {
      let appCloneIndex: number = 1;
      uriPermissionManager.grantUriPermission(uri, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION, targetBundleName,
        appCloneIndex)
        .then(() => {
          console.info('grantUriPermission succeeded.');
        }).catch((error: BusinessError) => {
        console.error(`grantUriPermission failed. error: ${JSON.stringify(error)}.`);
      });
    } catch (error) {
      console.error(`grantUriPermission failed. error: ${JSON.stringify(error)}.`);
    }
  }
}


```

