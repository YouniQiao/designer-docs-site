# setCurrentFunctions (System API)

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

<a id="setcurrentfunctions"></a>
## setCurrentFunctions

```TypeScript
function setCurrentFunctions(funcs: FunctionType): Promise<boolean>
```

Sets the current USB function list in Device mode.

**Since:** 9

**Deprecated since:** 9

**Substitutes:** [setCurrentFunctions](arkts-basicservices-usbmanager-setcurrentfunctions-f-sys.md#setcurrentfunctions-1)

<!--Device-usb-function setCurrentFunctions(funcs: FunctionType): Promise<boolean>--><!--Device-usb-function setCurrentFunctions(funcs: FunctionType): Promise<boolean>-End-->

**System capability:** SystemCapability.USB.USBManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| funcs | [FunctionType](arkts-basicservices-usb-functiontype-e-sys.md) | Yes | USB function list in numeric mask format. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the operation is successful, and **false** indicates the opposite. |

**Example**

```TypeScript
let funcs : number = usb.FunctionType.HDC;
usb.setCurrentFunctions(funcs).then(() => {
    console.info('usb setCurrentFunctions successfully.');
}).catch((err : BusinessError) => {
    console.error('usb setCurrentFunctions failed: ' + err.code + ' message: ' + err.message);
});

```

