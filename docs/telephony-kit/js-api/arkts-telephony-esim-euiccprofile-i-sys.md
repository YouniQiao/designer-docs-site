# EuiccProfile (System API)

Information about an embedded profile (subscription) on an eUICC.

**Since:** 18

<!--Device-eSIM-export interface EuiccProfile--><!--Device-eSIM-export interface EuiccProfile-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## accessRules

```TypeScript
accessRules: Array<AccessRule>
```

Optional access rules that specify which apps can manage this profile. Default platform management when not set.

**Type:** Array<AccessRule>

**Since:** 18

<!--Device-EuiccProfile-accessRules: Array<AccessRule>--><!--Device-EuiccProfile-accessRules: Array<AccessRule>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## iccid

```TypeScript
iccid: string
```

The iccid of the profile.

**Type:** string

**Since:** 18

<!--Device-EuiccProfile-iccid: string--><!--Device-EuiccProfile-iccid: string-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## nickName

```TypeScript
nickName: string
```

An optional nickname for the profile.

**Type:** string

**Since:** 18

<!--Device-EuiccProfile-nickName: string--><!--Device-EuiccProfile-nickName: string-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## operatorId

```TypeScript
operatorId: OperatorId
```

The operator Id of the profile.

**Type:** OperatorId

**Since:** 18

<!--Device-EuiccProfile-operatorId: OperatorId--><!--Device-EuiccProfile-operatorId: OperatorId-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## policyRules

```TypeScript
policyRules: PolicyRules
```

The policy rules of the profile.

**Type:** PolicyRules

**Since:** 18

<!--Device-EuiccProfile-policyRules: PolicyRules--><!--Device-EuiccProfile-policyRules: PolicyRules-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profileClass

```TypeScript
profileClass: ProfileClass
```

Profile class for the profile.

**Type:** ProfileClass

**Since:** 18

<!--Device-EuiccProfile-profileClass: ProfileClass--><!--Device-EuiccProfile-profileClass: ProfileClass-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profileName

```TypeScript
profileName: string
```

The profile name.

**Type:** string

**Since:** 18

<!--Device-EuiccProfile-profileName: string--><!--Device-EuiccProfile-profileName: string-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## serviceProviderName

```TypeScript
serviceProviderName: string
```

The service provider name for the profile.

**Type:** string

**Since:** 18

<!--Device-EuiccProfile-serviceProviderName: string--><!--Device-EuiccProfile-serviceProviderName: string-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## state

```TypeScript
state: ProfileState
```

The profile state.

**Type:** ProfileState

**Since:** 18

<!--Device-EuiccProfile-state: ProfileState--><!--Device-EuiccProfile-state: ProfileState-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

