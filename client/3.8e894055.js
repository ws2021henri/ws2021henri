import{S as a,i as s,s as e,a as l,e as c,t as n,q as o,d as r,c as t,b as i,f as h,g as d,j as v,m as f,k as m,l as p,o as u,p as g,n as D}from"./client.c8d81b1d.js";function y(a){let s,e,y,I,b,E,V,j,k,w,x,z,G,M,q,A,F,H,S;return{c(){s=l(),e=c("div"),y=c("div"),I=c("div"),b=n("Day one: homepage"),E=l(),V=c("div"),j=c("img"),w=l(),x=c("div"),z=c("div"),G=n("Day one: film"),M=l(),q=c("div"),A=c("img"),this.h()},l(a){o('[data-svelte="svelte-vu6tdz"]',document.head).forEach(r),s=t(a),e=i(a,"DIV",{class:!0});var l=h(e);y=i(l,"DIV",{class:!0});var c=h(y);I=i(c,"DIV",{class:!0});var n=h(I);b=d(n,"Day one: homepage"),n.forEach(r),E=t(c),V=i(c,"DIV",{class:!0});var v=h(V);j=i(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(r),c.forEach(r),w=t(l),x=i(l,"DIV",{class:!0});var f=h(x);z=i(f,"DIV",{class:!0});var m=h(z);G=d(m,"Day one: film"),m.forEach(r),M=t(f),q=i(f,"DIV",{class:!0});var p=h(q);A=i(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(r),f.forEach(r),l.forEach(r),this.h()},h(){document.title="Visual design",v(I,"class","pane-header"),j.src!==(k="henri-day-one-home.jpg")&&v(j,"src","henri-day-one-home.jpg"),v(j,"alt","Homepage"),v(j,"class","svelte-5ua4h7"),v(V,"class","pane-content noscrollbar svelte-5ua4h7"),v(y,"class","pane svelte-5ua4h7"),f(y,"visible",a[0][0]),v(z,"class","pane-header"),A.src!==(F="henri-day-one-film.jpg")&&v(A,"src","henri-day-one-film.jpg"),v(A,"alt","Film"),v(A,"class","svelte-5ua4h7"),v(q,"class","pane-content noscrollbar svelte-5ua4h7"),v(x,"class","pane svelte-5ua4h7"),f(x,"visible",a[0][1]),v(e,"class","container")},m(l,c){m(l,s,c),m(l,e,c),p(e,y),p(y,I),p(I,b),p(y,E),p(y,V),p(V,j),p(e,w),p(e,x),p(x,z),p(z,G),p(x,M),p(x,q),p(q,A),H||(S=u(window,"keydown",g(a[1])),H=!0)},p(a,[s]){1&s&&f(y,"visible",a[0][0]),1&s&&f(x,"visible",a[0][1])},i:D,o:D,d(a){a&&r(s),a&&r(e),H=!1,S()}}}function I(a,s,e){let l=[!0,!1];return[l,function(a){let s=a.key;"A"!==s&&"a"!==s||e(0,l[0]=!l[0],l),"Z"!==s&&"z"!==s||e(0,l[1]=!l[1],l)}]}export default class extends a{constructor(a){super(),s(this,a,I,y,e,{})}}