# on

## on('openDLPFile')

```TypeScript
function on(type: 'openDLPFile', listener: Callback<AccessedDLPFileInfo>): void
```

监听打开DLP文件。调用成功后，当DLP文件被打开时会触发回调通知当前应用。仅支持在非DLP沙箱应用中调用。 当应用需要在DLP文件打开后执行特定操作(如记录日志、更新界面)时，可注册该监听。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'openDLPFile' | Yes | 监听事件类型。固定值为'openDLPFile'：打开DLP文件事件。 |
| listener | Callback&lt;AccessedDLPFileInfo> | Yes | DLP文件打开事件的回调。在当前应用的沙箱应用打开DLP文件时，通知当前应用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.on('openDLPFile', (info: dlpPermission.AccessedDLPFileInfo) => {
  console.info('openDlpFile event', info.uri, info.lastOpenTime);
}); // Subscribe to the DLP file open event.

```

