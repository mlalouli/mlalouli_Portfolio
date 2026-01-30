(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const q=[{label:"Frontend launches",metric:6,suffix:"+",detail:"React & Astro projects in production"},{label:"Stacks mastered",metric:4,suffix:"",detail:"React · Astro · NestJS · Docker"},{label:"42 curriculum",metric:3,suffix:" yrs",detail:"Continuous learning & pair programming"}],T=[{role:"Frontend Developer",company:"Agenz",period:"2025 – 2026",location:"Casablanca",highlights:["Developed and maintained React & Astro design systems.","Translated Figma specs to code with minimal CSS debt.","Handled complex forms (image uploads, multi-step validation).","Boosted performance and accessibility (Lighthouse 90+)."],stack:["React","Astro","TypeScript","Figma"]},{role:"Full-stack Intern",company:"Chari",period:"Jul. 2024 – Jan. 2025",location:"Casablanca",highlights:["Contributed to cartecadeau.ma, a live gift-card marketplace.","Shipped frontend and backend features with modern JavaScript.","Built responsive interfaces centered on user experience.","Worked closely with product and QA teams."],stack:["React","NestJS","REST","Docker"]}],f=[{title:"Real-time Chat App",description:"Instant messaging experience with live presence and offline handling.",impact:"Optimized for hundreds of messages per minute via WebSocket.",stack:["React","WebSocket","Zustand"],category:"frontend",year:2025,link:"https://github.com/mlalouli"},{title:"Inception",description:"Docker multi-service architecture for scale-ready apps.",impact:"Automated dev/prod environments with lean CI.",stack:["Docker","Nginx","Shell"],category:"platform",year:2024,link:"https://github.com/mlalouli"},{title:"User Profile System",description:"Secure NestJS API for managing user profiles.",impact:"Robust auth, server-side validation, and Swagger docs.",stack:["NestJS","PostgreSQL","REST"],category:"platform",year:2024,link:"https://github.com/mlalouli"},{title:"ft_irc",description:"C++ IRC server with low-level networking.",impact:"Multi-client support, RFC commands, and detailed logs.",stack:["C++","Networking","Sockets"],category:"systems",year:2023,link:"https://github.com/mlalouli"}],M=[{title:"Frontend",summary:"React.js, Next.js, Astro, Vue.js",items:["JavaScript","TypeScript","HTML5","CSS3","Tailwind","CSS Modules"]},{title:"Backend & APIs",summary:"NestJS, Node.js, REST APIs",items:["Authentication","File uploads","Validation","API testing"]},{title:"Tooling",summary:"Git, GitHub, Docker",items:["Lean CI/CD","Design tokens","Storybook","Lightweight monitoring"]},{title:"Soft skills",summary:"Collaboration & ownership",items:["Problem solving","Communication","Time management","Creativity"]}],N=[{title:"42 School Certification",school:"1337 – 42 Network",period:"2022 – present",details:"Peer-learning path with system and web projects."},{title:"SMI: Computer Science",school:"Faculté Polydisciplinaire Khouribga",period:"2018 – 2022",details:"Algorithms, data structures, mathematics."},{title:"Baccalauréat in Mathematical Sciences",school:"Lycée Mokhtar Soussi",period:"2017 – 2018",details:"Track A, honors."}],I=[{name:"Arabic",level:"Native"},{name:"French",level:"Fluent"},{name:"English",level:"Intermediate"}],j=["Web development","UI/UX design","Continuous learning","Product discovery"],R=[{quote:"Meryem demonstrated strong React and Next.js mastery, embraced Astro quickly, and leveraged AI tools like GitHub Copilot with discernment to boost both velocity and quality.",highlights:["Adapted to new frameworks with perseverance and curiosity","Integrated seamlessly into a fast-paced, collaborative squad","Used Anthropic/OpenAI models wisely to enhance productivity"],author:"Badr Belkeziz",role:"CTO, Agenz",contact:{phone:"+212 6 80 81 56 34",email:"b.belkeziz@agenz.ma",location:"Technopark, Casablanca",date:"Jan 23, 2023"}}],r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=document.querySelector("[data-hero-stats]");g&&(g.innerHTML=q.map(e=>`
        <article class="stat-card animate-on-scroll">
          <small>${e.label}</small>
          <strong data-count-target="${e.metric}" data-count-suffix="${e.suffix}">0</strong>
          <p>${e.detail}</p>
        </article>
      `).join(""));const y=document.querySelector("[data-experience]");y&&(y.innerHTML=T.map(e=>`
        <article class="timeline-card animate-on-scroll">
          <h3>${e.role} · ${e.company}</h3>
          <p class="meta">${e.period} · ${e.location}</p>
          <ul>
            ${e.highlights.map(t=>`<li>${t}</li>`).join("")}
          </ul>
          <div class="chip-row">
            ${e.stack.map(t=>`<span class="chip">${t}</span>`).join("")}
          </div>
        </article>
      `).join(""));const v=document.querySelector("[data-projects]"),S=document.querySelectorAll("[data-filter]");let u="all";const C=()=>{if(!v)return;const e=u==="all"?f:f.filter(t=>t.category===u);v.innerHTML=e.map(t=>`
        <article class="project-card animate-on-scroll">
          <div>
            <p class="eyebrow">${t.year}</p>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <p class="muted">${t.impact}</p>
          </div>
          <div class="chip-row">
            ${t.stack.map(a=>`<span class="chip">${a}</span>`).join("")}
          </div>
          <a class="btn ghost" href="${t.link}" target="_blank" rel="noreferrer">
            View code
          </a>
        </article>
      `).join("")};C();S.forEach(e=>{e.addEventListener("click",()=>{u=e.dataset.filter||"all",S.forEach(t=>t.classList.remove("chip-active")),e.classList.add("chip-active"),C()})});const b=document.querySelector("[data-skill-groups]");b&&(b.innerHTML=M.map(e=>`
        <article class="skill-card animate-on-scroll">
          <p class="eyebrow">${e.title}</p>
          <h3>${e.summary}</h3>
          <ul>
            ${e.items.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </article>
      `).join(""));const $=document.querySelector("[data-education]");$&&($.innerHTML=N.map(e=>`
        <article class="timeline-card animate-on-scroll">
          <h3>${e.title}</h3>
          <p class="meta">${e.school} · ${e.period}</p>
          <p>${e.details}</p>
        </article>
      `).join(""));const k=document.querySelector("[data-languages]");k&&(k.innerHTML=I.map(e=>`<span class="animate-on-scroll">${e.name} · ${e.level}</span>`).join(""));const w=document.querySelector("[data-passions]");w&&(w.innerHTML=j.map(e=>`<span class="animate-on-scroll subtle-pill">${e}</span>`).join(""));const A=document.querySelector("[data-testimonials]");A&&(A.innerHTML=R.map(e=>`
        <article class="testimonial-card animate-on-scroll">
          <p class="quote">${e.quote}</p>
          <ul>
            ${e.highlights.map(t=>`<li>${t}</li>`).join("")}
          </ul>
          <div class="testimonial-meta">
            <strong>${e.author}</strong>
            <span>${e.role}</span>
            <span>${e.contact.location} · ${e.contact.date}</span>
            <div class="contact-links">
              <a href="tel:${e.contact.phone.replace(/\s+/g,"")}">${e.contact.phone}</a>
              <a href="mailto:${e.contact.email}">${e.contact.email}</a>
            </div>
          </div>
        </article>
      `).join(""));const E=document.querySelectorAll(".animate-on-scroll"),P=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){t.target.classList.add("in-view");const a=t.target.querySelector("[data-count-target]");a&&!a.dataset.counted&&F(a)}})},{threshold:.2,rootMargin:"0px 0px -40px"});E.forEach(e=>P.observe(e));function F(e){e.dataset.counted="true";const t=Number(e.dataset.countTarget||0),a=e.dataset.countSuffix||"",i=1200,o=performance.now(),s=n=>{const c=Math.min((n-o)/i,1),p=1-Math.pow(1-c,3);e.textContent=`${Math.round(p*t)}${a}`,c<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}const d=document.querySelector("[data-typed]"),m=document.querySelector("[data-caret]"),x=["pixel-perfect React interfaces","blazing-fast Astro experiences","collaborative design systems"];if(d){let e=0,t=0,a=!1;const i=()=>{const o=x[e%x.length];if(r){d.textContent=o;return}if(!a&&t<=o.length?d.textContent=o.slice(0,t++):a&&t>=0&&(d.textContent=o.slice(0,t--)),t===o.length+1){a=!0,setTimeout(i,1400);return}t<0&&(a=!1,e++,t=0),setTimeout(i,a?45:85)};i(),m&&!r&&setInterval(()=>m.classList.toggle("hidden"),500)}const D=document.querySelectorAll("[data-scroll-target], .nav-links a[href^='#']");D.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const a=e.getAttribute("data-scroll-target")||e.getAttribute("href");if(!a)return;document.querySelector(a)?.scrollIntoView({behavior:r?"auto":"smooth"})})});const h=document.querySelectorAll("[data-orb]");if(h.length&&!r){const e=Array.from(h).map((a,i)=>({element:a,radius:40+i*30,speed:5e-4+i*2e-4,offset:i*90})),t=a=>{e.forEach(({element:i,radius:o,speed:s,offset:n})=>{const c=a*s+n,p=Math.cos(c)*o,L=Math.sin(c)*o;i.style.transform=`translate(${p}px, ${L}px)`}),requestAnimationFrame(t)};requestAnimationFrame(t)}r&&(m?.classList.remove("hidden"),h.forEach(e=>{e.style.opacity="0.35"}));const H=10,l=[],O=(e,t)=>{const a=document.createElement("span");a.className="click-ripple",a.style.left=`${e}px`,a.style.top=`${t}px`,document.body.appendChild(a),l.push(a),l.length>H&&l.shift()?.remove(),a.addEventListener("animationend",()=>{a.remove();const i=l.indexOf(a);i>=0&&l.splice(i,1)},{once:!0})};r||window.addEventListener("pointerdown",e=>{e.button===0&&O(e.clientX,e.clientY)});
