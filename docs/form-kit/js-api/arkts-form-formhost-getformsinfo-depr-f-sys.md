# getFormsInfo (System API)

## getFormsInfo

```TypeScript
function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void
```

Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getFormsInfo](arkts-form-formhost-getformsinfo-f-sys.md#getformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-formHost-function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void--><!--Device-formHost-function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.FormInfo>> | Yes | Callback used to return the result. If the widget information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error** is an error object. |


## getFormsInfo

```TypeScript
function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void
```

Obtains the widget information provided by a given application on the device. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getFormsInfo](arkts-form-formhost-getformsinfo-f-sys.md#getformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-formHost-function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void--><!--Device-formHost-function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| moduleName | string | Yes | Module name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<formInfo.FormInfo>> | Yes | Callback used to return the result. If the widget information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error** is an error object. |


## getFormsInfo

```TypeScript
function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>
```

Obtains the widget information provided by a given application on the device. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getFormsInfo](arkts-form-formhost-getformsinfo-f-sys.md#getformsinfo-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-formHost-function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>--><!--Device-formHost-function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>-End-->

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| moduleName | string | No | Module name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<formInfo.FormInfo>> | Promise used to return the information obtained. |

