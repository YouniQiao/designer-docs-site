# offBadgeNumberQuery

## offBadgeNumberQuery

```TypeScript
function offBadgeNumberQuery(): void
```

取消应用角标数量查询回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**示例：**

```TypeScript
try{
    notificationManager.offBadgeNumberQuery();
} catch (err) {
    console.error(`OffBadgeNumberQuery failed, code is ${err.code}, message is ${err.message}`);
}

```

