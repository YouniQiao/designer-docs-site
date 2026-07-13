# PasswordPolicy

Represents a device screen lock password policy.

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## additionalDescription

```TypeScript
additionalDescription?: string
```

Password complexity description, for example, "The password must contain 8 to 30 characters consisting of letters
, digits, and special characters".

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## complexityRegex

```TypeScript
complexityRegex?: string
```

Regular expression for password complexity.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## passwordAlgs

```TypeScript
passwordAlgs?: PasswordAlgs
```

The encryption algorithm of the password.

**Type:** PasswordAlgs

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## validityPeriod

```TypeScript
validityPeriod?: number
```

Password validity period, in ms.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

