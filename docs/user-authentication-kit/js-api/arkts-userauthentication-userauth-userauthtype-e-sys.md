# UserAuthType

Enumerates the identity authentication types. This enum defines the authentication types supported by the system,including PIN authentication and biometric authentication (face and fingerprint). When initiating authentication,an application needs to specify the authentication type list, and the user can select any of the authentication types to complete the authentication. The security strength and user experience vary depending on authentication types. The application needs to select a proper authentication type based on service scenarios.

**Since:** 8

<!--Device-userAuth-enum UserAuthType--><!--Device-userAuth-enum UserAuthType-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

## PRIVATE_PIN

```TypeScript
PRIVATE_PIN = 16
```

Privacy PIN. It is a special PIN authentication type, which is generally used for secondary access control after the screen is unlocked. For example, a user can use the privacy password protection application lock to prevent family members who know the lock screen password from accessing some of their applications.

**Since:** 14

<!--Device-UserAuthType-PRIVATE_PIN = 16--><!--Device-UserAuthType-PRIVATE_PIN = 16-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

