# DomainAccountPolicy

域账号策略。

**Since:** 19

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

## authenticationValidityPeriod

```TypeScript
authenticationValidityPeriod?: number
```

表示域账号认证Token的有效期（单位：s），取值范围是[-1,2147483647]。有效期起始时间为最后一次域账号的认证时间点，如登录、锁屏后解锁等。 默认值为-1，表示Token永久有效。取值为0，表示Token立即失效。Token过期/失效后，用户进入系统时必须进行域账号认证，验证域账号和密码。

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## passwordExpirationNotification

```TypeScript
passwordExpirationNotification?: number
```

表示域账号密码过期前提示时间（单位：s），取值范围是[0,2147483647]。 默认值为0，表示域账号密码过期不提示。 **说明**：passwordExpirationNotification需与passwordValidityPeriod配合使用，当系统时间大于或等于（设备侧最后一次修改域账号密码时间 + passwordValidityPeriod - passwordExpirationNotification）时，会发页面通知提示密码即将过期。

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## passwordValidityPeriod

```TypeScript
passwordValidityPeriod?: number
```

表示域账号密码有效期（单位：s），取值范围是[-1,2147483647]，有效期起始时间为设备侧最后一次修改密码的时间点。 默认值为-1，表示域账号密码永久有效。

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

