# disableFormsUpdate (System API)

## disableFormsUpdate

```TypeScript
function disableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive
updates from the widget provider. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [disableFormsUpdate](arkts-form-disableformsupdate-f-sys.md#disableformsupdate-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string&gt; | Yes | List of widget IDs. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If a notification is sent to thewidget framework to make the widget not updatable, **error** is undefined; otherwise, **error** is an errorobject. |


## disableFormsUpdate

```TypeScript
function disableFormsUpdate(formIds: Array<string>): Promise<void>
```

Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive
updates from the widget provider. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [disableFormsUpdate](arkts-form-disableformsupdate-f-sys.md#disableformsupdate-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string&gt; | Yes | List of widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

