# verifyAuthToken (System API)

## Modules to Import

```TypeScript
import { userAccessCtrl } from '@kit.UserAuthenticationKit';
```

## verifyAuthToken

```TypeScript
function verifyAuthToken(authToken: Uint8Array, allowableDuration: number): Promise<AuthToken>
```

Verifies an authentication token. This API is used to verify the validity of an **AuthToken**, including the
integrity and validity check. After the verification is successful, the detailed information about the parsed
**AuthToken** is returned. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** ohos.permission.USE_USER_ACCESS_MANAGER

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authToken | Uint8Array | Yes | Authentication token to be verified. The value contains a maximum of 1024 bytesand is returned after the user is authenticated. The token contains the credentials information for userauthentication, which is used for subsequent security operation verification. |
| allowableDuration | number | Yes | Authentication validity period. It indicates the maximum time interval for usingthe token from the time when the token is issued. The unit is millisecond. The value must be greater than 0 andless than or equal to 86400000 (24 hours). It is used to verify the validity of a token to prevent expiredtokens from being used. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AuthToken&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.<br>3. Parameter verification failed. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |
| [12500015](../errorcode-useriam.md#12500015-authtoken-integrity-check-failed) | AuthToken integrity check failed. |
| [12500016](../errorcode-useriam.md#12500016-authtoken-has-expired) | AuthToken has expired. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAccessCtrl } from '@kit.UserAuthenticationKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
  const allowableDuration: number = 5000;
  const len: number = 16;
  let randData: Uint8Array | null = null;
  let retryCount = 0;
  while(retryCount < 3){
    randData = rand?.generateRandomSync(len)?.data;
    if(randData){
      break;
    }
    retryCount++;
  }
  if(!randData){
    return;
  }
  const authParam: userAuth.AuthParam = {
    challenge: randData,
    authType: [userAuth.UserAuthType.PIN],
    authTrustLevel: userAuth.AuthTrustLevel.ATL3,
  };
  const widgetParam: userAuth.WidgetParam = {
    title: 'Enter password',
  };

  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  // The authentication result is returned by onResult() only after the authentication is started by start() of UserAuthInstance.
  userAuthInstance.on('result', {
    onResult (result) {
        if (!result.token) {
            console.error('userAuthInstance callback result.token is null');
            return;
        }
        try {
          // Initiate a request for verifying the AuthToken.
          userAccessCtrl.verifyAuthToken(result.token, allowableDuration)
              .then((retAuthToken: userAccessCtrl.AuthToken) => {
                  Object.keys(retAuthToken).forEach((key) => {
                      // Process the service logic.
                      console.info(`retAuthToken key:${key}`);
                  })
              }).catch ((error: BusinessError) => {
                  console.error(`verify authToken failed. Code is ${error?.code}, message is ${error?.message}`);
              })
        } catch (error) {
          const err: BusinessError = error as BusinessError;
          console.error(`verify authToken failed. Code is ${err?.code}, message is ${err?.message}`);
        }
    }
  });
  console.info('auth on successfully.');
  // Start authentication.
  userAuthInstance.start();
  console.info('auth start successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

