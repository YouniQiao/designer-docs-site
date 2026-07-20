# @ohos.enterprise.common

The module provides pure type definitions for common capabilities within MDM Kit, including enum types and data structs. It exports type declarations only and does not include any implementation logic or executable code.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.

**Since:** 22

<!--Device-unnamed-declare namespace common--><!--Device-unnamed-declare namespace common-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { common } from '@kit.MDMKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInstance](arkts-mdm-common-applicationinstance-i.md) | Defines application instance data.It is used as an input parameter in the [addUserNonStopApps](arkts-mdm-applicationmanager-addusernonstopapps-f.md#addusernonstopapps-1),[removeUserNonStopApps](arkts-mdm-applicationmanager-removeusernonstopapps-f.md#removeusernonstopapps-1),[addFreezeExemptedApps](arkts-mdm-applicationmanager-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1), and [removeFreezeExemptedApps](arkts-mdm-applicationmanager-removefreezeexemptedapps-f.md#removefreezeexemptedapps-1)APIs. |
| [InstallationResult](arkts-mdm-common-installationresult-i.md) | An object that holds the application installation result.This object is used as a callback parameter in [EnterpriseAdminExtensionAbility.onMarketAppInstallResult](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onmarketappinstallresult-1). |
| [PolicyChangedEvent](arkts-mdm-common-policychangedevent-i.md) | The policy event. |

### Enums

| Name | Description |
| --- | --- |
| [ManagedPolicy](arkts-mdm-common-managedpolicy-e.md) | Enumerates enterprise device management policies. |
| [Result](arkts-mdm-common-result-e.md) | Enumerates application installation results. |
| [StartupScene](arkts-mdm-common-startupscene-e.md) | Startup wizard completion scenario. When the initial switch to a sub-user (only on PCs), OTA upgrade, and first-time startup wizard are complete, the device system calls the [onStartupGuideCompleted](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onstartupguidecompleted-1)API to notify the device administrator application. |

### Types

| Name | Description |
| --- | --- |
| [EnterpriseAdminExtensionContext](arkts-mdm-common-enterpriseadminextensioncontext-t.md) | EnterpriseAdminExtensionContext is the context of [EnterpriseAdminExtensionAbility](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md)and inherits from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md). |

