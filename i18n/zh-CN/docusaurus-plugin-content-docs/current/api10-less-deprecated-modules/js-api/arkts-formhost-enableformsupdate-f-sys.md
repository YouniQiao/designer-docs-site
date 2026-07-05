# enableFormsUpdate

## enableFormsUpdate

```TypeScript
function enableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#enableFormsUpdate

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | List of widget IDs. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If a notification is sent to the  widget framework to make the widget updatable, error is undefined; otherwise, error is an error  object. |

## enableFormsUpdate

```TypeScript
function enableFormsUpdate(formIds: Array<string>): Promise<void>
```

Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled state and can receive updates from the widget provider. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#enableFormsUpdate

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | List of widget IDs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

