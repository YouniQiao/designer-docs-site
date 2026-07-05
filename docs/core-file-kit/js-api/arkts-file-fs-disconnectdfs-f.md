# disconnectDfs

## disconnectDfs

```TypeScript
declare function disconnectDfs(networkId: string): Promise<void>
```

业务调用disconnectDfs接口，传入networkId参数，触发断链。

**Since:** 12

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | 设备的网络Id。通过  [distributedDeviceManager](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager.md#distributedDeviceManager)接口调用  [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicebasicinfo-i.md#DeviceBasicInfo)获得。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600004 | Unmount failed. |

