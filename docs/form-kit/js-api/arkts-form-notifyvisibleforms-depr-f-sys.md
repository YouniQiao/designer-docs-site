# notifyVisibleForms (System API)

## notifyVisibleForms

```TypeScript
function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [notifyVisibleForms](arkts-form-notifyvisibleforms-f-sys.md#notifyvisibleforms-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | Array&lt;string&gt; | Yes | List of widget IDs. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If a notification is sent to thewidget framework to make the widget visible, **error** is undefined; otherwise, **error** is an error object. |


## notifyVisibleForms

```TypeScript
function notifyVisibleForms(formIds: Array<string>): Promise<void>
```

Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [notifyVisibleForms](arkts-form-notifyvisibleforms-f-sys.md#notifyvisibleforms-1)

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

