# UserAuthInstance

用于执行用户身份认证，并支持使用统一用户身份认证控件。该接口提供了完整的用户认证能力，包括订阅认证结果、订阅认证中间状态、启动认证和取消认证等操作。通过统一认证控件，可以为用户提供标准化的认证界面和一致的认证体验。 使用以下接口前，需先通过[getUserAuthInstance]userAuth.getUserAuthInstance方法获取UserAuthInstance对象。 > **说明：** > > 每个UserAuthInstance实例只能用于一次认证过程。若需要再次认证，必须重新获取UserAuthInstance实例。

**起始版本：** 10

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## 导入模块

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## cancel

```TypeScript
cancel(): void
```

取消认证。 > **说明：** > > 此时UserAuthInstance必须是正在进行认证的对象。

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_BIOMETRIC

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |
| 12500002 | General operation error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
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
  const authParam : userAuth.AuthParam = {
    challenge: randData,
    authType: [userAuth.UserAuthType.PIN],
    authTrustLevel: userAuth.AuthTrustLevel.ATL3,
  };
  const widgetParam: userAuth.WidgetParam = {
    title: '请输入密码',
  };
  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  // 需要调用UserAuthInstance的start()接口，启动认证后，才能调用cancel()接口。
  userAuthInstance.start();
  console.info('auth start successfully.');
  userAuthInstance.cancel();
  console.info('auth cancel successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

## off('result')

```TypeScript
off(type: 'result', callback?: IAuthCallback): void
```

取消订阅用户身份认证的结果。 > **说明：** > > 需要使用已经成功订阅事件的[UserAuthInstance]userAuth.UserAuthInstance对象调用该接口进行取消订阅。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'result' | 是 | 订阅事件类型，表明该事件用来返回认证结果。 |
| callback | IAuthCallback | 否 | 认证接口的回调函数，用于返回认证结果。当不传该参数时默认值为调用  [on('result')]userAuth.UserAuthInstance.on(type: 'result', callback: IAuthCallback)接口时传递的参数值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12500002 | General operation error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
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
    title: '请输入密码',
  };
  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  userAuthInstance.off('result', {
    onResult (result) {
      console.info(`auth off result = ${result.result}`);
    }
  });
  console.info('auth off successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

## off('authTip')

```TypeScript
off(type: 'authTip', callback?: AuthTipCallback): void
```

取消订阅用户身份认证中间状态。 > **说明：** > > 需要使用已经成功订阅事件的[UserAuthInstance]userAuth.UserAuthInstance对象调用该接口进行取消订阅。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'authTip' | 是 | 取消订阅的事件类型，支持的事件为'authTip'，当[start()]userAuth.UserAuthInstance.start调用完成，发起身份认  证并调用[on('authTip')]userAuth.UserAuthInstance.on_authTip订阅该事件后，调用该方法可取消订阅，不会再触发该事件。 |
| callback | AuthTipCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12500002 | General operation error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
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
    title: '请输入密码',
  };
  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  userAuthInstance.off('authTip', (authTipInfo: userAuth.AuthTipInfo) => {
    console.info('userAuthInstance callback');
  });
  console.info('auth off successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

## offAuthTip

```TypeScript
offAuthTip(callback?: AuthTipCallback): void
```

取消订阅用户身份认证中间状态。 > **说明：** > > 需要使用已经成功订阅事件的[UserAuthInstance]userAuth.UserAuthInstance对象调用该接口进行取消订阅。

**起始版本：** 23

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AuthTipCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12500002 | General operation error. |

## offResult

```TypeScript
offResult(callback?: IAuthCallback): void
```

取消订阅用户身份认证的结果。 > **说明：** > > 需要使用已经成功订阅事件的[UserAuthInstance]userAuth.UserAuthInstance对象调用该接口进行取消订阅。

**起始版本：** 23

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | IAuthCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12500002 | General operation error. |

## on('result')

```TypeScript
on(type: 'result', callback: IAuthCallback): void
```

订阅用户身份认证的最终结果。通过该接口获取到的是用户在认证控件完成身份认证交互后的最终身份认证结果。认证控件消失前，用户中间的认证不通过尝试并不会通过该接口返回，只有最终的认证结果（成功或最终失败）会通过此接口返回。如果需要感 知整个认证过程中用户的每一次认证不通过尝试和中间状态，请通过 [on('authTip')]userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)接口订阅。 > **说明：** > > 在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数[widgetParam]userAuth.WidgetParam时传入了有效的uiContext），收到认证结果后，若需弹出其 > 他窗口，应先获取控件弹窗释放的标志消息，通过 > [on('authTip')]userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)接口订阅控件释放消息（ > authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED）。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'result' | 是 | 订阅事件类型，表明该事件用来返回认证结果。 |
| callback | IAuthCallback | 是 | 认证接口的回调函数，用于返回认证结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12500002 | General operation error. |

## on('authTip')

```TypeScript
on(type: 'authTip', callback: AuthTipCallback): void
```

订阅身份认证过程中的提示信息。通过该接口可以获取到认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证不通过尝试。使用callback异步回调。 > **说明：** > > 在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数[widgetParam]userAuth.WidgetParam时传入了有效的uiContext），收到认证结果后，若需弹出其 > 他窗口，应先获取控件弹窗释放的标志消息，通过 > [on('authTip')]userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)接口订阅控件释放消息（ > authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED）。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'authTip' | 是 | 订阅事件类型，支持的事件为'authTip'，当[start()]userAuth.UserAuthInstance.start调用完成，发起身份认证，触  发该事件。 |
| callback | AuthTipCallback | 是 | 认证接口的回调函数，用于返回认证中间状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12500002 | General operation error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
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
    title: '请输入密码',
  };
  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  // 需要调用UserAuthInstance的start()接口，启动认证后，才能通过onAuthTip获取到认证中间状态。
  userAuthInstance.on('authTip', (authTipInfo: userAuth.AuthTipInfo) => {
    console.info('userAuthInstance callback.');
  });
  console.info('auth on successfully.');
  userAuthInstance.start();
  console.info('auth start successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

## onAuthTip

```TypeScript
onAuthTip(callback: AuthTipCallback): void
```

订阅身份认证过程中的提示信息。通过该接口可以获取到认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证失败尝试。

**起始版本：** 23

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AuthTipCallback | 是 | 认证接口的回调函数，用于返回认证中间状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12500002 | General operation error. |

## onResult

```TypeScript
onResult(callback: IAuthCallback): void
```

订阅用户身份认证的最终结果。通过该接口获取到的是用户在认证控件完成身份认证交互后的最终身份认证结果。认证控件消失前，用户中间的认证失败尝试并不会通过该接口返回。 如果需要感知整个认证过程中用户的每一次认证失败尝试，请通过[on('authTip')]userAuth.UserAuthInstance.on_authTip接口订阅。

**起始版本：** 23

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | IAuthCallback | 是 | Callback used to return the user authentication result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 12500002 | General operation error. |

## start

```TypeScript
start(): void
```

开始认证。 > **说明：** > > 每个UserAuthInstance只能进行一次认证，需要再次认证时，必须重新获取UserAuthInstance。

**起始版本：** 10

**需要权限：** 

- API版本10 - 19： ohos.permission.ACCESS_BIOMETRIC

- API版本20+： ohos.permission.ACCESS_BIOMETRIC or ohos.permission.USER_AUTH_FROM_BACKGROUND

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Possible causes:  1. No permission to access biometric.  2. No permission to start authentication from background. |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter types. |
| 12500001 | Authentication failed. [since 10 - 19] |
| 12500002 | General operation error. |
| 12500003 | Authentication canceled. |
| 12500004 | Authentication timeout. [since 10 - 19] |
| 12500005 | The authentication type is not supported. |
| 12500006 | The authentication trust level is not supported. |
| 12500007 | Authentication service is busy. [since 10 - 19] |
| 12500009 | Authentication is locked out. |
| 12500010 | The type of credential has not been enrolled. |
| 12500011 | Switched to the customized authentication process. |
| 12500013 | Operation failed because of PIN expired. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { userAuth } from '@kit.UserAuthenticationKit';

try {
  const rand = cryptoFramework.createRandom();
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
    title: '请输入密码',
  };
  const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
  console.info('get userAuth instance successfully.');
  userAuthInstance.start();
  console.info('auth start successfully.');
} catch (error) {
  const err: BusinessError = error as BusinessError;
  console.error(`auth failed. Code is ${err?.code}, message is ${err?.message}`);
}

```

