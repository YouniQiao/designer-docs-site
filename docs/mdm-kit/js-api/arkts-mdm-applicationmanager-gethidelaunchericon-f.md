# getHideLauncherIcon

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

<a id="gethidelaunchericon"></a>
## getHideLauncherIcon

```TypeScript
function getHideLauncherIcon(admin: Want | null): Array<string>
```

Gets applications that hide launcher icons.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function getHideLauncherIcon(admin: Want | null): Array<string>--><!--Device-applicationManager-function getHideLauncherIcon(admin: Want | null): Array<string>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | admin indicates the enterprise admin extension ability information. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | the bundle name list of the applications. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

