# deleteInvalidForms

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<number>): void
```

Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#deleteInvalidForms

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | List of valid widget IDs. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the invalid widgets are  deleted, error is undefined and data is the number of widgets deleted; otherwise, error is  an error object. |

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>): Promise<number>
```

Deletes invalid widgets from the list. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#deleteInvalidForms

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | 是 | List of valid widget IDs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of widgets deleted. |

