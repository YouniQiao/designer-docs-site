# releaseForm (System API)

## releaseForm

```TypeScript
function releaseForm(formId: string, callback: AsyncCallback<void>): void
```

Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager
still retains the widget cache and storage information. This API uses an asynchronous callback to return the
result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the widget is released,**error** is undefined; otherwise, **error** is an error object. |


## releaseForm

```TypeScript
function releaseForm(formId: string, isReleaseCache: boolean, callback: AsyncCallback<void>): void
```

Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager
retains the storage information about the widget and retains or releases the cache information based on the
setting. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| isReleaseCache | boolean | Yes | Whether to release the cache. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the widget is released,**error** is undefined; otherwise, **error** is an error object. |


## releaseForm

```TypeScript
function releaseForm(formId: string, isReleaseCache?: boolean): Promise<void>
```

Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager
retains the storage information about the widget and retains or releases the cache information based on the
setting. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [releaseForm](arkts-form-releaseform-f-sys.md#releaseform-1)

**Required permissions:** ohos.permission.REQUIRE_FORM

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formId | string | Yes | Widget ID. |
| isReleaseCache | boolean | No | Whether to release the cache. The default value is **false**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

