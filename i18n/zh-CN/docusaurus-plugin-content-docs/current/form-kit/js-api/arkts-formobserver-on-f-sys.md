# on

## on('formAdd')

```TypeScript
function on(type: 'formAdd', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of add form. <p>You can use this method to listen to the event of add form.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formAdd' | 是 | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('formAdd')

```TypeScript
function on(type: 'formAdd', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of add form. <p>You can use this method to listen to the event of add form for a particular card host.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formAdd' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('formRemove')

```TypeScript
function on(type: 'formRemove', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of remove form. <p>You can use this method to listen to the event of remove form.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formRemove' | 是 | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('formRemove')

```TypeScript
function on(type: 'formRemove', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Listens to the event of remove form. <p>You can use this method to listen to the event of remove form for a particular card host.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formRemove' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('notifyVisible')

```TypeScript
function on(type: 'notifyVisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void
```

Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notifyVisible' | 是 | Indicates event type. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | 是 | The callback is used to return  the running form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('notifyVisible')

```TypeScript
function on(
    type: 'notifyVisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>
  ): void
```

Listens to the event of notifyVisible type change. <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notifyVisible' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | 是 | The callback is used to return  the running form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('notifyInvisible')

```TypeScript
function on(type: 'notifyInvisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void
```

Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | 是 | Indicates event type. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | 是 | The callback is used to return  the running form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('notifyInvisible')

```TypeScript
function on(
    type: 'notifyInvisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>,
  ): void
```

Listens to the event of notifyInvisible type change. <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p>

**起始版本：** 10

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'notifyInvisible' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;Array&lt;formInfo.RunningFormInfo>> | 是 | The callback is used to return  the running form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('router')

```TypeScript
function on(type: 'router', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Router event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'router' | 是 | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('router')

```TypeScript
function on(type: 'router', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Router event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'router' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('message')

```TypeScript
function on(type: 'message', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Message event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'message' | 是 | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('message')

```TypeScript
function on(type: 'message', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Message event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'message' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('call')

```TypeScript
function on(type: 'call', observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Call event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'call' | 是 | Indicates event type. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

## on('call')

```TypeScript
function on(type: 'call', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void
```

Call event listening in registered form. <p>This interface requires permission to receive callback.</p>

**起始版本：** 11

**需要权限：** 

 ohos.permission.OBSERVE_FORM_RUNNING

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'call' | 是 | Indicates event type. |
| hostBundleName | string | 是 | Indicates the bundle name of the form host application. |
| observerCallback | Callback&lt;formInfo.RunningFormInfo> | 是 | The callback is used to return the running  form info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |

