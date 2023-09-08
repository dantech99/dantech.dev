import AboutHeader from "./AboutHeader.astro";
import BtnMoreProyects from "./BtnMoreProyects.astro";
import { projects } from "./projects.js";

<Fragment>
{/** html  */}{/** tarjeta de proyecto */}<section class="container m-auto p-5">
<div class="container w-full px-4">
<AboutHeader title="Proyects" />
{/** componente btn more  */}
<BtnMoreProyects />
{/** contenedor grid  */}
<div class="flex justify-center content-center items-center flex-wrap">
{projects.map((items) => (
<Fragment><>
<article class="container bg-primary rounded-sm overflow-hidden shadow-[0px_0px_3px_0px_#1707f3] hover:shadow-[2px_0px_5px_0px_#1707f3] h-auto w-auto max-w-md">
<div class="w-full h-80 overflow-hidden">
<img src={items.img_link} alt="" class="overflow-hidden opacity-[1] transition-all delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:filter hover:brightness-50 h-full bg-white object-scale-down w-full" />
</div>
<div class="text-white p-6 h-[17rem] overflow-hidden ">
<h2 class="text-white text-xl md:text-2xl mb-3 font-bold">
{items.title}
<span class="text-[10px] p-1 rounded-[10%] border border-[#666565] mr-10 text-[#bdb7b7] bottom-1 relative cursor-pointer">
{items.type[1]}
</span>
</h2>
<p class="font-normal text-lg">
{items.description}
</p>
</div>
<div class="flex justify-between p-3 md:p-5 content-center items-center">
<div class="flex tec">
{items.tech.map((icon) => (
<Fragment><span class="flex  rounded-[100%] p-1 ml-1 bg-white 
                                    hover:bg-[#0E0C4E] shadow-[0px_3px_2px_2px_#d21717]">
<img src={icon.tec} class="w-10" />
</span></Fragment>
))}
</div>
<div class="flex">
<a href={items.link_deploy} class="text-white text-3xl ml-[2px]">
<i class="bx bx-link-external" />
</a>
<a href={items.link_repo} class="text-white text-3xl ml-[2px]">
<i class="bx bxl-github" />
</a>
</div>
</div>
</article>
</></Fragment>
))}
</div>
</div>
</section>
<style>{`
    .bg-primary {
        background: linear-gradient(63deg, #0f172a 46%, #0e0a55 100%);
    }

    .tec span:not(:first-child) {
        margin-left: -0.5rem;
    }
`}</style>
</Fragment>;
