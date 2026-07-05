# getExtensionRunningInfos

## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: int): Promise<Array<ExtensionRunningInfo>>
```

获取关于运行扩展能力的信息。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| upperLimit | int | 是 | 获取消息数量的最大限制，最大为231-1。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;ExtensionRunningInfo>> | Promise对象，返回接口运行结果及运行扩展能力的信息。开发者可在此进行错误处理或其他自定义处理。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## getExtensionRunningInfos

```TypeScript
function getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>): void
```

获取关于运行扩展能力的信息。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_RUNNING_INFO

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| upperLimit | int | 是 | 获取消息数量的最大限制，最大为231-1。 |
| callback | AsyncCallback&lt;Array&lt;ExtensionRunningInfo>> | 是 | 回调函数。当获取运行扩展能力的信息成功，err为undefined，data为获取到的运行扩展能力信息；否则为  错误对象。可进行错误处理或其他自定义处理。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

