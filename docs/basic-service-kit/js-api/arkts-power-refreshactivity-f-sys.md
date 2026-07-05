# refreshActivity

## refreshActivity

```TypeScript
function refreshActivity(reason: string): void
```

刷新设备活动状态（如：重设屏幕超时息屏时间等）。 只有设备在活动状态下生效，设备活动状态见[power.isActive](arkts-power-isactive-f.md#isActive-1)接口。

**Since:** 20

**Required permissions:** 

 ohos.permission.REFRESH_USER_ACTION

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 刷新设备活动状态的原因。该参数必须为字符串类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |
| 4900201 | The device activity is being refreshed too frequently; the minimum time  interval is 100 ms. |

**Example**

```TypeScript
try {
    power.refreshActivity('refreshActivity_test');
} catch(err) {
    console.error('refreshActivity failed, err: ' + err);
}

```

