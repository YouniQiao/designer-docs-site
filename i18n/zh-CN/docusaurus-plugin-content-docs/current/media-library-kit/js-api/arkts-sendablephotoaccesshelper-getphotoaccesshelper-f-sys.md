# getPhotoAccessHelper

## getPhotoAccessHelper

```TypeScript
function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper
```

Returns an instance of PhotoAccessHelper

**起始版本：** 19

**需要权限：** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information |
| userId | number | 是 | Target userId |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PhotoAccessHelper | Instance of PhotoAccessHelper |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 13900020 | Invalid argument |

