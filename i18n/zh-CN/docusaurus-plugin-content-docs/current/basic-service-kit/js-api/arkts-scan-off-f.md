# off

## off('scanDeviceFound')

```TypeScript
function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void
```

取消注册扫描仪设备发现事件回调。使用callback异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.PRINT

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'scanDeviceFound' | 是 | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

## off('scanDeviceSync')

```TypeScript
function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void
```

取消注册扫描仪设备同步事件回调。使用callback异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_PRINT_JOB

**系统能力：** SystemCapability.Print.PrintFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'scanDeviceSync' | 是 | 事件类型。 |
| callback | Callback&lt;ScannerSyncDevice> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

