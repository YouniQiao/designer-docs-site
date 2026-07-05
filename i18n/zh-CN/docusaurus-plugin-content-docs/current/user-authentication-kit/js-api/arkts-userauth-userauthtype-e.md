# UserAuthType

```TypeScript
enum UserAuthType
```

表示身份认证的凭据类型枚举。该枚举定义了系统支持的认证类型，包括锁屏密码认证（PIN）、生物特征认证（人脸、指纹）等。应用在发起认证时需指定认证类型列表，用户可选择其中任意一种完成认证。不同认证类型具有不同的安全强度和用户体验特 点，应用应根据业务场景选择合适的认证类型。

**起始版本：** 8

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## PIN

```TypeScript
PIN = 1
```

口令认证。用户通过输入锁屏密码完成认证。锁屏密码认证具有高安全性，认证可信等级可达ATL4，适用于支付、重要操作确认等高安全场景。用户需要手动输入，体验不如生物认证便捷。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## FACE

```TypeScript
FACE = 2
```

人脸认证。用户通过人脸识别完成认证，系统会验证用户面部特征与已注册人脸的匹配度。人脸认证支持不同级别的活体检测能力，详细划分原则可参考 [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。优点是体验便捷，缺点是 对设备和光照条件有一定要求。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## FINGERPRINT

```TypeScript
FINGERPRINT = 4
```

指纹认证。用户通过指纹传感器完成认证，系统会验证用户指纹特征与已注册指纹的匹配度。指纹认证支持多种认证可信等级，详细划分原则可参考 [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)，适用于中等安全场景。优 点是操作简单快捷，缺点是设备需配备指纹传感器，且湿手或指纹磨损可能影响识别效果。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## PRIVATE_PIN

```TypeScript
PRIVATE_PIN = 16
```

隐私密码。一种特殊的PIN认证类型，一般用于解锁后的用户二次访问控制。例如用户可以选择使用隐私密码保护应用锁，从而阻止知道锁屏密码的家人访问自己的某些应用。

**起始版本：** 14

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**系统接口：** 此接口为系统接口。

## COMPANION_DEVICE

```TypeScript
COMPANION_DEVICE = 64
```

伴随设备认证。用户通过佩戴的伴随设备完成认证。伴随设备认证支持多种认证可信等级，详细划分原则可参考 [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

