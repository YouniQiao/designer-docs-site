# uninstallDLPSandbox

## uninstallDLPSandbox

```TypeScript
function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number): Promise<void>
```

卸载一个应用的DLP沙箱。使用Promise异步回调。调用成功后，系统销毁指定的DLP沙箱环境并释放相关资源。 需要清理对应的沙箱环境时使用此接口。 必须在调用 [installDLPSandbox]dlpPermission.installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string) 安装沙箱后才能调用此方法卸载。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。最小7字节，最大128字节。超出范围时抛出错误码19100001。 |
| userId | number | Yes | 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。 取值范围为[0, 231-1]，超出范围将被截断。当传入参数值小于0  时，输出错误日志。 |
| appIndex | number | Yes | DLP沙箱号，即installDLPSandbox接口调用成功后的返回值，用于标识已安装的DLP沙箱。取值范围为[1000, 1100]，超出范围时输出错误日志。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100,
  uri).then(async (dlpSandboxInfo: dlpPermission.DLPSandboxInfo) => {
  console.info('dlpSandboxInfo: ', JSON.stringify(dlpSandboxInfo));
  await dlpPermission.uninstallDLPSandbox('com.ohos.note', 100, dlpSandboxInfo.appIndex); // Uninstall the DLP sandbox.
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Uninstall the DLP sandbox that has been installed.

```

## uninstallDLPSandbox

```TypeScript
function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number, callback: AsyncCallback<void>): void
```

卸载一个应用的DLP沙箱。使用callback异步回调。调用成功后，系统销毁指定的DLP沙箱环境并释放相关资源。 需要清理沙箱环境时使用此接口。 必须在调用 [installDLPSandbox]dlpPermission.installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string) 安装沙箱后才能调用此方法卸载。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。最小7字节，最大128字节。超出范围时抛出错误码19100001。 |
| userId | number | Yes | 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。取值范围为[0, 231-1]，超出范围将被截断。 |
| appIndex | number | Yes | DLP沙箱号，即installDLPSandbox接口调用成功后的返回值，用于标识已安装的DLP沙箱。取值范围为[1000, 1100]，超出范围时输出错误日志。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当卸载DLP沙箱成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100,
  uri).then((dlpSandboxInfo: dlpPermission.DLPSandboxInfo) => {
  console.info('dlpSandboxInfo: ', JSON.stringify(dlpSandboxInfo));
  dlpPermission.uninstallDLPSandbox('com.ohos.note', 100, dlpSandboxInfo.appIndex, (err, res) => {
    if (err !== undefined) {
      console.error('uninstallDLPSandbox error,', err.code, err.message);
    } else {
      console.info('res', JSON.stringify(res));
    }
  }); // Uninstall a DLP sandbox.
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Uninstall the DLP sandbox that has been installed.

```

