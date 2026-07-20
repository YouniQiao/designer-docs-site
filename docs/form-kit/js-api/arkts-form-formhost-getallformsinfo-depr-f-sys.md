# getAllFormsInfo (System API)

## getAllFormsInfo

```TypeScript
function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void
```

Obtains the widget information provided by all applications on the device. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAllFormsInfo](arkts-form-formhost-getallformsinfo-f-sys.md#getallformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-formHost-function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void--><!--Device-formHost-function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.FormInfo>> | Yes | Callback used to return the result. If the widget information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error** is an error object. |


## getAllFormsInfo

```TypeScript
function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by all applications on the device. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAllFormsInfo](arkts-form-formhost-getallformsinfo-f-sys.md#getallformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-formHost-function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>--><!--Device-formHost-function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<formInfo.FormInfo>> | Promise used to return the information obtained. |

