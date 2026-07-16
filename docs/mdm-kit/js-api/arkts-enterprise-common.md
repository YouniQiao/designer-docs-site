# @ohos.enterprise.common

The module provides pure type definitions for common capabilities within MDM Kit, including enum types and data
structs. It exports type declarations only and does not include any implementation logic or executable code.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.

**Since:** 22

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { common } from '@kit.MDMKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInstance](arkts-mdm-applicationinstance-i.md) | Defines application instance data.It is used as an input parameter in the[addUserNonStopApps](arkts-mdm-addusernonstopapps-f.md#addusernonstopapps-1),[removeUserNonStopApps](arkts-mdm-removeusernonstopapps-f.md#removeusernonstopapps-1),[addFreezeExemptedApps](arkts-mdm-addfreezeexemptedapps-f.md#addfreezeexemptedapps-1), and[removeFreezeExemptedApps](arkts-mdm-removefreezeexemptedapps-f.md#removefreezeexemptedapps-1)APIs. |
| [InstallationResult](arkts-mdm-installationresult-i.md) | An object that holds the application installation result.This object is used as a callback parameter in[EnterpriseAdminExtensionAbility.onMarketAppInstallResult](arkts-mdm-enterpriseadminextensionability-c.md#onmarketappinstallresult-1). |
| [PolicyChangedEvent](arkts-mdm-policychangedevent-i.md) | The policy event. |

### Enums

| Name | Description |
| --- | --- |
| [ManagedPolicy](arkts-mdm-managedpolicy-e.md) | Enumerates enterprise device management policies. |
| [Result](arkts-mdm-result-e.md) | Enumerates application installation results. |
| [StartupScene](arkts-mdm-startupscene-e.md) | Startup wizard completion scenario. When the initial switch to a sub-user (only on PCs), OTA upgrade, and first-time startup wizard are complete, the device system calls the[onStartupGuideCompleted](arkts-mdm-enterpriseadminextensionability-c.md#onstartupguidecompleted-1)API to notify the device administrator application. |

### Types

| Name | Description |
| --- | --- |
| [EnterpriseAdminExtensionContext](arkts-mdm-enterpriseadminextensioncontext-t.md) | EnterpriseAdminExtensionContext is the context of[EnterpriseAdminExtensionAbility](arkts-mdm-enterpriseadminextensionability-c.md)and inherits from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md). |

