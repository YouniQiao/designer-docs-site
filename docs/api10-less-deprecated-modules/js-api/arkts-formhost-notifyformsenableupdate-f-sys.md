# notifyFormsEnableUpdate

## notifyFormsEnableUpdate

```TypeScript
function notifyFormsEnableUpdate(
    formIds: Array<string>,
    isEnableUpdate: boolean,
    callback: AsyncCallback<void>
  ): void
```

Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#notifyFormsEnableUpdate

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of widget IDs. |
| isEnableUpdate | boolean | Yes | Whether to make the widgets updatable. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the notification is sent,  error is undefined; otherwise, error is an error object. |

## notifyFormsEnableUpdate

```TypeScript
function notifyFormsEnableUpdate(formIds: Array<string>, isEnableUpdate: boolean): Promise<void>
```

Instructs the widgets to enable or disable updates. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#notifyFormsEnableUpdate

**Required permissions:** 

 ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string> | Yes | List of widget IDs. |
| isEnableUpdate | boolean | Yes | Whether to make the widgets updatable. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

