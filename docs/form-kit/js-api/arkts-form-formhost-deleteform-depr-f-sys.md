# deleteForm (System API)

## deleteForm

```TypeScript
function deleteForm(formId: string, callback: AsyncCallback<void>): void
```

Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [deleteForm](arkts-form-formhost-deleteform-f-sys.md#deleteform-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function deleteForm(formId: string, callback: AsyncCallback<void>): void--><!--Device-formHost-function deleteForm(formId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the widget is deleted, **error** is undefined; otherwise, **error** is an error object. |


## deleteForm

```TypeScript
function deleteForm(formId: string): Promise<void>
```

Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager will not retain the widget information. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [deleteForm](arkts-form-formhost-deleteform-f-sys.md#deleteform-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function deleteForm(formId: string): Promise<void>--><!--Device-formHost-function deleteForm(formId: string): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

