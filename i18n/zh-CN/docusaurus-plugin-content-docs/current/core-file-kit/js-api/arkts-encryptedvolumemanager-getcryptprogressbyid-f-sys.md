# getCryptProgressById

## getCryptProgressById

```TypeScript
function getCryptProgressById(volumeId: string): Promise<int>
```

Get the encrypting progress.

**起始版本：** 24

**需要权限：** 

 ohos.permission.ENCRYPT_VOLUME_MANAGER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.StorageService.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeId | string | 是 | The id of the volume |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | return Promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13600010 | Invalid params |
| 13600021 | Volume is not encrypted. |

