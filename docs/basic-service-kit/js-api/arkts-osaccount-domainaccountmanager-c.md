# DomainAccountManager

域账号管理类。

**Since:** 18

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## auth

```TypeScript
static auth(domainAccountInfo: DomainAccountInfo, credential: Uint8Array, callback: IUserAuthCallback): void
```

认证指定的域账号。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |
| credential | Uint8Array | Yes | 指示域账号的凭据。 |
| callback | IUserAuthCallback | Yes | 指示认证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainAccountInfo or credential. |
| 12300003 | Domain account does not exist. |
| 12300013 | Network exception. |
| 12300101 | Authentication failed. |
| 12300109 | The authentication, enrollment, or update operation is canceled. |
| 12300110 | The authentication is locked. |
| 12300111 | The authentication time out. |
| 12300112 | The authentication service is busy. |
| 12300113 | The account authentication service does not exist. |
| 12300114 | The account authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
let credential = new Uint8Array([0])
try {
  osAccount.DomainAccountManager.auth(domainAccountInfo, credential, {
    onResult: (resultCode: number, authResult: osAccount.AuthResult) => {
      console.info('auth resultCode = ' + resultCode);
      console.info('auth authResult = ' + JSON.stringify(authResult));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`auth exception = code is ${err.code}, message is ${err.message}`);
}

```

## auth

```TypeScript
static auth(
      domainAccountInfo: DomainAccountInfo,
      credential: Uint8Array,
      options: DomainAccountAuthOptions,
      callback: IUserAuthCallback): void
```

认证指定的域账号，支持指定认证选项，如服务器参数。使用callback异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |
| credential | Uint8Array | Yes | 指示域账号的凭据。 |
| options | DomainAccountAuthOptions | Yes | 表示域账号认证的选项。 |
| callback | IUserAuthCallback | Yes | 指示认证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainAccountInfo or credential. |
| 12300003 | Domain account does not exist. |
| 12300013 | Network exception. |
| 12300101 | Authentication failed. |
| 12300109 | The authentication, enrollment, or update operation is canceled. |
| 12300110 | The authentication is locked. |
| 12300111 | The authentication time out. |
| 12300112 | The authentication service is busy. |
| 12300113 | The account authentication service does not exist. |
| 12300114 | The account authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
let credential = new Uint8Array([0]);
try {
  let serverParams: Record<string, Object> = {
    "uri": "test.example.com",
    "port": 100
  }
  let authOptions: osAccount.DomainAccountAuthOptions = {
    serverParams: serverParams
  }
  osAccount.DomainAccountManager.auth(domainAccountInfo, credential, authOptions, {
    onResult: (resultCode: number, authResult: osAccount.AuthResult) => {
      console.info('auth resultCode = ' + resultCode);
      console.info('auth authResult = ' + JSON.stringify(authResult));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`auth exception = code is ${err.code}, message is ${err.message}`);
}

```

## authWithPopup

```TypeScript
static authWithPopup(callback: IUserAuthCallback): void
```

弹框认证指定的域账号。

**Since:** 10

**Required permissions:** 

- API version10  to  10: ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | IUserAuthCallback | Yes | 指示认证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. [since 10 - 10] |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | No domain account is bound. |
| 12300013 | Network exception. |
| 12300101 | Authentication failed. |
| 12300109 | The authentication, enrollment, or update operation is canceled. |
| 12300110 | The authentication is locked. |
| 12300111 | The authentication time out. |
| 12300112 | The authentication service is busy. |
| 12300113 | The account authentication service does not exist. |
| 12300114 | The account authentication service works abnormally. |
| 12300211 | Server unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  osAccount.DomainAccountManager.authWithPopup({
    onResult: (resultCode: number, authResult: osAccount.AuthResult) => {
      console.info('auth resultCode = ' + resultCode);
      console.info('auth authResult = ' + JSON.stringify(authResult));
    }
  })
} catch (e) {
  const err = e as BusinessError;
  console.error(`auth exception = code is ${err.code}, message is ${err.message}`);
}

```

## authWithPopup

```TypeScript
static authWithPopup(localId: int, callback: IUserAuthCallback): void
```

弹框认证指定的域账号。

**Since:** 10

**Required permissions:** 

- API version10  to  10: ohos.permission.ACCESS_USER_AUTH_INTERNAL

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| localId | int | Yes | 指示绑定域账号的系统账号的本地标识。 |
| callback | IUserAuthCallback | Yes | 指示认证结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. [since 10 - 10] |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid localId. |
| 12300003 | No domain account is bound. |
| 12300013 | Network exception. |
| 12300101 | Authentication failed. |
| 12300109 | The authentication, enrollment, or update operation is canceled. |
| 12300110 | The authentication is locked. |
| 12300111 | The authentication time out. |
| 12300112 | The authentication service is busy. |
| 12300113 | The account authentication service does not exist. |
| 12300114 | The account authentication service works abnormally. |
| 12300211 | Server unreachable. [since 11] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  osAccount.DomainAccountManager.authWithPopup(100, {
    onResult: (resultCode: number, authResult: osAccount.AuthResult) => {
      console.info('authWithPopup resultCode = ' + resultCode);
      console.info('authWithPopup authResult = ' + JSON.stringify(authResult));
    }
  })
} catch (e) {
  const err = e as BusinessError;
  console.error(`authWithPopup exception = code is ${err.code}, message is ${err.message}`);
}

```

## getAccessToken

```TypeScript
static getAccessToken(businessParams: Record<string, Object>, callback: AsyncCallback<Uint8Array>): void
```

获取当前域账号的业务访问令牌。使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessParams | Record&lt;string, Object> | Yes | 指示业务参数，具体格式取决于域插件的实现要求。 |
| callback | AsyncCallback&lt;Uint8Array> | Yes | 指示结果回调。如果获取成功，err返回null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid business parameters. |
| 12300003 | Domain account not found. |
| 12300013 | Network exception. |
| 12300014 | The domain account is not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let businessParams: Record<string, Object> = {
  'clientId': 'xxx',
  'secretId': 'yyy'
};  // depends on the implementation of the domain plugin
try {
  osAccount.DomainAccountManager.getAccessToken(businessParams,
    (err: BusinessError, result: Uint8Array) => {
    if (err) {
      console.error(`getAccessToken failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAccessToken result: ' + result);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccessToken exception = code is ${err.code}, message is ${err.message}`);
}

```

## getAccessToken

```TypeScript
static getAccessToken(businessParams: Record<string, RecordData>, callback: AsyncCallback<Uint8Array>): void
```

获取当前域账号的业务访问令牌，使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessParams | Record&lt;string, RecordData> | Yes | 指示业务参数，具体格式取决于域插件的实现要求。 |
| callback | AsyncCallback&lt;Uint8Array> | Yes | 指示结果回调。如果获取成功，err返回null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid business parameters. |
| 12300003 | Domain account not found. |
| 12300013 | Network exception. |
| 12300014 | The domain account is not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

## getAccessToken

```TypeScript
static getAccessToken(businessParams: Record<string, Object>): Promise<Uint8Array>
```

查询当前域账号的业务访问令牌。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessParams | Record&lt;string, Object> | Yes | 指示业务参数，具体格式取决于域插件的实现要求。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回业务访问令牌。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid business parameters. |
| 12300003 | Domain account not found. |
| 12300013 | Network exception. |
| 12300014 | The domain account is not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let businessParams: Record<string, Object> = {
  'clientId': 'xxx',
  'secretId': 'yyy'
};  // depends on the implementation of the domain plugin
try {
  osAccount.DomainAccountManager.getAccessToken(businessParams)
    .then((result: Uint8Array) => {
    console.info('getAccessToken result: ' + result);
  }).catch((err: BusinessError) => {
    console.error(`getAccessToken failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccessToken exception = code is ${err.code}, message is ${err.message}`);
}

```

## getAccessToken

```TypeScript
static getAccessToken(businessParams: Record<string, RecordData>): Promise<Uint8Array>
```

查询当前域账号的业务访问令牌。使用Promise异步回调。

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| businessParams | Record&lt;string, RecordData> | Yes | 指示业务参数，具体格式取决于域插件的实现要求。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | Promise对象，返回业务访问令牌。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid business parameters. |
| 12300003 | Domain account not found. |
| 12300013 | Network exception. |
| 12300014 | The domain account is not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

## getAccountInfo

```TypeScript
static getAccountInfo(options: GetDomainAccountInfoOptions, callback: AsyncCallback<DomainAccountInfo>): void
```

查询指定的域账号信息。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_DOMAIN_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetDomainAccountInfoOptions | Yes | 指示域账号信息。 |
| callback | AsyncCallback&lt;DomainAccountInfo> | Yes | 指示查询结果回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |
| 12300013 | Network exception. |
| 12300014 | Not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.GetDomainAccountInfoOptions = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
try {
  osAccount.DomainAccountManager.getAccountInfo(domainAccountInfo,
    (err: BusinessError, result: osAccount.DomainAccountInfo) => {
    if (err) {
      console.error(`call getAccountInfo failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAccountInfo result: ' + result);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccountInfo exception = code is ${err.code}, message is ${err.message}`);
}

```

## getAccountInfo

```TypeScript
static getAccountInfo(options: GetDomainAccountInfoOptions): Promise<DomainAccountInfo>
```

查询指定的域账号信息。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_DOMAIN_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GetDomainAccountInfoOptions | Yes | 指示域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DomainAccountInfo> | Promise对象，返回指定的域账号信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | Account not found. |
| 12300013 | Network exception. |
| 12300014 | Not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.GetDomainAccountInfoOptions = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
try {
  osAccount.DomainAccountManager.getAccountInfo(domainAccountInfo)
    .then((result: osAccount.DomainAccountInfo) => {
    console.info('getAccountInfo result: ' + result);
  }).catch((err: BusinessError) => {
    console.error(`call getAccountInfo failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccountInfo exception = code is ${err.code}, message is ${err.message}`);
}

```

## hasAccount

```TypeScript
static hasAccount(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<boolean>): void
```

检查是否存在指定的域账号。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |
| callback | AsyncCallback&lt;boolean> | Yes | 指示检查结果回调。true表示指定的域账号已存在；false表示指定的域账号不存在。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainAccountInfo. |
| 12300013 | Network exception. |
| 12300014 | Not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
try {
  osAccount.DomainAccountManager.hasAccount(domainAccountInfo, (err: BusinessError, result: boolean) => {
    if (err) {
      console.error(`call hasAccount failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('hasAccount result: ' + result);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`hasAccount exception = code is ${err.code}, message is ${err.message}`);
}

```

## hasAccount

```TypeScript
static hasAccount(domainAccountInfo: DomainAccountInfo): Promise<boolean>
```

检查是否存在指定的域账号。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示指定的域账号已存在；返回false表示指定的域账号不存在。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid domainAccountInfo. |
| 12300013 | Network exception. |
| 12300014 | Not authenticated. |
| 12300111 | The operation time out. |
| 12300114 | The authentication service works abnormally. |
| 12300211 | Server unreachable. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan'
}
try {
  osAccount.DomainAccountManager.hasAccount(domainAccountInfo).then((result: boolean) => {
    console.info('hasAccount result: ' + result);
  }).catch((err: BusinessError) => {
      console.error(`call hasAccount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`hasAccount exception = code is ${err.code}, message is ${err.message}`);
}

```

## isAuthenticationExpired

```TypeScript
static isAuthenticationExpired(domainAccountInfo: DomainAccountInfo): Promise<boolean>
```

判断指定域账号是否登录超期。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示指定的域账号已登录超期；返回false表示指定的域账号未登录超期。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300003 | Domain account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainInfo: osAccount.DomainAccountInfo =
  {domain: 'testDomain', accountName: 'testAccountName'};
try {
  osAccount.DomainAccountManager.isAuthenticationExpired(domainInfo).then((result: boolean) => {
    console.info('isAuthenticationExpired, result: ' + result);
  }).catch((err: BusinessError) => {
    console.error('isAuthenticationExpired err: ' + err);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error('isAuthenticationExpired exception: ' + e);
}

```

## registerPlugin

```TypeScript
static registerPlugin(plugin: DomainPlugin): void
```

注册域插件。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| plugin | DomainPlugin | Yes | 指示域插件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. [since 18] |
| 12300201 | The domain plugin has been registered. |

**Example**

```TypeScript
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';

let plugin: osAccount.DomainPlugin = {
  auth: (domainAccountInfo: osAccount.DomainAccountInfo, credential: Uint8Array,
       callback: osAccount.IUserAuthCallback) => {},
  authWithPopup: (domainAccountInfo: osAccount.DomainAccountInfo,
                callback: osAccount.IUserAuthCallback) => {},
  authWithToken: (domainAccountInfo: osAccount.DomainAccountInfo, token: Uint8Array,
                callback: osAccount.IUserAuthCallback) => {},
  getAccountInfo: (options: osAccount.GetDomainAccountInfoPluginOptions,
                 callback: AsyncCallback<osAccount.DomainAccountInfo>) => {},
  getAuthStatusInfo: (domainAccountInfo: osAccount.DomainAccountInfo,
                      callback: AsyncCallback<osAccount.AuthStatusInfo>) => {},
  bindAccount: (domainAccountInfo: osAccount.DomainAccountInfo, localId: number,
                callback: AsyncCallback<void>) => {},
  unbindAccount: (domainAccountInfo: osAccount.DomainAccountInfo, callback: AsyncCallback<void>) => {},
  isAccountTokenValid: (domainAccountInfo: osAccount.DomainAccountInfo, token: Uint8Array,
                      callback: AsyncCallback<boolean>) => {},
  getAccessToken: (options: osAccount.GetDomainAccessTokenOptions, callback: AsyncCallback<Uint8Array>) => {}
}
try {
  osAccount.DomainAccountManager.registerPlugin(plugin);
  console.info('registerPlugin success.');
} catch (e) {
  const err = e as BusinessError;
  console.error(`registerPlugin code is ${err.code}, message is ${err.message}`);
}

```

## unregisterPlugin

```TypeScript
static unregisterPlugin(): void
```

注销域插件。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 801 | Capability not supported. [since 18] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  osAccount.DomainAccountManager.unregisterPlugin();
  console.info('unregisterPlugin success.');
} catch (e) {
  const err = e as BusinessError;
  console.error(`unregisterPlugin code is ${err.code}, message is ${err.message}`);
}

```

## updateAccountInfo

```TypeScript
static updateAccountInfo(oldAccountInfo: DomainAccountInfo, newAccountInfo: DomainAccountInfo): Promise<void>
```

修改指定域账号信息。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.MANAGE_DOMAIN_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldAccountInfo | DomainAccountInfo | Yes | 表示旧域账号信息。 |
| newAccountInfo | DomainAccountInfo | Yes | 表示新域账号信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 12300001 | The system service works abnormally. |
| 12300002 | The new account info is invalid. |
| 12300003 | The old account not found. |
| 12300004 | The new account already exists. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let oldDomainInfo: osAccount.DomainAccountInfo =
  {domain: 'testDomain', accountName: 'oldtestAccountName'};
let newDomainInfo: osAccount.DomainAccountInfo =
  {domain: 'testDomain', accountName: 'newtestAccountName'};
try {
  osAccount.DomainAccountManager.updateAccountInfo(oldDomainInfo, newDomainInfo).then(() => {
    console.info('updateAccountInfo, success');
  }).catch((err: BusinessError) => {
    console.error('updateAccountInfo err: ' + err);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`updateAccountInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## updateAccountToken

```TypeScript
static updateAccountToken(
      domainAccountInfo: DomainAccountInfo,
      token: Uint8Array,
      callback: AsyncCallback<void>
    ): void
```

更新指定域账号的令牌，空令牌表示目标域账号的令牌失效。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |
| token | Uint8Array | Yes | 指示域账号的令牌。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。如果更新成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid token. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan',
  accountId: '123456'
}
let token = new Uint8Array([0])
try {
  osAccount.DomainAccountManager.updateAccountToken(domainAccountInfo, token, (err: BusinessError) => {
    if (err != null) {
      console.error(`updateAccountToken failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('updateAccountToken successfully');
    }
  })
} catch (e) {
  const err = e as BusinessError;
  console.error(`updateAccountToken exception = code is ${err.code}, message is ${err.message}`);
}

```

## updateAccountToken

```TypeScript
static updateAccountToken(domainAccountInfo: DomainAccountInfo, token: Uint8Array): Promise<void>
```

更新指定域账号的令牌，空令牌表示目标域账号的令牌失效。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domainAccountInfo | DomainAccountInfo | Yes | 指示域账号信息。 |
| token | Uint8Array | Yes | 指示域账号的令牌。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 12300001 | The system service works abnormally. |
| 12300002 | Invalid token. |
| 12300003 | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let domainAccountInfo: osAccount.DomainAccountInfo = {
  domain: 'CHINA',
  accountName: 'zhangsan',
  accountId: '123456'
}
let token = new Uint8Array([0])
try {
  osAccount.DomainAccountManager.updateAccountToken(domainAccountInfo, token).then(() => {
    console.info('updateAccountToken successfully');
  }).catch((err: BusinessError) => {
    console.error(`updateAccountToken failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`updateAccountToken exception = code is ${err.code}, message is ${err.message}`);
}

```

