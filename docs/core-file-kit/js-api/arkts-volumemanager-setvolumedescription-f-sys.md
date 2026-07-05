# setVolumeDescription

## setVolumeDescription

```TypeScript
function setVolumeDescription(uuid: string, description: string, callback: AsyncCallback<void>): void
```

修改指定卷设备描述，使用callback异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述， 只有处于卸载状态的卷设备可以修改设备描述。

**Since:** 9

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | 卷设备uuid。 |
| description | string | Yes | 卷设备描述。 |
| callback | AsyncCallback&lt;void> | Yes | 设置卷描述之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

## setVolumeDescription

```TypeScript
function setVolumeDescription(uuid: string, description: string): Promise<void>
```

修改指定卷设备描述，使用Promise异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述， 只有处于卸载状态的卷设备可以修改设备描述。

**Since:** 9

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | 卷设备uuid。 |
| description | string | Yes | 卷设备描述。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

