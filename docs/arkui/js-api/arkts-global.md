# global

## Summary

### Functions

| Name | Description |
| --- | --- |
| [canIUse](arkts-arkui-global-caniuse-f.md#caniuse-1) | Defining syscap function. |
| [clearInterval](arkts-arkui-global-clearinterval-f.md#clearinterval-1) | Cancels the interval set by " setInterval()". |
| [clearMonitorForCrownEvents](arkts-arkui-global-clearmonitorforcrownevents-f.md#clearmonitorforcrownevents-1) | Removes the digital crown events monitor function. |
| [clearTimeout](arkts-arkui-global-cleartimeout-f.md#cleartimeout-1) | Cancels the timer set by " setTimeout()". |
| [createLocalParticleAbility](arkts-arkui-global-createlocalparticleability-f.md#createlocalparticleability-1) | Get the java interface instance. The java instance needs to register, otherwise it cannot be obtained.After obtaining the instance, you can call the function with the same name on the Java side. |
| [getApp](arkts-arkui-global-getapp-f.md#getapp-1) | Obtain the objects exposed in app.js |
| [setInterval](arkts-arkui-global-setinterval-f.md#setinterval-1) | Sets the interval for repeatedly calling a function. |
| [setMonitorForCrownEvents](arkts-arkui-global-setmonitorforcrownevents-f.md#setmonitorforcrownevents-1) | Sets a digital crown events listener for current page, only be supported on the devices supporting digital crown.Please be awared, the listener will be removed automaticlly if the current page is pushed back orreplaced, so it's recommaned to call this function in the onShow lifecycle callback of the page.And only one listener can be set for current page, the system will use the listener passed in through thelatest calling of this function.Do not use this function in app.js, the behavior is undefined. |
| [setTimeout](arkts-arkui-global-settimeout-f.md#settimeout-1) | Sets a timer after which a function will be executed. |

