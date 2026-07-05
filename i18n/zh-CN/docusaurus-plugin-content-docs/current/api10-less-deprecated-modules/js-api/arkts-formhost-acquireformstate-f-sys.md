# acquireFormState

## acquireFormState

```TypeScript
function acquireFormState(want: Want, callback: AsyncCallback<formInfo.FormStateInfo>): void
```

Obtains the widget state. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#acquireFormState

**需要权限：** 

 ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information carried to query the widget state. The information must contain the  bundle name, ability name, module name, widget name, and widget dimensions. |
| callback | AsyncCallback&lt;formInfo.FormStateInfo> | 是 | Callback used to return the result. If the widget  state is obtained, error is undefined and data is the widget state obtained; otherwise, error  is an error object. |

## acquireFormState

```TypeScript
function acquireFormState(want: Want): Promise<formInfo.FormStateInfo>
```

Obtains the widget state. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#acquireFormState

**需要权限：** 

 ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information carried to query the widget state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.FormStateInfo> | Promise used to return the widget state obtained. |

