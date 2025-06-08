import html from "html-literal";

export default () => html`
<nav>
<i class="fas fa-bars"></i>
<div class="hidden--mobile">
<h1 class="archivo-black-regular"><a href="/dailytasks" data-navigo>Daily Tasks</a></h1>
<h1 class="archivo-black-regular"><a href="/aboutme" data-navigo>About Us</a></h1>
<h1 class="archivo-black-regular"><a href="/contactus" data-navigo>Contact Us</a></h1>
</div>
</nav>
`;
