(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1621:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var s,r=a(13),o=a.n(r),n=a(120),i=a.n(n),c=a(406),l=a.n(c),h=a(1),u=a(171),p=a(126),d=a.n(p),m=a(122),y=a(121),b=a(128),g=a(254),S=a(227),P=a(324),f=a(352),C=a(260),w=a(123),k=a(147),v=a(208),E=a(373),O=a(242),K=a(298),_=a(140),j=a(136),B=a(134),x=a(259);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},D.apply(this,arguments)}function N(e){return n.createElement("svg",D({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.864 14.318",role:"presentation","aria-hidden":!0},e),s||(s=n.createElement("path",{d:"M1.25 8.037l4.886 5.031L17.614 1.25",stroke:"currentColor",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var U=function(e){return e.Loading="loading",e.LoadError="load_error",e.ChooseKeyPassphrase="choose_key_passphrase",e.Migrate="migrate",e.Passphrase="passphrase",e.PassphraseConfirm="passphrase_confirm",e.ShowKey="show_key",e.Storing="storing",e.Stored="stored",e.ConfirmSkip="confirm_skip",e}(U||{});class F extends i.a.PureComponent{constructor(e){let t;super(e),o()(this,"recoveryKey",void 0),o()(this,"backupKey",void 0),o()(this,"recoveryKeyNode",Object(n.createRef)()),o()(this,"passphraseField",Object(n.createRef)()),o()(this,"onKeyBackupStatusChange",(()=>{this.state.phase===U.Migrate&&this.fetchBackupInfo()})),o()(this,"onKeyPassphraseChange",(e=>{this.setState({passPhraseKeySelected:e.target.value})})),o()(this,"onChooseKeyPassphraseFormSubmit",(async()=>{this.state.passPhraseKeySelected===O.a.Key?(this.recoveryKey=await m.a.get().createRecoveryKeyFromPassphrase(),this.setState({copied:!1,downloaded:!1,setPassphrase:!1,phase:U.ShowKey})):this.setState({copied:!1,downloaded:!1,phase:U.Passphrase})})),o()(this,"onMigrateFormSubmit",(e=>{var t;e.preventDefault(),null!==(t=this.state.backupSigStatus)&&void 0!==t&&t.usable?this.bootstrapSecretStorage():this.restoreBackup()})),o()(this,"onCopyClick",(()=>{Object(S.a)(this.recoveryKeyNode.current)&&this.setState({copied:!0})})),o()(this,"onDownloadClick",(()=>{const e=new Blob([this.recoveryKey.encodedPrivateKey],{type:"text/plain;charset=us-ascii"});l.a.saveAs(e,"security-key.txt"),this.setState({downloaded:!0})})),o()(this,"doBootstrapUIAuth",(async e=>{if(this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword)await e({type:"m.login.password",identifier:{type:"m.id.user",user:m.a.get().getUserId()},user:m.a.get().getUserId(),password:this.state.accountPassword});else{const t={[P.c.PHASE_PREAUTH]:{title:Object(y.b)("Use Single Sign On to continue"),body:Object(y.b)("To continue, use Single Sign On to prove your identity."),continueText:Object(y.b)("Single Sign On"),continueKind:"primary"},[P.c.PHASE_POSTAUTH]:{title:Object(y.b)("Confirm encryption setup"),body:Object(y.b)("Click the button below to confirm setting up encryption."),continueText:Object(y.b)("Confirm"),continueKind:"primary"}},{finished:a}=b.b.createDialog(x.a,{title:Object(y.b)("Setting up keys"),matrixClient:m.a.get(),makeRequest:e,aestheticsForStagePhases:{[P.c.LOGIN_TYPE]:t,[P.c.UNSTABLE_LOGIN_TYPE]:t}}),[s]=await a;if(!s)throw new Error("Cross-signing key upload auth canceled")}})),o()(this,"bootstrapSecretStorage",(async()=>{this.setState({phase:U.Storing,error:void 0});const e=m.a.get(),{forceReset:t}=this.props;try{t?(h.a.log("Forcing secret storage reset"),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,setupNewKeyBackup:!0,setupNewSecretStorage:!0})):(await e.bootstrapCrossSigning({authUploadDeviceSigningKeys:this.doBootstrapUIAuth}),await e.bootstrapSecretStorage({createSecretStorageKey:async()=>this.recoveryKey,keyBackupInfo:this.state.backupInfo,setupNewKeyBackup:!this.state.backupInfo,getKeyBackupPassphrase:async()=>this.backupKey?this.backupKey:Object(g.e)()})),this.setState({phase:U.Stored})}catch(e){this.state.canUploadKeysWithPasswordOnly&&401===e.httpStatus&&e.data.flows?this.setState({accountPassword:"",accountPasswordCorrect:!1,phase:U.Migrate}):this.setState({error:e}),h.a.error("Error bootstrapping secret storage",e)}})),o()(this,"onCancel",(()=>{this.props.onFinished(!1)})),o()(this,"restoreBackup",(async()=>{const{finished:e}=b.b.createDialog(E.a,{showSummary:!1,keyCallback:e=>{this.backupKey=e}},void 0,!1,!1);await e;const{backupSigStatus:t}=await this.fetchBackupInfo();null!=t&&t.usable&&this.state.canUploadKeysWithPasswordOnly&&this.state.accountPassword&&this.bootstrapSecretStorage()})),o()(this,"onLoadRetryClick",(()=>{this.setState({phase:U.Loading}),this.fetchBackupInfo()})),o()(this,"onShowKeyContinueClick",(()=>{this.bootstrapSecretStorage()})),o()(this,"onCancelClick",(()=>{this.setState({phase:U.ConfirmSkip})})),o()(this,"onGoBackClick",(()=>{this.setState({phase:U.ChooseKeyPassphrase})})),o()(this,"onPassPhraseNextClick",(async e=>{if(e.preventDefault(),this.passphraseField.current){if(await this.passphraseField.current.validate({allowEmpty:!1}),!this.passphraseField.current.state.valid)return this.passphraseField.current.focus(),void this.passphraseField.current.validate({allowEmpty:!1,focused:!0});this.setState({phase:U.PassphraseConfirm})}})),o()(this,"onPassPhraseConfirmNextClick",(async e=>{e.preventDefault(),this.state.passPhrase===this.state.passPhraseConfirm&&(this.recoveryKey=await m.a.get().createRecoveryKeyFromPassphrase(this.state.passPhrase),this.setState({copied:!1,downloaded:!1,setPassphrase:!0,phase:U.ShowKey}))})),o()(this,"onSetAgainClick",(()=>{this.setState({passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",phase:U.Passphrase})})),o()(this,"onPassPhraseValidate",(e=>{this.setState({passPhraseValid:!!e.valid})})),o()(this,"onPassPhraseChange",(e=>{this.setState({passPhrase:e.target.value})})),o()(this,"onPassPhraseConfirmChange",(e=>{this.setState({passPhraseConfirm:e.target.value})})),o()(this,"onAccountPasswordChange",(e=>{this.setState({accountPassword:e.target.value})}));t=Object(O.e)().includes(O.a.Key)?O.a.Key:O.a.Passphrase;const a=e.accountPassword||"";let s=null;a?s=!0:this.queryKeyUploadAuth(),this.state={phase:U.Loading,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1,setPassphrase:!1,backupInfo:null,backupSigStatus:null,accountPasswordCorrect:null,canSkip:!Object(O.g)(),canUploadKeysWithPasswordOnly:s,passPhraseKeySelected:t,accountPassword:a},m.a.get().on(u.b.KeyBackupStatus,this.onKeyBackupStatusChange),this.getInitialPhase()}componentWillUnmount(){m.a.get().removeListener(u.b.KeyBackupStatus,this.onKeyBackupStatusChange)}getInitialPhase(){var e;const t=null===(e=K.a.createSecretStorageKey)||void 0===e?void 0:e.call(K.a);if(t)return h.a.log("Created key via customisations, jumping to bootstrap step"),this.recoveryKey={privateKey:t},void this.bootstrapSecretStorage();this.fetchBackupInfo()}async fetchBackupInfo(){try{const e=await m.a.get().getKeyBackupVersion(),t=e&&m.a.get().isCryptoEnabled()?await m.a.get().isKeyBackupTrusted(e):null,{forceReset:a}=this.props,s=e&&!a?U.Migrate:U.ChooseKeyPassphrase;return this.setState({phase:s,backupInfo:e,backupSigStatus:t}),{backupInfo:null!=e?e:void 0,backupSigStatus:null!=t?t:void 0}}catch(e){return this.setState({phase:U.LoadError}),{}}}async queryKeyUploadAuth(){try{await m.a.get().uploadDeviceSigningKeys(void 0,{}),h.a.log("uploadDeviceSigningKeys unexpectedly succeeded without UI auth!")}catch(e){if(!e.data||!e.data.flows)return void h.a.log("uploadDeviceSigningKeys advertised no flows!");const t=e.data.flows.some((e=>1===e.stages.length&&"m.login.password"===e.stages[0]));this.setState({canUploadKeysWithPasswordOnly:t})}}renderOptionKey(){return i.a.createElement(C.a,{key:O.a.Key,value:O.a.Key,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===O.a.Key,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_secureBackup"}),Object(y.b)("Generate a Security Key")),i.a.createElement("div",null,Object(y.b)("We'll generate a Security Key for you to store somewhere safe, like a password manager or a safe.")))}renderOptionPassphrase(){return i.a.createElement(C.a,{key:O.a.Passphrase,value:O.a.Passphrase,name:"keyPassphrase",checked:this.state.passPhraseKeySelected===O.a.Passphrase,onChange:this.onKeyPassphraseChange,outlined:!0},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_optionTitle"},i.a.createElement("span",{className:"mx_CreateSecretStorageDialog_optionIcon mx_CreateSecretStorageDialog_optionIcon_securePhrase"}),Object(y.b)("Enter a Security Phrase")),i.a.createElement("div",null,Object(y.b)("Use a secret phrase only you know, and optionally save a Security Key to use for backup.")))}renderPhaseChooseKeyPassphrase(){const e=Object(O.e)(),t=e.includes(O.a.Key)?this.renderOptionKey():null,a=e.includes(O.a.Passphrase)?this.renderOptionPassphrase():null;return i.a.createElement("form",{onSubmit:this.onChooseKeyPassphraseFormSubmit},i.a.createElement("p",{className:"mx_CreateSecretStorageDialog_centeredBody"},Object(y.b)("Safeguard against losing access to encrypted messages & data by backing up encryption keys on your server.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer",role:"radiogroup"},t,a),i.a.createElement(k.a,{primaryButton:Object(y.b)("Continue"),onPrimaryButtonClick:this.onChooseKeyPassphraseFormSubmit,onCancel:this.onCancelClick,hasCancel:this.state.canSkip}))}renderPhaseMigrate(){var e;let t,a=Object(y.b)("Next");return this.state.canUploadKeysWithPasswordOnly?t=i.a.createElement("div",null,i.a.createElement("div",null,Object(y.b)("Enter your account password to confirm the upgrade:")),i.a.createElement("div",null,i.a.createElement(_.a,{type:"password",label:Object(y.b)("Password"),value:this.state.accountPassword,onChange:this.onAccountPasswordChange,forceValidity:!1!==this.state.accountPasswordCorrect&&void 0,autoFocus:!0}))):null!==(e=this.state.backupSigStatus)&&void 0!==e&&e.usable?t=i.a.createElement("p",null,Object(y.b)("You'll need to authenticate with the server to confirm the upgrade.")):(t=i.a.createElement("div",null,i.a.createElement("div",null,Object(y.b)("Restore your key backup to upgrade your encryption"))),a=Object(y.b)("Restore")),i.a.createElement("form",{onSubmit:this.onMigrateFormSubmit},i.a.createElement("p",null,Object(y.b)("Upgrade this session to allow it to verify other sessions, granting them access to encrypted messages and marking them as trusted for other users.")),i.a.createElement("div",null,t),i.a.createElement(k.a,{primaryButton:a,onPrimaryButtonClick:this.onMigrateFormSubmit,hasCancel:!1,primaryDisabled:!!this.state.canUploadKeysWithPasswordOnly&&!this.state.accountPassword},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancelClick},Object(y.b)("Skip"))))}renderPhasePassPhrase(){return i.a.createElement("form",{onSubmit:this.onPassPhraseNextClick},i.a.createElement("p",null,Object(y.b)("Enter a Security Phrase only you know, as it's used to safeguard your data. To be secure, you shouldn't re-use your account password.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(f.a,{className:"mx_CreateSecretStorageDialog_passPhraseField",onChange:this.onPassPhraseChange,minScore:4,value:this.state.passPhrase,onValidate:this.onPassPhraseValidate,fieldRef:this.passphraseField,autoFocus:!0,label:Object(y.d)("Enter a Security Phrase"),labelEnterPassword:Object(y.d)("Enter a Security Phrase"),labelStrongPassword:Object(y.d)("Great! This Security Phrase looks strong enough."),labelAllowedButUnsafe:Object(y.d)("Great! This Security Phrase looks strong enough.")})),i.a.createElement(k.a,{primaryButton:Object(y.b)("Continue"),onPrimaryButtonClick:this.onPassPhraseNextClick,hasCancel:!1,disabled:!this.state.passPhraseValid},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(y.b)("Cancel"))))}renderPhasePassPhraseConfirm(){let e,t,a;return this.state.passPhraseConfirm===this.state.passPhrase?(e=Object(y.b)("That matches!"),t=Object(y.b)("Use a different passphrase?")):this.state.passPhrase.startsWith(this.state.passPhraseConfirm)||(e=Object(y.b)("That doesn't match."),t=Object(y.b)("Go back to set it again.")),e&&(a=i.a.createElement("div",null,i.a.createElement("div",null,e),i.a.createElement(w.a,{kind:"link",onClick:this.onSetAgainClick},t))),i.a.createElement("form",{onSubmit:this.onPassPhraseConfirmNextClick},i.a.createElement("p",null,Object(y.b)("Enter your Security Phrase a second time to confirm it.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseContainer"},i.a.createElement(_.a,{type:"password",onChange:this.onPassPhraseConfirmChange,value:this.state.passPhraseConfirm,className:"mx_CreateSecretStorageDialog_passPhraseField",label:Object(y.b)("Confirm your Security Phrase"),autoFocus:!0,autoComplete:"new-password"}),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_passPhraseMatch"},a)),i.a.createElement(k.a,{primaryButton:Object(y.b)("Continue"),onPrimaryButtonClick:this.onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm},i.a.createElement("button",{type:"button",onClick:this.onCancelClick,className:"danger"},Object(y.b)("Skip"))))}renderPhaseShowKey(){let e;return e=this.state.phase===U.ShowKey?i.a.createElement(k.a,{primaryButton:Object(y.b)("Continue"),disabled:!this.state.downloaded&&!this.state.copied&&!this.state.setPassphrase,onPrimaryButtonClick:this.onShowKeyContinueClick,hasCancel:!1}):i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_continueSpinner"},i.a.createElement(v.a,null)),i.a.createElement("div",null,i.a.createElement("p",null,Object(y.b)("Store your Security Key somewhere safe, like a password manager or a safe, as it's used to safeguard your encrypted data.")),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_primaryContainer mx_CreateSecretStorageDialog_recoveryKeyPrimarycontainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyContainer"},i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKey"},i.a.createElement("code",{ref:this.recoveryKeyNode},this.recoveryKey.encodedPrivateKey)),i.a.createElement("div",{className:"mx_CreateSecretStorageDialog_recoveryKeyButtons"},i.a.createElement(w.a,{kind:"primary",className:"mx_Dialog_primary",onClick:this.onDownloadClick,disabled:this.state.phase===U.Storing},Object(y.b)("Download")),i.a.createElement("span",null,Object(y.b)("%(downloadButton)s or %(copyButton)s",{downloadButton:"",copyButton:""})),i.a.createElement(w.a,{kind:"primary",className:"mx_Dialog_primary mx_CreateSecretStorageDialog_recoveryKeyButtons_copyBtn",onClick:this.onCopyClick,disabled:this.state.phase===U.Storing},this.state.copied?Object(y.b)("Copied!"):Object(y.b)("Copy"))))),e)}renderBusyPhase(){return i.a.createElement("div",null,i.a.createElement(B.a,null))}renderStoredPhase(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"mx_Dialog_content"},Object(y.b)("Your keys are now being backed up from this device.")),i.a.createElement(k.a,{primaryButton:Object(y.b)("Done"),onPrimaryButtonClick:()=>this.props.onFinished(!0),hasCancel:!1}))}renderPhaseLoadError(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(y.b)("Unable to query secret storage status")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(k.a,{primaryButton:Object(y.b)("Retry"),onPrimaryButtonClick:this.onLoadRetryClick,hasCancel:this.state.canSkip,onCancel:this.onCancel})))}renderPhaseSkipConfirm(){return i.a.createElement("div",null,i.a.createElement("p",null,Object(y.b)("If you cancel now, you may lose encrypted messages & data if you lose access to your logins.")),i.a.createElement("p",null,Object(y.b)("You can also set up Secure Backup & manage your keys in Settings.")),i.a.createElement(k.a,{primaryButton:Object(y.b)("Go back"),onPrimaryButtonClick:this.onGoBackClick,hasCancel:!1},i.a.createElement("button",{type:"button",className:"danger",onClick:this.onCancel},Object(y.b)("Cancel"))))}titleForPhase(e){switch(e){case U.ChooseKeyPassphrase:return Object(y.b)("Set up Secure Backup");case U.Migrate:return Object(y.b)("Upgrade your encryption");case U.Passphrase:return Object(y.b)("Set a Security Phrase");case U.PassphraseConfirm:return Object(y.b)("Confirm Security Phrase");case U.ConfirmSkip:return Object(y.b)("Are you sure?");case U.ShowKey:return Object(y.b)("Save your Security Key");case U.Storing:return Object(y.b)("Setting up keys");case U.Stored:return Object(y.b)("Secure Backup successful");default:return""}}get topComponent(){return this.state.phase===U.Stored?i.a.createElement(N,{className:"mx_Icon mx_Icon_circle-40 mx_Icon_accent mx_Icon_bg-accent-light"}):null}get classNames(){return d()("mx_CreateSecretStorageDialog",{mx_SuccessDialog:this.state.phase===U.Stored})}render(){let e,t;if(this.state.error)e=i.a.createElement("div",null,i.a.createElement("p",null,Object(y.b)("Unable to set up secret storage")),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement(k.a,{primaryButton:Object(y.b)("Retry"),onPrimaryButtonClick:this.bootstrapSecretStorage,hasCancel:this.state.canSkip,onCancel:this.onCancel})));else switch(this.state.phase){case U.Loading:e=this.renderBusyPhase();break;case U.LoadError:e=this.renderPhaseLoadError();break;case U.ChooseKeyPassphrase:e=this.renderPhaseChooseKeyPassphrase();break;case U.Migrate:e=this.renderPhaseMigrate();break;case U.Passphrase:e=this.renderPhasePassPhrase();break;case U.PassphraseConfirm:e=this.renderPhasePassPhraseConfirm();break;case U.ShowKey:e=this.renderPhaseShowKey();break;case U.Storing:e=this.renderBusyPhase();break;case U.Stored:e=this.renderStoredPhase();break;case U.ConfirmSkip:e=this.renderPhaseSkipConfirm()}switch(this.state.phase){case U.Passphrase:case U.PassphraseConfirm:t=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_securePhraseTitle"];break;case U.ShowKey:t=["mx_CreateSecretStorageDialog_titleWithIcon","mx_CreateSecretStorageDialog_secureBackupTitle"];break;case U.ChooseKeyPassphrase:t="mx_CreateSecretStorageDialog_centeredTitle"}return i.a.createElement(j.a,{className:this.classNames,onFinished:this.props.onFinished,top:this.topComponent,title:this.titleForPhase(this.state.phase),titleClass:t,hasCancel:this.props.hasCancel&&[U.Passphrase].includes(this.state.phase),fixedWidth:!1},i.a.createElement("div",null,e))}}o()(F,"defaultProps",{hasCancel:!0,forceReset:!1})},352:function(e,t,a){"use strict";var s=a(13),r=a.n(s),o=a(120),n=a.n(o),i=a(126),c=a.n(i),l=a(131),h=a(202),u=a(121),p=a(140);class d extends o.PureComponent{constructor(){super(...arguments),r()(this,"validate",Object(h.a)({description:function(e){const t=e?e.score:0;return n.a.createElement("progress",{className:"mx_PassphraseField_progress",max:4,value:t})},deriveData:async e=>{let{value:t}=e;if(!t)return null;const{scorePassword:s}=await a.e(31).then(a.bind(null,939));return s(t)},rules:[{key:"required",test:e=>{let{value:t,allowEmpty:a}=e;return a||!!t},invalid:()=>Object(u.b)(this.props.labelEnterPassword)},{key:"complexity",test:async function(e,t){let{value:a}=e;if(!a||!t)return!1;const s=t.score>=this.props.minScore;return l.b.get("dangerously_allow_unsafe_and_insecure_passwords")||s},valid:function(e){return e&&e.score>=this.props.minScore?Object(u.b)(this.props.labelStrongPassword):Object(u.b)(this.props.labelAllowedButUnsafe)},invalid:function(e){if(!e)return null;const{feedback:t}=e;return t.warning||t.suggestions[0]||Object(u.b)("Keep going…")}}]})),r()(this,"onValidate",(async e=>{const t=await this.validate(e);return this.props.onValidate&&this.props.onValidate(t),t}))}render(){return n.a.createElement(p.a,{id:this.props.id,autoFocus:this.props.autoFocus,className:c()("mx_PassphraseField",this.props.className),ref:this.props.fieldRef,type:"password",autoComplete:"new-password",label:Object(u.b)(this.props.label),value:this.props.value,onChange:this.props.onChange,onValidate:this.onValidate})}}r()(d,"defaultProps",{label:Object(u.d)("Password"),labelEnterPassword:Object(u.d)("Enter password"),labelStrongPassword:Object(u.d)("Nice, strong password!"),labelAllowedButUnsafe:Object(u.d)("Password is allowed, but unsafe")}),t.a=d},406:function(e,t,a){(function(a){var s,r,o;r=[],void 0===(o="function"==typeof(s=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function s(e,t,a){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){c(s.response,t,a)},s.onerror=function(){console.error("could not download file")},s.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,i=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,a){var i=n.URL||n.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):r(c.href)?s(e,t,a):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,n){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,n),a);else if(r(e))s(e,a,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,t,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return s(e,t,a);var o="application/octet-stream"===e.type,c=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&c||i)&&"undefined"!=typeof FileReader){var h=new FileReader;h.onloadend=function(){var e=h.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},h.readAsDataURL(e)}else{var u=n.URL||n.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});n.saveAs=c.saveAs=c,e.exports=c})?s.apply(t,r):s)||(e.exports=o)}).call(this,a(14))}}]);
//# sourceMappingURL=33.js.map