// Dev sidebar — Ability Kit only, organized per Readme hierarchy
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Ability Kit',
      items: [
        {
          type: 'category',
          label: 'JS API',
          items: [
            {
          type: 'category',
          label: '@ohos.ability.ability',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-ability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-abilityresult-t',
              'ability-kit/js-api/arkts-ability-connectoptions-t',
              'ability-kit/js-api/arkts-ability-dataabilityhelper-t',
              'ability-kit/js-api/arkts-ability-dataabilityoperation-t',
              'ability-kit/js-api/arkts-ability-dataabilityresult-t',
              'ability-kit/js-api/arkts-ability-pacmap-t',
              'ability-kit/js-api/arkts-ability-startabilityparameter-t'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.dataUriUtils',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-datauriutils' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-attachid-depr-f',
              'ability-kit/js-api/arkts-ability-deleteid-depr-f',
              'ability-kit/js-api/arkts-ability-getid-depr-f',
              'ability-kit/js-api/arkts-ability-updateid-depr-f'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.errorCode',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-errorcode' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-errorcode-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.featureAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-featureability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-acquiredataabilityhelper-f',
              'ability-kit/js-api/arkts-ability-connectability-f',
              'ability-kit/js-api/arkts-ability-disconnectability-f',
              'ability-kit/js-api/arkts-ability-getcontext-f',
              'ability-kit/js-api/arkts-ability-getwant-f',
              'ability-kit/js-api/arkts-ability-getwindow-f',
              'ability-kit/js-api/arkts-ability-haswindowfocus-f',
              'ability-kit/js-api/arkts-ability-startability-f',
              'ability-kit/js-api/arkts-ability-startabilityforresult-f',
              'ability-kit/js-api/arkts-ability-terminateself-f',
              'ability-kit/js-api/arkts-ability-terminateselfwithresult-f',
              'ability-kit/js-api/arkts-ability-appversioninfo-t',
              'ability-kit/js-api/arkts-ability-context-t',
              'ability-kit/js-api/arkts-ability-processinfo-t',
              'ability-kit/js-api/arkts-ability-abilitystartsetting-e',
              'ability-kit/js-api/arkts-ability-abilitywindowconfiguration-e',
              'ability-kit/js-api/arkts-ability-dataabilityoperationtype-e',
              'ability-kit/js-api/arkts-ability-errorcode-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.particleAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-particleability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-acquiredataabilityhelper-f',
              'ability-kit/js-api/arkts-ability-cancelbackgroundrunning-f',
              'ability-kit/js-api/arkts-ability-connectability-f',
              'ability-kit/js-api/arkts-ability-disconnectability-f',
              'ability-kit/js-api/arkts-ability-startability-f',
              'ability-kit/js-api/arkts-ability-startbackgroundrunning-f',
              'ability-kit/js-api/arkts-ability-terminateself-f',
              'ability-kit/js-api/arkts-ability-errorcode-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.screenLockFileManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-screenlockfilemanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-acquireaccess-f',
              'ability-kit/js-api/arkts-ability-acquireaccess-f-sys',
              'ability-kit/js-api/arkts-ability-queryappkeystate-f',
              'ability-kit/js-api/arkts-ability-queryappkeystate-f-sys',
              'ability-kit/js-api/arkts-ability-releaseaccess-f',
              'ability-kit/js-api/arkts-ability-releaseaccess-f-sys',
              'ability-kit/js-api/arkts-ability-accessstatus-e',
              'ability-kit/js-api/arkts-ability-datatype-e',
              'ability-kit/js-api/arkts-ability-keystatus-e',
              'ability-kit/js-api/arkts-ability-releasestatus-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.ability.wantConstant',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-ability-wantconstant' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-action-depr-e',
              'ability-kit/js-api/arkts-ability-entity-depr-e',
              'ability-kit/js-api/arkts-ability-flags-depr-e',
              'ability-kit/js-api/arkts-ability-flags-depr-e-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.abilityAccessCtrl',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-abilityaccessctrl' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-abilityaccessctrl-n',
              'ability-kit/js-api/arkts-ability-context-t',
              'ability-kit/js-api/arkts-ability-permissionrequestresult-t'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.Ability',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-ability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-ability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AbilityConstant',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-abilityconstant' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-lastexitdetailinfo-i',
              'ability-kit/js-api/arkts-ability-launchparam-i',
              'ability-kit/js-api/arkts-ability-collaborateresult-e',
              'ability-kit/js-api/arkts-ability-continuestate-e',
              'ability-kit/js-api/arkts-ability-lastexitreason-e',
              'ability-kit/js-api/arkts-ability-launchreason-e',
              'ability-kit/js-api/arkts-ability-memorylevel-e',
              'ability-kit/js-api/arkts-ability-oncontinueresult-e',
              'ability-kit/js-api/arkts-ability-onsaveresult-e',
              'ability-kit/js-api/arkts-ability-preparetermination-e',
              'ability-kit/js-api/arkts-ability-statetype-e',
              'ability-kit/js-api/arkts-ability-windowmode-e',
              'ability-kit/js-api/arkts-ability-windowmode-e-sys',
              'ability-kit/js-api/arkts-ability-abilityconstant-con'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AbilityLifecycleCallback',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-abilitylifecyclecallback' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-abilitylifecyclecallback-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AbilityStage',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-abilitystage' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-abilitystage-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ActionExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-actionextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-actionextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AppServiceExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-appserviceextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-appserviceextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ApplicationStateChangeCallback',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-applicationstatechangecallback' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-applicationstatechangecallback-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AtomicServiceOptions',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-atomicserviceoptions' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-atomicserviceoptions-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.AutoFillExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-autofillextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-autofillextensionability-c-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ChildProcess',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-childprocess' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-childprocess-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ChildProcessArgs',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-childprocessargs' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-childprocessargs-i'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ChildProcessOptions',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-childprocessoptions' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-childprocessoptions-i'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.CompletionHandler',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-completionhandler' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-completionhandler-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.CompletionHandlerForAbilityStartCallback',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-completionhandlerforabilitystartcallback' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-completionhandlerforabilitystartcallback-c',
              'ability-kit/js-api/arkts-ability-onrequestfailurefn-t',
              'ability-kit/js-api/arkts-ability-onrequestsuccessfn-t',
              'ability-kit/js-api/arkts-ability-abilitystartfailurecode-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.CompletionHandlerForAtomicService',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-completionhandlerforatomicservice' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-completionhandlerforatomicservice-c',
              'ability-kit/js-api/arkts-ability-failurecode-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.Configuration',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-configuration' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-configuration-i'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ConfigurationConstant',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-configurationconstant' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-colormode-e',
              'ability-kit/js-api/arkts-ability-direction-e',
              'ability-kit/js-api/arkts-ability-screendensity-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.EmbeddableUIAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-embeddableuiability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-embeddableuiability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.EmbeddedUIExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-embeddeduiextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-embeddeduiextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.EnvironmentCallback',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-environmentcallback' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-environmentcallback-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-extensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-extensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.InsightIntentContext',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-insightintentcontext' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-insightintentcontext-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.InsightIntentDecorator',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-insightintentdecorator' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-entryintentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-formintentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-functionintentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-intentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-intententitydecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-linkintentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-linkintentparammapping-i',
              'ability-kit/js-api/arkts-ability-pageintentdecoratorinfo-i',
              'ability-kit/js-api/arkts-ability-linkparamcategory-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.InsightIntentEntryExecutor',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-insightintententryexecutor' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-insightintententryexecutor-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.InsightIntentExecutor',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-insightintentexecutor' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-insightintentexecutor-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.InteropAbilityLifecycleCallback',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-interopabilitylifecyclecallback' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-interopabilitylifecyclecallback-i',
              'ability-kit/js-api/arkts-ability-abilitycallbackfn-t',
              'ability-kit/js-api/arkts-ability-windowstagecallbackfn-t'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.OpenLinkOptions',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-openlinkoptions' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-openlinkoptions-i'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.PhotoEditorExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-photoeditorextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-photoeditorextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ServiceExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-serviceextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-serviceextensionability-c-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.ShareExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-shareextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-shareextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.StartOptions',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-startoptions' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-startoptions-c',
              'ability-kit/js-api/arkts-ability-startoptions-c-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.UIAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-uiability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-uiability-c',
              'ability-kit/js-api/arkts-ability-callee-i',
              'ability-kit/js-api/arkts-ability-calleecallback-i',
              'ability-kit/js-api/arkts-ability-caller-i',
              'ability-kit/js-api/arkts-ability-onreleasecallback-i',
              'ability-kit/js-api/arkts-ability-onremotestatechangecallback-i'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.UIExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-uiextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-uiextensionability-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.UIExtensionContentSession',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-uiextensioncontentsession' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-uiextensioncontentsession-c',
              'ability-kit/js-api/arkts-ability-uiextensioncontentsession-c-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.UIServiceExtensionAbility',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-uiserviceextensionability' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-uiserviceextensionability-c-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.Want',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-want' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-want-c'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.abilityManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-abilitymanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-acquiresharedata-f-sys',
              'ability-kit/js-api/arkts-ability-clearpreloadeduiextensionabilities-f-sys',
              'ability-kit/js-api/arkts-ability-clearpreloadeduiextensionability-f-sys',
              'ability-kit/js-api/arkts-ability-getabilityrunninginfos-f',
              'ability-kit/js-api/arkts-ability-getabilityrunninginfos-f-sys',
              'ability-kit/js-api/arkts-ability-getextensionrunninginfos-f-sys',
              'ability-kit/js-api/arkts-ability-getforegrounduiabilities-f-sys',
              'ability-kit/js-api/arkts-ability-gettopability-f-sys',
              'ability-kit/js-api/arkts-ability-isembeddedopenallowed-f-sys',
              'ability-kit/js-api/arkts-ability-isembeddeduiextensionsupported-f',
              'ability-kit/js-api/arkts-ability-notifydebugassertresult-f-sys',
              'ability-kit/js-api/arkts-ability-notifysaveasresult-f-sys',
              'ability-kit/js-api/arkts-ability-off-f-sys',
              'ability-kit/js-api/arkts-ability-offpreloadeduiextensionabilitydestroyed-f-sys',
              'ability-kit/js-api/arkts-ability-offpreloadeduiextensionabilityloaded-f-sys',
              'ability-kit/js-api/arkts-ability-on-f-sys',
              'ability-kit/js-api/arkts-ability-onpreloadeduiextensionabilitydestroyed-f-sys',
              'ability-kit/js-api/arkts-ability-onpreloadeduiextensionabilityloaded-f-sys',
              'ability-kit/js-api/arkts-ability-preloaduiextensionability-f-sys',
              'ability-kit/js-api/arkts-ability-queryatomicservicestartuprule-f-sys',
              'ability-kit/js-api/arkts-ability-restartselfatomicservice-f',
              'ability-kit/js-api/arkts-ability-setresidentprocessenabled-f-sys',
              'ability-kit/js-api/arkts-ability-updateconfiguration-f-sys',
              'ability-kit/js-api/arkts-ability-atomicservicestartuprule-i-sys',
              'ability-kit/js-api/arkts-ability-abilityforegroundstateobserver-t-sys',
              'ability-kit/js-api/arkts-ability-abilityrunninginfo-t',
              'ability-kit/js-api/arkts-ability-abilitystatedata-t',
              'ability-kit/js-api/arkts-ability-extensionrunninginfo-t-sys',
              'ability-kit/js-api/arkts-ability-preloadeduiextensionabilitydestroyedfn-t-sys',
              'ability-kit/js-api/arkts-ability-preloadeduiextensionabilityloadedfn-t-sys',
              'ability-kit/js-api/arkts-ability-abilitystate-e',
              'ability-kit/js-api/arkts-ability-userstatus-e-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.app.ability.appManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-app-ability-appmanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-clearupappdata-f-sys',
              'ability-kit/js-api/arkts-ability-clearupapplicationdata-f-sys',
              'ability-kit/js-api/arkts-ability-getappmemorysize-f',
              'ability-kit/js-api/arkts-ability-getforegroundapplications-f-sys',
              'ability-kit/js-api/arkts-ability-getkeepaliveappserviceextensions-f-sys',
              'ability-kit/js-api/arkts-ability-getkeepalivebundles-f-sys',
              'ability-kit/js-api/arkts-ability-getprocessmemorybypid-f-sys',
              'ability-kit/js-api/arkts-ability-getprocessrunninginfos-f-sys',
              'ability-kit/js-api/arkts-ability-getrunningmultiappinfo-f-sys',
              'ability-kit/js-api/arkts-ability-getrunningprocessinfobybundlename-f-sys',
              'ability-kit/js-api/arkts-ability-getrunningprocessinformation-f',
              'ability-kit/js-api/arkts-ability-getrunningprocessinformationbybundletype-f-sys',
              'ability-kit/js-api/arkts-ability-getsupportedprocesscachepids-f-sys',
              'ability-kit/js-api/arkts-ability-isapplicationrunning-f-sys',
              'ability-kit/js-api/arkts-ability-isapprunning-f',
              'ability-kit/js-api/arkts-ability-isramconstraineddevice-f',
              'ability-kit/js-api/arkts-ability-isrunninginstabilitytest-f',
              'ability-kit/js-api/arkts-ability-issharedbundlerunning-f-sys',
              'ability-kit/js-api/arkts-ability-killprocessesbybundlename-f',
              'ability-kit/js-api/arkts-ability-killprocessesbybundlename-f-sys',
              'ability-kit/js-api/arkts-ability-killprocessesinbatch-f-sys',
              'ability-kit/js-api/arkts-ability-killprocesswithaccount-f-sys',
              'ability-kit/js-api/arkts-ability-off-f',
              'ability-kit/js-api/arkts-ability-off-f-sys',
              'ability-kit/js-api/arkts-ability-on-f',
              'ability-kit/js-api/arkts-ability-on-f-sys',
              'ability-kit/js-api/arkts-ability-preloadapplication-f-sys',
              'ability-kit/js-api/arkts-ability-setkeepaliveforappserviceextension-f-sys',
              'ability-kit/js-api/arkts-ability-setkeepaliveforbundle-f-sys',
              'ability-kit/js-api/arkts-ability-terminatemission-f-sys',
              'ability-kit/js-api/arkts-ability-setshortcutvisibleforself-f',
              'ability-kit/js-api/arkts-ability-parameteritem-t-sys',
              'ability-kit/js-api/arkts-ability-shortcutinfo-t-sys',
              'ability-kit/js-api/arkts-ability-shortcutwant-t-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.bundle.skillManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-bundle-skillmanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-getallskillinfos-f',
              'ability-kit/js-api/arkts-ability-getskillinfo-f',
              'ability-kit/js-api/arkts-ability-getskillinfoforself-f',
              'ability-kit/js-api/arkts-ability-getskillinfos-f',
              'ability-kit/js-api/arkts-ability-getskillinfosforself-f',
              'ability-kit/js-api/arkts-ability-skillinfo-t',
              'ability-kit/js-api/arkts-ability-skilltype-t',
              'ability-kit/js-api/arkts-ability-skillinfoflag-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.continuation.continuationManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-continuation-continuationmanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-off-f',
              'ability-kit/js-api/arkts-ability-on-f',
              'ability-kit/js-api/arkts-ability-register-f',
              'ability-kit/js-api/arkts-ability-registercontinuation-f',
              'ability-kit/js-api/arkts-ability-startcontinuationdevicemanager-f',
              'ability-kit/js-api/arkts-ability-startdevicemanager-f',
              'ability-kit/js-api/arkts-ability-unregister-f',
              'ability-kit/js-api/arkts-ability-unregistercontinuation-f',
              'ability-kit/js-api/arkts-ability-updateconnectstatus-f',
              'ability-kit/js-api/arkts-ability-updatecontinuationstate-f',
              'ability-kit/js-api/arkts-ability-continuationextraparams-t',
              'ability-kit/js-api/arkts-ability-continuationresult-t',
              'ability-kit/js-api/arkts-ability-continuationmode-e',
              'ability-kit/js-api/arkts-ability-deviceconnectstate-e'
          ]
        },
        {
          type: 'category',
          label: '@ohos.distributedBundle',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-distributedbundle' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-getremoteabilityinfo-f-sys',
              'ability-kit/js-api/arkts-ability-getremoteabilityinfos-f-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.distributedMissionManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-distributedmissionmanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-continuemission-f-sys',
              'ability-kit/js-api/arkts-ability-off-f-sys',
              'ability-kit/js-api/arkts-ability-on-f-sys',
              'ability-kit/js-api/arkts-ability-registermissionlistener-f-sys',
              'ability-kit/js-api/arkts-ability-startsyncremotemissions-f-sys',
              'ability-kit/js-api/arkts-ability-stopsyncremotemissions-f-sys',
              'ability-kit/js-api/arkts-ability-unregistermissionlistener-f-sys',
              'ability-kit/js-api/arkts-ability-continuecallbackinfo-i-sys',
              'ability-kit/js-api/arkts-ability-continuableinfo-t-sys',
              'ability-kit/js-api/arkts-ability-continuecallback-t-sys',
              'ability-kit/js-api/arkts-ability-continuedeviceinfo-t-sys',
              'ability-kit/js-api/arkts-ability-continuemissioninfo-t-sys',
              'ability-kit/js-api/arkts-ability-missioncallback-t-sys',
              'ability-kit/js-api/arkts-ability-missiondeviceinfo-t-sys',
              'ability-kit/js-api/arkts-ability-missionparameter-t-sys',
              'ability-kit/js-api/arkts-ability-continuestate-e-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.privacyManager',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-privacymanager' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-addpermissionusedrecord-f-sys',
              'ability-kit/js-api/arkts-ability-checkpermissioninuse-f-sys',
              'ability-kit/js-api/arkts-ability-getpermissionusedrecord-f-sys',
              'ability-kit/js-api/arkts-ability-getpermissionusedrecordtogglestatus-f-sys',
              'ability-kit/js-api/arkts-ability-getpermissionusedtypeinfos-f-sys',
              'ability-kit/js-api/arkts-ability-off-f-sys',
              'ability-kit/js-api/arkts-ability-on-f-sys',
              'ability-kit/js-api/arkts-ability-setpermissionusedrecordtogglestatus-f-sys',
              'ability-kit/js-api/arkts-ability-startusingpermission-f-sys',
              'ability-kit/js-api/arkts-ability-stopusingpermission-f-sys',
              'ability-kit/js-api/arkts-ability-activechangeresponse-i-sys',
              'ability-kit/js-api/arkts-ability-addpermissionusedrecordoptions-i-sys',
              'ability-kit/js-api/arkts-ability-bundleusedrecord-i-sys',
              'ability-kit/js-api/arkts-ability-permissionusedrecord-i-sys',
              'ability-kit/js-api/arkts-ability-permissionusedrequest-i-sys',
              'ability-kit/js-api/arkts-ability-permissionusedresponse-i-sys',
              'ability-kit/js-api/arkts-ability-permissionusedtypeinfo-i-sys',
              'ability-kit/js-api/arkts-ability-permissionusingoptions-i-sys',
              'ability-kit/js-api/arkts-ability-usedrecorddetail-i-sys',
              'ability-kit/js-api/arkts-ability-permissionactivestatus-e-sys',
              'ability-kit/js-api/arkts-ability-permissionusageflag-e-sys',
              'ability-kit/js-api/arkts-ability-permissionusedtype-e-sys'
          ]
        },
        {
          type: 'category',
          label: '@ohos.wantAgent',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-wantagent' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-wantagent-depr-n',
              'ability-kit/js-api/arkts-ability-wantagent-depr-t'
          ]
        },
        {
          type: 'category',
          label: '@system.package',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-package' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-package-c',
              'ability-kit/js-api/arkts-ability-checkpackagehasinstalledoptions-i',
              'ability-kit/js-api/arkts-ability-checkpackagehasinstalledresponse-i'
          ]
        },
        {
          type: 'category',
          label: 'lifecycle',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-lifecycle' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-lifecycleapp-i',
              'ability-kit/js-api/arkts-ability-lifecycleapp-i-sys',
              'ability-kit/js-api/arkts-ability-lifecycledata-i',
              'ability-kit/js-api/arkts-ability-lifecycleform-i',
              'ability-kit/js-api/arkts-ability-lifecycleform-i-sys',
              'ability-kit/js-api/arkts-ability-lifecycleservice-i'
          ]
        },
        {
          type: 'category',
          label: 'permissions',
          link: { type: 'doc', id: 'ability-kit/js-api/arkts-permissions' },
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/js-api/arkts-ability-permissions-t',
              'ability-kit/js-api/arkts-abilitydelegator',
              'ability-kit/js-api/arkts-abilityfirstframestatedata',
              'ability-kit/js-api/arkts-abilityfirstframestateobserver',
              'ability-kit/js-api/arkts-abilityforegroundstateobserver',
              'ability-kit/js-api/arkts-abilitymonitor',
              'ability-kit/js-api/arkts-abilityrunninginfo',
              'ability-kit/js-api/arkts-abilitystagecontext',
              'ability-kit/js-api/arkts-abilitystagemonitor',
              'ability-kit/js-api/arkts-abilitystartcallback',
              'ability-kit/js-api/arkts-abilitystatedata',
              'ability-kit/js-api/arkts-agentcard',
              'ability-kit/js-api/arkts-agentextensionconnectcallback',
              'ability-kit/js-api/arkts-agentextensioncontext',
              'ability-kit/js-api/arkts-agenthostproxy',
              'ability-kit/js-api/arkts-agentproxy',
              'ability-kit/js-api/arkts-appforegroundstateobserver',
              'ability-kit/js-api/arkts-appserviceextensioncontext',
              'ability-kit/js-api/arkts-appstatedata',
              'ability-kit/js-api/arkts-applicationcontext',
              'ability-kit/js-api/arkts-applicationstateobserver',
              'ability-kit/js-api/arkts-autofillextensioncontext',
              'ability-kit/js-api/arkts-autofillpopupconfig',
              'ability-kit/js-api/arkts-autofillrect',
              'ability-kit/js-api/arkts-autofillrequest',
              'ability-kit/js-api/arkts-autofilltriggertype',
              'ability-kit/js-api/arkts-autofilltype',
              'ability-kit/js-api/arkts-autostartupcallback',
              'ability-kit/js-api/arkts-autostartupinfo',
              'ability-kit/js-api/arkts-basecontext',
              'ability-kit/js-api/arkts-businessabilityinfo',
              'ability-kit/js-api/arkts-clitoolevent',
              'ability-kit/js-api/arkts-context',
              'ability-kit/js-api/arkts-continuableinfo',
              'ability-kit/js-api/arkts-continuecallback',
              'ability-kit/js-api/arkts-continuedeviceinfo',
              'ability-kit/js-api/arkts-continuemissioninfo',
              'ability-kit/js-api/arkts-customdata',
              'ability-kit/js-api/arkts-embeddableuiabilitycontext',
              'ability-kit/js-api/arkts-errorobserver',
              'ability-kit/js-api/arkts-eventhub',
              'ability-kit/js-api/arkts-extensioncontext',
              'ability-kit/js-api/arkts-extensionrunninginfo',
              'ability-kit/js-api/arkts-interopabilitymonitor',
              'ability-kit/js-api/arkts-kioskstatus',
              'ability-kit/js-api/arkts-loopobserver',
              'ability-kit/js-api/arkts-missioncallbacks',
              'ability-kit/js-api/arkts-missiondeviceinfo',
              'ability-kit/js-api/arkts-missioninfo',
              'ability-kit/js-api/arkts-missionlistener',
              'ability-kit/js-api/arkts-missionparameter',
              'ability-kit/js-api/arkts-missionsnapshot',
              'ability-kit/js-api/arkts-multiappmode',
              'ability-kit/js-api/arkts-pagenodeinfo',
              'ability-kit/js-api/arkts-photoeditorextensioncontext',
              'ability-kit/js-api/arkts-processdata',
              'ability-kit/js-api/arkts-processinformation',
              'ability-kit/js-api/arkts-processrunninginfo',
              'ability-kit/js-api/arkts-runningappclone',
              'ability-kit/js-api/arkts-runningmultiappinfo',
              'ability-kit/js-api/arkts-runningmultiinstanceinfo',
              'ability-kit/js-api/arkts-sendablecontext',
              'ability-kit/js-api/arkts-serviceextensioncontext',
              'ability-kit/js-api/arkts-tooleventcallback',
              'ability-kit/js-api/arkts-toolinfo',
              'ability-kit/js-api/arkts-uiabilitycontext',
              'ability-kit/js-api/arkts-uiextensioncontext',
              'ability-kit/js-api/arkts-uiserviceextensionconnectcallback',
              'ability-kit/js-api/arkts-uiserviceextensioncontext',
              'ability-kit/js-api/arkts-uiservicehostproxy',
              'ability-kit/js-api/arkts-uiserviceproxy',
              'ability-kit/js-api/arkts-viewdata',
              'ability-kit/js-api/arkts-abilitydelegatorargs',
              'ability-kit/js-api/arkts-shellcmdresult',
              'ability-kit/js-api/arkts-abilityinfo',
              'ability-kit/js-api/arkts-appprovisioninfo',
              'ability-kit/js-api/arkts-applicationinfo',
              'ability-kit/js-api/arkts-bundleinfo',
              'ability-kit/js-api/arkts-bundlepackinfo',
              'ability-kit/js-api/arkts-bundleresourceinfo',
              'ability-kit/js-api/arkts-dispatchinfo',
              'ability-kit/js-api/arkts-elementname',
              'ability-kit/js-api/arkts-extensionabilityinfo',
              'ability-kit/js-api/arkts-hapmoduleinfo',
              'ability-kit/js-api/arkts-launcherabilityinfo',
              'ability-kit/js-api/arkts-launcherabilityresourceinfo',
              'ability-kit/js-api/arkts-metadata',
              'ability-kit/js-api/arkts-overlaymoduleinfo',
              'ability-kit/js-api/arkts-permissiondef',
              'ability-kit/js-api/arkts-pluginbundleinfo',
              'ability-kit/js-api/arkts-recoverableapplicationinfo',
              'ability-kit/js-api/arkts-remoteabilityinfo',
              'ability-kit/js-api/arkts-sharedbundleinfo',
              'ability-kit/js-api/arkts-shortcutinfo',
              'ability-kit/js-api/arkts-skill',
              'ability-kit/js-api/arkts-skillinfo',
              'ability-kit/js-api/arkts-permissionrequestresult',
              'ability-kit/js-api/arkts-abilityinfo',
              'ability-kit/js-api/arkts-applicationinfo',
              'ability-kit/js-api/arkts-bundleinfo',
              'ability-kit/js-api/arkts-bundleinstaller',
              'ability-kit/js-api/arkts-bundlestatuscallback',
              'ability-kit/js-api/arkts-customizedata',
              'ability-kit/js-api/arkts-elementname',
              'ability-kit/js-api/arkts-hapmoduleinfo',
              'ability-kit/js-api/arkts-launcherabilityinfo',
              'ability-kit/js-api/arkts-moduleinfo',
              'ability-kit/js-api/arkts-remoteabilityinfo',
              'ability-kit/js-api/arkts-shortcutinfo',
              'ability-kit/js-api/arkts-abilityresult',
              'ability-kit/js-api/arkts-connectoptions',
              'ability-kit/js-api/arkts-dataabilityhelper',
              'ability-kit/js-api/arkts-dataabilityoperation',
              'ability-kit/js-api/arkts-dataabilityresult',
              'ability-kit/js-api/arkts-startabilityparameter',
              'ability-kit/js-api/arkts-want',
              'ability-kit/js-api/arkts-appversioninfo',
              'ability-kit/js-api/arkts-context',
              'ability-kit/js-api/arkts-processinfo',
              'ability-kit/js-api/arkts-continuationextraparams',
              'ability-kit/js-api/arkts-continuationresult',
              'ability-kit/js-api/arkts-triggerinfo',
              'ability-kit/js-api/arkts-wantagentinfo'
          ]
        }
          ],
        },
        {
          type: 'category',
          label: 'C API',
          items: [
            {
          type: 'category',
          label: 'Header file',
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/c-api/capi-ability-access-control-h',
              'ability-kit/c-api/capi-want-h',
              'ability-kit/c-api/capi-ability-base-common-h',
              'ability-kit/c-api/capi-ability-runtime-common-h',
              'ability-kit/c-api/capi-modular-object-extension-ability-h',
              'ability-kit/c-api/capi-start-options-h',
              'ability-kit/c-api/capi-modular-object-dispatcher-h',
              'ability-kit/c-api/capi-connect-options-h',
              'ability-kit/c-api/capi-application-context-h',
              'ability-kit/c-api/capi-context-constant-h',
              'ability-kit/c-api/capi-modular-object-extension-manager-h',
              'ability-kit/c-api/capi-extension-ability-h',
              'ability-kit/c-api/capi-native-ability-wrapper-h',
              'ability-kit/c-api/capi-modular-object-extension-context-h',
              'ability-kit/c-api/capi-ability-resource-info-h',
              'ability-kit/c-api/capi-native-interface-bundle-h',
              'ability-kit/c-api/capi-bundle-manager-common-h',
              'ability-kit/c-api/capi-native-child-process-h'
          ]
        },
        {
          type: 'category',
          label: 'Module',
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/c-api/capi-abilityaccesscontrol',
              'ability-kit/c-api/capi-abilitybase',
              'ability-kit/c-api/capi-abilityruntime',
              'ability-kit/c-api/capi-native-bundle',
              'ability-kit/c-api/capi-childprocess'
          ]
        },
        {
          type: 'category',
          label: 'Struct',
          collapsible: true,
          collapsed: true,
          items: [
            'ability-kit/c-api/capi-abilitybase-abilitybase-element',
              'ability-kit/c-api/capi-abilitybase-abilitybase-want',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typeinfo',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-variant',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-inputparams',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typedescriptorhandle',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-array8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-vector8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-set8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-map8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-struct8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-connectoptions',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninfo8h',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-allmodularobjectextensioninfos8h',
              'ability-kit/c-api/capi-abilityruntime-abilityruntime-extensioninstance',
              'ability-kit/c-api/capi-abilityruntime-abilityruntime-extensioninstance8h',
              'ability-kit/c-api/capi-abilityruntime-abilityruntime-nativeabilitywrapper',
              'ability-kit/c-api/capi-abilityruntime-oh-abilityruntime-modularobjectextensioncontext8h',
              'ability-kit/c-api/capi-native-bundle-oh-nativebundle-abilityresourceinfo',
              'ability-kit/c-api/capi-native-bundle-oh-nativebundle-applicationinfo',
              'ability-kit/c-api/capi-native-bundle-oh-nativebundle-elementname',
              'ability-kit/c-api/capi-native-bundle-oh-nativebundle-metadata',
              'ability-kit/c-api/capi-native-bundle-oh-nativebundle-modulemetadata',
              'ability-kit/c-api/capi-childprocess-nativechildprocess-fd',
              'ability-kit/c-api/capi-childprocess-nativechildprocess-fdlist',
              'ability-kit/c-api/capi-childprocess-nativechildprocess-options',
              'ability-kit/c-api/capi-childprocess-nativechildprocess-args',
              'ability-kit/c-api/capi-childprocess-ability-childprocessconfigs'
          ]
        }
          ],
        },
      ],
    },
  ],
};

export default sidebars;
