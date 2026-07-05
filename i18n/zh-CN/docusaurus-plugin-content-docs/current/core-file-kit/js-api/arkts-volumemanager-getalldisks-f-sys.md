# getAllDisks

## getAllDisks

```TypeScript
function getAllDisks(): Promise<Array<Disk>>
```

Querying Information About All Disks.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Disk>> | return Promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |

