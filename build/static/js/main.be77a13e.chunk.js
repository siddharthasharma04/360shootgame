(window.webpackJsonpcodemntask=window.webpackJsonpcodemntask||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=a(2),s=a(3),o=a(5),m=a(4),u=a(6),h=(a(29),a(10)),g=a(11),d=(a(30),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={redirect:!1},console.log(e),setTimeout(function(){return a.setState({redirect:!0})},3e3),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.a,{to:"/city"}):r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:"/images/loader.svg",alt:"Loader"}))}}]),t}(r.a.Component)),p=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).data=[{img:"images/bg1.jpg",name:"ALANZIA",src:"/city/1"},{img:"images/bg2.jpg",name:"MOKAPSA",src:"/city/2"}],a.heading="Select City",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"select-city-container"},r.a.createElement("h1",null,this.heading),r.a.createElement("ul",null,this.data.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h.b,{to:e.src},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("p",null,e.name)))})))}}]),t}(r.a.Component)),b=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).id=e.match.params.id||1,a.url="/city/".concat(a.id,"/game"),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"start-game-container"},r.a.createElement("div",{className:"inner-wrapper"},r.a.createElement("ol",{className:"help"},r.a.createElement("li",null,r.a.createElement("p",null,"Click button to ",r.a.createElement("strong",null,"START")," the game")),r.a.createElement("li",null,r.a.createElement("p",null,"You will have ",r.a.createElement("strong",null,"90")," seconds")),r.a.createElement("li",null,r.a.createElement("p",null,"on every hit you'll rewarded by ",r.a.createElement("strong",null,"10 points"),"  and time increment of ",r.a.createElement("strong",null,"3 second"))),r.a.createElement("li",null,r.a.createElement("p",null,"Enjoy!"))),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.b,{to:this.url,className:"btn"},"Start Game"))))}}]),t}(r.a.Component)),v=a(22),E=a(23),f=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"pin-".concat(this.props.id),onClick:this.props.hitPin,onMouseOver:this.props.mouseOver,className:"target-pin pin",style:this.props.style})}}]),t}(r.a.Component)),O=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).getTimer=function(e){var t=Math.floor(e/60),a=e%60;return e<30?r.a.createElement("span",{style:{color:"#f00"}},t<10?"0".concat(t):t," : ",a<10?"0".concat(a):a):r.a.createElement("span",{style:{color:"#d2a400"}},t<10?"0".concat(t):t," : ",a<10?"0".concat(a):a)},a.getClass=function(e){var t="score-container ";return t+=e?"game-on":"game-off"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.value,t=e.totalScore,a=e.totalTime,n=e.hits,c=e.isGameOn;return r.a.createElement("div",{className:"score-container ".concat(c?"game-on":"game-off")},r.a.createElement("div",{className:"play-container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",{className:"score"},"Total Score :",r.a.createElement("span",{className:"data"}," ",t))),r.a.createElement("li",null,r.a.createElement("h4",{className:"hits"}," Hits :",r.a.createElement("span",{className:"data"}," ",n))),r.a.createElement("li",null,r.a.createElement("h4",{className:"time"},"Time :",r.a.createElement("span",{className:"data"}," ",this.getTimer(a)))),r.a.createElement("li",null,r.a.createElement("h4",{className:"target"}," Target Reamins :",r.a.createElement("span",{className:"data"}," ",this.props.target))))),r.a.createElement("div",{className:"game-over-container text-center"},r.a.createElement("div",{className:"heading-container"},r.a.createElement("h3",null,"Game Over")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",{className:"score"},"Score : ",r.a.createElement("span",null,t))),r.a.createElement("li",null,r.a.createElement("h4",{className:"hits"},"Target Hits : ",r.a.createElement("span",null,n))),r.a.createElement("li",null,r.a.createElement("h4",{className:"target"},"Target Reamins : ",r.a.createElement("span",null,this.props.target)))),r.a.createElement("div",{className:"btn-contaner mt20"},r.a.createElement(h.b,{to:"/city",className:"btn"},"Restart Game"))))}}]),t}(r.a.Component));function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).id=1,a.h=1670,a.w=4250,a.startX=0,a.startY=0,a.endX=0,a.endY=0,a.scoreWeight=10,a.state={top:0,left:0,allPins:[],timerInterval:null,totalTime:90,totalScore:0,isGameOn:!1,hits:0},a.loadTargets=function(e){e%5===0&&a.setPin()},a.startGameTimer=function(){return setInterval(function(){a.state.totalTime?(a.loadTargets(a.state.totalTime),a.setState({isGameOn:!0}),a.setState({totalTime:a.state.totalTime-1})):(clearInterval(a.state.timerInterval),a.gameOver())},1e3)},a.gameOver=function(){a.setState({isGameOn:!1})},a.setDefults=function(e){var t=a.getWinWH(),n=t.w,r=t.h;a.bgX=-(a.w/2-n/2+1),a.bgY=-(a.h/2-r/2+1),a.mapStyle={backgroundImage:"url('".concat(e.src,"')"),height:e.height,width:e.width}},a.getWinWH=function(){return{w:window.innerWidth,h:window.innerHeight}},a.playAudio=function(e){var t=new Audio,a="/sound/"+e.track+".mp3";return t.src=a,t.play(),t},a.getRandomPosition=function(){return{x:Math.floor(Math.random()*a.w),y:Math.floor(Math.random()*a.h)}},a.dragStart=function(e){a.startX=e.nativeEvent.x||e.nativeEvent.touches&&e.nativeEvent.touches[0].clientX||0,a.startY=e.nativeEvent.y||e.nativeEvent.touches&&e.nativeEvent.touches[0].clientY||0},a.dragEnd=function(e){a.endX=e.nativeEvent.x||e.nativeEvent.touches&&e.nativeEvent.touches[0].clientX||0,a.endY=e.nativeEvent.y||e.nativeEvent.touches&&e.nativeEvent.touches[0].clientY||0,a.dragMe(a.getDragPoints())},a.getDragPoints=function(){return{x:a.endX-a.startX,y:a.endY-a.startY}},a.dragMe=function(e){var t=e.x,n=e.y,r=a.getWinWH(),c=r.w,l=r.h;a.bgX=a.bgX+t,a.bgY=a.bgY+n,a.bgY=a.h<l-a.bgY?l-a.h:a.bgY,a.bgY=a.bgY>0?0:a.bgY,a.bgX=a.w<c-a.bgX?c-a.w:a.bgX,a.bgX=a.bgX>0?0:a.bgX,a.setDomBgPos(a.bgX,a.bgY)},a.setDomBgPos=function(e,t){a.bgX=e%a.w>a.w?a.w:e,a.bgY=t%a.h>a.h?a.h:t,a.setState({top:a.bgY||0,left:a.bgX||0}),isNaN(a.bgX)},a.setPin=function(){var e=a.getRandomPosition(),t={top:e.y,left:e.x,backgroundImage:"url(/images/target/png/".concat(Math.floor(14*Math.random()),".png)")},n=a.state.allPins;n.push(t),a.setState({allPins:n}),a.playAudio({track:"pin"})},a.removePin=function(e,t){var n=Object(E.a)(a.state.allPins);n.length>-1&&(a.playAudio({track:"hit"}),document.getElementById("pin-".concat(e)).style.backgroundImage="url(/images/target/blast.gif)",a.setState({allPins:n}),setTimeout(function(){n.splice(e,1),a.setState({allPins:n})},500))},a.hitTarget=function(e,t){a.state.isGameOn&&(console.log(t),a.removePin(e,t),a.setState({totalTime:a.state.totalTime+3,hits:a.state.hits+1,totalScore:a.state.totalScore+a.scoreWeight}))},a.getScore=function(){var e=a.state,t=e.totalScore,n=e.totalTime,r=e.hits;return{totalScore:t,totalTime:n,isGameOn:e.isGameOn,hits:r}},a.params=e.match.params,a.id=a.params.id,a.mapImage=new Image(a.w,a.h),a.mapImage.src="/images/bg".concat(a.id,".jpg"),a.setDefults(a.mapImage),a.state.top=a.bgY,a.state.left=a.bgX,a.isGameOn=!0,a.state.timerInterval=a.startGameTimer(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"city-container",onMouseDown:this.dragStart,onMouseUp:this.dragEnd,onTouchStart:this.dragStart,onTouchMove:this.dragEnd},r.a.createElement("div",{className:"map-container",style:j({},this.mapStyle,{top:this.state.top,left:this.state.left})},this.state.allPins.map(function(t,a){return r.a.createElement(f,{key:a,id:a,style:t,mouseOver:function(){e.playAudio({track:"load"})},hitPin:function(t){e.hitTarget(a,t)}})}))),r.a.createElement(O,{value:this.getScore(),target:this.state.allPins.length}))}},{key:"componentDidMount",value:function(){}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isFullScreen:!1},a.toggelFullscreen=function(){a.state.isFullScreen?(a.setState({isFullScreen:!1}),document.exitFullscreen()):(document.body.requestFullscreen?document.body.requestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen?document.body.webkitRequestFullscreen():document.body.msRequestFullscreen&&document.body.msRequestFullscreen(),a.setState({isFullScreen:!0}))},a.getFullScreenIcon=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Capa_1",enableBackground:"new 0 0 482.239 482.239",height:"100%",viewBox:"0 0 482.239 482.239",width:"100%"},r.a.createElement("path",{d:"m0 17.223v120.56h34.446v-103.337h103.337v-34.446h-120.56c-9.52 0-17.223 7.703-17.223 17.223z"}),r.a.createElement("path",{d:"m465.016 0h-120.56v34.446h103.337v103.337h34.446v-120.56c0-9.52-7.703-17.223-17.223-17.223z"}),r.a.createElement("path",{d:"m447.793 447.793h-103.337v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446z"}),r.a.createElement("path",{d:"m34.446 344.456h-34.446v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446h-103.337z"}))},a.name=e.data.name||"main.jpg",a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("button",{className:"full-screen-btn",onClick:this.toggelFullscreen},this.getFullScreenIcon()),r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/",exact:!0,component:d}),r.a.createElement(g.b,{path:"/city",exact:!0,component:p}),r.a.createElement(g.b,{path:"/city/:id",exact:!0,component:b}),r.a.createElement(g.b,{path:"/city/:id/game",component:w}))))}}]),t}(r.a.Component),N=(a(40),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).data={name:"This is from Main View"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{data:this.data}))}}]),t}(r.a.Component));l.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.be77a13e.chunk.js.map