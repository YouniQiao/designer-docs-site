# updateSession

## updateSession

```TypeScript
function updateSession(handle: long, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void
```

updateSession操作密钥接口。使用callback异步回调。 huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | long | 是 | updateSession操作的uint64类型的handle值。 |
| options | HuksOptions | 是 | updateSession的参数集合。 |
| callback | AsyncCallback&lt;HuksReturnResult> | 是 | 回调函数。当密钥操作update成功时，err为undefined，data为获取到的HuksReturnResult；否  则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine or UKey driver |
| 12000007 | this credential is already invalidated permanently |
| 12000008 | verify auth token failed |
| 12000009 | auth token is already timeout |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000020 | the provider operation failed [since 22] |
| 12000021 | the UKey PIN is locked [since 22] |
| 12000023 | the UKey PIN not authenticated [since 22] |
| 12000024 | the provider or UKey is busy [since 22] |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000026 | the secure element is not available [since 26.0.0] |

## updateSession

```TypeScript
function updateSession(
    handle: long,
    options: HuksOptions,
    token: Uint8Array,
    callback: AsyncCallback<HuksReturnResult>
  ): void
```

Updates the key operation by segment. This API uses an asynchronous callback to return the result. huks.initSession, huks.updateSession, and huks.finishSession must be used together.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | long | 是 | Handle of the updateSession operation, which is of the uint64 type. |
| options | HuksOptions | 是 | Parameter set used for the updateSession operation. |
| token | Uint8Array | 是 | Authentication token for  [refined key access control](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#refined-key-access-control)  . |
| callback | AsyncCallback&lt;HuksReturnResult> | 是 | Callback used to return the result. If the operation is  successful, err is undefined, and data is the obtained HuksReturnResult. Otherwise, err is  an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000007 | this credential is already invalidated permanently |
| 12000008 | verify auth token failed |
| 12000009 | auth token is already timeout |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000026 | the secure element is not available [since 26.0.0] |

## updateSession

```TypeScript
function updateSession(handle: long, options: HuksOptions, token?: Uint8Array): Promise<HuksReturnResult>
```

updateSession操作密钥接口。使用Promise异步回调。 huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | long | 是 | updateSession操作的uint64类型的handle值。 |
| options | HuksOptions | 是 | updateSession操作的参数集合。 |
| token | Uint8Array | 否 | 密钥  [二次认证密钥访问控制](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#二次认证密钥访问控制)的用户鉴权证  明(AuthToken)，不填表示不进行二次认证密钥访问控制。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。调用成功时，若使用AES/DES/3DES/SM4密钥加解密时，HuksReturnResult的outData  成员将返回加密后的密文或者解密后的明文；否则outData为空。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine or UKey driver |
| 12000007 | this credential is already invalidated permanently |
| 12000008 | verify auth token failed |
| 12000009 | auth token is already timeout |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000020 | the provider operation failed [since 22] |
| 12000021 | the UKey PIN is locked [since 22] |
| 12000023 | the UKey PIN not authenticated [since 22] |
| 12000024 | the provider or UKey is busy [since 22] |
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000026 | the secure element is not available [since 26.0.0] |

