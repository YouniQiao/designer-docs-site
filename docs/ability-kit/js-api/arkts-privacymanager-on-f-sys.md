# on

## on('activeStateChange')

```TypeScript
function on(type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback: Callback<ActiveChangeResponse>): void
```

订阅指定权限列表的权限使用状态变更事件。权限使用状态变更由[startUsingPermission]privacyManager.startUsingPermission和[stopUsingPermission]privacyManager.stopUsingPermission调用触发。订阅成功后，当权限使用状态变更时，回调函数会被触发，返回[ActiveChangeResponse]privacyManager.ActiveChangeResponse对象，包含权限使用状态变化的详情。使用callback异步回调。 允许相同permissionList订阅多个回调函数。 > **说明** > 不允许使用有交集的两个permissionList分别订阅同一个回调函数。即如果两个permissionList包含相同的权限名，则不能使用同一个回调函数进行订阅。该接口通常与[off]privacyManager.off配套使用，在不再需要监听时应调用off取消订阅。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeStateChange' | Yes | 订阅事件类型，固定为'activeStateChange'，权限使用状态变更事件。 |
| permissionList | Array&lt;Permissions> | Yes | 订阅的权限名列表。为空时表示订阅所有的权限使用状态变化。传入无效值时返回错误码12100001。  取值约束：数组长度不能超过1024。 |
| callback | Callback&lt;ActiveChangeResponse> | Yes | 回调函数，返回订阅指定权限使用状态变更事件的对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The permissionList exceeds the size limit, or the  permissionNames in the list are all invalid. |
| 12100004 | The API is used repeatedly with the same input. |
| 12100005 | The registration time has exceeded the limit. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let permissionList: Array<Permissions> = [];
try {
    // Subscribe to permission usage status change events
    privacyManager.on('activeStateChange', permissionList, (data: privacyManager.ActiveChangeResponse) => {
        console.debug(`receive permission state change, data: ${data}`);
    });
} catch (err) {
    let error = err as BusinessError;
    console.error(`Catch errcode: ${error.code}, message: ${error.message}`);
}

```

