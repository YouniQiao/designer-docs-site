# AppAccountManager

Defines the application account manager, which is used to manage account information of applications.

**Since:** 7

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## addAccount

```TypeScript
addAccount(name: string, callback: AsyncCallback<void>): void
```

Adds an application account with the given name. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [createAccount](arkts-basicservices-appaccountmanager-i.md#createaccount-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createAccount(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.addAccount('WangWu', (err: BusinessError) => { 
  console.error(`addAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## addAccount

```TypeScript
addAccount(name: string, extraInfo: string, callback: AsyncCallback<void>): void
```

Adds an application account name and additional information. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [createAccount](arkts-basicservices-appaccountmanager-i.md#createaccount-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createAccount(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| extraInfo | string | Yes | Additional information (information that can be converted to the string type).It cannot contain sensitive information, such as the application account password and token. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.addAccount('LiSi', 'token101', (err: BusinessError) => { 
  console.error(`addAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## addAccount

```TypeScript
addAccount(name: string, extraInfo?: string): Promise<void>
```

Adds an application account name and additional information. This API uses a promise to return the result.

> **NOTE**
> > This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [createAccount](arkts-basicservices-appaccountmanager-i.md#createaccount-3)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** createAccount(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| extraInfo | string | No | Additional information (information that can be converted to the string type).<br>The additional information cannot be sensitive information (such as the password and token)of the application account. <br>By default, no value is passed, which means no additional informationneeds to be added for the account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.addAccount('LiSi', 'token101').then(()=> { 
  console.info('addAccount Success');
}).catch((err: BusinessError) => {
  console.error(`addAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## addAccountImplicitly

```TypeScript
addAccountImplicitly(
      owner: string,
      authType: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

Adds an application account implicitly based on the specified owner. This API uses an asynchronous callback to
return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [createAccountImplicitly](arkts-basicservices-appaccountmanager-i.md#createaccountimplicitly-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** createAccountImplicitly(owner:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| options | { [key: string]: any } | Yes | Options for the authentication, which can be set as required. |
| callback | AuthenticatorCallback | Yes | Authenticator callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, result: Record<string, Object>): void {
    console.info('resultCode: ' + code);
    console.info('result: ' + JSON.stringify(result));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    appAccountManager.addAccountImplicitly('com.example.accountjsdemo', 'getSocialData', {}, {
      onResult: this.onResultCallback,
      onRequestRedirected: this.onRequestRedirectedCallback
    });
  }

  build() {}
}

```

## auth

```TypeScript
auth(name: string, owner: string, authType: string, callback: AuthCallback): void
```

Authenticates an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or authType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, authResult?: appAccount.AuthResult): void {
    console.info('resultCode: ' + code);
    console.info('authResult: ' + JSON.stringify(authResult));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    try {
      appAccountManager.auth('LiSi', 'com.example.accountjsdemo', 'getSocialData', {
        onResult: this.onResultCallback,
        onRequestRedirected: this.onRequestRedirectedCallback
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`auth exception: code is ${err.code}, message is ${err.message}`);
    }
  }

  build() {}
}

```

## auth

```TypeScript
auth(
      name: string,
      owner: string,
      authType: string,
      options: Record<string, Object>,
      callback: AuthCallback
    ): void
```

Authenticates an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| options | Record&lt;string, Object&gt; | Yes | Options for the authentication. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner, authType or options. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, authResult?: appAccount.AuthResult): void {
    console.info('resultCode: ' + code);
    console.info('authResult: ' + JSON.stringify(authResult));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    let options: Record<string, Object> = {
      'password': 'xxxx',
    };
    try {
      appAccountManager.auth('LiSi', 'com.example.accountjsdemo', 'getSocialData', options, {
        onResult: this.onResultCallback,
        onRequestRedirected: this.onRequestRedirectedCallback
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`auth exception: code is ${err.code}, message is ${err.message}`);
    }
  }

  build() {}
}

```

## authenticate

```TypeScript
authenticate(
      name: string,
      owner: string,
      authType: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

Authenticates an application account. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [auth](arkts-basicservices-appaccountmanager-i.md#auth-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** auth(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| options | { [key: string]: any } | Yes | Options for the authentication. |
| callback | AuthenticatorCallback | Yes | Authenticator callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, result: Record<string, Object>): void {
    console.info('resultCode: ' + code);
    console.info('result: ' + JSON.stringify(result));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    appAccountManager.authenticate('LiSi', 'com.example.accountjsdemo', 'getSocialData', {}, {
      onResult: this.onResultCallback,
      onRequestRedirected: this.onRequestRedirectedCallback
    });
  }

  build() {}
}

```

## checkAccountLabels

```TypeScript
checkAccountLabels(name: string, owner: string, labels: Array<string>, callback: AsyncCallback<boolean>): void
```

Checks whether an application account has specific labels. This API uses an asynchronous callback to return the
result. The labels are checked by the authenticator of the target application.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| labels | Array&lt;string&gt; | Yes | Labels to check. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** can be **true** or **false**.The value **true** means the application account has the labels; the value **false** means the opposite.If the operation fails, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or labels. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let labels = ['student'];
try {
  appAccountManager.checkAccountLabels('zhangsan', 'com.example.accountjsdemo', labels,
    (err: BusinessError, hasAllLabels: boolean) => {
      if (err) {
        console.error(`checkAccountLabels failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('checkAccountLabels successfully, hasAllLabels: ' + hasAllLabels);
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAccountLabels exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkAccountLabels

```TypeScript
checkAccountLabels(name: string, owner: string, labels: Array<string>): Promise<boolean>
```

Checks whether an application account has specific labels. This API uses a promise to return the result. The
labels are checked by the authenticator of the target application.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| labels | Array&lt;string&gt; | Yes | Labels to check. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means the applicationaccount has the labels; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or labels. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let labels = ['student'];
try {
  appAccountManager.checkAccountLabels('zhangsan', 'com.example.accountjsdemo', labels).then((
    hasAllLabels: boolean) => {
    console.info('checkAccountLabels successfully: ' + hasAllLabels);
  }).catch((err: BusinessError) => {
    console.error(`checkAccountLabels failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAccountLabels exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkAppAccess

```TypeScript
checkAppAccess(name: string, bundleName: string, callback: AsyncCallback<boolean>): void
```

Checks whether an application can access the data of an account. This API uses an asynchronous callback to return
the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means theapplication can access the account data; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkAppAccess('ZhangSan', 'com.example.accountjsdemo',
    (err: BusinessError, isAccessible: boolean) => {
      if (err) {
        console.error(`checkAppAccess failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('checkAppAccess successfully');
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAppAccess exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkAppAccess

```TypeScript
checkAppAccess(name: string, bundleName: string): Promise<boolean>
```

Checks whether an application can access the data of an account. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means the application canaccess the account data; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkAppAccess('ZhangSan', 'com.example.accountjsdemo').then((isAccessible: boolean) => {
    console.info('checkAppAccess successfully, isAccessible: ' + isAccessible);
  }).catch((err: BusinessError) => {
    console.error(`checkAppAccess failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAppAccess exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkAppAccountSyncEnable

```TypeScript
checkAppAccountSyncEnable(name: string, callback: AsyncCallback<boolean>): void
```

Checks whether data synchronization is enabled for an application account. This API uses an asynchronous callback
to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [checkDataSyncEnabled](arkts-basicservices-appaccountmanager-i.md#checkdatasyncenabled-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** checkDataSyncEnabled(name:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means datasynchronization is enabled for the application account; the value **false** means the opposite. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.checkAppAccountSyncEnable('ZhangSan', (err: BusinessError, result: boolean) => { 
  if (err) {
    console.error(`checkAppAccountSyncEnable code: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('checkAppAccountSyncEnable result: ' + result);
  }
});

```

## checkAppAccountSyncEnable

```TypeScript
checkAppAccountSyncEnable(name: string): Promise<boolean>
```

Checks whether data synchronization is enabled for an application account. This API uses a promise to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [checkDataSyncEnabled](arkts-basicservices-appaccountmanager-i.md#checkdatasyncenabled-2) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** checkDataSyncEnabled(name:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** meansdata synchronization is enabled for the application account; the value **false** means the opposite. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.checkAppAccountSyncEnable('ZhangSan').then((data: boolean) => { 
  console.info('checkAppAccountSyncEnable, result: ' + data);
}).catch((err: BusinessError) => {
  console.error(`checkAppAccountSyncEnable err: code is ${err.code}, message is ${err.message}`);
});

```

## checkAuthTokenVisibility

```TypeScript
checkAuthTokenVisibility(name: string, authType: string, bundleName: string, callback: AsyncCallback<boolean>): void
```

Checks the visibility of an authorization token of the specified authentication type to an application. This API
uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** can be **true** (the authorization token is visible to the application)or **false** (the authorization token is not visible to the application). If the operation fails,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo',
    (err: BusinessError, isVisible: boolean) => {
      if (err) {
        console.error(`checkAuthTokenVisibility failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('checkAuthTokenVisibility successfully, isVisible: ' + isVisible);
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAuthTokenVisibility exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkAuthTokenVisibility

```TypeScript
checkAuthTokenVisibility(name: string, authType: string, bundleName: string): Promise<boolean>
```

Checks the visibility of an authorization token of the specified authentication type to an application. This API
uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means theauthorization token is visible to the application; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo').then((
    isVisible: boolean) => {
    console.info('checkAuthTokenVisibility successfully, isVisible: ' + isVisible);
  }).catch((err: BusinessError) => {
    console.error(`checkAuthTokenVisibility failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkAuthTokenVisibility exception: code is ${err.code}, message is ${err.message}`);
}

```

## checkDataSyncEnabled

```TypeScript
checkDataSyncEnabled(name: string, callback: AsyncCallback<boolean>): void
```

Checks whether data synchronization is enabled for an application account. This API uses an asynchronous callback
to return the result.

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means datasynchronization is enabled for the application account; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkDataSyncEnabled('ZhangSan', (err: BusinessError, isEnabled: boolean) => {
    if (err) {
      console.error(`checkDataSyncEnabled failed, err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkDataSyncEnabled successfully, isEnabled: ' + isEnabled);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
}

```

## checkDataSyncEnabled

```TypeScript
checkDataSyncEnabled(name: string): Promise<boolean>
```

Checks whether data synchronization is enabled for an application account. This API uses a promise to return the
result.

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** meansdata synchronization is enabled for the application account; the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.checkDataSyncEnabled('ZhangSan').then((isEnabled: boolean) => {
      console.info('checkDataSyncEnabled successfully, isEnabled: ' + isEnabled);
  }).catch((err: BusinessError) => {
    console.error(`checkDataSyncEnabled failed, err: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`checkDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
}

```

## checkOAuthTokenVisibility

```TypeScript
checkOAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      callback: AsyncCallback<boolean>
    ): void
```

Checks the visibility of an authorization token of the specified authentication type to an application. This API
uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [checkAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#checkauthtokenvisibility-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** checkAuthTokenVisibility(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** can be **true** (the authorization token is visible to the application)or **false** (the authorization token is not visible to the application).If the operation fails, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.checkOAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo',
  (err: BusinessError, data: boolean) => {
    if (err) {
      console.error(`checkOAuthTokenVisibility err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('checkOAuthTokenVisibility isVisible: ' + data);
    }
  });

```

## checkOAuthTokenVisibility

```TypeScript
checkOAuthTokenVisibility(name: string, authType: string, bundleName: string): Promise<boolean>
```

Checks the visibility of an authorization token of the specified authentication type to an application. This API
uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [checkAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#checkauthtokenvisibility-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** checkAuthTokenVisibility(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** meansthe authorization token is visible to the application; the value **false** means the opposite. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.checkOAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo').then((
  data: boolean) => {
  console.info('checkOAuthTokenVisibility isVisible: ' + data);
}).catch((err: BusinessError) => {
  console.error(`checkOAuthTokenVisibility err: code is ${err.code}, message is ${err.message}`);
});

```

## createAccount

```TypeScript
createAccount(name: string, callback: AsyncCallback<void>): void
```

Creates an application account with the given name. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300004](../../apis-basic-services-kit/errorcode-account.md#12300004-account-already-exists) | Account already exists. |
| [12300007](../../apis-basic-services-kit/errorcode-account.md#12300007-account-count-reached-the-limit) | The number of accounts reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.createAccount('WangWu', (err: BusinessError) => { 
    if (err) {
      console.error(`createAccount code: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('createAccount successful.');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createAccount err: code is ${err.code}, message is ${err.message}`);
}

```

## createAccount

```TypeScript
createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>): void
```

Creates an application account with custom data. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| options | CreateAccountOptions | Yes | Options for creating the application account. You can customizedata based on service requirements, but do not add sensitive data (such as passwords and tokens). |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or options. |
| [12300004](../../apis-basic-services-kit/errorcode-account.md#12300004-account-already-exists) | Account already exists. |
| [12300007](../../apis-basic-services-kit/errorcode-account.md#12300007-account-count-reached-the-limit) | The number of accounts reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.CreateAccountOptions = {
  customData: {
    age: '10'
  }
}
try {
  appAccountManager.createAccount('LiSi', options, (err: BusinessError) => {
    if (err) {
      console.error(`createAccount failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('createAccount successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## createAccount

```TypeScript
createAccount(name: string, options?: CreateAccountOptions): Promise<void>
```

Creates an application account with custom data. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| options | CreateAccountOptions | No | Options for creating the application account.You can customize data based on service requirements, but do not add sensitive data(such as passwords and tokens).<br>By default, no value is passed in, which means no additionalinformation needs to be added for the account. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or options. |
| [12300004](../../apis-basic-services-kit/errorcode-account.md#12300004-account-already-exists) | Account already exists. |
| [12300007](../../apis-basic-services-kit/errorcode-account.md#12300007-account-count-reached-the-limit) | The number of accounts reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.CreateAccountOptions = {
  customData: {
    age: '10'
  }
}
try {
  appAccountManager.createAccount('LiSi', options).then(() => {
    console.info('createAccount successfully');
  }).catch((err: BusinessError) => {
    console.error(`createAccount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`createAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## createAccountImplicitly

```TypeScript
createAccountImplicitly(owner: string, callback: AuthCallback): void
```

Creates an application account implicitly based on the specified account owner. This API uses an asynchronous
callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12300007](../../apis-basic-services-kit/errorcode-account.md#12300007-account-count-reached-the-limit) | The number of accounts reaches the upper limit. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, result?: appAccount.AuthResult): void {
    console.info('resultCode: ' + code);
    console.info('result: ' + JSON.stringify(result));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    try {
      appAccountManager.createAccountImplicitly('com.example.accountjsdemo', {
        onResult: this.onResultCallback,
        onRequestRedirected: this.onRequestRedirectedCallback
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`createAccountImplicitly exception: code is ${err.code}, message is ${err.message}`);
    }
  }
  build() {}
}

```

## createAccountImplicitly

```TypeScript
createAccountImplicitly(owner: string, options: CreateAccountImplicitlyOptions, callback: AuthCallback): void
```

Creates an application account implicitly based on the specified account owner and options. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| options | CreateAccountImplicitlyOptions | Yes | Options for implicitly creating the account. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner or options. |
| [12300007](../../apis-basic-services-kit/errorcode-account.md#12300007-account-count-reached-the-limit) | The number of accounts reaches the upper limit. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext

  onResultCallback(code: number, result?: appAccount.AuthResult): void {
    console.info('resultCode: ' + code);
    console.info('result: ' + JSON.stringify(result));
  }

  onRequestRedirectedCallback(request: Want): void {
    let wantInfo: Want = {
      deviceId: '',
      bundleName: 'com.example.accountjsdemo',
      action: 'ohos.want.action.viewData',
      entities: ['entity.system.default'],
    }
    this.context.startAbility(wantInfo).then(() => {
      console.info('startAbility successfully');
    }).catch((err: BusinessError) => {
      console.error(`startAbility err: code is ${err.code}, message is ${err.message}`);
    })
  }

  aboutToAppear(): void {
    let options: appAccount.CreateAccountImplicitlyOptions = {
      authType: 'getSocialData',
      requiredLabels: ['student']
    };
    try {
      appAccountManager.createAccountImplicitly('com.example.accountjsdemo', options, {
        onResult: this.onResultCallback,
        onRequestRedirected: this.onRequestRedirectedCallback
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`createAccountImplicitly exception: code is ${err.code}, message is ${err.message}`);
    }
  }
  build() {}
}

```

## deleteAccount

```TypeScript
deleteAccount(name: string, callback: AsyncCallback<void>): void
```

Deletes an application account. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [removeAccount](arkts-basicservices-appaccountmanager-i.md#removeaccount-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeAccount(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.deleteAccount('ZhaoLiu', (err: BusinessError) => { 
  console.error(`deleteAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## deleteAccount

```TypeScript
deleteAccount(name: string): Promise<void>
```

Deletes an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [removeAccount](arkts-basicservices-appaccountmanager-i.md#removeaccount-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** removeAccount(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.deleteAccount('ZhaoLiu').then(() => { 
  console.info('deleteAccount Success');
}).catch((err: BusinessError) => {
  console.error(`deleteAccount err: code is ${err.code}, message is ${err.message}`);
});

```

## deleteAuthToken

```TypeScript
deleteAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>): void
```

Deletes the authorization token of the specified authentication type for an application account. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. If the tokendoes not exist, no operation is performed. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner, authType or token. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.deleteAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData', 'xxxxx',
    (err: BusinessError) => {
      if (err) {
        console.error(`deleteAuthToken failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('deleteAuthToken successfully');
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deleteAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## deleteAuthToken

```TypeScript
deleteAuthToken(name: string, owner: string, authType: string, token: string): Promise<void>
```

Deletes the authorization token of the specified authentication type for an application account. This API uses a
promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. If the tokendoes not exist, no operation is performed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner, authType or token. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.deleteAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData', 'xxxxx').then(() => {
    console.info('deleteAuthToken successfully');
  }).catch((err: BusinessError) => {
    console.error(`deleteAuthToken failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deleteAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## deleteCredential

```TypeScript
deleteCredential(name: string, credentialType: string, callback: AsyncCallback<void>): void
```

Deletes the credential of the specified type from an application account. This API uses an asynchronous callback
to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or credentialType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300102](../../apis-basic-services-kit/errorcode-account.md#12300102-credential-not-found) | Credential not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.deleteCredential('zhangsan', 'PIN_SIX', (err: BusinessError) => {
    if (err) {
      console.error(`deleteCredential failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('deleteCredential successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deleteCredential exception: code is ${err.code}, message is ${err.message}`);
}

```

## deleteCredential

```TypeScript
deleteCredential(name: string, credentialType: string): Promise<void>
```

Deletes the credential of the specified type from an application account. This API uses a promise to return the
result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or credentialType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300102](../../apis-basic-services-kit/errorcode-account.md#12300102-credential-not-found) | Credential not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.deleteCredential('zhangsan', 'PIN_SIX').then(() => {
    console.info('deleteCredential successfully');
  }).catch((err: BusinessError) => {
    console.error(`deleteCredential failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`deleteCredential exception: code is ${err.code}, message is ${err.message}`);
}

```

## deleteOAuthToken

```TypeScript
deleteOAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>): void
```

Deletes the authorization token of the specified authentication type for an application account. This API uses an
asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [deleteAuthToken](arkts-basicservices-appaccountmanager-i.md#deleteauthtoken-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.deleteOAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData', 'xxxxx',
  (err: BusinessError) => {
    if (err) {
      console.error(`deleteOAuthToken err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('deleteOAuthToken successful.');
    }
  });

```

## deleteOAuthToken

```TypeScript
deleteOAuthToken(name: string, owner: string, authType: string, token: string): Promise<void>
```

Deletes the authorization token of the specified authentication type for an application account. This API uses a
promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [deleteAuthToken](arkts-basicservices-appaccountmanager-i.md#deleteauthtoken-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.deleteOAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData', 'xxxxx').then(() => {
  console.info('deleteOAuthToken successfully');
}).catch((err: BusinessError) => {
  console.error(`deleteOAuthToken err: code is ${err.code}, message is ${err.message}`);
});

```

## disableAppAccess

```TypeScript
disableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void
```

Disables an application account from accessing an application. This API uses an asynchronous callback to return
the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setAppAccess](arkts-basicservices-appaccountmanager-i.md#setappaccess-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setAppAccess(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.disableAppAccess('ZhangSan', 'com.example.accountjsdemo', (err: BusinessError) => { 
  console.error(`disableAppAccess err: code is ${err.code}, message is ${err.message}`);
});

```

## disableAppAccess

```TypeScript
disableAppAccess(name: string, bundleName: string): Promise<void>
```

Disables an application account from accessing an application. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setAppAccess](arkts-basicservices-appaccountmanager-i.md#setappaccess-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setAppAccess(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the target application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.disableAppAccess('ZhangSan', 'com.example.accountjsdemo').then(() => { 
  console.info('disableAppAccess Success');
}).catch((err: BusinessError) => {
  console.error(`disableAppAccess err: code is ${err.code}, message is ${err.message}`);
});

```

## enableAppAccess

```TypeScript
enableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void
```

Enables an application account to access an application. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setAppAccess](arkts-basicservices-appaccountmanager-i.md#setappaccess-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setAppAccess(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.enableAppAccess('ZhangSan', 'com.example.accountjsdemo', (err: BusinessError) => {
  if (err) {
    console.error(`enableAppAccess err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('enableAppAccess successful.');
  }
});

```

## enableAppAccess

```TypeScript
enableAppAccess(name: string, bundleName: string): Promise<void>
```

Enables an application account to access an application. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setAppAccess](arkts-basicservices-appaccountmanager-i.md#setappaccess-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setAppAccess(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.enableAppAccess('ZhangSan', 'com.example.accountjsdemo').then(() => { 
  console.info('enableAppAccess Success');
}).catch((err: BusinessError) => {
  console.error(`enableAppAccess err: code is ${err.code}, message is ${err.message}`);
});

```

## getAccountCredential

```TypeScript
getAccountCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void
```

Obtains the credential of an application account. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCredential](arkts-basicservices-appaccountmanager-i.md#getcredential-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCredential(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** is the credential obtained. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAccountCredential('ZhangSan', 'credentialType001', (err: BusinessError, result: string) => { 
  if (err) {
    console.error(`getAccountCredential err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getAccountCredential result: ' + result);
  }
});

```

## getAccountCredential

```TypeScript
getAccountCredential(name: string, credentialType: string): Promise<string>
```

Obtains the credential of an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCredential](arkts-basicservices-appaccountmanager-i.md#getcredential-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCredential(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the credential obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAccountCredential('ZhangSan', 'credentialType001').then((data: string) => { 
  console.info('getAccountCredential, result: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getAccountCredential err: code is ${err.code}, message is ${err.message}`);
});

```

## getAccountExtraInfo

```TypeScript
getAccountExtraInfo(name: string, callback: AsyncCallback<string>): void
```

Obtains additional information of an application account. Additional information refers to other information that
can be converted to the string type. It cannot contain sensitive information, such as the application account
password and token. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCustomData](arkts-basicservices-appaccountmanager-i.md#getcustomdata-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is the additional informationobtained. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAccountExtraInfo('ZhangSan', (err: BusinessError, result: string) => { 
  if (err) {
    console.error(`getAccountExtraInfo err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getAccountExtraInfo result: ' + result);
  }
});

```

## getAccountExtraInfo

```TypeScript
getAccountExtraInfo(name: string): Promise<string>
```

Obtains additional information of an application account. Additional information refers to other information that
can be converted to the string type. It cannot contain sensitive information, such as the application account
password and token. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCustomData](arkts-basicservices-appaccountmanager-i.md#getcustomdata-2) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the additional information obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAccountExtraInfo('ZhangSan').then((data: string) => { 
  console.info('getAccountExtraInfo, result: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getAccountExtraInfo err: code is ${err.code}, message is ${err.message}`);
});

```

## getAccountsByOwner

```TypeScript
getAccountsByOwner(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void
```

Obtains the application accounts that can be accessed by the invoker based on the application account owner. This
API uses an asynchronous callback to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications or
<br> have gained the ohos.permission.GET_ALL_APP_ACCOUNTS permission.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is null and **data** is the application account informationobtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAccountsByOwner('com.example.accountjsdemo2',
    (err: BusinessError, data: appAccount.AppAccountInfo[]) => {
      if (err) {
        console.error(`getAccountsByOwner failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('getAccountsByOwner successfully, data:' + JSON.stringify(data));
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccountsByOwner exception:code is ${err.code}, message is ${err.message}`);
}

```

## getAccountsByOwner

```TypeScript
getAccountsByOwner(owner: string): Promise<Array<AppAccountInfo>>
```

Obtains the application accounts that can be accessed by the invoker based on the application account owner. This
API uses a promise to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications or
<br> have gained the ohos.permission.GET_ALL_APP_ACCOUNTS permission.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppAccountInfo&gt;&gt; | Promise used to return the application account information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAccountsByOwner('com.example.accountjsdemo2').then((
    data: appAccount.AppAccountInfo[]) => {
    console.info('getAccountsByOwner successfully, data: ' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error(`getAccountsByOwner failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAccountsByOwner exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAllAccessibleAccounts

```TypeScript
getAllAccessibleAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void
```

Obtains information about all accessible application accounts. This API uses an asynchronous callback to return
the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getAllAccounts](arkts-basicservices-appaccountmanager-i.md#getallaccounts-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAllAccounts(callback:

**Required permissions:** ohos.permission.GET_ALL_APP_ACCOUNTS

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of accessible applicationaccounts. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAllAccessibleAccounts((err: BusinessError, data: appAccount.AppAccountInfo[])=>{
  if (err) {
    console.error(`getAllAccessibleAccounts err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getAllAccessibleAccounts data: ' + JSON.stringify(data));
  }
});

```

## getAllAccessibleAccounts

```TypeScript
getAllAccessibleAccounts(): Promise<Array<AppAccountInfo>>
```

Obtains information about all accessible application accounts. This API uses a promise to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getAllAccounts](arkts-basicservices-appaccountmanager-i.md#getallaccounts-2) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getAllAccounts()](arkts-basicservices-appaccountmanager-i.md#getallaccounts-2)

**Required permissions:** ohos.permission.GET_ALL_APP_ACCOUNTS

**System capability:** SystemCapability.Account.AppAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppAccountInfo&gt;&gt; | Promise used to return information about all accessible accounts. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAllAccessibleAccounts().then((data: appAccount.AppAccountInfo[]) => { 
  console.info('getAllAccessibleAccounts: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getAllAccessibleAccounts err: code is ${err.code}, message is ${err.message}`);
});

```

## getAllAccounts

```TypeScript
getAllAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void
```

Obtains information about all accessible application accounts. This API uses an asynchronous callback to return
the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications or
<br> have gained the ohos.permission.GET_ALL_APP_ACCOUNTS permission.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of accessible applicationaccounts. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAllAccounts((err: BusinessError, data: appAccount.AppAccountInfo[]) => {
    if (err) {
      console.error(`getAllAccounts failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAllAccounts successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAllAccounts exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAllAccounts

```TypeScript
getAllAccounts(): Promise<Array<AppAccountInfo>>
```

Obtains information about all accessible application accounts. This API uses a promise to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications or
<br> have gained the ohos.permission.GET_ALL_APP_ACCOUNTS permission.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppAccountInfo&gt;&gt; | Promise used to return information about all accessible accounts. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAllAccounts().then((data: appAccount.AppAccountInfo[]) => {
    console.info('getAllAccounts successfully');
  }).catch((err: BusinessError) => {
    console.error(`getAllAccounts failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAllAccounts exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAllAccounts

```TypeScript
getAllAccounts(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void
```

Obtains the application accounts that can be accessed by the invoker based on the application account owner. This
API uses an asynchronous callback to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getAccountsByOwner](arkts-basicservices-appaccountmanager-i.md#getaccountsbyowner-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAccountsByOwner(owner:

**Required permissions:** ohos.permission.GET_ALL_APP_ACCOUNTS

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback used to return information aboutall accessible application accounts. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const selfBundle = 'com.example.actsgetallaaccounts';
appAccountManager.getAllAccounts(selfBundle, (err: BusinessError, data: appAccount.AppAccountInfo[])=>{
  if (err) {
    console.error(`getAllAccounts err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getAllAccounts data:' + JSON.stringify(data));
  }
});

```

## getAllAccounts

```TypeScript
getAllAccounts(owner: string): Promise<Array<AppAccountInfo>>
```

Obtains the application accounts that can be accessed by the invoker based on the application account owner. This
API uses a promise to return the result.
This method applies to the following accounts:
<br> Accounts of this application.
<br> Accounts of third-party applications. To obtain such information,
<br> your application must have gained authorization from the third-party applications.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getAccountsByOwner](arkts-basicservices-appaccountmanager-i.md#getaccountsbyowner-2) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAccountsByOwner(owner:

**Required permissions:** ohos.permission.GET_ALL_APP_ACCOUNTS

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppAccountInfo&gt;&gt; | Promise used to return the application accounts that can beaccessed by the invoker. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const selfBundle = 'com.example.actsgetallaaccounts';
appAccountManager.getAllAccounts(selfBundle).then((data: appAccount.AppAccountInfo[]) => { 
  console.info('getAllAccounts: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getAllAccounts err: code is ${err.code}, message is ${err.message}`);
});

```

## getAllAuthTokens

```TypeScript
getAllAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<AuthTokenInfo>>): void
```

Obtains all tokens visible to the invoker for an application account. This API uses an asynchronous callback to
return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;AuthTokenInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of all tokens visibleto the invoker. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or owner. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAllAuthTokens('LiSi', 'com.example.accountjsdemo',
    (err: BusinessError, tokenArr: appAccount.AuthTokenInfo[]) => {
      if (err) {
        console.error(`getAllAuthTokens failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('getAllAuthTokens successfully, tokenArr: ' + tokenArr);
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAllAuthTokens exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAllAuthTokens

```TypeScript
getAllAuthTokens(name: string, owner: string): Promise<Array<AuthTokenInfo>>
```

Obtains all tokens visible to the invoker for an application account. This API uses a promise to return the
result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AuthTokenInfo&gt;&gt; | Promise used to return the tokens obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or owner. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAllAuthTokens('LiSi', 'com.example.accountjsdemo').then((
    tokenArr: appAccount.AuthTokenInfo[]) => {
    console.info('getAllAuthTokens successfully, tokenArr: ' + JSON.stringify(tokenArr));
  }).catch((err: BusinessError) => {
    console.error(`getAllAuthTokens failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAllAuthTokens exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAllOAuthTokens

```TypeScript
getAllOAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<OAuthTokenInfo>>): void
```

Obtains all tokens visible to the invoker for an application account. This API uses an asynchronous callback to
return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAllAuthTokens](arkts-basicservices-appaccountmanager-i.md#getallauthtokens-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllAuthTokens(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;OAuthTokenInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of all tokens visible tothe invoker. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAllOAuthTokens('LiSi', 'com.example.accountjsdemo',
  (err: BusinessError, data: appAccount.OAuthTokenInfo[]) => {
    if (err) {
      console.error(`getAllOAuthTokens err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAllOAuthTokens data: ' + JSON.stringify(data));
    }
  });

```

## getAllOAuthTokens

```TypeScript
getAllOAuthTokens(name: string, owner: string): Promise<Array<OAuthTokenInfo>>
```

Obtains all tokens visible to the invoker for an application account. This API uses a promise to return the
result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAllAuthTokens](arkts-basicservices-appaccountmanager-i.md#getallauthtokens-2) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAllAuthTokens(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;OAuthTokenInfo&gt;&gt; | Promise used to return the tokens obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAllOAuthTokens('LiSi', 'com.example.accountjsdemo').then((
  data: appAccount.OAuthTokenInfo[]) => {
  console.info('getAllOAuthTokens data: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`getAllOAuthTokens err: code is ${err.code}, message is ${err.message}`);
});

```

## getAssociatedData

```TypeScript
getAssociatedData(name: string, key: string, callback: AsyncCallback<string>): void
```

Obtains the associated data of an application account based on the specified key. This API uses an asynchronous
callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCustomData](arkts-basicservices-appaccountmanager-i.md#getcustomdata-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the associated data. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is the data obtained.Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAssociatedData('ZhangSan', 'k001', (err: BusinessError, result: string) => { 
  if (err) {
    console.error(`getAssociatedData err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getAssociatedData result: ' + result);
  }
});

```

## getAssociatedData

```TypeScript
getAssociatedData(name: string, key: string): Promise<string>
```

Obtains data associated with an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [getCustomData](arkts-basicservices-appaccountmanager-i.md#getcustomdata-2) instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the associated data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the data obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAssociatedData('ZhangSan', 'k001').then((data: string) => { 
  console.info('getAssociatedData: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getAssociatedData err: code is ${err.code}, message is ${err.message}`);
});

```

## getAuthCallback

```TypeScript
getAuthCallback(sessionId: string, callback: AsyncCallback<AuthCallback>): void
```

Obtains the authenticator callback for an authentication session. This API uses an asynchronous callback to
return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | ID of the authentication session. |
| callback | AsyncCallback&lt;AuthCallback&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is the authenticatorcallback object obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid sessionId. |
| [12300108](../../apis-basic-services-kit/errorcode-account.md#12300108-authentication-session-not-found) | Session not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, param: AbilityConstant.LaunchParam) { // Ability lifecycle function.
    let sessionId: string = want.parameters![appAccount.Constants.KEY_SESSION_ID] as string;
    try {
      appAccountManager.getAuthCallback(sessionId, (err: BusinessError, callback: appAccount.AuthCallback) => {
        if (err != null) {
          console.error(`getAuthCallback err: code is ${err.code}, message is ${err.message}`);
          return;
        }
        let result: appAccount.AuthResult = {
          account: {
            name: 'Lisi',
            owner: 'com.example.accountjsdemo',
          },
          tokenInfo: {
            token: 'xxxxxx',
            authType: 'getSocialData'
          }
        }; 
        callback.onResult(0, result);
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`getAuthCallback exception: code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

## getAuthCallback

```TypeScript
getAuthCallback(sessionId: string): Promise<AuthCallback>
```

Obtains the authenticator callback for an authentication session. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | ID of the authentication session. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthCallback&gt; | Promise used to return the authenticator callback obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid sessionId. |
| [12300108](../../apis-basic-services-kit/errorcode-account.md#12300108-authentication-session-not-found) | Session not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, param: AbilityConstant.LaunchParam) { // Ability lifecycle function.
    let sessionId: string = want.parameters![appAccount.Constants.KEY_SESSION_ID] as string;
    try {
      appAccountManager.getAuthCallback(sessionId).then((callback: appAccount.AuthCallback) => {
      let result: appAccount.AuthResult = {
        account: {
          name: 'Lisi',
          owner: 'com.example.accountjsdemo',
        },
        tokenInfo: {
          token: 'xxxxxx',
          authType: 'getSocialData'
        }
      };
      callback.onResult(0, result);
      }).catch((err: BusinessError) => {
        console.error(`getAuthCallback err: code is ${err.code}, message is ${err.message}`);
      });
    } catch (e) {
      const err = e as BusinessError;
      console.error(`getAuthCallback exception: code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

## getAuthList

```TypeScript
getAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>): void
```

Obtains the authorization list of the specified authentication type for an application account. The authorization
list contains all authorized bundles. The token authorization list is set by
[setAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setauthtokenvisibility-1)
. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of authorizedbundles obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or authType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAuthList('LiSi', 'getSocialData', (err: BusinessError, authList: string[]) => {
    if (err) {
      console.error(`getAuthList failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAuthList successfully, authList: ' + authList);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAuthList exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAuthList

```TypeScript
getAuthList(name: string, authType: string): Promise<Array<string>>
```

Obtains the authorization list of the specified authentication type for an application account. The authorization
list contains all authorized bundles. The token authorization list is set by
[setAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setauthtokenvisibility-1)
. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return a list of authorized bundles. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or authType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAuthList('LiSi', 'getSocialData').then((authList: string[]) => {
    console.info('getAuthList successfully, authList: ' + authList);
  }).catch((err: BusinessError) => {
    console.error(`getAuthList failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAuthList exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAuthToken

```TypeScript
getAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>): void
```

Obtains the authorization token of the specified authentication type for an application account. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is theauthorization token value obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or authType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData',
    (err: BusinessError, token: string) => {
      if (err) {
        console.error(`getAuthToken failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('getAuthToken successfully, token: ' + token);
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAuthToken

```TypeScript
getAuthToken(name: string, owner: string, authType: string): Promise<string>
```

Obtains the authorization token of the specified authentication type for an application account. This API uses a
promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the authorization token obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or authType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData').then((token: string) => {
    console.info('getAuthToken successfully, token: ' + token);
  }).catch((err: BusinessError) => {
    console.error(`getAuthToken failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## getAuthenticatorCallback

```TypeScript
getAuthenticatorCallback(sessionId: string, callback: AsyncCallback<AuthenticatorCallback>): void
```

Obtains the authenticator callback for an authentication session. This API uses an asynchronous callback to
return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthCallback](arkts-basicservices-appaccountmanager-i.md#getauthcallback-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthCallback(sessionId:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | ID of the authentication session. |
| callback | AsyncCallback&lt;AuthenticatorCallback&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is the authenticator callbackobtained. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, param: AbilityConstant.LaunchParam) { // Ability lifecycle function.
    let sessionId: string = want.parameters![appAccount.Constants.KEY_SESSION_ID] as string;
    appAccountManager.getAuthenticatorCallback(sessionId,
        (err: BusinessError, callback: appAccount.AuthenticatorCallback) => {
        if (err.code != appAccount.ResultCode.SUCCESS) {
            console.error(`getAuthenticatorCallback err: code is ${err.code}, message is ${err.message}`);
            return;
        }
        callback.onResult(appAccount.ResultCode.SUCCESS, {
          name: 'LiSi',
          owner: 'com.example.accountjsdemo',
          authType: 'getSocialData',
          token: 'xxxxxx'
        });
      });
  }
}

```

## getAuthenticatorCallback

```TypeScript
getAuthenticatorCallback(sessionId: string): Promise<AuthenticatorCallback>
```

Obtains the authenticator callback for an authentication session. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthCallback](arkts-basicservices-appaccountmanager-i.md#getauthcallback-2) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthCallback(sessionId:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | ID of the authentication session. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthenticatorCallback&gt; | Promise used to return the authenticator callback obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, param: AbilityConstant.LaunchParam) { // Ability lifecycle function.
    let sessionId: string = want.parameters![appAccount.Constants.KEY_SESSION_ID] as string;
    appAccountManager.getAuthenticatorCallback(sessionId).then((
      callback: appAccount.AuthenticatorCallback) => {
      callback.onResult(appAccount.ResultCode.SUCCESS, {
        name: 'LiSi',
        owner: 'com.example.accountjsdemo',
        authType: 'getSocialData',
        token: 'xxxxxx'
      });
    }).catch((err: BusinessError) => {
      console.error(`getAuthenticatorCallback err: code is ${err.code}, message is ${err.message}`);
    });
  }
}

```

## getAuthenticatorInfo

```TypeScript
getAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>): void
```

Obtains the authenticator information of an application. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [queryAuthenticatorInfo](arkts-basicservices-appaccountmanager-i.md#queryauthenticatorinfo-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** queryAuthenticatorInfo(owner:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;AuthenticatorInfo&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **null** and **data** is the authenticator information obtained. Otherwise,**err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAuthenticatorInfo('com.example.accountjsdemo',
  (err: BusinessError, data: appAccount.AuthenticatorInfo) => {
    if (err) {
      console.error(`getAuthenticatorInfo err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getAuthenticatorInfo data: ' + JSON.stringify(data));
    }
  });

```

## getAuthenticatorInfo

```TypeScript
getAuthenticatorInfo(owner: string): Promise<AuthenticatorInfo>
```

Obtains the authenticator information of an application. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [queryAuthenticatorInfo](arkts-basicservices-appaccountmanager-i.md#queryauthenticatorinfo-2) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** queryAuthenticatorInfo(owner:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthenticatorInfo&gt; | Promise used to return the authenticator information obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getAuthenticatorInfo('com.example.accountjsdemo').then((
  data: appAccount.AuthenticatorInfo) => { 
  console.info('getAuthenticatorInfo: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`getAuthenticatorInfo err: code is ${err.code}, message is ${err.message}`);
});

```

## getCredential

```TypeScript
getCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void
```

Obtains the credential of an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** is the credential obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or credentialType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300102](../../apis-basic-services-kit/errorcode-account.md#12300102-credential-not-found) | Credential not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getCredential('ZhangSan', 'PIN_SIX', (err: BusinessError, result: string) => {
    if (err) {
      console.error(`getCredential failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getCredential successfully, result: ' + result);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCredential err: code is ${err.code}, message is ${err.message}`);
}

```

## getCredential

```TypeScript
getCredential(name: string, credentialType: string): Promise<string>
```

Obtains the credential of an application account. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the credential obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or credentialType. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300102](../../apis-basic-services-kit/errorcode-account.md#12300102-credential-not-found) | Credential not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getCredential('ZhangSan', 'PIN_SIX').then((credential: string) => {
    console.info('getCredential successfully, credential: ' + credential);
  }).catch((err: BusinessError) => {
    console.error(`getCredential failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCredential exception: code is ${err.code}, message is ${err.message}`);
}

```

## getCustomData

```TypeScript
getCustomData(name: string, key: string, callback: AsyncCallback<string>): void
```

Obtains the custom data of an application account based on the specified key. This API uses an asynchronous
callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the custom data. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is the custom data valueobtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or key. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400002](../../apis-basic-services-kit/errorcode-account.md#12400002-custom-data-not-found) | Custom data not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getCustomData('ZhangSan', 'age', (err: BusinessError, data: string) => {
    if (err) {
      console.error('getCustomData failed, error: ' + err);
    } else {
      console.info('getCustomData successfully, data: ' + data);
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCustomData exception: code is ${err.code}, message is ${err.message}`);
}

```

## getCustomData

```TypeScript
getCustomData(name: string, key: string): Promise<string>
```

Obtains the custom data of an application account based on the specified key. This API uses a promise to return
the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the custom data. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the custom data value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or key. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400002](../../apis-basic-services-kit/errorcode-account.md#12400002-custom-data-not-found) | Custom data not found |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.getCustomData('ZhangSan', 'age').then((data: string) => {
    console.info('getCustomData successfully, data: ' + data);
  }).catch((err: BusinessError) => {
    console.error(`getCustomData failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCustomData exception: code is ${err.code}, message is ${err.message}`);
}

```

## getCustomDataSync

```TypeScript
getCustomDataSync(name: string, key: string): string
```

Obtains the custom data of an application account based on the specified key. The API returns the result
synchronously.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the custom data. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Value of the custom data, by default, no value is passed in. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or key. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400002](../../apis-basic-services-kit/errorcode-account.md#12400002-custom-data-not-found) | Custom data not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let value = appAccountManager.getCustomDataSync('ZhangSan', 'age');
  console.info('getCustomDataSync successfully, value: ' + value);
} catch (e) {
  const err = e as BusinessError;
  console.error(`getCustomDataSync failed, code is ${err.code}, message is ${err.message}`);
}

```

## getOAuthList

```TypeScript
getOAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>): void
```

Obtains the authorization list of the specified authentication type for an application account. The authorization
list contains all authorized bundles. The token authorization list is set by
[setOAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setoauthtokenvisibility-1)
. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthList](arkts-basicservices-appaccountmanager-i.md#getauthlist-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthList(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of authorizedbundles obtained. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getOAuthList('LiSi', 'getSocialData', (err: BusinessError, data: string[]) => {
  if (err) {
    console.error(`getOAuthList err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('getOAuthList data: ' + JSON.stringify(data));
  }
});

```

## getOAuthList

```TypeScript
getOAuthList(name: string, authType: string): Promise<Array<string>>
```

Obtains the authorization list of the specified authentication type for an application account. The authorization
list contains all authorized bundles. The token authorization list is set by
[setOAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setoauthtokenvisibility-1)
. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthList](arkts-basicservices-appaccountmanager-i.md#getauthlist-2) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthList(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return a list of authorized bundles. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getOAuthList('LiSi', 'getSocialData').then((data: string[]) => {
  console.info('getOAuthList data: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`getOAuthList err: code is ${err.code}, message is ${err.message}`);
});

```

## getOAuthToken

```TypeScript
getOAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>): void
```

Obtains the authorization token of the specified authentication type for an application account. This API uses an
asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthToken](arkts-basicservices-appaccountmanager-i.md#getauthtoken-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** is the authorization token value obtained.Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getOAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData',
  (err: BusinessError, data: string) => {
    if (err) {
      console.error(`getOAuthToken err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('getOAuthToken token: ' + data);
    }
  });

```

## getOAuthToken

```TypeScript
getOAuthToken(name: string, owner: string, authType: string): Promise<string>
```

Obtains the authorization token of the specified authentication type for an application account. This API uses a
promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [getAuthToken](arkts-basicservices-appaccountmanager-i.md#getauthtoken-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the authorization token obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.getOAuthToken('LiSi', 'com.example.accountjsdemo', 'getSocialData').then((data: string) => {
  console.info('getOAuthToken token: ' + data);
}).catch((err: BusinessError) => {
  console.error(`getOAuthToken err: code is ${err.code}, message is ${err.message}`);
});

```

## off('change')

```TypeScript
off(type: 'change', callback?: Callback<Array<AppAccountInfo>>): void
```

Unsubscribes from account information changes.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [off('accountChange')](arkts-basicservices-appaccountmanager-i.md#off-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** off(type:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | Event type to subscribe to. The value is **'change'**.An event will be reported when the account information changes. |
| callback | Callback&lt;Array&lt;AppAccountInfo&gt;&gt; | No | Callback to unregister.By default, no value is passed, which means to unregister all callbacks forthe specified event. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function changeOnCallback(data: appAccount.AppAccountInfo[]): void {
  console.info('receive change data: ' + JSON.stringify(data));
  appAccountManager.off('change', () => {
    console.info('off finish');
  })
}

try {
  appAccountManager.on('change', ['com.example.actsaccounttest'], changeOnCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`on accountOnOffDemo err: code is ${err.code}, message is ${err.message}`);
}

```

## off('accountChange')

```TypeScript
off(type: 'accountChange', callback?: Callback<Array<AppAccountInfo>>): void
```

Unsubscribes from account information changes.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'accountChange' | Yes | Event type to unsubscribe from. The value is **'accountChange'**. |
| callback | Callback&lt;Array&lt;AppAccountInfo&gt;&gt; | No | Callback to unregister. By default, no value is passed,which means to unregister all callbacks for the specified event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function changeOnCallback(data: appAccount.AppAccountInfo[]): void {
  console.info('receive change data:' + JSON.stringify(data));
}

try {
  appAccountManager.on('accountChange', ['com.example.actsaccounttest'], changeOnCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`on accountChange failed, code is ${err.code}, message is ${err.message}`);
}
try {
  appAccountManager.off('accountChange', changeOnCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`off accountChange failed, code is ${err.code}, message is ${err.message}`);
}

```

## on('change')

```TypeScript
on(type: 'change', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void
```

Subscribes to account information changes of apps.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [on('accountChange')](arkts-basicservices-appaccountmanager-i.md#on-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** on(type:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'change' | Yes | Event type to subscribe to. The value is **'change'**.An event will be reported when the account information changes. |
| owners | Array&lt;string&gt; | Yes | Application bundle names of the account. |
| callback | Callback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback registered to return the list ofchanged application accounts. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function changeOnCallback(data: appAccount.AppAccountInfo[]): void {
  console.info('receive change data:' + JSON.stringify(data));
}

try {
  appAccountManager.on('change', ['com.example.actsaccounttest'], changeOnCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`on accountOnOffDemo code is ${err.code}, message is ${err.message}`);
}

```

## on('accountChange')

```TypeScript
on(type: 'accountChange', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void
```

Subscribes to account information changes of apps.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'accountChange' | Yes | Event type to subscribe to. The value is **'accountChange'**.An event will be reported when the account information of the target application changes. |
| owners | Array&lt;string&gt; | Yes | Application bundle names of the account. |
| callback | Callback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback registered to return the listof changed application accounts. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid type or owners. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function changeOnCallback(data: appAccount.AppAccountInfo[]): void {
  console.info('receive change data:' + JSON.stringify(data));
}

try {
  appAccountManager.on('accountChange', ['com.example.actsaccounttest'], changeOnCallback);
} catch (e) {
  const err = e as BusinessError;
  console.error(`on accountChange failed, code is ${err.code}, message is ${err.message}`);
}

```

## queryAuthenticatorInfo

```TypeScript
queryAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>): void
```

Obtains the authenticator information of an application. This API uses an asynchronous callback to return the
result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;AuthenticatorInfo&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **null** and **data** is the authenticator information obtained.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.queryAuthenticatorInfo('com.example.accountjsdemo',
    (err: BusinessError, info: appAccount.AuthenticatorInfo) => {
      if (err) {
        console.error(`queryAuthenticatorInfo failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('queryAuthenticatorInfo successfully, info: ' + JSON.stringify(info));
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryAuthenticatorInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## queryAuthenticatorInfo

```TypeScript
queryAuthenticatorInfo(owner: string): Promise<AuthenticatorInfo>
```

Obtains the authenticator information of an application. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthenticatorInfo&gt; | Promise used to return the authenticator information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.queryAuthenticatorInfo('com.example.accountjsdemo').then((
    info: appAccount.AuthenticatorInfo) => { 
    console.info('queryAuthenticatorInfo successfully, info: ' + JSON.stringify(info));
  }).catch((err: BusinessError) => {
    console.error(`queryAuthenticatorInfo failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`queryAuthenticatorInfo exception: code is ${err.code}, message is ${err.message}`);
}

```

## removeAccount

```TypeScript
removeAccount(name: string, callback: AsyncCallback<void>): void
```

Removes an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.removeAccount('ZhaoLiu', (err: BusinessError) => {
    if (err) {
      console.error(`removeAccount failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('removeAccount successfully');
    }
 });
} catch (e) {
  const err = e as BusinessError;
  console.error(`removeAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## removeAccount

```TypeScript
removeAccount(name: string): Promise<void>
```

Removes an application account. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.removeAccount('Lisi').then(() => {
    console.info('removeAccount successfully');
  }).catch((err: BusinessError) => {
    console.error(`removeAccount failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`removeAccount exception: code is ${err.code}, message is ${err.message}`);
}

```

## selectAccountsByOptions

```TypeScript
selectAccountsByOptions(options: SelectAccountsOptions, callback: AsyncCallback<Array<AppAccountInfo>>): void
```

Selects the accounts that can be accessed by the invoker based on the options. This API uses an asynchronous
callback to return the result. If the options contain label constraints, the authenticator of the target
application provides the capability of checking the labels.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SelectAccountsOptions | Yes | Options for selecting accounts. |
| callback | AsyncCallback&lt;Array&lt;AppAccountInfo&gt;&gt; | Yes | Callback used to return the result.If the operation is successful, **err** is **null** and **data** is a list of accounts selected.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid options. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.SelectAccountsOptions = {
  allowedOwners: ['com.example.accountjsdemo'],
  requiredLabels: ['student']
};
try {
  appAccountManager.selectAccountsByOptions(options,
    (err: BusinessError, accountArr: appAccount.AppAccountInfo[]) => {
      if (err) {
        console.error(`selectAccountsByOptions failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('selectAccountsByOptions successfully, accountArr: ' + JSON.stringify(accountArr));
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`selectAccountsByOptions exception: code is ${err.code}, message is ${err.message}`);
}

```

## selectAccountsByOptions

```TypeScript
selectAccountsByOptions(options: SelectAccountsOptions): Promise<Array<AppAccountInfo>>
```

Selects the accounts that can be accessed by the invoker based on the options. This API uses a promise to return
the result. If the options contain label constraints, the authenticator of the target application provides the
capability of checking the labels.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SelectAccountsOptions | Yes | Options for selecting accounts. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppAccountInfo&gt;&gt; | Promise used to return the accounts selected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid options. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.SelectAccountsOptions = {
  allowedOwners: ['com.example.accountjsdemo']
};
try {
  appAccountManager.selectAccountsByOptions(options).then((accountArr: appAccount.AppAccountInfo[]) => {
    console.info('selectAccountsByOptions successfully, accountArr: ' + JSON.stringify(accountArr));
  }).catch((err: BusinessError) => {
    console.error(`selectAccountsByOptions failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`selectAccountsByOptions exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAccountCredential

```TypeScript
setAccountCredential(name: string, credentialType: string, credential: string, callback: AsyncCallback<void>): void
```

Sets a credential for an application account. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCredential](arkts-basicservices-appaccountmanager-i.md#setcredential-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCredential(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| credential | string | Yes | Credential value. The custom value, the value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAccountCredential('ZhangSan', 'credentialType001', 'credential001', (err: BusinessError) => { 
  if (err) {
    console.error(`setAccountCredential err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('setAccountCredential successful.');
  }
});

```

## setAccountCredential

```TypeScript
setAccountCredential(name: string, credentialType: string, credential: string): Promise<void>
```

Sets a credential for an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCredential](arkts-basicservices-appaccountmanager-i.md#setcredential-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCredential(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| credential | string | Yes | Credential value. The custom value, the value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAccountCredential('ZhangSan', 'credentialType001', 'credential001').then(() => { 
  console.info('setAccountCredential Success');
}).catch((err: BusinessError) => {
  console.error(`setAccountCredential err: code is ${err.code}, message is ${err.message}`);
});

```

## setAccountExtraInfo

```TypeScript
setAccountExtraInfo(name: string, extraInfo: string, callback: AsyncCallback<void>): void
```

Sets additional information for an application account. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCustomData](arkts-basicservices-appaccountmanager-i.md#setcustomdata-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| extraInfo | string | Yes | Additional information (information that can be converted to the string type).It cannot contain sensitive information, such as the application account password and token. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAccountExtraInfo('ZhangSan', 'Tk002', (err: BusinessError) => { 
  if (err) {
    console.error(`setAccountExtraInfo err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('setAccountExtraInfo successful.');
  }
});

```

## setAccountExtraInfo

```TypeScript
setAccountExtraInfo(name: string, extraInfo: string): Promise<void>
```

Sets additional information for an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCustomData](arkts-basicservices-appaccountmanager-i.md#setcustomdata-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| extraInfo | string | Yes | Additional information (information that can be converted to the string type).It cannot contain sensitive information, such as the application account password and token. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAccountExtraInfo('ZhangSan', 'Tk002').then(() => { 
  console.info('setAccountExtraInfo Success');
}).catch((err: BusinessError) => {
  console.error(`setAccountExtraInfo err: code is ${err.code}, message is ${err.message}`);
});

```

## setAppAccess

```TypeScript
setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>): void
```

Sets the access to the data of an account for an application. This API uses an asynchronous callback to return
the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isAccessible | boolean | Yes | Whether the access is allowed. The value **true** means to allow the access;the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |
| [12400005](../../apis-basic-services-kit/errorcode-account.md#12400005-bundles-in-the-oauth-list-reached-the-limit) | The size of authorization list reaches the upper limit.<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAppAccess('ZhangSan', 'com.example.accountjsdemo', true, (err: BusinessError) => {
    if (err) {
      console.error(`setAppAccess failed: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setAppAccess successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAppAccess exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAppAccess

```TypeScript
setAppAccess(name: string, bundleName: string, isAccessible: boolean): Promise<void>
```

Sets the access to the data of an account for an application. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isAccessible | boolean | Yes | Whether the access is allowed. The value **true** means to allow the access;the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |
| [12400005](../../apis-basic-services-kit/errorcode-account.md#12400005-bundles-in-the-oauth-list-reached-the-limit) | The size of authorization list reaches the upper limit.<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAppAccess('ZhangSan', 'com.example.accountjsdemo', true).then(() => {
    console.info('setAppAccess successfully');
  }).catch((err: BusinessError) => {
    console.error(`setAppAccess failed: code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAppAccess exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAppAccountSyncEnable

```TypeScript
setAppAccountSyncEnable(name: string, isEnable: boolean, callback: AsyncCallback<void>): void
```

Sets data synchronization for an application account. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setDataSyncEnabled](arkts-basicservices-appaccountmanager-i.md#setdatasyncenabled-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setDataSyncEnabled(name:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| isEnable | boolean | Yes | Whether to enable data synchronization. The value **true** means thatdata synchronization is enabled, and **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAppAccountSyncEnable('ZhangSan', true, (err: BusinessError) => {
  if (err) {
    console.error(`setAppAccountSyncEnable err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('setAppAccountSyncEnable successful.');
  }
});

```

## setAppAccountSyncEnable

```TypeScript
setAppAccountSyncEnable(name: string, isEnable: boolean): Promise<void>
```

Sets data synchronization for an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setDataSyncEnabled](arkts-basicservices-appaccountmanager-i.md#setdatasyncenabled-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setDataSyncEnabled(name:

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| isEnable | boolean | Yes | Whether to enable data synchronization. The value **true** means thatdata synchronization is enabled, and **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAppAccountSyncEnable('ZhangSan', true).then(() => { 
  console.info('setAppAccountSyncEnable Success');
}).catch((err: BusinessError) => {
  console.error(`setAppAccountSyncEnable err: code is ${err.code}, message is ${err.message}`);
});

```

## setAssociatedData

```TypeScript
setAssociatedData(name: string, key: string, value: string, callback: AsyncCallback<void>): void
```

Sets data to be associated with an application account. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCustomData](arkts-basicservices-appaccountmanager-i.md#setcustomdata-1)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the associated data. |
| value | string | Yes | Value of the data to set. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAssociatedData('ZhangSan', 'k001', 'v001', (err: BusinessError) => {
  if (err) {
    console.error(`setAssociatedData err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('setAssociatedData successful.');
  }
});

```

## setAssociatedData

```TypeScript
setAssociatedData(name: string, key: string, value: string): Promise<void>
```

Sets data to be associated with an application account. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 7 and deprecated since API version 9. You are advised to use
> [setCustomData](arkts-basicservices-appaccountmanager-i.md#setcustomdata-2)
> instead.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCustomData(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the associated data. |
| value | string | Yes | Value of the data to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setAssociatedData('ZhangSan', 'k001', 'v001').then(() => { 
  console.info('setAssociatedData Success');
}).catch((err: BusinessError) => {
  console.error(`setAssociatedData err: code is ${err.code}, message is ${err.message}`);
});

```

## setAuthToken

```TypeScript
setAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>): void
```

Sets an authorization token of the specific authentication type for an application account. This API uses an
asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or token. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400004](../../apis-basic-services-kit/errorcode-account.md#12400004-token-count-reached-the-limit) | The number of tokens reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAuthToken('LiSi', 'getSocialData', 'xxxx', (err: BusinessError) => {
    if (err) {
      console.error(`setAuthToken failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setAuthToken successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAuthToken

```TypeScript
setAuthToken(name: string, authType: string, token: string): Promise<void>
```

Sets an authorization token of the specific authentication type for an application account. This API uses a
promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or token. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400004](../../apis-basic-services-kit/errorcode-account.md#12400004-token-count-reached-the-limit) | The number of tokens reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAuthToken('LiSi', 'getSocialData', 'xxxx').then(() => {
    console.info('setAuthToken successfully');
  }).catch((err: BusinessError) => {
    console.error(`setAuthToken failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthToken exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAuthTokenVisibility

```TypeScript
setAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      isVisible: boolean,
      callback: AsyncCallback<void>
    ): void
```

Sets the visibility of an authorization token to an application. This API uses an asynchronous callback to return
the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isVisible | boolean | Yes | Whether the authorization token is visible to the application.The value **true** means the authorization token is visible to the application;the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |
| [12400005](../../apis-basic-services-kit/errorcode-account.md#12400005-bundles-in-the-oauth-list-reached-the-limit) | The size of authorization list reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo', true,
    (err: BusinessError) => {
      if (err) {
        console.error(`setAuthTokenVisibility failed, code is ${err.code}, message is ${err.message}`);
      } else {
        console.info('setAuthTokenVisibility successfully');
      }
    });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthTokenVisibility exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAuthTokenVisibility

```TypeScript
setAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean): Promise<void>
```

Sets the visibility of an authorization token to an application. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isVisible | boolean | Yes | Whether the authorization token is visible to the application.The value **true** means the authorization token is visible to the application;the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, authType or bundleName. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300107](../../apis-basic-services-kit/errorcode-account.md#12300107-authentication-type-not-found) | AuthType not found. |
| [12400001](../../apis-basic-services-kit/errorcode-account.md#12400001-application-not-found) | Application not found.<br>**Applicable version:** 9 - 13 |
| [12400005](../../apis-basic-services-kit/errorcode-account.md#12400005-bundles-in-the-oauth-list-reached-the-limit) | The size of authorization list reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo', true).then(() => {
    console.info('setAuthTokenVisibility successfully');
  }).catch((err: BusinessError) => {
    console.error(`setAuthTokenVisibility failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthTokenVisibility exception: code is ${err.code}, message is ${err.message}`);
}

```

## setAuthenticatorProperties

```TypeScript
setAuthenticatorProperties(owner: string, callback: AuthCallback): void
```

Sets the authenticator attributes of an application. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the authenticator. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AuthCallback | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setAuthenticatorProperties('com.example.accountjsdemo', {
    onResult: (resultCode: number, result?: appAccount.AuthResult) => {
      console.info('setAuthenticatorProperties onResult, resultCode: ' + JSON.stringify(resultCode));
      console.info('setAuthenticatorProperties onResult, result: ' + JSON.stringify(result));
    },
    onRequestRedirected: (request: Want) => {
      console.info('setAuthenticatorProperties onRequestRedirected, request: ' + JSON.stringify(request));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthenticatorProperties err: code is ${err.code}, message is ${err.message}`);
}

```

## setAuthenticatorProperties

```TypeScript
setAuthenticatorProperties(owner: string, options: SetPropertiesOptions, callback: AuthCallback): void
```

Sets the authenticator properties. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owner | string | Yes | Owner of the authenticator. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| options | SetPropertiesOptions | Yes | Authenticator properties to set. |
| callback | AuthCallback | Yes | Authenticator callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid owner or options. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.SetPropertiesOptions = {
  properties: { prop1: 'value1' }
};
try {
  appAccountManager.setAuthenticatorProperties('com.example.accountjsdemo', options, {
    onResult: (resultCode: number, result?: appAccount.AuthResult) => {
      console.info('setAuthenticatorProperties onResult, resultCode: ' + JSON.stringify(resultCode));
      console.info('setAuthenticatorProperties onResult, result: ' + JSON.stringify(result));
    },
    onRequestRedirected: (request: Want) => {
      console.info('setAuthenticatorProperties onRequestRedirected, request: ' + JSON.stringify(request));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setAuthenticatorProperties err: code is ${err.code}, message is ${err.message}`);
} 

```

## setCredential

```TypeScript
setCredential(name: string, credentialType: string, credential: string,
                             callback: AsyncCallback<void>): void
```

Sets a credential for an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| credential | string | Yes | Credential value. The custom value, the value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the credential is setsuccessfully, **err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, credentialType or credential. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setCredential('ZhangSan', 'PIN_SIX', 'xxxxxx', (err: BusinessError) => {
    if (err) {
      console.error(`setCredential failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setCredential successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setCredential exception: code is ${err.code}, message is ${err.message}`);
}

```

## setCredential

```TypeScript
setCredential(name: string, credentialType: string, credential: string): Promise<void>
```

Sets a credential for an application account. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| credentialType | string | Yes | Credential type. The custom type, the value cannot exceed 1024 characters. |
| credential | string | Yes | Credential value. The custom value, the value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, credentialType or credential. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setCredential('ZhangSan', 'PIN_SIX', 'xxxxxx').then(() => {
    console.info('setCredential successfully');
  }).catch((err: BusinessError) => {
    console.error(`setCredential failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setCredential exception: code is ${err.code}, message is ${err.message}`);
}

```

## setCustomData

```TypeScript
setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>): void
```

Sets custom data for an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the custom data. The value cannot exceed 512 characters. |
| value | string | Yes | Value of the custom data. The value cannot exceed 512 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, key or value. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400003](../../apis-basic-services-kit/errorcode-account.md#12400003-custom-data-records-reached-the-limit) | The number of custom data reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setCustomData('ZhangSan', 'age', '12', (err: BusinessError) => {
    if (err) {
      console.error(`setCustomData failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setCustomData successfully');
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setCustomData exception: code is ${err.code}, message is ${err.message}`);
}

```

## setCustomData

```TypeScript
setCustomData(name: string, key: string, value: string): Promise<void>
```

Sets custom data for an application account. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| key | string | Yes | Key of the custom data. The value cannot exceed 512 characters. |
| value | string | Yes | Value of the custom data. The value cannot exceed 512 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, key or value. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12400003](../../apis-basic-services-kit/errorcode-account.md#12400003-custom-data-records-reached-the-limit) | The number of custom data reaches the upper limit. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.setCustomData('ZhangSan', 'age', '12').then(() => {
    console.info('setCustomData successfully');
  }).catch((err: BusinessError) => {
    console.error(`setCustomData failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`setCustomData exception: code is ${err.code}, message is ${err.message}`);
}

```

## setDataSyncEnabled

```TypeScript
setDataSyncEnabled(name: string, isEnabled: boolean, callback: AsyncCallback<void>): void
```

Sets data synchronization for an application account. This API uses an asynchronous callback to return the
result.

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| isEnabled | boolean | Yes | Whether to enable data synchronization. The value **true** means that datasynchronization is enabled, and **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    appAccountManager.setDataSyncEnabled('ZhangSan', true, (err: BusinessError) => { 
        console.error(`setDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
    });
} catch (e) {
    const err = e as BusinessError;
    console.error(`setDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
}

```

## setDataSyncEnabled

```TypeScript
setDataSyncEnabled(name: string, isEnabled: boolean): Promise<void>
```

Sets data synchronization for an application account. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| isEnabled | boolean | Yes | Whether to enable data synchronization. The value **true** means that datasynchronization is enabled, and **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    appAccountManager.setDataSyncEnabled('ZhangSan', true).then(() => { 
        console.info('setDataSyncEnabled Success');
    }).catch((err: BusinessError) => {
        console.error(`setDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
    });
} catch (e) {
    const err = e as BusinessError;
    console.error(`setDataSyncEnabled err: code is ${err.code}, message is ${err.message}`);
}

```

## setOAuthToken

```TypeScript
setOAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>): void
```

Sets an authorization token of the specific authentication type for an application account. This API uses an
asynchronous callback to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [setAuthToken](arkts-basicservices-appaccountmanager-i.md#setauthtoken-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setOAuthToken('LiSi', 'getSocialData', 'xxxx', (err: BusinessError) => {
  if (err) {
    console.error(`setOAuthToken err: code is ${err.code}, message is ${err.message}`);
  } else {
    console.info('setOAuthToken successful.');
  }
});

```

## setOAuthToken

```TypeScript
setOAuthToken(name: string, authType: string, token: string): Promise<void>
```

Sets an authorization token of the specific authentication type for an application account. This API uses a
promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [setAuthToken](arkts-basicservices-appaccountmanager-i.md#setauthtoken-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setAuthToken(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| token | string | Yes | Authorization token. The value cannot exceed 1024 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setOAuthToken('LiSi', 'getSocialData', 'xxxx').then(() => {
  console.info('setOAuthToken successfully');
}).catch((err: BusinessError) => {
  console.error(`setOAuthToken err: code is ${err.code}, message is ${err.message}`);
});

```

## setOAuthTokenVisibility

```TypeScript
setOAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      isVisible: boolean,
      callback: AsyncCallback<void>
    ): void
```

Sets the visibility of an authorization token to an application. This API uses an asynchronous callback to return
the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [setAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setauthtokenvisibility-1)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setAuthTokenVisibility(

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isVisible | boolean | Yes | Whether the authorization token is visible to the application.The value **true** means the authorization token is visible to the application;the value **false** means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setOAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo', true,
  (err: BusinessError) => {
    if (err) {
      console.error(`setOAuthTokenVisibility err: code is ${err.code}, message is ${err.message}`);
    } else {
      console.info('setOAuthTokenVisibility successful.');
    }
  });

```

## setOAuthTokenVisibility

```TypeScript
setOAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean): Promise<void>
```

Sets the visibility of an authorization token to an application. This API uses a promise to return the result.

> **NOTE**
>
> This API is supported since API version 8 and deprecated since API version 9. You are advised to use
> [setAuthTokenVisibility](arkts-basicservices-appaccountmanager-i.md#setauthtokenvisibility-2)
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setAuthTokenVisibility(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| authType | string | Yes | Authentication type. The custom type, The value cannot exceed 1024 characters. |
| bundleName | string | Yes | Bundle name of the application. The value cannot exceed 512 characters. |
| isVisible | boolean | Yes | Whether the authorization token is visible to the application. The value **true** meansthe authorization token is visible to the application; the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

appAccountManager.setOAuthTokenVisibility('LiSi', 'getSocialData', 'com.example.accountjsdemo', true).then(() => {
  console.info('setOAuthTokenVisibility successfully');
}).catch((err: BusinessError) => {
  console.error(`setOAuthTokenVisibility err: code is ${err.code}, message is ${err.message}`);
});

```

## verifyCredential

```TypeScript
verifyCredential(name: string, owner: string, callback: AuthCallback): void
```

Verifies the credential of an application account. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| callback | AuthCallback | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name or owner. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  appAccountManager.verifyCredential('zhangsan', 'com.example.accountjsdemo', {
    onResult: (resultCode: number, result?: appAccount.AuthResult) => {
      console.info('verifyCredential onResult, resultCode: ' + JSON.stringify(resultCode));
      console.info('verifyCredential onResult, result: ' + JSON.stringify(result));
    },
    onRequestRedirected: (request: Want) => {
      console.info('verifyCredential onRequestRedirected, request: ' + JSON.stringify(request));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`verifyCredential err: code is ${err.code}, message is ${err.message}`);
}

```

## verifyCredential

```TypeScript
verifyCredential(name: string, owner: string, options: VerifyCredentialOptions, callback: AuthCallback): void
```

Verifies the user credential. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the application account. The value cannot exceed 512 characters. |
| owner | string | Yes | Owner of the application account. The value is the Bundle name of the application.The value cannot exceed 1024 characters. |
| options | VerifyCredentialOptions | Yes | Options for credential verification. |
| callback | AuthCallback | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300001](../../apis-basic-services-kit/errorcode-account.md#12300001-system-service-abnormal) | System service exception. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid name, owner or options. |
| [12300003](../../apis-basic-services-kit/errorcode-account.md#12300003-account-not-found) | Account not found. |
| [12300010](../../apis-basic-services-kit/errorcode-account.md#12300010-account-service-not-respond) | Account service busy. |
| [12300113](../../apis-basic-services-kit/errorcode-account.md#12300113-authentication-service-not-found) | Authenticator service not found. |
| [12300114](../../apis-basic-services-kit/errorcode-account.md#12300114-authentication-service-abnormal) | Authenticator service exception. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let options: appAccount.VerifyCredentialOptions = {
  credentialType: 'pin',
  credential: '123456'
};
try {
  appAccountManager.verifyCredential('zhangsan', 'com.example.accountjsdemo', options, {
    onResult: (resultCode: number, result?: appAccount.AuthResult) => {
      console.info('verifyCredential onResult, resultCode: ' + JSON.stringify(resultCode));
      console.info('verifyCredential onResult, result: ' + JSON.stringify(result));
    },
    onRequestRedirected: (request: Want) => {
      console.info('verifyCredential onRequestRedirected, request: ' + JSON.stringify(request));
    }
  });
} catch (e) {
  const err = e as BusinessError;
  console.error(`verifyCredential err: code is ${err.code}, message is ${err.message}`);
}

```

