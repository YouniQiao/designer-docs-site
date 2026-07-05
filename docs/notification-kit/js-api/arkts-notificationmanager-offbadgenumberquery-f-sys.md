# offBadgeNumberQuery

## offBadgeNumberQuery

```TypeScript
function offBadgeNumberQuery(): void
```

取消应用角标数量查询回调。

**Since:** 22

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

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
    notificationManager.offBadgeNumberQuery();
} catch (err) {
    console.error(`OffBadgeNumberQuery failed, code is ${err.code}, message is ${err.message}`);
}

```

