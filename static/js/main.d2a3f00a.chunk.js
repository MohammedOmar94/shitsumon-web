(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={Portal:"Portal_Portal__12e22",Slider:"Portal_Slider__3c_hP",Slide:"Portal_Slide__DDgBl",SlideCaption:"Portal_SlideCaption__1niW-",ImageCaption:"Portal_ImageCaption__QyJlB",KirbySlide:"Portal_KirbySlide__1ZUNI",WiggleSlide:"Portal_WiggleSlide__p42MY",MiyamotoApproveSlide:"Portal_MiyamotoApproveSlide__24Lef",MiyamotoRejectSlide:"Portal_MiyamotoRejectSlide__3utjO"}},20:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__1nlbe",Hiragana:"NavBar_Hiragana__BN2nx"}},22:function(e,t,a){e.exports={Button:"Button_Button__1q8mH",ActiveBtn:"Button_ActiveBtn__OB75O"}},23:function(e,t,a){e.exports={Section:"Section_Section__7AyTM",SectionHeader:"Section_SectionHeader__spjuW"}},24:function(e,t,a){e.exports={Preferences:"MyQuizzes_Preferences__3h-12"}},3:function(e,t,a){e.exports={Questions:"Questions_Questions__2eqNU",Question:"Questions_Question__3KKfj",QuestionNumber:"Questions_QuestionNumber__36Tho",AnswerField:"Questions_AnswerField__3TrNV",EmptyAnswer:"Questions_EmptyAnswer__3AvGR",NextBtn:"Questions_NextBtn__34mrB",AnswerHistory:"Questions_AnswerHistory__NT6V4",Answers:"Questions_Answers__3R1Hs",CorrectAnswer:"Questions_CorrectAnswer__2fSjZ",WrongAnswer:"Questions_WrongAnswer__3PVtt",Answer:"Questions_Answer__2LZyY"}},31:function(e,t,a){e.exports={Layout:"Layout_Layout__7kSfi"}},34:function(e,t,a){e.exports={PortalLink:"PortalLink_PortalLink__2c1Eb"}},36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(17),i=a.n(r),o=a(18),c=(a(41),a(8)),l=a(9),u=a(11),m=a(10),d=a(12),p=a(31),f=a.n(p),h=a(7),_=a(20),w=a.n(_),E=Object(h.d)(function(e){return s.a.createElement("header",{className:w.a.NavBar},s.a.createElement("h1",{onClick:function(){return e.history.push("/")}},s.a.createElement("p",{className:w.a.Hiragana},"\u3057\u3064\u3082\u3093"),"shitsumon"))}),y=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement(E,null),s.a.createElement("main",{className:f.a.Layout},e.children))},N=a(1),g=a.n(N),b=a(34),S=a.n(b),v=function(e){var t;switch(e.label){case"Partner Up":t=s.a.createElement("i",{className:"fas fa-user-friends"});break;case"Games":t=s.a.createElement("i",{className:"fas fa-gamepad"});break;case"My Quizzes":t=s.a.createElement("i",{className:"fas fa-pencil-alt"});break;case"Profile":t=s.a.createElement("i",{className:"fas fa-user-circle"})}return s.a.createElement("a",{href:e.href,className:S.a.PortalLink},t,s.a.createElement("p",null,e.label))},x=a(35),A=a.n(x),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:g.a.Portal},s.a.createElement(v,{label:"Partner Up"}),s.a.createElement(v,{label:"Games"}),s.a.createElement(v,{href:"/my-tests",label:"My Quizzes"}),s.a.createElement(v,{label:"Profile"})),s.a.createElement(A.a,Object.assign({},{arrows:!1,lazyLoad:!0,infinite:!0,speed:500,swipe:!1,autoplay:!0,autoplaySpeed:4e3},{className:g.a.Slider}),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:g.a.Slide},s.a.createElement("p",{className:g.a.SlideCaption},"So this is currently a placeholder."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(g.a.Slide," ").concat(g.a.MiyamotoApproveSlide)},s.a.createElement("p",{className:g.a.ImageCaption},"The idea of this site is to auto-generate Japanese questions with the words you currently know"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:g.a.Slide},s.a.createElement("p",{className:g.a.SlideCaption},"or based on general things like dates, times etc."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(g.a.Slide," ").concat(g.a.MiyamotoRejectSlide)},s.a.createElement("p",{className:g.a.ImageCaption},"...but we're still faaaaaar away from that."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(g.a.Slide," ").concat(g.a.KirbySlide)},s.a.createElement("p",{className:g.a.ImageCaption},"I know, we've betrayed you and Kirby."))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:g.a.Slide},s.a.createElement("p",{className:g.a.SlideCaption},"But don't worry"))),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"".concat(g.a.Slide," ").concat(g.a.WiggleSlide)},s.a.createElement("p",{className:g.a.ImageCaption},"It will be worth the wait")))))}}]),t}(n.Component),k=a(25),j=a(3),M=a.n(j),O=a(30),C=function(e){var t=Object(n.useRef)(null);"Default"!==e.inputMode&&setTimeout(function(){t.current&&O.bind(t.current,{IMEMode:e.inputMode})},200);var a=e.questions[e.questionIndex];return e.endOfQuiz?s.a.createElement("form",{className:M.a.Questions},e.answerHistory.map(function(e,t){return s.a.createElement(n.Fragment,{key:"answer-"+(t+1)},s.a.createElement("h4",{className:M.a.QuestionNumber},"Question ",t+1," - ",e.text),s.a.createElement("section",{className:M.a.AnswerHistory},s.a.createElement("p",{className:M.a.Answers},"You wrote ",(a=e.usersAnswer,e.answerWasCorrect?s.a.createElement("span",{className:M.a.CorrectAnswer},a,s.a.createElement("i",{className:"fas fa-check-circle "+M.a.CorrectAnswer})):s.a.createElement("span",{className:M.a.WrongAnswer},a,s.a.createElement("i",{className:"fas fa-times-circle "+M.a.WrongAnswer})))," ")));var a})):s.a.createElement("form",{className:M.a.Questions,onSubmit:function(t){return e.next(t,a.id,a.answer)}},s.a.createElement("h4",{className:M.a.QuestionNumber},"Question ",e.questionIndex+1," of ",e.questions.length),s.a.createElement("section",{key:a.id,className:M.a.Question},s.a.createElement("p",null,a.text),s.a.createElement("input",{key:e.inputMode,className:e.emptyAnswer?M.a.EmptyAnswer:M.a.AnswerField,ref:t,type:"text",name:"answerField",autoFocus:!0,autoComplete:"off",placeholder:"Type the Japanese word here",value:e.usersAnswer})),s.a.createElement("input",{className:M.a.NextBtn,type:"submit"}))},I=a(22),P=a.n(I),B=function(e){return s.a.createElement("button",{className:e.selected?P.a.ActiveBtn:P.a.Button,onClick:e.onClick},e.children)},H=a(23),F=a.n(H),q=function(e){return s.a.createElement("section",{className:F.a.Section},s.a.createElement("h2",{className:F.a.SectionHeader},e.name),e.children)},z=a(24),W=a.n(z),L=a(30),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={score:0,questionIndex:0,months:[{id:1,text:"January",answer:"ichigatsu"},{id:2,text:"Feburary",answer:"nigatsu"},{id:3,text:"March",answer:"sangatsu"},{id:4,text:"April",answer:"shigatsu"},{id:5,text:"May",answer:"gogatsu"},{id:6,text:"June",answer:"rokugatsu"},{id:7,text:"July",answer:"shichigatsu"},{id:8,text:"August",answer:"hachigatsu"},{id:9,text:"September",answer:"kugatsu"},{id:10,text:"October",answer:"juugatsu"},{id:11,text:"November",answer:"juuichigatsu"},{id:12,text:"December",answer:"juunigatsu"}],emptyAnswer:!1,inputMode:"toHiragana",answerHistory:[],endOfQuiz:!1,sectionName:""},a.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a.handleNext=function(e){var t=a.state.months[a.state.questionIndex],n=e.target.answerField.value,s=L.toRomaji(n)===L.toRomaji(t.answer),r=Object(k.a)(a.state.answerHistory),i=a.state.score;s&&(i+=1),r.push({text:t.text,usersAnswer:n,correctAnswer:t.answer,answerWasCorrect:s}),a.state.questionIndex+1===a.state.months.length?a.setState({endOfQuiz:!0,answerHistory:r,sectionName:"Results"}):n?a.setState(function(e){return{questionIndex:e.questionIndex+1,score:i,answerHistory:r}}):a.setState({emptyAnswer:!0}),e.preventDefault()},a.setInputMode=function(e){a.setState({inputMode:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.shuffle(Object(k.a)(this.state.months));this.setState({months:e,sectionName:"Dates \u5e74\u6708\u65e5"})}},{key:"render",value:function(){var e=this,t=null;return this.state.endOfQuiz||(t=s.a.createElement("div",{className:W.a.Preferences},s.a.createElement("p",null,"Input mode"),s.a.createElement(B,{selected:"toHiragana"===this.state.inputMode,onClick:function(){return e.setInputMode("toHiragana")}},"Hiragana"),s.a.createElement(B,{selected:"toKatakana"===this.state.inputMode,onClick:function(){return e.setInputMode("toKatakana")}},"Katakana"),s.a.createElement(B,{selected:"Default"===this.state.inputMode,onClick:function(){return e.setInputMode("Default")}},"Romaji"))),s.a.createElement(q,{name:this.state.sectionName,className:W.a.MyQuizzes},s.a.createElement(C,{questions:this.state.months,questionIndex:this.state.questionIndex,inputMode:this.state.inputMode,next:function(t){return e.handleNext(t)},answerHistory:this.state.answerHistory,emptyAnswer:this.state.emptyAnswer,endOfQuiz:this.state.endOfQuiz}),t)}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(y,null,s.a.createElement(h.a,{path:"/",exact:!0,component:Q}),s.a.createElement(h.a,{path:"/my-tests/",exact:!0,component:R}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=s.a.createElement(o.a,null,s.a.createElement(D,null));i.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.d2a3f00a.chunk.js.map