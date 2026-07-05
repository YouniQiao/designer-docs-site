# getAllTemplateFormsInfo

## getAllTemplateFormsInfo

```TypeScript
function getAllTemplateFormsInfo(): Promise<Array<formInfo.FormInfo>>
```

Obtains the template widget information provided by all applications on the device. This API uses a promise to return the result.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo>> | Promise used to return the information obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |

