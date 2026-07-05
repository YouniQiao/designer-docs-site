# @ohos.security.certManager

证书管理主要提供系统级的证书管理能力，实现证书全生命周期（安装，存储，使用，销毁）的管理和安全使用。 可用于校验应用服务器的HTTPS证书链、通过双向HTTPS登录网站或应用服务器。

**Since:** 11

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [abort](arkts-certificatemanager-abort-f.md#abort-1) | 中止签名、验签的操作。与finish方法互斥，一个签名验签流程只能选择调用其中一个方法。使用Callback异步回调。 |
| [abort](arkts-certificatemanager-abort-f.md#abort-2) | 中止签名、验签的操作。与finish方法互斥，一个签名验签流程只能选择调用其中一个方法。使用Promise异步回调。 |
| [finish](arkts-certificatemanager-finish-f.md#finish-1) | 完成签名的操作，是签名流程的最后一步，需要先调用init和update接口。使用Callback异步回调。 |
| [finish](arkts-certificatemanager-finish-f.md#finish-2) | 完成验签的操作，是验签流程的最后一步，需要先调用init和update接口。使用Callback异步回调。 |
| [finish](arkts-certificatemanager-finish-f.md#finish-3) | 完成签名、验签的操作。使用Promise异步回调。 |
| <!--DelRow-->[getAllAppPrivateCertificates](arkts-certificatemanager-getallappprivatecertificates-f-sys.md#getAllAppPrivateCertificates-1) | 表示获取所有私有凭据列表，使用Callback异步回调。 |
| <!--DelRow-->[getAllAppPrivateCertificates](arkts-certificatemanager-getallappprivatecertificates-f-sys.md#getAllAppPrivateCertificates-2) | 表示获取所有私有凭据列表。使用Promise异步回调。 |
| <!--DelRow-->[getAllAppPrivateCertificatesByUid](arkts-certificatemanager-getallappprivatecertificatesbyuid-f-sys.md#getAllAppPrivateCertificatesByUid-1) | 获取指定应用的所有私有凭据，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[getAllPublicCertificates](arkts-certificatemanager-getallpubliccertificates-f-sys.md#getAllPublicCertificates-1) | 获取所有用户的公共凭据，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[getAllSystemAppCertificates](arkts-certificatemanager-getallsystemappcertificates-f-sys.md#getAllSystemAppCertificates-1) | 表示获取所有系统凭据列表。使用Promise异步回调。 |
| [getAllUserTrustedCertificates](arkts-certificatemanager-getallusertrustedcertificates-f.md#getAllUserTrustedCertificates-1) | 表示获取当前用户和设备公共位置的所有用户根CA证书列表。使用Promise异步回调。 |
| [getAllUserTrustedCertificates](arkts-certificatemanager-getallusertrustedcertificates-f.md#getAllUserTrustedCertificates-2) | 表示根据证书的位置获取用户根CA证书列表。使用Promise异步回调。 |
| <!--DelRow-->[getAuthorizedAppList](arkts-certificatemanager-getauthorizedapplist-f-sys.md#getAuthorizedAppList-1) | 获取用户公共凭据的授权应用列表，仅证书管理应用调用。使用Promise异步回调。 |
| [getCertificateStorePath](arkts-certificatemanager-getcertificatestorepath-f.md#getCertificateStorePath-1) | 表示获取证书的存储路径。 |
| [getPrivateCertificate](arkts-certificatemanager-getprivatecertificate-f.md#getPrivateCertificate-1) | 获取私有凭据的详细信息，使用Callback异步回调。 |
| [getPrivateCertificate](arkts-certificatemanager-getprivatecertificate-f.md#getPrivateCertificate-2) | 获取私有凭据详情。使用Promise异步回调。 |
| [getPrivateCertificates](arkts-certificatemanager-getprivatecertificates-f.md#getPrivateCertificates-1) | 表示获取应用安装的凭据列表。使用Promise异步回调。 |
| [getPublicCertificate](arkts-certificatemanager-getpubliccertificate-f.md#getPublicCertificate-1) | 表示获取用户公共凭据的详细信息。使用Promise异步回调。 |
| <!--DelRow-->[getSystemAppCertificate](arkts-certificatemanager-getsystemappcertificate-f-sys.md#getSystemAppCertificate-1) | 获取系统应用的凭据详情，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[getSystemTrustedCertificate](arkts-certificatemanager-getsystemtrustedcertificate-f-sys.md#getSystemTrustedCertificate-1) | 获取系统信任的CA证书详情，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[getSystemTrustedCertificateList](arkts-certificatemanager-getsystemtrustedcertificatelist-f-sys.md#getSystemTrustedCertificateList-1) | 获取系统信任的CA证书列表，仅证书管理应用调用。使用Promise异步回调。 |
| [getUkeyCertificate](arkts-certificatemanager-getukeycertificate-f.md#getUkeyCertificate-1) | 获取USB Key证书凭据详细信息。使用Promise异步回调。 |
| [getUkeyCertificateList](arkts-certificatemanager-getukeycertificatelist-f.md#getUkeyCertificateList-1) | 获取USB Key证书凭据列表。使用Promise异步回调。 |
| [getUserTrustedCertificate](arkts-certificatemanager-getusertrustedcertificate-f.md#getUserTrustedCertificate-1) | 表示获取用户根CA证书的详细信息。使用Promise异步回调。 |
| <!--DelRow-->[grantPublicCertificate](arkts-certificatemanager-grantpubliccertificate-f-sys.md#grantPublicCertificate-1) | 授予应用使用用户公共凭据的权限，仅证书管理应用调用。使用Promise异步回调。 |
| [importUkeyCertificate](arkts-certificatemanager-importukeycertificate-f.md#importUkeyCertificate-1) | 导入证书到USB Key |
| [init](arkts-certificatemanager-init-f.md#init-1) | 使用凭据进行签名、验签的初始化操作，是签名验签流程的第一步，后续需依次调用update和finish接口完成操作。使用Callback异步回调。 |
| [init](arkts-certificatemanager-init-f.md#init-2) | 使用凭据进行签名、验签的初始化操作。使用Promise异步回调。 |
| [installPrivateCertificate](arkts-certificatemanager-installprivatecertificate-f.md#installPrivateCertificate-1) | 安装私有凭据。使用Callback异步回调。 |
| [installPrivateCertificate](arkts-certificatemanager-installprivatecertificate-f.md#installPrivateCertificate-2) | 安装私有凭据。使用Promise异步回调。 |
| [installPrivateCertificate](arkts-certificatemanager-installprivatecertificate-f.md#installPrivateCertificate-3) | 表示安装私有凭据并指定凭据的存储级别。使用Promise异步回调。 |
| <!--DelRow-->[installPublicCertificate](arkts-certificatemanager-installpubliccertificate-f-sys.md#installPublicCertificate-1) | 安装用户的公共凭据，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[installSystemAppCertificate](arkts-certificatemanager-installsystemappcertificate-f-sys.md#installSystemAppCertificate-1) | 安装系统应用凭据，仅证书管理应用调用。使用Promise异步回调。 |
| [installUserTrustedCertificate](arkts-certificatemanager-installusertrustedcertificate-f.md#installUserTrustedCertificate-1) | 安装用户CA证书。使用Promise异步回调。 |
| [installUserTrustedCertificateSync](arkts-certificatemanager-installusertrustedcertificatesync-f.md#installUserTrustedCertificateSync-1) | 安装用户CA证书。 |
| [isAuthorizedApp](arkts-certificatemanager-isauthorizedapp-f.md#isAuthorizedApp-1) | 表示当前应用是否由指定的用户凭据授权。使用Promise异步回调。 |
| <!--DelRow-->[removeGrantedPublicCertificate](arkts-certificatemanager-removegrantedpubliccertificate-f-sys.md#removeGrantedPublicCertificate-1) | 移除应用使用用户公共凭据的权限，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[setCertificateStatus](arkts-certificatemanager-setcertificatestatus-f-sys.md#setCertificateStatus-1) | 设置CA证书的状态，当前仅支持设置用户CA证书状态，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[uninstallAllAppCertificate](arkts-certificatemanager-uninstallallappcertificate-f-sys.md#uninstallAllAppCertificate-1) | 卸载所有系统应用凭据和用户公共凭据，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[uninstallAllUserTrustedCertificate](arkts-certificatemanager-uninstallallusertrustedcertificate-f-sys.md#uninstallAllUserTrustedCertificate-1) | 卸载所有用户信任的CA证书，仅证书管理应用调用。使用Promise异步回调。 |
| [uninstallPrivateCertificate](arkts-certificatemanager-uninstallprivatecertificate-f.md#uninstallPrivateCertificate-1) | 卸载指定的私有凭据，使用Callback异步回调。 |
| [uninstallPrivateCertificate](arkts-certificatemanager-uninstallprivatecertificate-f.md#uninstallPrivateCertificate-2) | 表示卸载指定的私有凭据。使用Promise异步回调。 |
| <!--DelRow-->[uninstallPublicCertificate](arkts-certificatemanager-uninstallpubliccertificate-f-sys.md#uninstallPublicCertificate-1) | 卸载用的户公共凭据，仅证书管理应用调用。使用Promise异步回调。 |
| <!--DelRow-->[uninstallSystemAppCertificate](arkts-certificatemanager-uninstallsystemappcertificate-f-sys.md#uninstallSystemAppCertificate-1) | 卸载系统应用的凭据，仅证书管理应用调用。使用Promise异步回调。 |
| [uninstallUserTrustedCertificateSync](arkts-certificatemanager-uninstallusertrustedcertificatesync-f.md#uninstallUserTrustedCertificateSync-1) | 卸载用户CA证书。 |
| [update](arkts-certificatemanager-update-f.md#update-1) | 签名、验签的数据更新操作，需要在init操作之后调用，用于传入待签名、验签的数据。使用Callback异步回调。 |
| [update](arkts-certificatemanager-update-f.md#update-2) | 签名、验签的数据更新操作。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CertAbstract](arkts-certificatemanager-certabstract-i.md) | 表示证书简要信息。 |
| [CertBlob](arkts-certificatemanager-certblob-i.md) | 表示证书文件数据。 |
| [CertInfo](arkts-certificatemanager-certinfo-i.md) | 表示证书详细信息。 |
| [CertStoreProperty](arkts-certificatemanager-certstoreproperty-i.md) | 表示获取证书存储位置的参数集合，包括证书的类型及证书的位置。 |
| [CMHandle](arkts-certificatemanager-cmhandle-i.md) | 表示签名、验签的初始化操作句柄。 |
| [CMResult](arkts-certificatemanager-cmresult-i.md) | 表示接口的返回结果。 |
| [CMSignatureSpec](arkts-certificatemanager-cmsignaturespec-i.md) | 表示签名、验签操作使用的参数集合，包括密钥使用目的、填充方式和摘要算法。 |
| [Credential](arkts-certificatemanager-credential-i.md) | 表示凭据详细信息。 |
| [CredentialAbstract](arkts-certificatemanager-credentialabstract-i.md) | 表示凭据的简要信息。 |
| [UkeyInfo](arkts-certificatemanager-ukeyinfo-i.md) | 提供USB Key证书凭据属性信息。 |

### Enums

| Name | Description |
| --- | --- |
| [AuthStorageLevel](arkts-certificatemanager-authstoragelevel-e.md) | 表示凭据的存储级别。 |
| [CertAlgorithm](arkts-certificatemanager-certalgorithm-e.md) | 表示证书的算法类型。 |
| [CertFileFormat](arkts-certificatemanager-certfileformat-e.md) | 表示证书文件格式。 |
| [CertificatePurpose](arkts-certificatemanager-certificatepurpose-e.md) | 表示凭据用途的枚举。 |
| [CertScope](arkts-certificatemanager-certscope-e.md) | 表示证书的位置。 |
| [CertType](arkts-certificatemanager-certtype-e.md) | 表示证书类型。 |
| [CMErrorCode](arkts-certificatemanager-cmerrorcode-e.md) | 表示调用证书管理相关API的错误码。 |
| [CmKeyDigest](arkts-certificatemanager-cmkeydigest-e.md) | 表示签名、验签使用的摘要算法的枚举。 |
| [CmKeyPadding](arkts-certificatemanager-cmkeypadding-e.md) | 表示签名、验签使用的填充方式的枚举。 |
| [CmKeyPurpose](arkts-certificatemanager-cmkeypurpose-e.md) | 表示密钥使用目的的枚举，用于签名、验签。 |

