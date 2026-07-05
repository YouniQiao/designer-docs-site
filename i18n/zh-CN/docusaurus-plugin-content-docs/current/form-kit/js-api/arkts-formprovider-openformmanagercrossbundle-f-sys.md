# openFormManagerCrossBundle

## openFormManagerCrossBundle

```TypeScript
function openFormManagerCrossBundle(want: Want): void
```

Open the view of forms belonging to the specified bundle. Client to communication with FormManagerService.

**起始版本：** 20

**需要权限：** 

 ohos.permission.PUBLISH_FORM_CROSS_BUNDLE

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | The want of the form to open. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 801 | Capability not supported. |
| 16500050 | IPC connection error. |

