# disconnectDfs

## disconnectDfs

```TypeScript
declare function disconnectDfs(networkId: string): Promise<void>
```

业务调用disconnectDfs接口，传入networkId参数，触发断链。

**起始版本：** 12

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | 设备的网络Id。通过  [distributedDeviceManager](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager.md#distributedDeviceManager)接口调用  [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicebasicinfo-i.md#DeviceBasicInfo)获得。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600004 | Unmount failed. |

