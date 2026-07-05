# off

## off('activeStateChange')

```TypeScript
function off(
    type: 'activeStateChange',
    permissionList: Array<Permissions>,
    callback?: Callback<ActiveChangeResponse>): void
```

取消订阅指定权限列表的权限使用状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变更通知。 取消订阅时，若不传入回调函数，则批量删除permissionList下的所有回调函数。 > **说明** > 该接口通常与[on]privacyManager.on配套使用，用于取消通过on创建的监听关系。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeStateChange' | Yes | 取消订阅事件类型，固定为'activeStateChange'，权限使用状态变更事件。 |
| permissionList | Array&lt;Permissions> | Yes | 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。  取值约束：数组长度不能超过1024。 |
| callback | Callback&lt;ActiveChangeResponse> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left  unspecified; 2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The permissionList is not in the listening list. |
| 12100004 | The API is not used in pair with 'on'. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let permissionList: Array<Permissions> = [];
try {
    // Unsubscribe from permission usage status change events
    privacyManager.off('activeStateChange', permissionList);
} catch (err) {
    let error = err as BusinessError;
    console.error(`Catch errcode: ${error.code}, message: ${error.message}`);
}

```

