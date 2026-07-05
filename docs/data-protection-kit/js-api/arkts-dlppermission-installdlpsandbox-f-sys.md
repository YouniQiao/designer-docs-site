# installDLPSandbox

## installDLPSandbox

```TypeScript
function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string): Promise<DLPSandboxInfo>
```

安装一个应用的DLP沙箱。DLP沙箱为受保护的DLP文件创建独立的运行环境，与原应用进程隔离，确保数据在授权范围内安全流转。沙箱应用继承原应用的功能但仅能访问授权的DLP文件。使用Promise异步回调。 调用installDLPSandbox成功后必须在使用完毕后调用 [uninstallDLPSandbox]dlpPermission.uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number) 卸载沙箱。 DLP文件管理应用打开受保护文件前，需要先为目标应用安装DLP沙箱。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。最小7字节，最大128字节。超出范围时抛出错误码19100001。 |
| access | DLPFileAccess | Yes | DLP文件授权类型。设置不同的授权类型将决定用户对DLP文件的访问权限范围。 |
| userId | number | Yes | 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。 取值范围为[0, 231-1]，超出范围将被截断。当传入参数值小于0  时，输出错误日志。 |
| uri | string | Yes | DLP文件的URI。不超过4095字节。超出范围时抛出错误码19100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPSandboxInfo> | Promise对象。安装沙箱应用，返回应用沙箱信息。 |

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
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Install a DLP sandbox application.

```

## installDLPSandbox

```TypeScript
function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string, callback: AsyncCallback<DLPSandboxInfo>): void
```

安装一个应用的DLP沙箱。使用callback异步回调。调用成功后，系统为应用创建DLP沙箱环境并返回沙箱信息。 调用installDLPSandbox成功后必须在使用完毕后调用 [uninstallDLPSandbox]dlpPermission.uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number) 卸载沙箱。 DLP文件管理应用打开受保护文件前，需要先为目标应用安装DLP沙箱。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名。最小7字节，最大128字节。超出范围时抛出错误码19100001。 |
| access | DLPFileAccess | Yes | DLP文件授权类型。设置不同的授权类型将决定用户对DLP文件的访问权限范围。 |
| userId | number | Yes | 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。 取值范围为[0, 231-1]，超出范围将被截断。当传入参数值小于0  时，输出错误日志。 |
| uri | string | Yes | DLP文件的URI。不超过4095字节。 超出范围时抛出错误码19100001。 |
| callback | AsyncCallback&lt;DLPSandboxInfo> | Yes | 回调函数。当安装DLP沙箱成功，err为undefined，data为获取到的沙箱信息；否则为错误对象。 |

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
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100, uri, (err, res) => {
  if (err !== undefined) {
    console.error('installDLPSandbox error,', err.code, err.message);
  } else {
    console.info('res', JSON.stringify(res));
  }
}); // Install a DLP sandbox application.

```

