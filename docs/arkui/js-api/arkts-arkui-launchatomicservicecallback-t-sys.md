# LaunchAtomicServiceCallback (System API)

```TypeScript
export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void
```

Callback for launch atomicservice.

**Since:** 12

<!--Device-unnamed-export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void--><!--Device-unnamed-export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId of atomicservice.  |
| options | [AtomicServiceOptions](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-atomicserviceoptions-atomicserviceoptions-c.md) | No | options that could be empty.  |

