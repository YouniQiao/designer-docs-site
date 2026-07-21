# promisify

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

<a id="promisify"></a>
## promisify

```TypeScript
function promisify(original: (err: Object, value: Object) => void): Function
```

Receives a function that uses the error-first callback mode, that is, uses `(err, value) => callback` as the last parameter, and uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-util-function promisify(original: (err: Object, value: Object) => void): Function--><!--Device-util-function promisify(original: (err: Object, value: Object) => void): Function-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| original | (err: Object, value: Object) =&gt; void | Yes | Function, in which the first parameter **err** indicates the cause of the rejection(the value is **null** if the promise has been resolved) and the second parameter **value** indicates the resolved value. |

**Return value:**

| Type | Description |
| --- | --- |
| function | Return a function that returns promises<br>**Applicable version:** 9 - 11 |
| Function | Promise function.<br>**Applicable version:** 10 and later |

**Example**

```TypeScript
async function fn() {
  return 'hello world';
}
const addCall = util.promisify(util.callbackWrapper(fn));
(async () => {
  try {
    let res: string = await addCall();
    console.info(res);
    // Output: hello world
  } catch (err) {
    console.info(err);
  }
})();

```

