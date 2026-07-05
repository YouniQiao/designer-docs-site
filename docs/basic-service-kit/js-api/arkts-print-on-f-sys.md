# on

## on('printerStateChange')

```TypeScript
function on(type: 'printerStateChange', callback: (state: PrinterState, info: PrinterInfo) => void): void
```

注册打印机状态变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'printerStateChange' | Yes | 表示打印机状态改变。 |
| callback | (state: PrinterState, info: PrinterInfo) => void | Yes | 打印机状态改变之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.on('printerStateChange', (state: print.PrinterState, info: print.PrinterInfo) => {
    if (state === null || info === null) {
        console.error('printer state changed state is null or info is null');
        return;
    } else {
        console.info('on printer state changed, state : ' + JSON.stringify(state));
        console.info('on printer state changed, info : ' + JSON.stringify(info));
    }
})

```

## on('jobStateChange')

```TypeScript
function on(type: 'jobStateChange', callback: (state: PrintJobState, job: PrintJob) => void): void
```

注册打印任务状态变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'jobStateChange' | Yes | 表示打印任务状态改变。 |
| callback | (state: PrintJobState, job: PrintJob) => void | Yes | 打印任务状态改变之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.on('jobStateChange', (state: print.PrintJobState, job: print.PrintJob) => {
    console.info('onJobStateChange, state : ' + JSON.stringify(state) + ', job : ' + JSON.stringify(job));
})

```

## on('extInfoChange')

```TypeScript
function on(type: 'extInfoChange', callback: (extensionId: string, info: string) => void): void
```

注册打印扩展信息变化事件回调，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'extInfoChange' | Yes | 表示打印扩展信息改变。 |
| callback | (extensionId: string, info: string) => void | Yes | 打印扩展信息改变之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

print.on('extInfoChange', (extensionId: string, info: string) => {
    console.info('onExtInfoChange, extensionId : ' + JSON.stringify(extensionId) + ', info : ' + JSON.stringify(info));
})

```

