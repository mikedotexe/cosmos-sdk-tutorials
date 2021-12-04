(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{816:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"can-play-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-play-query"}},[t._v("#")]),t._v(" Can Play Query")]),t._v(" "),s("HighlightBox",{attrs:{type:"synopsis"}},[s("p",[t._v("Make sure you have all you need before proceeding:")]),t._v(" "),s("ul",[s("li",[t._v("You understand the concepts of "),s("RouterLink",{attrs:{to:"/academy/2-main-concepts/queries.html"}},[t._v("queries")]),t._v(", and "),s("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[t._v("Protobuf")]),t._v(".")],1),t._v(" "),s("li",[t._v("You have Go installed.")]),t._v(" "),s("li",[t._v("The checkers blockchain codebase up to gas metering. You can get there by following the "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/gas-meter.html"}},[t._v("previous steps")]),t._v(" or checking out "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/gas-meter",target:"_blank",rel:"noopener noreferrer"}},[t._v("the relevant version"),s("OutboundLink")],1),t._v(".")],1)])]),t._v(" "),s("p",[t._v("A player sends a "),s("code",[t._v("MsgPlayMove")]),t._v(" when "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/play-game.html"}},[t._v("making a move")]),t._v(". This message can succeed or fail for several reasons. One error situation is when the message represents an invalid move.")],1),t._v(" "),s("p",[t._v("Players should be able to make sure that a move is valid before burning gas. To add this functionality, you need to create a way for the player to call the "),s("a",{attrs:{href:"https://github.com/batkinson/checkers-go/blob/a09daeb/checkers/checkers.go#L274",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Move")]),s("OutboundLink")],1),t._v(" function without changing the game's state. Use a query because they are evaluated in memory and do not commit anything permanently to storage.")]),t._v(" "),s("h2",{attrs:{id:"new-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[t._v("#")]),t._v(" New information")]),t._v(" "),s("p",[t._v("To run a query to check the validity of a move you need to pass:")]),t._v(" "),s("ul",[s("li",[t._v("The game ID, call the field "),s("code",[t._v("IdValue")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("player")]),t._v(" as queries do not have a signer.")]),t._v(" "),s("li",[t._v("The board position to start from: "),s("code",[t._v("fromX")]),t._v(" and "),s("code",[t._v("fromY")]),t._v(".")]),t._v(" "),s("li",[t._v("The board position to land on: "),s("code",[t._v("toX")]),t._v(" and "),s("code",[t._v("toY")]),t._v(".")])]),t._v(" "),s("p",[t._v("The information to be returned is:")]),t._v(" "),s("ul",[s("li",[t._v("A boolean whether the move is valid, called "),s("code",[t._v("Possible")]),t._v(".")]),t._v(" "),s("li",[t._v("A text reason as to why the move is not valid, called "),s("code",[t._v("Reason")]),t._v(".")])]),t._v(" "),s("p",[t._v("As with other data structures, you can create the query message object with Starport:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ starport scaffold query canPlayMove idValue player fromX:uint fromY:uint toX:uint toY:uint --module checkers --response possible:bool,reason\n")])])]),s("p",[t._v("Among other files, you should now have this:")]),t._v(" "),s("div",{staticClass:"language-protobuf [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/proto/checkers/query.proto#L39-L51] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryCanPlayMoveRequest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" idValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" fromX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" fromY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" toX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" toY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryCanPlayMoveResponse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" possible "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" reason "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Starport has created the following boilerplate for you:")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/proto/checkers/query.proto#L17-L19",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf gRPC interface function"),s("OutboundLink")],1),t._v(" to submit your new "),s("code",[t._v("QueryCanPlayMoveRequest")]),t._v(" and its default implementation.")]),t._v(" "),s("li",[t._v("The "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/types/query.pb.gw.go#L319-L337",target:"_blank",rel:"noopener noreferrer"}},[t._v("routing of this new query"),s("OutboundLink")],1),t._v(" in the query facilities.")]),t._v(" "),s("li",[t._v("An "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/commit/f8a6e14d753554c9122a110800455d06dbe08192#diff-0fc3b6508740faee3d86a440c1dc83e71245dc49b3f8fc688b9668dc060abb8R12-R23",target:"_blank",rel:"noopener noreferrer"}},[t._v("empty function"),s("OutboundLink")],1),t._v(" ready to implement the action.")])]),t._v(" "),s("h2",{attrs:{id:"query-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-handling"}},[t._v("#")]),t._v(" Query handling")]),t._v(" "),s("p",[t._v("Now you need to implement the answer to the player's query in "),s("code",[t._v("grpc_query_can_play_move.go")]),t._v(". Differentiate between two types of errors:")]),t._v(" "),s("ul",[s("li",[t._v("Errors relating to the move, returning a reason.")]),t._v(" "),s("li",[t._v("Errors if a move test is impossible, returning an error.")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("The game needs to be fetched. If it does not exist at all, you can return an error message because you did not test the move:")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L23-L26] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("storedGame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" found "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetStoredGame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IdValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("found "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sdkerrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wrapf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrGameNotFound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrGameNotFound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IdValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Has the game already been won?")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L29-L34] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" storedGame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Winner "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NO_PLAYER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QueryCanPlayMoveResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrGameFinished"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Is the "),s("code",[t._v("player")]),t._v(" given a valid player?")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L37-L47] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" player rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Compare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED_PLAYER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED_PLAYER\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Compare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLACK_PLAYER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BLACK_PLAYER\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QueryCanPlayMoveResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrCreatorNotPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Is it the player's turn?")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L50-L59] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" storedGame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseGame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TurnIs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QueryCanPlayMoveResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrNotPlayerTurn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Attempt the move and report back:")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L62-L77] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moveErr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FromX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FromY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" moveErr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QueryCanPlayMoveResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrWrongMove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moveErr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("If all went fine:")]),t._v(" "),s("div",{staticClass:"language-go [https://github.com/cosmos/b9-checkers-academy-draft/blob/b53297d8e87e31b1fc7fb839fce527e66a2a0116/x/checkers/keeper/grpc_query_can_play_move.go#L79-L82] extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QueryCanPlayMoveResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Possible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"next-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[t._v("#")]),t._v(" Next up")]),t._v(" "),s("p",[t._v("Do you want to give players more flexibility on which tokens they can use for the checkers blockchain's games? Let players wager any fungible token in the "),s("RouterLink",{attrs:{to:"/academy/4-my-own-chain/wager-denom.html"}},[t._v("next section")]),t._v(".")],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);