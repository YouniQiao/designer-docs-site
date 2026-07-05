# @ohos.account.osAccount

本模块提供管理系统账号的基础能力，包括系统账号的添加、删除、查询、设置、订阅、启动等功能。

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAccountManager](arkts-osaccount-getaccountmanager-f.md#getAccountManager-1) | 获取系统账号管理对象。 |
| <!--DelRow-->[getAuthorizationManager](arkts-osaccount-getauthorizationmanager-f-sys.md#getAuthorizationManager-1) | 获取系统账号授权管理器。 |
| <!--DelRow-->[getOsAccountSubProfileManager](arkts-osaccount-getosaccountsubprofilemanager-f-sys.md#getOsAccountSubProfileManager-1) | 获取系统账号子身份资料管理器。 |
| [isDomainAccountSupported](arkts-osaccount-isdomainaccountsupported-f.md#isDomainAccountSupported-1) | 检查是否支持域账号。使用Promise异步回调。 |

### Classes

| Name | Description |
| --- | --- |
| [DomainAccountManager](arkts-osaccount-domainaccountmanager-c.md) | 域账号管理类。 |
| [DomainServerConfigManager](arkts-osaccount-domainserverconfigmanager-c.md) | 域服务器配置管理类。 |
| <!--DelRow-->[InputerManager](arkts-osaccount-inputermanager-c-sys.md) | 凭据输入管理器。 |
| <!--DelRow-->[PINAuth](arkts-osaccount-pinauth-c-sys.md) | PIN码认证基类。 |
| <!--DelRow-->[UserAuth](arkts-osaccount-userauth-c-sys.md) | 用户认证类。 |
| <!--DelRow-->[UserIdentityManager](arkts-osaccount-useridentitymanager-c-sys.md) | 获取用户身份管理类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AccountManager](arkts-osaccount-accountmanager-i.md) | 系统账号管理类。 |
| <!--DelRow-->[AcquireAuthorizationOptions](arkts-osaccount-acquireauthorizationoptions-i-sys.md) | 表示获取授权的选项。 |
| <!--DelRow-->[AcquireAuthorizationResult](arkts-osaccount-acquireauthorizationresult-i-sys.md) | 表示获取授权的结果。 |
| <!--DelRow-->[AuthOptions](arkts-osaccount-authoptions-i-sys.md) | 表示 [认证用户]{@link osAccount.UserAuth.auth( challenge: Uint8Array, authType: AuthType, authTrustLevel: AuthTrustLevel, options: AuthOptions, callback: IUserAuthCallback )} 的可选参数集合。 |
| <!--DelRow-->[AuthorizationManager](arkts-osaccount-authorizationmanager-i-sys.md) | 系统账号授权管理类，用于管理系统账号授权。 |
| <!--DelRow-->[AuthResult](arkts-osaccount-authresult-i-sys.md) | 表示认证结果的信息。 |
| <!--DelRow-->[AuthStatusInfo](arkts-osaccount-authstatusinfo-i-sys.md) | 表示认证状态信息。 |
| <!--DelRow-->[ConstraintChangeInfo](arkts-osaccount-constraintchangeinfo-i-sys.md) | 表示约束变更信息。 |
| <!--DelRow-->[ConstraintSourceTypeInfo](arkts-osaccount-constraintsourcetypeinfo-i-sys.md) | 表示约束来源类型信息。 |
| <!--DelRow-->[CreateOsAccountForDomainOptions](arkts-osaccount-createosaccountfordomainoptions-i-sys.md) | 表示用于创建与指定域账号绑定的系统账号的可选参数。继承自[CreateOsAccountOptions]{@link osAccount.CreateOsAccountOptions}。 |
| <!--DelRow-->[CreateOsAccountOptions](arkts-osaccount-createosaccountoptions-i-sys.md) | 表示用于创建系统账号的可选参数。 |
| <!--DelRow-->[CredentialChangeInfo](arkts-osaccount-credentialchangeinfo-i-sys.md) | 表示凭据变更信息。 |
| <!--DelRow-->[CredentialInfo](arkts-osaccount-credentialinfo-i-sys.md) | 表示凭证信息。 |
| <!--DelRow-->[DomainAccountAuthOptions](arkts-osaccount-domainaccountauthoptions-i-sys.md) | 表示域账号认证的选项。 |
| [DomainAccountInfo](arkts-osaccount-domainaccountinfo-i.md) | 表示域账号信息。 |
| <!--DelRow-->[DomainPlugin](arkts-osaccount-domainplugin-i-sys.md) | 域插件，提供域账号认证功能。 |
| [DomainServerConfig](arkts-osaccount-domainserverconfig-i.md) | 域服务器配置。 |
| <!--DelRow-->[EnrolledCredInfo](arkts-osaccount-enrolledcredinfo-i-sys.md) | 表示已注册凭据的信息。 |
| <!--DelRow-->[ExecutorProperty](arkts-osaccount-executorproperty-i-sys.md) | 提供执行器的属性。 |
| <!--DelRow-->[GetAuthInfoOptions](arkts-osaccount-getauthinfooptions-i-sys.md) | 表示[查询认证凭据信息]{@link osAccount.UserIdentityManager.getAuthInfo(options?: GetAuthInfoOptions)}的可选参数集合。 |
| <!--DelRow-->[GetDomainAccessTokenOptions](arkts-osaccount-getdomainaccesstokenoptions-i-sys.md) | 表示获取域访问令牌的选项。 |
| <!--DelRow-->[GetDomainAccountInfoOptions](arkts-osaccount-getdomainaccountinfooptions-i-sys.md) | 表示查询域账号信息的选项。 |
| <!--DelRow-->[GetDomainAccountInfoPluginOptions](arkts-osaccount-getdomainaccountinfopluginoptions-i-sys.md) | 表示插件查询域账号信息的选项。GetDomainAccountInfoPluginOptions类继承 [GetDomainAccountInfoOptions]{@link osAccount.GetDomainAccountInfoOptions} |
| <!--DelRow-->[GetInputDataOptions](arkts-osaccount-getinputdataoptions-i-sys.md) | 表示[通知调用者获取数据](docroot://reference/apis-basic-services-kit/js-apis-osAccount-sys.md#ongetdata8)的可选参数集合。 |
| <!--DelRow-->[GetPropertyRequest](arkts-osaccount-getpropertyrequest-i-sys.md) | 提供获取属性请求的信息。 |
| <!--DelRow-->[IIdmCallback](arkts-osaccount-iidmcallback-i-sys.md) | 表示身份管理回调类。 |
| <!--DelRow-->[IInputData](arkts-osaccount-iinputdata-i-sys.md) | 密码数据回调。 |
| <!--DelRow-->[IInputer](arkts-osaccount-iinputer-i-sys.md) | 凭据输入器回调。 |
| <!--DelRow-->[IUserAuthCallback](arkts-osaccount-iuserauthcallback-i-sys.md) | 表示用户认证回调类。 |
| [OsAccountInfo](arkts-osaccount-osaccountinfo-i.md) | 表示系统账号信息。 |
| <!--DelRow-->[OsAccountSubProfile](arkts-osaccount-osaccountsubprofile-i-sys.md) | 系统账号子Profile的定义 |
| <!--DelRow-->[OsAccountSubProfileEventData](arkts-osaccount-osaccountsubprofileeventdata-i-sys.md) | 表示系统账号子Profile事件数据。 |
| <!--DelRow-->[OsAccountSubProfileManager](arkts-osaccount-osaccountsubprofilemanager-i-sys.md) | 系统账号子身份资料管理器类。 |
| <!--DelRow-->[OsAccountSwitchEventData](arkts-osaccount-osaccountswitcheventdata-i-sys.md) | 表示系统账号前后台开始切换和结束切换事件的数据结构。 |
| <!--DelRow-->[RemoteAuthOptions](arkts-osaccount-remoteauthoptions-i-sys.md) | 表示远程认证的可选参数集合。 |
| <!--DelRow-->[RemoveOsAccountOptions](arkts-osaccount-removeosaccountoptions-i-sys.md) | 表示用于删除系统账号的可选参数。 |
| <!--DelRow-->[RequestResult](arkts-osaccount-requestresult-i-sys.md) | 表示请求结果的信息。 |
| <!--DelRow-->[SetOsAccountTypeOptions](arkts-osaccount-setosaccounttypeoptions-i-sys.md) | 设置系统账号类型的选项。 |
| <!--DelRow-->[SetPropertyRequest](arkts-osaccount-setpropertyrequest-i-sys.md) | 提供设置属性请求的信息。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[DomainPluginAuthFunc](arkts-osaccount-domainpluginauthfunc-t-sys.md) | 认证指定的域账号。 |
| <!--DelRow-->[DomainPluginAuthWithPopupFunc](arkts-osaccount-domainpluginauthwithpopupfunc-t-sys.md) | 弹窗认证指定的域账号。 |
| <!--DelRow-->[DomainPluginAuthWithTokenFunc](arkts-osaccount-domainpluginauthwithtokenfunc-t-sys.md) | 使用授权令牌认证指定的域账号。 |
| <!--DelRow-->[DomainPluginBindAccountFunc](arkts-osaccount-domainpluginbindaccountfunc-t-sys.md) | 绑定指定的域账号。 |
| <!--DelRow-->[DomainPluginGetAccessTokenFunc](arkts-osaccount-domainplugingetaccesstokenfunc-t-sys.md) | 根据指定的选项获取域访问令牌。 |
| <!--DelRow-->[DomainPluginGetAccountInfoFunc](arkts-osaccount-domainplugingetaccountinfofunc-t-sys.md) | 查询指定域账号的信息。 |
| <!--DelRow-->[DomainPluginGetAuthStatusInfoFunc](arkts-osaccount-domainplugingetauthstatusinfofunc-t-sys.md) | 查询指定域账号的认证状态信息。 |
| <!--DelRow-->[DomainPluginIsAccountTokenValidFunc](arkts-osaccount-domainpluginisaccounttokenvalidfunc-t-sys.md) | 检查指定的域账号令牌是否有效。 |
| <!--DelRow-->[DomainPluginUnbindAccountFunc](arkts-osaccount-domainpluginunbindaccountfunc-t-sys.md) | 解绑指定的域账号。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthIntent](arkts-osaccount-authintent-e-sys.md) | 表示认证意图的枚举。 |
| <!--DelRow-->[AuthorizationResultCode](arkts-osaccount-authorizationresultcode-e-sys.md) | 表示授权结果码的枚举。 |
| <!--DelRow-->[AuthSubType](arkts-osaccount-authsubtype-e-sys.md) | 表示用于认证的凭据子类型的枚举。 |
| <!--DelRow-->[AuthTrustLevel](arkts-osaccount-authtrustlevel-e-sys.md) | 表示认证结果的受信任级别的枚举。 |
| <!--DelRow-->[AuthType](arkts-osaccount-authtype-e-sys.md) | 表示身份验证的凭据类型的枚举。 |
| <!--DelRow-->[ConstraintSourceType](arkts-osaccount-constraintsourcetype-e-sys.md) | 表示约束来源类型的枚举。 |
| <!--DelRow-->[CredentialChangeType](arkts-osaccount-credentialchangetype-e-sys.md) | 表示凭据变更类型的枚举。 |
| <!--DelRow-->[FaceTipsCode](arkts-osaccount-facetipscode-e-sys.md) | 表示人脸验证过程中提示的枚举。 |
| <!--DelRow-->[FingerprintTips](arkts-osaccount-fingerprinttips-e-sys.md) | 表示指纹身份验证过程中提示的枚举。 |
| <!--DelRow-->[GetPropertyType](arkts-osaccount-getpropertytype-e-sys.md) | 表示要获取的属性类型的枚举。 |
| <!--DelRow-->[Module](arkts-osaccount-module-e-sys.md) | 表示获取信息的模块的枚举。 |
| <!--DelRow-->[OsAccountSubProfileEvent](arkts-osaccount-osaccountsubprofileevent-e-sys.md) | 枚举系统账号子profile的事件。 |
| [OsAccountType](arkts-osaccount-osaccounttype-e.md) | 表示系统账号类型的枚举。 |
| <!--DelRow-->[ResultCode](arkts-osaccount-resultcode-e-sys.md) | 表示身份验证结果码。 |
| <!--DelRow-->[SetPropertyType](arkts-osaccount-setpropertytype-e-sys.md) | 表示要设置的属性类型的枚举。 |

