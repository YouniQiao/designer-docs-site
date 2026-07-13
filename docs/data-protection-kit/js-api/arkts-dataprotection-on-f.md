# on

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## on('openDLPFile')

```TypeScript
function on(type: 'openDLPFile', listener: Callback<AccessedDLPFileInfo>): void
```

Subscribes to a DLP file open event. After this API is successfully called, a callback notification is sent to
the current application when the DLP file is opened. This API can be called only in non-DLP sandbox applications.

You can subscribe to this event when your application needs to perform specific operations (such as logging and
updating the UI) after a DLP file is opened.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'openDLPFile' | Yes | Event type. It has a fixed value of **openDLPFile**, which indicates the DLP fileopen event. |
| listener | Callback&lt;AccessedDLPFileInfo&gt; | Yes | Callback invoked when a DLP file is opened. The applicationwill be notified when the DLP file is opened. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.on('openDLPFile', (info: dlpPermission.AccessedDLPFileInfo) => {
  console.info('openDlpFile event', info.uri, info.lastOpenTime);
}); // Subscribe to the DLP file open event.

```

