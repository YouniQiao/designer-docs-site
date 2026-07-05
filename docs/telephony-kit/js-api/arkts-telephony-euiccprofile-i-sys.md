# EuiccProfile (System API)

Information about an embedded profile (subscription) on an eUICC.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@ohos.telephony.esim';
```

## accessRules

```TypeScript
accessRules: Array<AccessRule>
```

Optional access rules that specify which apps can manage this profile. Default platform management when not set.

**Type:** Array<AccessRule>

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## iccid

```TypeScript
iccid: string
```

The iccid of the profile.

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## nickName

```TypeScript
nickName: string
```

An optional nickname for the profile.

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## operatorId

```TypeScript
operatorId: OperatorId
```

The operator Id of the profile.

**Type:** OperatorId

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## policyRules

```TypeScript
policyRules: PolicyRules
```

The policy rules of the profile.

**Type:** PolicyRules

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profileClass

```TypeScript
profileClass: ProfileClass
```

Profile class for the profile.

**Type:** ProfileClass

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profileName

```TypeScript
profileName: string
```

The profile name.

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## serviceProviderName

```TypeScript
serviceProviderName: string
```

The service provider name for the profile.

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## state

```TypeScript
state: ProfileState
```

The profile state.

**Type:** ProfileState

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

