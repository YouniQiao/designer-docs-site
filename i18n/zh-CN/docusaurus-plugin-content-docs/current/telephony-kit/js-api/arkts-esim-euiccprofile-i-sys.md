# EuiccProfile

Information about an embedded profile (subscription) on an eUICC.

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## profileName

```TypeScript
profileName: string
```

The profile name.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## iccid

```TypeScript
iccid: string
```

The iccid of the profile.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## accessRules

```TypeScript
accessRules: Array<AccessRule>
```

Optional access rules that specify which apps can manage this profile. Default platform management when not set.

**类型：** Array<AccessRule>

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## nickName

```TypeScript
nickName: string
```

An optional nickname for the profile.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## policyRules

```TypeScript
policyRules: PolicyRules
```

The policy rules of the profile.

**类型：** PolicyRules

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## profileClass

```TypeScript
profileClass: ProfileClass
```

Profile class for the profile.

**类型：** ProfileClass

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## state

```TypeScript
state: ProfileState
```

The profile state.

**类型：** ProfileState

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## operatorId

```TypeScript
operatorId: OperatorId
```

The operator Id of the profile.

**类型：** OperatorId

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

## serviceProviderName

```TypeScript
serviceProviderName: string
```

The service provider name for the profile.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

