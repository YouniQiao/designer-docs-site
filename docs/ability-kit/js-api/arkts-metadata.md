# Metadata

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [Metadata](arkts-ability-metadata-i.md) | The module defines a metadata object. An application can obtain the metadata through [bundleManager.getBundleInfoForSelf](arkts-ability-getbundleinfoforself-f.md#getbundleinfoforself-1) , with **GET_BUNDLE_INFO_WITH_METADATA** passed in for [bundleFlags](arkts-ability-bundleflag-e.md#bundleflag). This object is contained in [ApplicationInfo](arkts-ability-applicationinfo-i.md#applicationinfo), [HapModuleInfo](arkts-ability-hapmoduleinfo-i.md#hapmoduleinfo), [AbilityInfo](arkts-ability-abilityinfo-i.md#abilityinfo), and [ExtensionAbilityInfo](arkts-ability-extensionabilityinfo-i.md#extensionabilityinfo). The module provides the configuration about the module, UIAbility, and ExtensionAbility. The value is of the array type. The configuration is valid only for the current module, UIAbility, or ExtensionAbility. |

