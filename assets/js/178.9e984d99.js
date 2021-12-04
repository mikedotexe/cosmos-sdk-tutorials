(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{760:function(e,a,t){"use strict";t.r(a);var s=t(1),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"scaffolding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaffolding"}},[e._v("#")]),e._v(" Scaffolding")]),e._v(" "),t("p",[e._v("We'll be using a CLI tool called "),t("a",{attrs:{href:"https://github.com/tendermint/starport",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starport"),t("OutboundLink")],1),e._v(" to create a new Cosmos SDK blockchain. To use "),t("code",[e._v("starport")]),e._v(" "),t("a",{attrs:{href:"https://docs.starport.network/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("install it"),t("OutboundLink")],1),e._v(" on your local machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://get.starport.network/starport@v0.17.0"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),t("p",[e._v("Scaffold a new Cosmos SDK blockchain using the "),t("code",[e._v("starport scaffold chain")]),e._v(" command. The command accepts one argument: the Go module path that will be used for the project.")]),e._v(" "),t("p",[e._v("By default a chain is scaffolded with a new empty Cosmos SDK module. Use the "),t("code",[e._v("--no-module")]),e._v(" flag to skip module scaffolding.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("starport scaffold chain github.com/cosmonaut/scavenge --no-module\n")])])]),t("p",[e._v("This command created a new directory "),t("code",[e._v("scavenge")]),e._v(" with a brand new Cosmos SDK blockchain. This blockchain doesn't have any application-specific logic yet, but it imports standard Cosmos SDK modules, such as "),t("code",[e._v("auth")]),e._v(", "),t("code",[e._v("bank")]),e._v(", "),t("code",[e._v("mint")]),e._v(" and others.")]),e._v(" "),t("p",[e._v("Change the current directory to "),t("code",[e._v("scavenge")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" scavenge\n")])])]),t("p",[e._v("Inside the project directory you can execute other Starport commands to start a blockchain node, scaffold modules, messages, types, generate code, and much more.")]),e._v(" "),t("p",[e._v("In a Cosmos SDK blockchain, application-specific logic is implemented in separate modules. Using modules keeps code easy to understand and reuse.")]),e._v(" "),t("p",[e._v("Scaffold a new module called "),t("code",[e._v("scavenge")]),e._v(". Based on our design the "),t("code",[e._v("scavenge")]),e._v(" module will be sending tokens between participants. Sending tokens is implemented in the standard "),t("code",[e._v("bank")]),e._v(" module. Specify "),t("code",[e._v("bank")]),e._v(" as a dependency using the optional "),t("code",[e._v("--dep")]),e._v(" flag.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("starport scaffold module scavenge --dep bank\n")])])]),t("p",[e._v("A module has been created in the "),t("code",[e._v("x/scavenge")]),e._v(" directory and imported into the blockchain in "),t("code",[e._v("app/app.go")]),e._v(".")])])}),[],!1,null,null,null);a.default=o.exports}}]);