(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={Portal:"Portal_Portal__12e22",Slider:"Portal_Slider__3c_hP",Slide:"Portal_Slide__DDgBl",SlideCaption:"Portal_SlideCaption__1niW-",ImageCaption:"Portal_ImageCaption__QyJlB",KirbySlide:"Portal_KirbySlide__1ZUNI",WiggleSlide:"Portal_WiggleSlide__p42MY",MiyamotoApproveSlide:"Portal_MiyamotoApproveSlide__24Lef",MiyamotoRejectSlide:"Portal_MiyamotoRejectSlide__3utjO"}},15:function(e,a,t){e.exports={Answers:"Result_Answers__1I48m",CorrectAnswer:"Result_CorrectAnswer__RoC7K",WrongAnswer:"Result_WrongAnswer__2rlzT",Answer:"Result_Answer__1_i-g"}},21:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__1nlbe",Hiragana:"NavBar_Hiragana__BN2nx",Hamburger:"NavBar_Hamburger__1qvqH"}},24:function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__1p2af",Hidden:"Backdrop_Hidden__375I_"}},25:function(e,a,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__31_nM",DrawerOpen:"SideDrawer_DrawerOpen__2kFFb"}},27:function(e,a,t){e.exports={Button:"Button_Button__1q8mH",ActiveBtn:"Button_ActiveBtn__OB75O"}},28:function(e,a,t){e.exports={Section:"Section_Section__7AyTM",SectionHeader:"Section_SectionHeader__spjuW"}},29:function(e,a,t){e.exports={Quiz:"Quiz_Quiz__1ECBO",Preferences:"Quiz_Preferences__3YPid"}},35:function(e,a,t){e.exports={Item:"Item_Item__1eUVq"}},38:function(e,a,t){e.exports={Layout:"Layout_Layout__7kSfi"}},39:function(e,a,t){e.exports={NavLinks:"NavLinks_NavLinks__1ZV24"}},40:function(e,a,t){e.exports={NavLink:"NavLink_NavLink__13kiY"}},43:function(e,a,t){e.exports=t(83)},48:function(e,a,t){},7:function(e,a,t){e.exports={Topics:"Topics_Topics__tS7mK",TopicList:"Topics_TopicList__1bNEk",Topic:"Topics_Topic__3F-f8",TopicChoices:"Topics_TopicChoices__4DH4a",HideTopics:"Topics_HideTopics__1TIph",TopicChoice:"Topics_TopicChoice__2IevC",ChevronDown:"Topics_ChevronDown__tJ5zp",RotateChevron:"Topics_RotateChevron__2Y4ZI"}},8:function(e,a,t){e.exports={Questions:"Questions_Questions__2eqNU",Question:"Questions_Question__3KKfj",QuestionNumber:"Questions_QuestionNumber__36Tho",AnswerField:"Questions_AnswerField__3TrNV",EmptyAnswer:"Questions_EmptyAnswer__3AvGR",NextBtn:"Questions_NextBtn__34mrB",AnswerHistory:"Questions_AnswerHistory__NT6V4"}},83:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(20),i=t.n(r),c=t(3),o=(t(48),t(9)),l=t(10),u=t(12),m=t(11),d=t(13),h=t(24),p=t.n(h),f=function(e){var a=e.show?p.a.Backdrop:p.a.Hidden;return s.a.createElement("div",{className:a,onClick:e.clicked})},_=t(25),w=t.n(_),y=t(35),E=t.n(y),k=function(e){var a;switch(e.label){case"Partner Up":a=s.a.createElement("i",{className:"fas fa-user-friends"});break;case"Games":a=s.a.createElement("i",{className:"fas fa-gamepad"});break;case"Quizzes":a=s.a.createElement("i",{className:"fas fa-pencil-alt"});break;case"Profile":a=s.a.createElement("i",{className:"fas fa-user-circle"})}return s.a.createElement(c.b,{to:{pathname:e.href},className:E.a.Item},a,s.a.createElement("p",null,e.label))},N=function(e){var a=e.show?w.a.DrawerOpen:null;return s.a.createElement("nav",{className:"".concat(w.a.SideDrawer," ").concat(a)},s.a.createElement("ul",null,s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Partner Up"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Games"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{href:"/topics",label:"Quizzes"})),s.a.createElement("li",{onClick:e.clicked},s.a.createElement(k,{label:"Profile"}))))},v=t(14),g=t(38),b=t.n(g),C=t(39),j=t.n(C),S=t(40),A=t.n(S),O=function(e){var a;switch(e.label){case"Partner Up":a=s.a.createElement("i",{className:"fas fa-user-friends"});break;case"Games":a=s.a.createElement("i",{className:"fas fa-gamepad"});break;case"Quizzes":a=s.a.createElement("i",{className:"fas fa-pencil-alt"});break;case"Profile":a=s.a.createElement("i",{className:"fas fa-user-circle"})}return s.a.createElement(c.b,{to:{pathname:e.href},className:A.a.NavLink},a,s.a.createElement("p",null,e.label))},H=function(e){return s.a.createElement("div",{className:j.a.NavLinks},s.a.createElement(O,{label:"Partner Up"}),s.a.createElement(O,{label:"Games"}),s.a.createElement(O,{href:"/topics",label:"Quizzes"}),s.a.createElement(O,{label:"Profile"}))},x=t(21),T=t.n(x),Q=function(e){return s.a.createElement("header",{className:T.a.NavBar},s.a.createElement("button",{className:T.a.Hamburger,onClick:e.openDrawer},s.a.createElement("i",{className:"fas fa-bars"})),s.a.createElement(c.b,{to:{pathname:"/"}},s.a.createElement("h1",null,s.a.createElement("p",{className:T.a.Hiragana},"\u3057\u3064\u3082\u3093"),"shitsumon")))},D=Object(v.d)(function(e){var a=null;return"/quiz"!==e.location.pathname&&(a=s.a.createElement(H,null)),s.a.createElement(n.Fragment,null,s.a.createElement(Q,{openDrawer:e.drawerClickHandler}),s.a.createElement("main",{className:b.a.Layout},e.children),s.a.createElement("footer",null,a))}),I=t(1),B=t.n(I),M=t(41),q=t.n(M),z=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(q.a,Object.assign({},{arrows:!1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:4e3},{className:B.a.Slider}),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"So this is currently a placeholder."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.MiyamotoApproveSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"The idea of this site is to auto-generate Japanese questions with the words you currently know"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"or based on general things like dates, times etc."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.MiyamotoRejectSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"...but we're still faaaaaar away from that."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.KirbySlide)},s.a.createElement("p",{className:B.a.ImageCaption},"I know, we've betrayed you and Kirby."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:B.a.Slide},s.a.createElement("p",{className:B.a.SlideCaption},"But don't worry"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(B.a.Slide," ").concat(B.a.WiggleSlide)},s.a.createElement("p",{className:B.a.ImageCaption},"It will be worth the wait")))))}}]),a}(n.Component),P=t(7),F=t.n(P),L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={topics:[{topic:"Dates \u5e74\u6708\u65e5",icon:"fas fa-calendar-alt",param:"dates",choices:[{name:"Dates",param:"dates"},{name:"Months",param:"months"},{name:"Days of the month",param:"days_of_the_month"}]},{topic:"Times \u6642\u9593",icon:"fas fa-clock",param:"times",choices:[]},{topic:"Numbers \u756a\u53f7",icon:"fas fa-calculator",param:"numbers",choices:[]}]},t.topicClickeHandler=function(e){var a=document.querySelector("#topic-choices-".concat(e)).classList;document.querySelector("#chevron-".concat(e)).classList.toggle(F.a.RotateChevron),a.toggle(F.a.HideTopics)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state.topics.map(function(a,t){var r="topic-".concat(t),i=a.choices.map(function(e){return s.a.createElement(c.b,{key:e.param,className:"".concat(F.a.TopicChoice," disable-select"),to:{pathname:"quiz",search:"?topic=".concat(e.param)}},e.name)});return s.a.createElement(n.Fragment,{key:r},s.a.createElement("li",{id:r,className:F.a.Topic,onClick:function(){return e.topicClickeHandler(t)}},s.a.createElement("p",null,s.a.createElement("i",{className:a.icon}),a.topic),s.a.createElement("i",{id:"chevron-".concat(t),className:"".concat(F.a.ChevronDown," fas fa-chevron-down")})),s.a.createElement("div",{id:"topic-choices-".concat(t),className:"".concat(F.a.HideTopics," ").concat(F.a.TopicChoices)},i))});return s.a.createElement("div",{className:F.a.Topics},s.a.createElement("ul",{className:F.a.TopicList},a))}}]),a}(n.Component),R=t(22),W=t(42),K=t.n(W),J=t(8),U=t.n(J),G=t(15),Y=t.n(G),V=function(e){return s.a.createElement("section",{className:e.className},s.a.createElement("p",{className:Y.a.Answers},"You wrote ",e.answerWasCorrect?s.a.createElement("span",{className:Y.a.CorrectAnswer},e.usersAnswer,s.a.createElement("i",{className:"fas fa-check-circle ".concat(Y.a.CorrectAnswer)})):s.a.createElement("span",{className:Y.a.WrongAnswer},e.usersAnswer,s.a.createElement("i",{className:"fas fa-times-circle ".concat(Y.a.WrongAnswer)}))),e.answerWasCorrect?null:s.a.createElement("p",{className:Y.a.CorrectAnswer},"The correct answer was ",e.correctAnswer))},Z=t(34),$=function(e){var a=Object(n.useRef)(null);"Default"!==e.inputMode&&setTimeout(function(){a.current&&Z.bind(a.current,{IMEMode:e.inputMode})},200);var t=e.questions[e.questionIndex];return e.questions.length&&!e.endOfQuiz?s.a.createElement("form",{className:U.a.Questions,onSubmit:function(a){return e.next(a,t.id,t.answer)}},s.a.createElement("h4",{className:U.a.QuestionNumber},"Question ",e.questionIndex+1," of ",e.questions.length),s.a.createElement("section",{key:t.id,className:U.a.Question},s.a.createElement("p",null,t.text),s.a.createElement("input",{key:e.inputMode,className:e.emptyAnswer?U.a.EmptyAnswer:U.a.AnswerField,ref:a,type:"text",name:"answerField",autoFocus:!0,autoComplete:"off",placeholder:"Type the Japanese word here",value:e.usersAnswer}),s.a.createElement("input",{className:U.a.NextBtn,type:"submit",value:"Next"}))):e.endOfQuiz?s.a.createElement("div",{className:U.a.Questions},e.answerHistory.map(function(e,a){return s.a.createElement(n.Fragment,{key:"answer-"+(a+1)},s.a.createElement("h4",{className:U.a.QuestionNumber},"Question ",a+1," - ",e.text),s.a.createElement(V,{className:U.a.AnswerHistory,answerWasCorrect:e.answerWasCorrect,correctAnswer:Z.toHiragana(e.correctAnswer),usersAnswer:e.usersAnswer}))})):null},X=t(27),ee=t.n(X),ae=function(e){return s.a.createElement("button",{className:e.selected?ee.a.ActiveBtn:ee.a.Button,onClick:e.onClick},e.children)},te=t(28),ne=t.n(te),se=function(e){return s.a.createElement("section",{className:"".concat(ne.a.Section," ").concat(e.className)},s.a.createElement("h2",{className:ne.a.SectionHeader},e.name),e.children)},re=t(29),ie=t.n(re),ce=[{month:"January",translations:["ichigatsu"]},{month:"Feburary",translations:["nigatsu"]},{month:"March",translations:["sangatsu"]},{month:"April",translations:["shigatsu"]},{month:"May",translations:["gogatsu"]},{month:"June",translations:["rokugatsu"]},{month:"July",translations:["shichigatsu"]},{month:"August",translations:["hachigatsu"]},{month:"September",translations:["kugatsu"]},{month:"October",translations:["juugatsu"]},{month:"November",translations:["juuichigatsu"]},{month:"December",translations:["juunigatsu"]}],oe=[{day:"1st",translations:["tsuitachi"]},{day:"2nd",translations:["futsuka"]},{day:"3rd",translations:["mikka"]},{day:"4th",translations:["yokka"]},{day:"5th",translations:["itsuka"]},{day:"6th",translations:["muika"]},{day:"7th",translations:["nanoka"]},{day:"8th",translations:["youka"]},{day:"9th",translations:["kokonoka"]},{day:"10th",translations:["touka"]},{day:"11th",translations:["juuichinichi"]},{day:"12th",translations:["juuninichi"]},{day:"13th",translations:["juusannichi"]},{day:"14th",translations:["juuyokka"]},{day:"15th",translations:["juugonichi"]},{day:"16th",translations:["juurokunichi"]},{day:"17th",translations:["juushichinichi"]},{day:"18th",translations:["juuhachinichi"]},{day:"19th",translations:["juukyuunichi","juukunichi"]},{day:"20th",translations:["hatsuka"]},{day:"21st",translations:["nijuuichinichi"]},{day:"22nd",translations:["nijuuninichi"]},{day:"23rd",translations:["nijuusannichi"]},{day:"24th",translations:["nijuuyokka"]},{day:"25th",translations:["nijuugonichi"]},{day:"26th",translations:["nijuurokunichi"]},{day:"27th",translations:["nijuushichinichi"]},{day:"28th",translations:["nijuuhachinichi"]},{day:"29th",translations:["nijuukyuunichi","nijuukunichi"]},{day:"30th",translations:["sanjuunichi"]},{day:"31st",translations:["sanjuuichinichi"]}],le=t(34),ue=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={score:0,questionIndex:0,emptyAnswer:!1,inputMode:"toHiragana",questions:[],answerHistory:[],endOfQuiz:!1,sectionName:""},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.handleNext=function(e){var a=t.state.questions[t.state.questionIndex],n=e.target.answerField.value,s=le.toRomaji(n)===le.toRomaji(a.answer),r=Object(R.a)(t.state.answerHistory);console.log(n,le.toHiragana(a.answer));var i=t.state.score;s&&(i+=1),r.push({text:a.text,usersAnswer:n,correctAnswer:a.answer,answerWasCorrect:s}),t.state.questionIndex+1===t.state.questions.length?t.setState({endOfQuiz:!0,answerHistory:r,sectionName:"Results"}):n?t.setState(function(e){return{questionIndex:e.questionIndex+1,score:i,answerHistory:r,emptyAnswer:!1}}):t.setState({emptyAnswer:!0}),e.preventDefault()},t.setInputMode=function(e){t.setState({inputMode:e})},t.setUpDateQuiz=function(){var e=t.shuffle(Object(R.a)(ce)),a=t.shuffle(Object(R.a)(oe));a.length=12;for(var n=[],s=0;s<e.length;s++){var r=a[s].day,i=e[s].month,c=a[s].translations[0],o=e[s].translations[0];n[s]={id:s+1,text:"".concat(r," ").concat(i),answer:"".concat(o).concat(c)}}t.setState({questions:n,sectionName:"Dates \u5e74\u6708\u65e5"})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.search;K.a.parse(e).topic||this.props.history.push("/"),this.setUpDateQuiz()}},{key:"render",value:function(){var e=this,a=null;return this.state.endOfQuiz||(a=s.a.createElement("div",{className:ie.a.Preferences},s.a.createElement("p",null,"Input mode"),s.a.createElement(ae,{selected:"toHiragana"===this.state.inputMode,onClick:function(){return e.setInputMode("toHiragana")}},"Hiragana"),s.a.createElement(ae,{selected:"toKatakana"===this.state.inputMode,onClick:function(){return e.setInputMode("toKatakana")}},"Katakana"),s.a.createElement(ae,{selected:"Default"===this.state.inputMode,onClick:function(){return e.setInputMode("Default")}},"Romaji"))),s.a.createElement(se,{name:this.state.sectionName,className:ie.a.Quiz},s.a.createElement($,{questions:this.state.questions,questionIndex:this.state.questionIndex,inputMode:this.state.inputMode,next:function(a){return e.handleNext(a)},answerHistory:this.state.answerHistory,emptyAnswer:this.state.emptyAnswer,endOfQuiz:this.state.endOfQuiz}),a)}}]),a}(n.Component),me=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={sideDrawerOpen:!1},t.drawerToggleClickHandler=function(){var e=!t.state.sideDrawerOpen;t.setState({sideDrawerOpen:e})},t.backdropClickHandler=function(){t.setState({sideDrawerOpen:!1})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(D,{drawerClickHandler:this.drawerToggleClickHandler},s.a.createElement(N,{show:this.state.sideDrawerOpen,clicked:this.drawerToggleClickHandler}),s.a.createElement(f,{show:this.state.sideDrawerOpen,clicked:this.backdropClickHandler}),s.a.createElement(v.a,{path:"/",exact:!0,component:z}),s.a.createElement(v.a,{path:"/topics",exact:!0,component:L}),s.a.createElement(v.a,{path:"/quiz",exact:!0,component:ue}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=s.a.createElement(c.a,{basename:"/shitsumon-web"},s.a.createElement(me,null));i.a.render(de,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.3a91a987.chunk.js.map