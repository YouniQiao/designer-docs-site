# deletePartition

## deletePartition

```TypeScript
function deletePartition(diskId: string, partitionNum: int): Promise<void>
```

Deletes a partition on a disk. This API uses a promise to return the result.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MOUNT_FORMAT_MANAGER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| diskId | string | 是 | Disk ID. |
| partitionNum | int | 是 | Partition number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13600010 | The input parameter is invalid. |
| 13600023 | Delete partition failed. |

