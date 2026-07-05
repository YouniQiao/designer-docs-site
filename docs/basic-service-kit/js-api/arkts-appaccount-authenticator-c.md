# Authenticator

认证器基类。

**Since:** 8

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## addAccountImplicitly

```TypeScript
addAccountImplicitly(
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

根据指定的鉴权类型和可选项，隐式地添加应用账号。使用callback异步回调。 > **说明：** > > 从API version 8开始支持, 从API version 9开始废弃。建议使用[createAccountImplicitly](#createaccountimplicitly9-2)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** appAccount.Authenticator.createAccountImplicitly(options:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authType | string | Yes | 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。 |
| callerBundleName | string | Yes | 鉴权请求方的包名。 |
| options | { [key: string]: any } | Yes | 鉴权所需要的可选项。 |
| callback | AuthenticatorCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## auth

```TypeScript
auth(name: string, authType: string, options: Record<string, Object>, callback: AuthCallback): void
```

对应用账号进行鉴权以获取授权令牌。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| authType | string | Yes | 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。 |
| options | Record&lt;string, Object> | Yes | 鉴权所需要的可选项。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## auth

```TypeScript
auth(name: string, authType: string, options: Record<string, RecordData>, callback: AuthCallback): void
```

对应用账号进行鉴权以获取授权令牌。使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| authType | string | Yes | 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。 |
| options | Record&lt;string, RecordData> | Yes | 鉴权所需要的可选项。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## authenticate

```TypeScript
authenticate(
      name: string,
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void
```

对应用账号进行鉴权，获取OAuth令牌。使用callback异步回调。 > **说明：** > > 从API version 8开始支持, 从API version 9开始废弃。建议使用[auth](#auth9-2)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** appAccount.Authenticator.auth(name:

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| authType | string | Yes | 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。 |
| callerBundleName | string | Yes | 鉴权请求方的包名。 |
| options | { [key: string]: any } | Yes | 鉴权所需要的可选项。 |
| callback | AuthenticatorCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## checkAccountLabels

```TypeScript
checkAccountLabels(name: string, labels: Array<string>, callback: AuthCallback): void
```

检查账号标签。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| labels | Array&lt;string> | Yes | 标签数组。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## checkAccountRemovable

```TypeScript
checkAccountRemovable(name: string, callback: AuthCallback): void
```

判断账号是否可以删除。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## createAccountImplicitly

```TypeScript
createAccountImplicitly(options: CreateAccountImplicitlyOptions, callback: AuthCallback): void
```

根据指定的账号所有者隐式地创建应用账号。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CreateAccountImplicitlyOptions | Yes | 隐式创建账号的选项。 |
| callback | AuthCallback | Yes | 认证器回调对象，用于返回创建结果。 |

## getRemoteObject

```TypeScript
getRemoteObject(): rpc.RemoteObject
```

获取认证器的远程对象，不可以重载实现。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Return value:**

| Type | Description |
| --- | --- |
| rpc.RemoteObject | 认证器Authenticator的远程对象。用于跨进程通信。 |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class MyAuthenticator extends appAccount.Authenticator {
  verifyCredential(name: string,
    options: appAccount.VerifyCredentialOptions, callback: appAccount.AuthCallback) {
      let want: Want = {
        bundleName: 'com.example.accountjsdemo',
        abilityName: 'com.example.accountjsdemo.VerifyAbility',
        parameters: {
          name: name
        }
      };
      callback.onRequestRedirected(want);
  }

  setProperties(options: appAccount.SetPropertiesOptions, callback: appAccount.AuthCallback) {
    let want: Want = {
      bundleName: 'com.example.accountjsdemo',
      abilityName: 'com.example.accountjsdemo.SetPropertiesAbility',
      parameters: {
        options: options
      }
    };
    callback.onRequestRedirected(want);
  }

  checkAccountLabels(name: string, labels: string[], callback: appAccount.AuthCallback) {
    callback.onResult(0);
  }

  checkAccountRemovable(name: string, callback: appAccount.AuthCallback) {
    callback.onResult(0);
  }
}

export default {
  onConnect(want: Want): rpc.RemoteObject { // serviceAbility lifecycle function, which needs to be placed in serviceAbility.
    let authenticator = new MyAuthenticator();
    return authenticator.getRemoteObject();
  }
}

```

## setProperties

```TypeScript
setProperties(options: SetPropertiesOptions, callback: AuthCallback): void
```

设置认证器属性。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SetPropertiesOptions | Yes | 设置属性的可选项。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

## verifyCredential

```TypeScript
verifyCredential(name: string, options: VerifyCredentialOptions, callback: AuthCallback): void
```

验证应用账号的凭据。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Account.AppAccount

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 应用账号的名称。最大长度为512个字符。 |
| options | VerifyCredentialOptions | Yes | 验证凭据的可选项。 |
| callback | AuthCallback | Yes | 认证器回调，用于返回鉴权结果。 |

