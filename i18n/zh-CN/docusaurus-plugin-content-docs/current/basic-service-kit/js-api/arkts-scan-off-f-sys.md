# off

## off('scanDeviceAdd')

```TypeScript
function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void
```

取消注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_PRINT_JOB

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'scanDeviceAdd' | 是 | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## off('scanDeviceDel')

```TypeScript
function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void
```

取消注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_PRINT_JOB

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'scanDeviceDel' | 是 | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

