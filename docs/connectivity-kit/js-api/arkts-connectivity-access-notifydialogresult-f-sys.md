# notifyDialogResult (System API)

## Modules to Import

```TypeScript
import { access } from '@kit.ConnectivityKit';
```

<a id="notifydialogresult"></a>
## notifyDialogResult

```TypeScript
function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>
```

Notify bluetooth the result of bluetooth dialog.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

<!--Device-access-function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>--><!--Device-access-function notifyDialogResult(notifyDialogResultParams: NotifyDialogResultParams): Promise<void>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| notifyDialogResultParams | [NotifyDialogResultParams](arkts-connectivity-access-notifydialogresultparams-i-sys.md) | Yes | Indicates the params for dialog result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 2900001 | Service stopped. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let notifyDialogResultParams: access.NotifyDialogResultParams = {
        "dialogType": 0,
        "dialogResult": true,
    };
    access.notifyDialogResult(notifyDialogResultParams);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

