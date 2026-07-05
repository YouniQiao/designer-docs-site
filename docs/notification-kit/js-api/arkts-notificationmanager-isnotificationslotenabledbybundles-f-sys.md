# isNotificationSlotEnabledByBundles

## isNotificationSlotEnabledByBundles

```TypeScript
function isNotificationSlotEnabledByBundles(bundles: Array<BundleOption>, type: SlotType): Promise<Map<BundleOption, boolean>>
```

批量获取多个应用的指定渠道类型的使能状态。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption> | Yes | 应用包信息数组。 |
| type | SlotType | Yes | 渠道类型。所有应用共享同一个渠道类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, boolean>> | 以Promise形式返回批量查询结果，key为应用包信息，value为渠道使能状态  （true：使能，false：禁止）。未创建渠道的应用不会出现在返回结果中。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |

