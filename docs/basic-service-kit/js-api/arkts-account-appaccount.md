# @ohos.account.appAccount

本模块提供应用账号信息的添加、删除、修改和查询基础能力，并支持应用间鉴权和分布式数据同步功能。

**Since:** 7

**System capability:** SystemCapability.Account.AppAccount

## Modules to Import

```TypeScript
import { appAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAppAccountManager](arkts-appaccount-createappaccountmanager-f.md#createAppAccountManager-1) | 创建应用账号管理器对象。 |

### Classes

| Name | Description |
| --- | --- |
| [Authenticator](arkts-appaccount-authenticator-c.md) | 认证器基类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AppAccountInfo](arkts-appaccount-appaccountinfo-i.md) | 表示应用账号信息。 |
| [AppAccountManager](arkts-appaccount-appaccountmanager-i.md) | 应用账号管理器，可用于管理应用自身的账号信息。 |
| [AuthCallback](arkts-appaccount-authcallback-i.md) | 认证器回调类。 |
| [AuthenticatorCallback](arkts-appaccount-authenticatorcallback-i.md) | OAuth认证器回调接口。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthCallback]{@link appAccount.AuthCallback}替代。 |
| [AuthenticatorInfo](arkts-appaccount-authenticatorinfo-i.md) | 表示OAuth认证器信息。 |
| [AuthResult](arkts-appaccount-authresult-i.md) | 表示认证结果信息。 |
| [AuthTokenInfo](arkts-appaccount-authtokeninfo-i.md) | 表示Auth令牌信息。 |
| [CreateAccountImplicitlyOptions](arkts-appaccount-createaccountimplicitlyoptions-i.md) | 表示隐式创建账号的选项。 |
| [CreateAccountOptions](arkts-appaccount-createaccountoptions-i.md) | 表示创建账号的选项。 |
| [OAuthTokenInfo](arkts-appaccount-oauthtokeninfo-i.md) | 表示OAuth令牌信息。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthTokenInfo]{@link appAccount.AuthTokenInfo}替代。 |
| [SelectAccountsOptions](arkts-appaccount-selectaccountsoptions-i.md) | 表示用于选择账号的选项。 |
| [SetPropertiesOptions](arkts-appaccount-setpropertiesoptions-i.md) | 表示用于设置属性的选项。 |
| [VerifyCredentialOptions](arkts-appaccount-verifycredentialoptions-i.md) | 表示用于验证凭据的选项。 |

### Enums

| Name | Description |
| --- | --- |
| [Constants](arkts-appaccount-constants-e.md) | 表示常量的枚举。 |
| [ResultCode](arkts-appaccount-resultcode-e.md) | 表示返回码的枚举。 > **说明：**<br/> > > 从API version 8开始支持，从API version 9开始废弃。相关信息建议查看 > [账号管理错误码](docroot://reference/apis-basic-services-kit/errorcode-account.md)替代。 |

