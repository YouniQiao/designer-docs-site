# notifyVisibleForms (System API)

## notifyVisibleForms

```TypeScript
function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void
```

Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [notifyVisibleForms](arkts-form-formhost-notifyvisibleforms-f-sys.md#notifyvisibleforms-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void--><!--Device-formHost-function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | List of widget IDs. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If a notification is sent to the widget framework to make the widget visible, **error** is undefined; otherwise, **error** is an error object. |


## notifyVisibleForms

```TypeScript
function notifyVisibleForms(formIds: Array<string>): Promise<void>
```

Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is invoked to notify the widget provider. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [notifyVisibleForms](arkts-form-formhost-notifyvisibleforms-f-sys.md#notifyvisibleforms-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

<!--Device-formHost-function notifyVisibleForms(formIds: Array<string>): Promise<void>--><!--Device-formHost-function notifyVisibleForms(formIds: Array<string>): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | List of widget IDs. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

