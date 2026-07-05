# off

## off('printerStateChange')

```TypeScript
function off(type: 'printerStateChange', callback?: Callback<boolean>): void
```

取消注册打印机状态变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'printerStateChange' | Yes | 表示打印机状态改变。 |
| callback | Callback&lt;boolean> | No | 表示取消注册打印机状态变化事件是否成功。true表示成功，false表示失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.off('printerStateChange', (data: boolean) => {
    console.info('off printerStateChange data : ' + JSON.stringify(data));
})

```

## off('jobStateChange')

```TypeScript
function off(type: 'jobStateChange', callback?: Callback<boolean>): void
```

取消注册打印任务状态变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'jobStateChange' | Yes | 表示打印任务状态改变。 |
| callback | Callback&lt;boolean> | No | 表示取消注册打印任务状态变化事件是否成功。true表示成功，false表示失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.off('jobStateChange', (data: boolean) => {
    console.info('offJobStateChanged data : ' + JSON.stringify(data));
})

```

## off('extInfoChange')

```TypeScript
function off(type: 'extInfoChange', callback?: Callback<boolean>): void
```

取消注册打印扩展信息变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'extInfoChange' | Yes | 表示打印扩展信息改变。 |
| callback | Callback&lt;boolean> | No | 表示取消注册打印扩展信息变化事件是否成功。true表示成功，false表示失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.off('extInfoChange', (data: boolean) => {
    console.info('offExtInfoChange data : ' + JSON.stringify(data));
})

```

