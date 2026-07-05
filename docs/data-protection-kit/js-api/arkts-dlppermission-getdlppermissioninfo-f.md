# getDLPPermissionInfo

## getDLPPermissionInfo

```TypeScript
function getDLPPermissionInfo(): Promise<DLPPermissionInfo>
```

查询当前DLP沙箱的权限信息，包括文件授权类型及可执行操作（如查看、编辑、复制等）。仅支持在DLP沙箱应用中调用，使用Promise异步回调。 在DLP沙箱中处理文件时，可根据权限信息判断当前用户可以执行哪些操作，避免调用无权限的功能。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPPermissionInfo> | Promise对象。返回查询的DLP文件的权限信息，无异常则表明查询成功。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100001 | Invalid parameter value. |
| 19100006 | No permission to call this API,  which is available only for DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.isInSandbox().then(async (inSandbox) => { // Check whether the application is running in a sandbox.
  if (inSandbox) {
    dlpPermission.getDLPPermissionInfo().then((permissionInfo: dlpPermission.DLPPermissionInfo) => {
      console.info('permissionInfo', JSON.stringify(permissionInfo));
    }).catch((error: BusinessError)=> {
      console.error(JSON.stringify(error));
    })
  }
});

```

## getDLPPermissionInfo

```TypeScript
function getDLPPermissionInfo(callback: AsyncCallback<DLPPermissionInfo>): void
```

查询当前DLP沙箱的权限信息。返回的权限信息包括文件的授权类型和可执行的操作权限(如查看、编辑、复制等)。仅支持在DLP沙箱应用中调用。使用callback异步回调。 在DLP沙箱中处理文件时，可根据权限信息判断当前用户可以执行哪些操作，避免调用无权限的功能。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DLPPermissionInfo> | Yes | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100006 | No permission to call this API,  which is available only for DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.isInSandbox().then((inSandbox) => { // Check whether the application is running in a sandbox.
  if (inSandbox) {
    dlpPermission.getDLPPermissionInfo((err, permissionInfo) => { 
      if (err != undefined) {
        console.error('getDLPPermissionInfo error', err.code, err.message);
      } else {
        console.info('permissionInfo', JSON.stringify(permissionInfo));
      }
    }); // Obtain the permission information.
  }
});

```

