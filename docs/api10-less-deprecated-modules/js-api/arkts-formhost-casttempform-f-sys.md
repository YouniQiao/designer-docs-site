# castTempForm

## castTempForm

```TypeScript
function castTempForm(formId: string, callback: AsyncCallback<void>): void
```

Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#castTempForm

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the widget is converted to a  normal one, error is undefined; otherwise, error is an error object. |

## castTempForm

```TypeScript
function castTempForm(formId: string): Promise<void>
```

Converts a temporary widget to a normal one. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#castTempForm

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

