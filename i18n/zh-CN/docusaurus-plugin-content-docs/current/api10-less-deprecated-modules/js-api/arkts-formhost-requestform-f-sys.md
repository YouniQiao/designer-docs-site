# requestForm

## requestForm

```TypeScript
function requestForm(formId: string, callback: AsyncCallback<void>): void
```

Requests a widget update. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#requestForm

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the widget is updated,  error is undefined; otherwise, error is an error object. |

## requestForm

```TypeScript
function requestForm(formId: string): Promise<void>
```

Requests a widget update. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#requestForm

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

