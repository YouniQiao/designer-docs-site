# updateTemplateFormDetailInfo

## updateTemplateFormDetailInfo

```TypeScript
function updateTemplateFormDetailInfo(templateFormInfo: Array<formInfo.TemplateFormDetailInfo>): Promise<void>
```

Updates the static configuration information of a specified template widget on the current device. This API uses a promise to return the result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| templateFormInfo | Array&lt;formInfo.TemplateFormDetailInfo> | 是 | Static configuration information of a specified  template widget. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16501013 | The system does not support the current operation. |

