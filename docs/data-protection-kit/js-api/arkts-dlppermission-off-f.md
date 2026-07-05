# off

## off('openDLPFile')

```TypeScript
function off(type: 'openDLPFile', listener?: Callback<AccessedDLPFileInfo>): void
```

取消监听打开DLP文件。仅支持在非DLP沙箱应用中调用。调用成功后，将不再接收DLP文件打开事件的通知。 该接口通常在页面销毁或不再需要监听时调用以释放资源。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'openDLPFile' | Yes | 监听事件类型。固定值为'openDLPFile'：打开DLP文件事件。 |
| listener | Callback&lt;AccessedDLPFileInfo> | No | DLP文件被打开的事件的回调。当需要取消特定回调时传入此参数（传入之前注册的回调函数），  当需要取消所有回调时可不传此参数。不传入时默认为空，取消该类型事件的所有回调。 |

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

dlpPermission.off('openDLPFile', (info: dlpPermission.AccessedDLPFileInfo) => {
  console.info('openDlpFile event', info.uri, info.lastOpenTime);
}); // Unsubscribe from the DLP file open event.

```

