# onBadgeNumberQuery

## onBadgeNumberQuery

```TypeScript
function onBadgeNumberQuery(callback: (bundle: BundleOption) => Promise<long>): void
```

注册应用角标数量查询回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (bundle: BundleOption) => Promise&lt;long> | Yes | 应用角标数量查询函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
try{
    notificationManager.onBadgeNumberQuery(
        async (bundleOption: notificationManager.BundleOption) => {
            return 1;
        }
    );
} catch (err) {
    console.error(`OnBadgeNumberQuery failed, code is ${err.code}, message is ${err.message}`);
}

```

