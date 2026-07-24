# @ohos.enterprise.accountManager

The **accountManager** module provides APIs for account management of enterprise devices.
> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace accountManager--><!--Device-unnamed-declare namespace accountManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activateOsAccount](arkts-mdm-accountmanager-activateosaccount-f.md#activateosaccount) | Activates a specified OS account by ID. |
| [addOsAccountAsync](arkts-mdm-accountmanager-addosaccountasync-f.md#addosaccountasync) | Adds an account in the background. This API uses a promise to return the result. |
| [createNormalOsAccount](arkts-mdm-accountmanager-createnormalosaccount-f.md#createnormalosaccount) | Adds a normal OS account using the name. |
| [disallowOsAccountAddition](arkts-mdm-accountmanager-disallowosaccountaddition-f.md#disallowosaccountaddition) | Users are not allowed to add accounts. |
| [getDomainAccountPolicy](arkts-mdm-accountmanager-getdomainaccountpolicy-f.md#getdomainaccountpolicy) | Obtains the domain account policy. |
| [isOsAccountAdditionDisallowed](arkts-mdm-accountmanager-isosaccountadditiondisallowed-f.md#isosaccountadditiondisallowed) | Queries whether a user is not allowed to add an account. |
| [removeOsAccount](arkts-mdm-accountmanager-removeosaccount-f.md#removeosaccount) | Removes an OS account by ID. |
| [setDomainAccountPolicy](arkts-mdm-accountmanager-setdomainaccountpolicy-f.md#setdomainaccountpolicy) | Sets the domain account policy. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addOsAccount](arkts-mdm-accountmanager-addosaccount-f-sys.md#addosaccount) | Adds an account in the background. |
| [disallowAddLocalAccount](arkts-mdm-accountmanager-disallowaddlocalaccount-f-sys.md#disallowaddlocalaccount) | Disallows a device to create local user accounts. This API uses an asynchronous callback to return the result. |
| [disallowAddLocalAccount](arkts-mdm-accountmanager-disallowaddlocalaccount-f-sys.md#disallowaddlocalaccount-1) | Disallows a device to create local user accounts. This API uses a promise to return the result. |
| [disallowAddOsAccountByUser](arkts-mdm-accountmanager-disallowaddosaccountbyuser-f-sys.md#disallowaddosaccountbyuser) | Disallows a user to add accounts. |
| [isAddOsAccountByUserDisallowed](arkts-mdm-accountmanager-isaddosaccountbyuserdisallowed-f-sys.md#isaddosaccountbyuserdisallowed) | Queries whether to disallow a user to add accounts. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DomainAccountPolicy](arkts-mdm-accountmanager-domainaccountpolicy-i.md) | Domain account policy. |

