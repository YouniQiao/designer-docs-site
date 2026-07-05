# grantUriPermission

## grantUriPermission

```TypeScript
function grantUriPermission(
    uri: string,
    bundleName: string,
    flag: wantConstant.Flags,
    callback: AsyncCallback<void>
  ): void
```

Provides grant uri permission for app

**起始版本：** 9

**需要权限：** 

 ohos.permission.WRITE_MEDIA

**系统能力：** SystemCapability.FileManagement.AppFileService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | uri |
| bundleName | string | 是 | bundleName |
| flag | wantConstant.Flags | 是 | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION |
| callback | AsyncCallback&lt;void> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed |
| 202 | The caller is not a system application |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 14300001 | IPC error |

**示例：**

```TypeScript
import { wantConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string =
  'file://docs/storage/Users/currentUser/Document/1.txt'; // 推荐使用系统接口生成URI。fileUri.getUriFromPath("沙箱路径");
let bundleName: string = 'com.demo.test';
try {
  fileShare.grantUriPermission(uri, bundleName, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION |
    wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION, (err: BusinessError) => {
    if (err) {
      console.error("grantUriPermission failed with error: " + JSON.stringify(err));
      return;
    }
    console.info("grantUriPermission success!");
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("grantUriPermission failed with error:" + JSON.stringify(error));
}

```

## grantUriPermission

```TypeScript
function grantUriPermission(uri: string, bundleName: string, flag: wantConstant.Flags): Promise<void>
```

Provides grant uri permission for app

**起始版本：** 9

**需要权限：** 

 ohos.permission.WRITE_MEDIA

**系统能力：** SystemCapability.FileManagement.AppFileService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | uri |
| bundleName | string | 是 | bundleName |
| flag | wantConstant.Flags | 是 | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | no callback return Promise otherwise return void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed |
| 202 | The caller is not a system application |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 14300001 | IPC error |

**示例：**

```TypeScript
import { wantConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string =
  'file://docs/storage/Users/currentUser/Document/1.txt'; // 推荐使用系统接口生成URI。fileUri.getUriFromPath("沙箱路径");
let bundleName: string = 'com.demo.test';
try {
  fileShare.grantUriPermission(uri, bundleName, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION |
    wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION).then(() => {
    console.info("grantUriPermission success!");
  }).catch((error: BusinessError) => {
    console.error("grantUriPermission failed with error:" + JSON.stringify(error));
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("grantUriPermission failed with error:" + JSON.stringify(error));
}

```

## grantUriPermission

```TypeScript
function grantUriPermission(policies: Array<PolicyInfo>, targetBundleName: string, appCloneIndex: int): Promise<void>
```

Grant URI permissions for an application.

**起始版本：** 20

**需要权限：** 

 ohos.permission.FILE_ACCESS_MANAGER

**系统能力：** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| policies | Array&lt;PolicyInfo> | 是 | Policy information for the user to grant permissions on URIs. |
| targetBundleName | string | 是 | Name of the target bundle to authorize. |
| appCloneIndex | int | 是 | Clone index of the target application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function grantUriPermissionExample() {
  try {
    let uri = "file://docs/storage/Users/currentUser/Documents/1.txt";
    let policyInfo: fileShare.PolicyInfo = {
      uri: uri,
      operationMode: fileShare.OperationMode.CREATE_MODE | fileShare.OperationMode.READ_MODE,
    };
    let policies: Array<fileShare.PolicyInfo> = [policyInfo];

    fileShare.grantUriPermission(policies, "com.example.myapplicationtest", 0).then(() => {
    }).catch((err: BusinessError<Array<fileShare.PolicyErrorResult>>) => {
      console.error("grantUriPermission failed. Code: " +
      err.code + ", message: " + err.message);
    });
  }
  catch (error) {
    console.info('grantUriPermission error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

