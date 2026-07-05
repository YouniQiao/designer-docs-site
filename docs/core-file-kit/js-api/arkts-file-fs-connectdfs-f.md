# connectDfs

## connectDfs

```TypeScript
declare function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>
```

业务调用connectDfs接口，触发建链。如果对端设备出现异常，业务执行回调DfsListeners内 [onStatus](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#onstatus12)通知应用。

**Since:** 12

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | 设备的网络Id。通过  [distributedDeviceManager](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager.md#distributedDeviceManager)接口调用  [DeviceBasicInfo](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicebasicinfo-i.md#DeviceBasicInfo)获得。 |
| listeners | DfsListeners | Yes | 分布式文件系统状态监听器。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13900045 | Connection failed. |
| 13900046 | Software caused connection abort. |

