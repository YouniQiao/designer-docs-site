# queryBundleStatsInfos

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## queryBundleStatsInfos

```TypeScript
function queryBundleStatsInfos(admin: Want, startTime: number, endTime: number, accountId: number): Array<BundleStatsInfo>
```

Queries bundle statistics information of applications.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the enterprise admin extension ability information. |
| startTime | number | Yes | startTime indicates the start time of the query period.<br>Unit: milliseconds, The value must be an integer greater than or equal to 0. |
| endTime | number | Yes | endTime indicates the end time of the query period.<br>Unit: milliseconds, The value must be an integer greater than or equal to 0. |
| accountId | number | Yes | accountId indicates the local ID of the OS account.<br>The value must be an integer greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;BundleStatsInfo&gt; | returns the bundle statistics information of the applications. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

