__NUXT_JSONP__("/article/tailwind-on-nuxt", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{article:{slug:"tailwind-on-nuxt",description:"프로젝트에 Tailwind CSS를 적용하는 방법을 Nuxt 프레임워크를 중심으로 알아봐요.",title:"프로젝트에 Tailwind CSS 적용하기",img:"tailwind.jpeg",category:"Front-End",author:O,featured:"none",toc:[{id:C,depth:P,text:C},{id:Z,depth:D,text:_},{id:$,depth:D,text:aa},{id:ab,depth:P,text:ac},{id:ad,depth:D,text:ae},{id:af,depth:D,text:ag},{id:ah,depth:P,text:ai},{id:aj,depth:D,text:C}],body:{type:"root",children:[{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{href:"https:\u002F\u002Fwww.blog.penielcho.com\u002Ftailwind-on-nuxt",rel:[H,I,J],target:K},children:[{type:a,value:"지난 포스트"}]},{type:a,value:"에서는 왜 Tailwind가 좋은지에 대해 알아봤다면, 이번엔 실제 프로젝트에 Tailwind CSS를 어떻게 적용하는지에 대해 알아볼게요. Tailwind는 다양한 프로젝트에 versatile하게 사용할 수 있는 프레임워크지만, 오늘은 제가 요즘 가장 많이 사용하고 있는 Vue 프레임워크인 Nuxt 환경을 기반으로 Tailwind CSS 사용법을 말씀드리도록 할게요. 사실 Nuxt라고 해도 다른 프레임워크들과 크게 다르지 않을 거에요."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:ak,props:{alt:"Tailwind 지원 프레임워크",src:"\u002Ftailwind-on-nuxt\u002F01.png"},children:[]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"추가로, Tailwind CSS가 공식적으로 지원하는 프레임워크 및 툴은 이렇게 6가지에요. 각 프레임워크, 툴 별 설치 방법을 알고 싶다면 "},{type:b,tag:o,props:{href:"https:\u002F\u002Ftailwindcss.com\u002Fdocs\u002Finstallation",rel:[H,I,J],target:K},children:[{type:a,value:"공식 문서"}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:Q,props:{id:C},children:[{type:b,tag:o,props:{href:"#%EC%84%A4%EC%B9%98",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:C}]},{type:a,value:f},{type:b,tag:E,props:{id:Z},children:[{type:b,tag:o,props:{href:"#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%EC%8B%9C-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:ak,props:{alt:"npx를 통한 tailwind 설치",src:"\u002Ftailwind-on-nuxt\u002F02.png"},children:[]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Nuxt의 경우, 프로젝트를 만들 때 1차적으로 tailwind css를 설치할 수 있어요. 터미널에  "},{type:b,tag:q,props:{},children:[{type:a,value:"npx create-next-app"}]},{type:a,value:"  명령어를 쳐서 프로젝트를 생성하면, 어떤 라이브러리와 프레임워크들을 함께 설치할지를 물어보거든요. 이때 Tailwind CSS를 선택해주시면 돼요."}]},{type:a,value:f},{type:b,tag:E,props:{id:$},children:[{type:b,tag:o,props:{href:"#%EC%A1%B4%EC%9E%AC%ED%95%98%EB%8A%94-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"만약 이미 생성된 프로젝트에 Tailwind CSS를 적용하고 싶다면, npm을 통해 패키지를 설치해주면 돼요. 해당 프로젝트의 디렉토리에서 터미널을 연 후, 아래 명령어를 입력해주세요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:an}]},{type:a,value:" -D @nuxtjs\u002Ftailwindcss tailwindcss@latest postcss@latest autoprefixer@latest\n"}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"설치가 완료되었다면, nuxt.config.js 파일에서 tailwind를 모듈로 지정해주어야 돼요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u002F\u002F nuxt.config.js"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ao,ap]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ao,ap]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n  buildModules"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'@nuxtjs\u002Ftailwindcss'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"이렇게 하면 설치는 완료입니다."}]},{type:a,value:f},{type:b,tag:Q,props:{id:ab},children:[{type:b,tag:o,props:{href:"#config-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:E,props:{id:ad},children:[{type:b,tag:o,props:{href:"#config-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"다만, Tailwind CSS를 사용하면서 커스터마이징이 필요한 부분들이 있어요. 좀 더 개성있는 색상을 원한다거나, 폰트 크기를 더욱 세부적으로 조절한다거나 하는 부분에서요. 이를 위해서는 Tailwind 자체의 configuration 파일이 필요한데, configuration 파일의 생성은 아래 명령어를 통해 가능해요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"npx tailwindcss init\n"}]}]}]},{type:a,value:f},{type:b,tag:E,props:{id:af},children:[{type:b,tag:o,props:{href:"#config-%ED%8C%8C%EC%9D%BC%EC%9D%84-%ED%86%B5%ED%95%B4-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95%ED%95%98%EA%B8%B0",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"실제로 configuration 파일을 통해 커스터마이징을 하는 예시를 보여드릴게요. Tailwind CSS에서 폰트의 크기는 "},{type:b,tag:q,props:{},children:[{type:a,value:"text-어쩌구"}]},{type:a,value:"의 형식의 class로 결정돼요. 이때 configuration 파일의 수정을 통해서 기존 유틸리티 클래스에 설정된 폰트 크기를 수정할 수도 있고, 새로운 유틸리티 클래스를 만들 수도 있어요. 아래의 예시를 봐주세요. 원래 Tailwind CSS의 유틸리티에 tiny라는 클래스는 존재하지 않아요. 다만 sm은 너무 작게 느껴지고, base는 너무 크게 느껴질 경우 그 사이에 위치하는 새로운 크기의 'tiny'라는 이름의 클래스를 만들 수 있는 거죠. 기존 클래스에 할당된 기능을 수정할 수도 있어요. 폰트의 크기에 있어 text-6xl의 경우, 원래 4rem의 크기를 가져요. 그치만 configuration 파일에서 제가 5rem으로 정의해버리면, text-6xl 클래스가 부여된 html 요소들은 5rem의 크기를 갖게 되는 거죠."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:U}]},{type:a,value:"\n  module"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n    theme"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n      fontSize"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'xs'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'.75rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'sm'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'.875rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'tiny'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'.89rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'base'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'lg'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1.125rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1.25rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'2xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1.5rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'3xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1.875rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'4xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'2.25rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'5xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'3rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'6xl'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'5rem'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:ah},children:[{type:b,tag:o,props:{href:"#tailwind-typography-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%A0%81%EC%9A%A9",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"제가 최근 만들고 있는 Nuxt 사이트들의 대부분은 블로그에요. md 파일을 업로드하면 자동으로 라우팅 경로를 만들어 해당 md 파일이 하나의 아티클 페이지가 되죠. 이 경우, 개별 마크다운 파일 혹은 마크다운 내의 태그 요소들을 하나하나 꾸밀 수 없기에 이미 만들어진 디자인을 적용하면 편해요. 이럴 때 사용할 수 있는 것이 Tailwind Typography에요. 쉽게 말해 md 파일을 styling 해주는 모듈이죠."}]},{type:a,value:f},{type:b,tag:E,props:{id:aj},children:[{type:b,tag:o,props:{href:"#%EC%84%A4%EC%B9%98-1",ariaHidden:s,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:C}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# Using npm"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:an}]},{type:a,value:" @tailwindcss\u002Ftypography\n\n"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# Using Yarn"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"yarn"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"add"}]},{type:a,value:" @tailwindcss\u002Ftypography\n"}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Npm, Yarn 중 편한 툴을 사용해서 설치해주세요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:U}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Y}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Y}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"설치가 완료되었다면 tailwind.config.js 파일에서 typography 모듈을 추가해주세요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-html"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C"}]},{type:a,value:"nuxt-content"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:":document"}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:b,tag:c,props:{className:[d,e,aB]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"article"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:b,tag:c,props:{className:[d,e,aB]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"prose max-w-3xl custom-text px-6"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Tailwind Typography를 적용하는 방법은 엄청 쉬워요. 다른 유틸리티 클래스들처럼 적용을 원하는 태그에 prose라는 클래스를 부여만 해주면 된답니다. 그럼 헤딩부터 bullets, code block 등등 블로그에서 사용하는 태그들을 자동으로 스타일링 해줘요."}]},{type:a,value:f},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:U}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:F}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n    extend"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n      typography"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"DEFAULT"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n          css"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n            a"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n              color"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'#3182ce'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'&:hover'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n                color"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'#2c5282'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n          "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Y}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"그치만, 여전히 맘에 안 드는 부분이 있을 수 있죠. 이 경우 Typography 역시 Tailwind CSS 처럼 tailwind.config.js 파일에서 커스터마이징이 가능해요. 위는 a 태그의 기본 색상과 hover시의 색상을 설정하는 코드에요. 더 많은 커스터마이징 예시를 보고 싶다면 "},{type:b,tag:o,props:{href:"https:\u002F\u002Fgithub.com\u002Ftailwindlabs\u002Ftailwindcss-typography",rel:[H,I,J],target:K},children:[{type:a,value:"Tailwind Typography 공식 문서"}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"기본적인 설치 및 적용 방법은 끝났습니다. 그럼 이제 직접 프로젝트에 적용해볼까요?"}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"본 포스팅은 "},{type:b,tag:o,props:{href:"https:\u002F\u002Fwww.blog.penielcho.com\u002F",rel:[H,I,J],target:K},children:[{type:a,value:"PENIELog"}]},{type:a,value:"의 아티클을 재포스팅한 것입니다."}]},{type:a,value:f}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Ftailwind-on-nuxt",extension:".md",createdAt:N,updatedAt:N},prev:{slug:"why-tailwind-css",title:"가장 쉽고 아름다운 CSS 프레임워크, Tailwind CSS"},next:{slug:"spring-study-preview",title:"스프링 스터디-1주차"},member:[{slug:"penielcho",name:O,description:"현업과 가까운 Developer Relations Expert로 성장하기를 희망합니다. DS, ML, DL 관련 공부를 했으며 현재는 프론트를 배워가는 중입니다.",role:"Core Member",img:"peniel.jpg",dir:"\u002Fmembers",path:"\u002Fmembers\u002Fpenielcho",extension:".yaml",createdAt:N,updatedAt:N}],authorName:O}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","operator","string",":",",","p","{","}","a","\n       ","code","comment","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","function","\n    ","설치",3,"h3","=","\n  ","nofollow","noopener","noreferrer","_blank","language-javascript","\"","2021-11-21T16:50:31.194Z","Peniel Cho",2,"h2","language-shell","[","]","\u002F\u002F tailwind.config.js",".","property-access","exports","\u002F\u002F ...","프로젝트-생성시-설치하기","프로젝트 생성시 설치하기","존재하는-프로젝트에-설치하기","존재하는 프로젝트에 설치하기","config-파일-생성-및-커스터마이징","Config 파일 생성 및 커스터마이징","config-파일-생성하기","Config 파일 생성하기","config-파일을-통해-유틸리티-클래스-커스터마이징하기","Config 파일을 통해 유틸리티 클래스 커스터마이징하기","tailwind-typography-설치-및-적용","Tailwind Typography 설치 및 적용","설치-1","img","를 참고해주세요.","npm","install","keyword","module","\n      ","\nmodule","\n  theme","\n  plugins","require","(","'@tailwindcss\u002Ftypography'",")","tag","attr-name","attr-value","attr-equals","\n        ","\n              ")));