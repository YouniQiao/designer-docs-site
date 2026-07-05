# @ohos.enterprise.accountManager

本模块提供设备账号管理能力，包括禁止创建本地账号等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activateOsAccount](arkts-accountmanager-activateosaccount-f.md#activateOsAccount-1) | 激活系统账号 |
| <!--DelRow-->[addOsAccount](arkts-accountmanager-addosaccount-f-sys.md#addOsAccount-1) | 后台添加账号。 |
| [addOsAccountAsync](arkts-accountmanager-addosaccountasync-f.md#addOsAccountAsync-1) | 后台添加账号。使用Promise异步回调。 > **说明：** > > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。 |
| [createNormalOsAccount](arkts-accountmanager-createnormalosaccount-f.md#createNormalOsAccount-1) | 添加普通系统账号 |
| <!--DelRow-->[disallowAddLocalAccount](arkts-accountmanager-disallowaddlocalaccount-f-sys.md#disallowAddLocalAccount-1) | 禁止设备创建本地账号。使用callback异步回调。 |
| <!--DelRow-->[disallowAddLocalAccount](arkts-accountmanager-disallowaddlocalaccount-f-sys.md#disallowAddLocalAccount-2) | 禁止设备创建本地账号。使用Promise异步回调。 |
| <!--DelRow-->[disallowAddOsAccountByUser](arkts-accountmanager-disallowaddosaccountbyuser-f-sys.md#disallowAddOsAccountByUser-1) | 禁止用户添加账号。 |
| [disallowOsAccountAddition](arkts-accountmanager-disallowosaccountaddition-f.md#disallowOsAccountAddition-1) | 禁止用户添加账号。 |
| [getDomainAccountPolicy](arkts-accountmanager-getdomainaccountpolicy-f.md#getDomainAccountPolicy-1) | 获取域账号策略。 |
| <!--DelRow-->[isAddOsAccountByUserDisallowed](arkts-accountmanager-isaddosaccountbyuserdisallowed-f-sys.md#isAddOsAccountByUserDisallowed-1) | 查询是否禁止某用户添加账号。 |
| [isOsAccountAdditionDisallowed](arkts-accountmanager-isosaccountadditiondisallowed-f.md#isOsAccountAdditionDisallowed-1) | 查询是否禁止用户添加账号。 |
| [removeOsAccount](arkts-accountmanager-removeosaccount-f.md#removeOsAccount-1) | 移除系统账号 |
| [setDomainAccountPolicy](arkts-accountmanager-setdomainaccountpolicy-f.md#setDomainAccountPolicy-1) | 设置域账号策略。 |

### Interfaces

| Name | Description |
| --- | --- |
| [DomainAccountPolicy](arkts-accountmanager-domainaccountpolicy-i.md) | 域账号策略。 |

