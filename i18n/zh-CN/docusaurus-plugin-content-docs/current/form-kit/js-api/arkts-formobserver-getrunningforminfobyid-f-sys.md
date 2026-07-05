# getRunningFormInfoById

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>
```

Obtains the RunningFormInfo object by formId.

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the form provider formId. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string, isUnusedIncluded: boolean): Promise<formInfo.RunningFormInfo>
```

Obtains the RunningFormInfo object by formId.

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the form provider formId. |
| isUnusedIncluded | boolean | 是 | Indicates whether to include unused form. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(formId: string, callback: AsyncCallback<formInfo.RunningFormInfo>): void
```

Obtains the RunningFormInfo object by formId.

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the form provider formId. |
| callback | AsyncCallback&lt;formInfo.RunningFormInfo> | 是 | The callback of getFormInstancesById. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## getRunningFormInfoById

```TypeScript
function getRunningFormInfoById(
    formId: string,
    isUnusedIncluded: boolean,
    callback: AsyncCallback<formInfo.RunningFormInfo>
  ): void
```

Obtains the RunningFormInfo object by formId.

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Indicates the form provider formId. |
| isUnusedIncluded | boolean | 是 | Indicates whether to include unused form. |
| callback | AsyncCallback&lt;formInfo.RunningFormInfo> | 是 | The callback of getFormInstancesById. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

