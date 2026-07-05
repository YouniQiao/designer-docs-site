# offPublishFormCrossBundleControl

## offPublishFormCrossBundleControl

```TypeScript
function offPublishFormCrossBundleControl(callback?: formInfo.PublishFormCrossBundleControlCallback): void
```

Unsubscribes from controls on cross-bundle widget addition to the home screen. This API uses an asynchronous callback to return the result.

**起始版本：** 23

**需要权限：** 

 ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | formInfo.PublishFormCrossBundleControlCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |

