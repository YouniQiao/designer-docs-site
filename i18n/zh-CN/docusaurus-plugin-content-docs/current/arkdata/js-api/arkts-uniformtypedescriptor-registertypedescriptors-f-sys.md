# registerTypeDescriptors

## registerTypeDescriptors

```TypeScript
function registerTypeDescriptors(typeDescriptors: Array<TypeDescriptor>): Promise<void>
```

Register type descriptors into the system.

**起始版本：** 22

**需要权限：** 

 ohos.permission.MANAGE_DYNAMIC_UTD_TYPE

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| typeDescriptors | Array&lt;TypeDescriptor> | 是 | The list of type descriptors to be registered. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission denied, non-system app called system api. |
| 20400002 | The format of one or more typeDescriptors are invalid. |
| 20400003 | The content of one or more typeDescriptors violate rules. |

