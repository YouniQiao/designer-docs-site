# deleteInvalidForms

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<number>): void
```

Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#deleteInvalidForms

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of valid widget IDs. |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the result. If the invalid widgets are  deleted, error is undefined and data is the number of widgets deleted; otherwise, error is  an error object. |

## deleteInvalidForms

```TypeScript
function deleteInvalidForms(formIds: Array<string>): Promise<number>
```

Deletes invalid widgets from the list. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#deleteInvalidForms

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of valid widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of widgets deleted. |

