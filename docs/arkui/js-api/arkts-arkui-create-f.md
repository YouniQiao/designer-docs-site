# create

## Modules to Import

```TypeScript
import { floatingBall } from '@kit.ArkUI';
```

## create

```TypeScript
function create(config: FloatingBallConfiguration): Promise<FloatingBallController>
```

Creates a floating ball controller. This API uses a promise to return the result.

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | FloatingBallConfiguration | Yes | Parameters for creating the floating ball controller. This parametercannot be empty, and **context** that is used to construct this parameter cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FloatingBallController&gt; | Promise used to return the floating ball controller. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300019](../errorcode-window.md#1300019-floating-ball-parameter-verification-error) | Wrong parameters for operating the floating ball. |
| [1300023](../errorcode-window.md#1300023-internal-error-of-the-floating-ball) | Floating ball internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

let floatingBallController: floatingBall.FloatingBallController | undefined = undefined;
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let ctx = this.getUIContext().getHostContext() as common.UIAbilityContext; 
let config: floatingBall.FloatingBallConfiguration = {
  context: ctx,
};
try {
  floatingBall.create(config).then((data: floatingBall.FloatingBallController) => {
    floatingBallController = data;
    console.info(`Succeeded in creating floating ball controller. Data: ${data}`);
  }).catch((err: BusinessError) => {
    console.error(`Failed to create floating ball controller. Cause:${err.code}, message:${err.message}`);
  });
} catch(e) {
  console.error(`Failed to create floating ball controller. Cause:${e.code}, message:${e.message}`);
}

```

