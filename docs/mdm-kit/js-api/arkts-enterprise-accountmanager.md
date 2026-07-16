# @ohos.enterprise.accountManager

The **accountManager** module provides APIs for account management of enterprise devices.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.
>
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

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
| [activateOsAccount](arkts-mdm-activateosaccount-f.md#activateosaccount-1) | Activates a specified OS account by ID. |
| [addOsAccountAsync](arkts-mdm-addosaccountasync-f.md#addosaccountasync-1) | Adds an account in the background. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait&gt; for the asynchronous return of this API. |
| [createNormalOsAccount](arkts-mdm-createnormalosaccount-f.md#createnormalosaccount-1) | Adds a normal OS account using the name. |
| [disallowOsAccountAddition](arkts-mdm-disallowosaccountaddition-f.md#disallowosaccountaddition-1) | Users are not allowed to add accounts. |
| [getDomainAccountPolicy](arkts-mdm-getdomainaccountpolicy-f.md#getdomainaccountpolicy-1) | Obtains the domain account policy. |
| [isOsAccountAdditionDisallowed](arkts-mdm-isosaccountadditiondisallowed-f.md#isosaccountadditiondisallowed-1) | Queries whether a user is not allowed to add an account. |
| [removeOsAccount](arkts-mdm-removeosaccount-f.md#removeosaccount-1) | Removes an OS account by ID. |
| [setDomainAccountPolicy](arkts-mdm-setdomainaccountpolicy-f.md#setdomainaccountpolicy-1) | Sets the domain account policy. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addOsAccount](arkts-mdm-addosaccount-f-sys.md#addosaccount-1) | Adds an account in the background. |
| [disallowAddLocalAccount](arkts-mdm-disallowaddlocalaccount-f-sys.md#disallowaddlocalaccount-1) | Disallows a device to create local user accounts. This API uses an asynchronous callback to return the result. |
| [disallowAddLocalAccount](arkts-mdm-disallowaddlocalaccount-f-sys.md#disallowaddlocalaccount-2) | Disallows a device to create local user accounts. This API uses a promise to return the result. |
| [disallowAddOsAccountByUser](arkts-mdm-disallowaddosaccountbyuser-f-sys.md#disallowaddosaccountbyuser-1) | Disallows a user to add accounts. |
| [isAddOsAccountByUserDisallowed](arkts-mdm-isaddosaccountbyuserdisallowed-f-sys.md#isaddosaccountbyuserdisallowed-1) | Queries whether to disallow a user to add accounts. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DomainAccountPolicy](arkts-mdm-domainaccountpolicy-i.md) | Domain account policy. |

