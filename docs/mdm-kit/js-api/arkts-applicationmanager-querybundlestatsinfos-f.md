# queryBundleStatsInfos

## queryBundleStatsInfos

```TypeScript
function queryBundleStatsInfos(admin: Want, startTime: number, endTime: number, accountId: number): Array<BundleStatsInfo>
```

查询指定用户账户在给定时间段内，各应用在前台运行的累计时长统计信息。查询的最小粒度是天，调用时需要传入起始时间（startTime）、结束时间（endTime）以及目标用户账户ID（accountId）。请求参数startTime 和endTime为毫秒级时间戳，支持调用方传入自定义值，startTime默认取当天的00:00:00.000，endTime默认取当天的24:00:00.000（即次日零点）。请求参数接口返回BundleStatsInfo数组， 每个元素包含一个应用的包名，其分身索引值及其对应时间段内的前台使用时长（毫秒级时间戳）。若startTime为0，则表示从设备首次开机的时间开始查询。若起始时间晚于结束时间，接口将返回错误码9200012。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| startTime | number | Yes | 查询起始时间  单位为： 毫秒，取值应为≥0的整数。 |
| endTime | number | Yes | 查询结束时间，单位：毫秒（时间戳）  单位为： 毫秒，取值应为≥0的整数。 |
| accountId | number | Yes | accountId为操作系统帐户的本地ID。  取值应为≥0的整数。  - 用户ID，取值范围：大于等于0的整数。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;BundleStatsInfo> | 返回应用包统计信息的数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

